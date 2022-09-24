import React from 'react';
import {
	CartesianGrid,
	Label,
	Line,
	LineChart,
	XAxis,
	YAxis,
	Tooltip
} from 'recharts';
import { TChartData } from '../../types/components/Dashboard';

const ConfirmationOfWeeklyCharts = (chartData: TChartData) => (
	<LineChart data={chartData} height={300}>
		<XAxis dataKey='datetime' label='날짜(일)' height={100} />
		<YAxis dataKey='value' width={100}>
			<Label value='인원(명)' position='center' dx={-25} />
		</YAxis>
		<Tooltip
			formatter={(value: any) => [`${value}명`, '인원']}
			labelFormatter={(label: string) =>
				`${label.split('.')[0]}월 ${label.split('.')[1]}일`
			}
		/>
		<CartesianGrid strokeDasharray='3 3' />
		<Line
			type='monotone'
			dataKey='value'
			stroke='rgba(3, 169, 244, 0.85)'
			fill='rgba(3, 169, 244, 0.85)'
		/>
	</LineChart>
);

export default ConfirmationOfWeeklyCharts;
