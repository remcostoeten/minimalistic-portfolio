import AnimateCounter from "@/components/effects/AnimateCounter";
import { Card } from "@/components/ui/card";

interface OverviewItemProps {
  label: string;
  value: any;
  unit?: string;
  loading?: boolean;
}

const OverviewItem = ({ label, value, unit = '', loading = false }: OverviewItemProps) => (
  <Card className='flex flex-col self-center rounded-xl py-3 px-4 border'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <div>
      {loading ? (
        <div className='w-20 h-4 bg-gray-300 rounded animate-pulse'>dwdwwd</div>
      ) : (
        <AnimateCounter
          className='text-xl lg:text-2xl font-medium text-green-600'
          total={value}
        />
      )}
      {unit && <span className='text-sm dark:text-neutral-400'> {unit}</span>}
    </div>
  </Card>
);

export default OverviewItem;