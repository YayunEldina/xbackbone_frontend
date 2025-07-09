'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartOrganization() {
    const data = {
        labels: ['HRD', 'IT', 'Finance', 'Marketing'],
        datasets: [
            {
                label: 'Jumlah Pegawai',
                data: [10, 15, 7, 8],
                backgroundColor: ['#EF4444', '#3B82F6', '#F59E0B', '#10B981'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Distribusi Organisasi</h2>
            <Pie data={data} />
        </div>
    );
}
