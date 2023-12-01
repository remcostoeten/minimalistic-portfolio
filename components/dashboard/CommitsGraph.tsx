import { Bar } from 'react-chartjs-2';
import { CategoryScale, BarController, LinearScale, TimeScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale, BarController, LinearScale, TimeScale, PointElement, LineElement, Tooltip, Legend);

interface CommitsGraphProps {
    labels: string[];
    data: number[];
    secondData?: number[]; // Add a second data set for comparison
    isLoading: boolean; // Add a loading state
}

export const CommitsGraph: React.FC<CommitsGraphProps> = ({ labels, data, isLoading }) => {
    const chartData = {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    if (isLoading) {
        return (
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }

    return (
        <Bar
            data={chartData}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        // Add legend options here
                    },
                    title: {
                        // Add title options here
                    }
                }
            }}
        />
    )
}