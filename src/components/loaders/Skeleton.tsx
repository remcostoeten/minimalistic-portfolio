type SkeletonBarProps = {
    width?: string | number;
    height?: string | number;
    additionalClasses?: string;
};

export const SkeletonBar: React.FC<SkeletonBarProps> = ({ width = 'full', height = '32', additionalClasses = '' }) => {
    const widthClass = typeof width === 'number' ? `w-${width}` : `w-${width}`;
    const heightClass = typeof height === 'number' ? `h-${height}` : `h-${height}`;

    return <div className={`skeleton ${widthClass} ${heightClass} ${additionalClasses}`} />;
};

export const TextSkeleton = ({ width = 'full', height = '32' }) => {
    return <div className={`skeleton w-${width} h-${height}`}></div>
}

const TableSkeleton = () => {
    return (
        <table className="min-w-full divide-y divide-gray-700 shadow-md text-white bg-gray-800">
            <thead className="bg-gray-700">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Round</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Bet</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Cost</th>
                </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
                {Array(10).fill(0).map((_, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap animate-pulse bg-gray-700"></td>
                        <td className="px-6 py-4 whitespace-nowrap animate-pulse bg-gray-700"></td>
                        <td className="px-6 py-4 whitespace-nowrap animate-pulse bg-gray-700"></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableSkeleton;