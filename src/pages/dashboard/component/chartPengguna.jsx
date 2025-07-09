'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

export default function ChartPengguna() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [
            {
                label: 'Pengguna Aktif',
                data: [20, 30, 25, 40, 35, 50],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                tension: 0.3,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Jumlah Pengguna Aktif per Bulan',
            },
        },
    };

    return <Line data={data} options={options} />;
}
