import {
    adminAuth,
    adminFirestore,
    firestore,
    firestoreConfig,
} from '@/firebase_config';
import { Transaction } from '@/model/transaction/transaction';
import { TransactionSummary } from '@/model/transaction/transaction_summary';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    if (!idToken) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    try {
        adminAuth.verifyIdToken(idToken);
        const body = req.body as Transaction;
        const docId = createTransactionSummaryId(body);
        const doc = await adminFirestore
            .collection(firestoreConfig.collection.transaction_summary)
            .doc(docId)
            .get();
        if (doc.exists) {
            const oldSummary = doc.data() as TransactionSummary;
            const summary = {
                uuid: oldSummary.uuid,
                branch_uuid: oldSummary.branch_uuid,
                date: oldSummary.date,
                total: oldSummary.total,
                profit: oldSummary.profit,
            };
        } else {
            const summary = {
                uuid: docId,
                branch_uuid: body.branch_uuid,
                date: body.created_at,
                total: 0,
                profit: 0,
            };
        }
        adminFirestore
            .collection(firestoreConfig.collection.transaction_summary)
            .doc(docId);
    } catch (error) {
        return NextResponse.json('Internal Server Error', { status: 500 });
    }
}

function createTransactionSummaryId(transaction: Transaction): string {
    const date = transaction.created_at;
    const formattedDate = date.toISOString().split('T')[0];
    const branchId = transaction.branch_uuid.split('-')[0];
    return `${branchId}-${formattedDate}`;
}
