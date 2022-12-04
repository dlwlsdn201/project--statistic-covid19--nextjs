import React from 'react';
import {
	BarChart,
	XAxis,
	YAxis,
	Label,
	CartesianGrid,
	Bar,
	Tooltip
} from 'recharts';
import { TChartData } from '../../types/components/Dashboard';
import { palette } from '../../lib/palette';

const DeathOfWeeklyCharts = (chartData: TChartData) => (
	<BarChart data={chartData} height={300}>
		<XAxis dataKey='datetime' label='날짜(일)' height={100} />
		<YAxis dataKey='value' width={100}>
			<Label value='인원(명)' position='center' dx={-20} />
		</YAxis>
		<Tooltip
			formatter={(value: any) => [`${value}명`, '인원']}
			labelFormatter={(label: string) =>
				label ? `${label.split('.')[0]}월 ${label.split('.')[1]}일` : ''
			}
			cursorStyle={{ background: 'yellow' }}
			cursor={{ fill: '#a8a8a8', opacity: 0.2 }}
		/>
		<CartesianGrid strokeDasharray='3 3' />
		<Bar
			type='monotone'
			dataKey='value'
			stroke={palette.deaths}
			fill={palette.deaths}
			maxBarSize={15}
		/>
	</BarChart>
);

export default DeathOfWeeklyCharts;
