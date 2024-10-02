import { adminAuth, adminFirestore, firestoreConfig } from '@/firebase_config';
import { Transaction } from '@/model/transaction/transaction';
import { TransactionSummary } from '@/model/transaction/transaction_summary';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    function createTransactionSummaryId(transaction: Transaction): string {
        const date = new Date(transaction.created_at);
        const formattedDate = date.toISOString().split('T')[0];
        const branchId = transaction.branch_uuid.split('-')[0];
        return `${branchId}-${formattedDate}`;
    }

    const idToken = req.headers.get('Authorization');
    if (!idToken) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    try {
        // adminAuth.verifyIdToken(idToken);
        const body = (await req.json()) as Transaction;
        let summary;
        const docId = createTransactionSummaryId(body);
        const doc = await adminFirestore
            .collection(firestoreConfig.collection.transaction_summary)
            .doc(docId)
            .get();
        if (doc.exists) {
            const oldSummary = doc.data() as TransactionSummary;
            summary = {
                uuid: oldSummary.uuid,
                branch_uuid: oldSummary.branch_uuid,
                date: oldSummary.date,
                total: oldSummary.total,
                profit: oldSummary.profit,
            };
        } else {
            summary = {
                uuid: docId,
                branch_uuid: body.branch_uuid,
                date: body.created_at,
                total: 0,
                profit: 0,
            };
        }
        adminFirestore
            .collection(firestoreConfig.collection.transaction_summary)
            .doc(docId)
            .set(summary);
        adminFirestore
            .collection(firestoreConfig.collection.transaction)
            .doc(docId)
            .set(body);
        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        return NextResponse.json('Internal Server Error', { status: 500 });
    }
}
