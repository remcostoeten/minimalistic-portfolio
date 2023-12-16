import { Card } from "./ui/card";

type StatisticsProps = {
    title: string;
    amount: any;
}

export default function StatisticsCards({ title, amount }: StatisticsProps) {
    return (
        <>
            <Card className=" flex gap-2x p-4 flex-col">
                <h3 className="text-lg leading-6 font-medium text-white">
                    {title}
                </h3>
                <p className="font-medium text-white">$0.00</p>
            </Card>
        </>
    )
}