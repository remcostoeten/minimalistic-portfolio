import Spinner, { LogoLoader } from '@/components/loaders/Spinners';

export default function SpinnerDisplay() {
    const sizes: ('extrasmall' | 'small' | 'medium' | 'large' | 'extralarge')[] = ['extrasmall', 'small', 'medium', 'large', 'extralarge'];
    const variants: ('mini' | 'cutout')[] = ['mini', 'cutout'];

    return (
        <div className="">
            {sizes.map((size) => (
                variants.map((variant) => (
                    <div key={`${size}-${variant}`} className="flex flex-col items-center w-[150px] h-[150px]">
                        <Spinner variant={variant} size={size} />
                    </div>
                ))
            ))}
            <div className="flex flex-col items-center w-[150px] h-[150px]">
                <LogoLoader />
            </div>
        </div>
    );
}