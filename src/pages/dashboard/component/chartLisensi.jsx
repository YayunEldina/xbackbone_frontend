'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function ChartLisensi() {
    const data = {
        labels: ['Software A', 'Software B', 'Software C'],
        datasets: [
            {
                label: 'Jumlah Lisensi',
                data: [12, 19, 7],
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribusi Lisensi Software',
            },
        },
    };

    return <Bar data={data} options={options} />;
}
