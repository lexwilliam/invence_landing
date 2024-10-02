import { CardHeader, CardTitle, CardDescription, CardContent, Card } from "./card";

export function PlanCards() {
    const planDetail = {
        basic: [
            '1 User Account',
            'Basic Inventory Management (up to 100 items)',
            'Ordering Feature (up to 5 suppliers)',
            'Monthly Sales Reports',
            'Email Support',
        ],
        pro: [
            '5 User Accounts',
            'Advanced Inventory Management (up to 1,000 items)',
            'Ordering Feature (up to 20 suppliers)',
            'Weekly and Monthly Sales Reports',
            'Priority Email Support',
            'Integration with Accounting Software',
        ],
        enterprise: [
            'Unlimited User Accounts',
            'Enterprise-Level Inventory Management (unlimited items)',
            'Ordering Feature (unlimited suppliers)',
            'Daily, Weekly, and Monthly Sales Reports',
            'Dedicated Account Manager',
            '24/7 Priority Support',
            'Custom Integrations',
            'Advanced Security Features',
        ],
    };
    return (
        <div className="flex flex-col justify-center gap-8 pb-24">
            <span className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Pick your plan
            </span>
            <div className="flex flex-col w-full gap-4 lg:flex-row lg:gap-8 px-4 lg:px-8">
                <Card className="w-full">
                    <CardHeader className="gap-4">
                        <CardTitle>Basic</CardTitle>
                        <CardTitle>5$/month</CardTitle>
                        <CardDescription>
                            Basic plan for small businesses
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {planDetail.basic.map((item, index) => (
                            <div key={item} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardHeader className="gap-4">
                        <CardTitle>Pro</CardTitle>
                        <CardTitle>10$/month</CardTitle>
                        <CardDescription>
                            Medium to large businesses, most recommended
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {planDetail.pro.map((item, index) => (
                            <div key={item} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardHeader className="gap-4">
                        <CardTitle>Enterprise</CardTitle>
                        <CardTitle>50$/month</CardTitle>
                        <CardDescription>
                            Large enterprise, for the most advanced businesses
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {planDetail.enterprise.map((item, index) => (
                            <div key={item} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
