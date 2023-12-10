import AnimateCounter from "@/components/effects/AnimateCounter";
import { Card } from "@/components/ui/card";

interface OverviewItemProps {
  label: string;
  value: any;
  unit?: string;
}

const OverviewItem = ({ label, value, unit = '' }: OverviewItemProps) => (
  <Card className='flex flex-col self-center rounded-xl py-3 px-4 border'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <div>
      <AnimateCounter
        className='text-xl lg:text-2xl font-medium text-green-600'
        total={value}
      />
      {unit && <span className='text-sm dark:text-neutral-400'> {unit}</span>}
    </div>
  </Card>
);

export default OverviewItem;
