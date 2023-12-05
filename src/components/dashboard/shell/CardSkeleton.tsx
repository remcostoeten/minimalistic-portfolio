type CardSkeletonProps = {
    loading?: boolean;
}

export default function CardSkeleton({ loading }: CardSkeletonProps) {
    if (loading) {
        return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className='skeleton w-full h-32' />
                <div className='skeleton w-full h-32' />
                <div className='skeleton w-full h-32' />
                <div className='skeleton w-full h-32' />
            </div>
        )
    }
}
