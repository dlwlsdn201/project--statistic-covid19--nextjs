import React, { useState } from 'react';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from '../MainCard';
import AnalyticEcommerce from '../cards/statistics/AnalyticEcommerce';

// assets
import { shallowEqual, useSelector } from 'react-redux';
import { calcRateOfDayToDay, getChartData } from './Handlers';
import { ResponsiveContainer } from 'recharts';
import ConfirmationOfWeeklyCharts from './ConfirmationOfWeeklyCharts';
import DeathOfWeeklyCharts from './DeathOfWeeklyCharts';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Dashboard = () => {
	const [slot, setSlot] = useState('week');
	const dashboardState = useSelector((state) => state.dashboard, shallowEqual);
	const {
		deaths,
		severeSymptoms,
		hospitalizations,
		confirmations,
		searchDate,
		yesterday,
		weekly
	} = dashboardState;

	// ---- functions -----
	const getTotalValueOfWeekly = (chartData) => {
		let result = 0;
		if (chartData && chartData.length > 0) {
			result = chartData.reduce((acc, curObj) => {
				return curObj?.value ? acc + curObj.value : acc;
			}, result);
		}
		return result;
	};

	// ----- 전일 대비 증감율을 통계 데이터 유형별로 묶어놓은 객체. -----
	const changeRate = {
		deaths: calcRateOfDayToDay(deaths?.count, yesterday?.deaths?.count),
		severeSymptoms: calcRateOfDayToDay(
			severeSymptoms?.count,
			yesterday?.severeSymptoms?.count
		),
		hospitalizations: calcRateOfDayToDay(
			hospitalizations?.count,
			yesterday?.hospitalizations?.count
		),
		confirmations: calcRateOfDayToDay(
			confirmations?.count,
			yesterday?.confirmations?.count
		)
	};

	const chartData = {
		deaths: getChartData(weekly?.deaths),
		confirmations: getChartData(weekly?.confirmations)
	};
	// -----------------

	return (
		<>
			<div className='grid-container'>
				<Grid
					className='grid-wrapper'
					container
					rowSpacing={5}
					columnSpacing={2.75}>
					{/* row 1 */}
					<Grid item xs={12} sx={{ mb: -2.25 }}>
						<Typography variant='h5'>당일 종합 현황</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<AnalyticEcommerce
							title='신규 확진자 수'
							count={confirmations?.count?.toLocaleString()}
							percentage={changeRate?.confirmations}
							extra={confirmations?.rate}
							unit='%'
							subtitle='신규 확진자 현황'
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<AnalyticEcommerce
							title='사망자 수'
							count={deaths?.count?.toLocaleString()}
							percentage={changeRate?.deaths}
							unit='%'
							subtitle='사망자 현황'
							extra={deaths?.rate}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<AnalyticEcommerce
							title='재원 위중증 발생 수'
							count={severeSymptoms?.count?.toLocaleString()}
							percentage={changeRate?.severeSymptoms}
							unit='%'
							subtitle='재원 위중증 발생 현황'
							extra={severeSymptoms?.rate}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<AnalyticEcommerce
							title='일일 신규입원 수'
							count={hospitalizations?.count?.toLocaleString()}
							percentage={changeRate?.hospitalizations}
							unit='%'
							subtitle='신규 확진자 현황'
							extra={hospitalizations?.rate}
						/>
					</Grid>
					<Grid
						item
						md={8}
						sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }}
					/>
				</Grid>
			</div>
			<div className='grid-container'>
				<Grid container rowSpacing={5} columnSpacing={2.75}>
					{/* row 2 */}
					<Grid item xs={12} md={7} lg={8}>
						<Grid container alignItems='center' justifyContent='space-between'>
							<Grid item sx={{ mb: 1.25 }}>
								<Typography variant='h5'>주간 현황 차트</Typography>
							</Grid>
							<Grid item>
								<Stack direction='row' alignItems='center' spacing={0}>
									{/* <Button
								size='small'
								onClick={() => setSlot('month')}
								color={slot === 'month' ? 'primary' : 'secondary'}
								variant={slot === 'month' ? 'outlined' : 'text'}>
								Month
							</Button> */}
									<Button
										size='small'
										onClick={() => setSlot('week')}
										style={{
											color:
												slot === 'week' ? 'rgba(3, 169, 244, 0.85)' : 'white',
											borderColor:
												slot === 'week' ? 'rgba(3, 169, 244, 0.85)' : 'white'
										}}
										// color={slot === 'week' ? 'primary' : 'secondary'}
										variant={slot === 'week' ? 'outlined' : 'text'}>
										Week
									</Button>
								</Stack>
							</Grid>
						</Grid>
						<MainCard sx={{ mt: 1.5 }}>
							<Box sx={{ pt: 1, pr: 2 }}>
								<Stack spacing={1}>
									<Typography variant='h6' color='textSecondary'>
										주간 총 확진자 수
									</Typography>
									<Typography variant='h5'>
										{`${getTotalValueOfWeekly(
											chartData?.confirmations
										).toLocaleString()} 명`}
									</Typography>
								</Stack>
								<div style={{ padding: '40px 0px 0px' }}>
									<ResponsiveContainer minWidth='100%' minHeight={300}>
										{ConfirmationOfWeeklyCharts(chartData?.deaths)}
									</ResponsiveContainer>
								</div>
							</Box>
						</MainCard>
					</Grid>
					<Grid item xs={12} md={5} lg={4}>
						<Grid container alignItems='center' justifyContent='space-between'>
							<Grid item sx={{ mb: 1.25 }}>
								<Typography variant='h5' style={{ visibility: 'hidden' }}>
									주간 사망자 현황
								</Typography>
							</Grid>
							<Grid item />
						</Grid>
						<MainCard sx={{ mt: 1.5 }}>
							<Box sx={{ pt: 1, pr: 2 }}>
								<Stack spacing={1}>
									<Typography variant='h6' color='textSecondary'>
										주간 총 사망자 수
									</Typography>
									<Typography variant='h5'>
										{`${getTotalValueOfWeekly(chartData?.deaths)} 명`}
									</Typography>
								</Stack>
							</Box>
							<div style={{ padding: '40px 0px 0px' }}>
								<ResponsiveContainer minWidth='100%' minHeight={300}>
									{DeathOfWeeklyCharts(chartData?.deaths)}
								</ResponsiveContainer>
							</div>
						</MainCard>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Dashboard;
