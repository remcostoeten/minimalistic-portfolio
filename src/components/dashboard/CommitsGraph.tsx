import { Bar } from 'react-chartjs-2';
import { CategoryScale, BarController, LinearScale, TimeScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale, BarController, LinearScale, TimeScale, PointElement, LineElement, Tooltip, Legend);

interface CommitsGraphProps {
    githubData: any; // Replace 'any' with the actual type of your githubData
    isLoading: boolean;
}
export const CommitsGraph: React.FC<CommitsGraphProps> = ({ githubData, isLoading }) => {
    const labels = githubData?.commitsLabels || [];
    const data = githubData?.user.repositories.nodes.map(repo => repo.defaultBranchRef?.target.history.totalCount || 0) || [];

    const chartData = {
        labels: labels,
        datasets: [{
            label: '# of Commits',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    if (isLoading) {
        return (
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full bg-gray-800"></div>
                <div className="skeleton h-4 w-28 bg-gray-800"></div>
                <div className="skeleton h-4 w-full bg-gray-800"></div>
                <div className="skeleton h-4 w-full bg-gray-800"></div>
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
                        labels: {
                            color: 'rgba(255, 255, 255, 0.87)'
                        }
                    },
                    title: {
                        color: 'rgba(255, 255, 255, 0.87)'
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.87)'
                        }
                    },
                    y: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.87)'
                        }
                    }
                }
            }}
        />
    );
}