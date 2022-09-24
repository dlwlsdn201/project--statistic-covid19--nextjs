import { useMemo, useState } from 'react';

// material-ui
import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Grid,
	List,
	ListItemAvatar,
	ListItemButton,
	ListItemSecondaryAction,
	ListItemText,
	MenuItem,
	Stack,
	TextField,
	Typography
} from '@mui/material';

// project import
import MainCard from '../MainCard';
import AnalyticEcommerce from '../cards/statistics/AnalyticEcommerce';

// assets
import {
	GiftOutlined,
	MessageOutlined,
	SettingOutlined
} from '@ant-design/icons';
import avatar1 from '../../assets/images/users/avatar-1.png';
import avatar2 from '../../assets/images/users/avatar-2.png';
import avatar3 from '../../assets/images/users/avatar-3.png';
import avatar4 from '../../assets/images/users/avatar-4.png';
import { shallowEqual, useSelector } from 'react-redux';
import { calcRateOfDayToDay, getChartData } from './Handlers';
import { TchangeRate } from '../../types/components/Dashboard';
import { ResponsiveContainer } from 'recharts';
import ConfirmationOfWeeklyCharts from './ConfirmationOfWeeklyCharts';
import DeathOfWeeklyCharts from './DeathOfWeeklyCharts';

import { TChartData } from '../../types/components/Dashboard';

// avatar style
const avatarSX = {
	width: 36,
	height: 36,
	fontSize: '1rem'
};

// action style
const actionSX = {
	mt: 0.75,
	ml: 1,
	top: 'auto',
	right: 'auto',
	alignSelf: 'flex-start',
	transform: 'none'
};

// sales report status
const status = [
	{
		value: 'today',
		label: 'Today'
	},
	{
		value: 'month',
		label: 'This Month'
	},
	{
		value: 'year',
		label: 'This Year'
	}
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Dashboard = () => {
	const [value, setValue] = useState('today');
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

	// ----- Data objs -----
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
		<Grid container rowSpacing={5} columnSpacing={2.75}>
			{/* row 1 */}
			<Grid item xs={12} sx={{ mb: -2.25 }}>
				<Typography variant='h5'>Dashboard</Typography>
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

			{/* row 2 */}
			<Grid item xs={12} md={7} lg={8}>
				<Grid container alignItems='center' justifyContent='space-between'>
					<Grid item>
						<Typography variant='h5'>주간 확진자 현황</Typography>
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
								color={slot === 'week' ? 'primary' : 'secondary'}
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
								{`${getTotalValueOfWeekly(chartData?.confirmations)} 명`}
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
					<Grid item>
						<Typography variant='h5'>주간 사망자 현황</Typography>
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

			{/* row 3 */}
			{/* <Grid item xs={12} md={7} lg={8}>
				<Grid container alignItems='center' justifyContent='space-between'>
					<Grid item>
						<Typography variant='h5'>Recent Orders</Typography>
					</Grid>
					<Grid item />
				</Grid>
				<MainCard sx={{ mt: 2 }} content={false}>
					<OrdersTable />
				</MainCard>
			</Grid>
			<Grid item xs={12} md={5} lg={4}>
				<Grid container alignItems='center' justifyContent='space-between'>
					<Grid item>
						<Typography variant='h5'>Analytics Report</Typography>
					</Grid>
					<Grid item />
				</Grid>
				<MainCard sx={{ mt: 2 }} content={false}>
					<List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
						<ListItemButton divider>
							<ListItemText primary='Company Finance Growth' />
							<Typography variant='h5'>+45.14%</Typography>
						</ListItemButton>
						<ListItemButton divider>
							<ListItemText primary='Company Expenses Ratio' />
							<Typography variant='h5'>0.58%</Typography>
						</ListItemButton>
						<ListItemButton>
							<ListItemText primary='Business Risk Cases' />
							<Typography variant='h5'>Low</Typography>
						</ListItemButton>
					</List>
					<ReportAreaChart />
				</MainCard>
			</Grid> */}

			{/* <Grid item xs={12} md={5} lg={4}>
				<Grid container alignItems='center' justifyContent='space-between'>
					<Grid item>
						<Typography variant='h5'>Transaction History</Typography>
					</Grid>
					<Grid item />
				</Grid>
				<MainCard sx={{ mt: 2 }} content={false}>
					<List
						component='nav'
						sx={{
							px: 0,
							py: 0,
							'& .MuiListItemButton-root': {
								py: 1.5,
								'& .MuiAvatar-root': avatarSX,
								'& .MuiListItemSecondaryAction-root': {
									...actionSX,
									position: 'relative'
								}
							}
						}}>
						<ListItemButton divider>
							<ListItemAvatar>
								<Avatar
									sx={{
										color: 'success.main',
										bgcolor: 'success.lighter'
									}}>
									<GiftOutlined />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Typography variant='subtitle1'>Order #002434</Typography>
								}
								secondary='Today, 2:00 AM'
							/>
							<ListItemSecondaryAction>
								<Stack alignItems='flex-end'>
									<Typography variant='subtitle1' noWrap>
										+ $1,430
									</Typography>
									<Typography variant='h6' color='secondary' noWrap>
										78%
									</Typography>
								</Stack>
							</ListItemSecondaryAction>
						</ListItemButton>
						<ListItemButton divider>
							<ListItemAvatar>
								<Avatar
									sx={{
										color: 'primary.main',
										bgcolor: 'primary.lighter'
									}}>
									<MessageOutlined />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Typography variant='subtitle1'>Order #984947</Typography>
								}
								secondary='5 August, 1:45 PM'
							/>
							<ListItemSecondaryAction>
								<Stack alignItems='flex-end'>
									<Typography variant='subtitle1' noWrap>
										+ $302
									</Typography>
									<Typography variant='h6' color='secondary' noWrap>
										8%
									</Typography>
								</Stack>
							</ListItemSecondaryAction>
						</ListItemButton>
						<ListItemButton>
							<ListItemAvatar>
								<Avatar
									sx={{
										color: 'error.main',
										bgcolor: 'error.lighter'
									}}>
									<SettingOutlined />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Typography variant='subtitle1'>Order #988784</Typography>
								}
								secondary='7 hours ago'
							/>
							<ListItemSecondaryAction>
								<Stack alignItems='flex-end'>
									<Typography variant='subtitle1' noWrap>
										+ $682
									</Typography>
									<Typography variant='h6' color='secondary' noWrap>
										16%
									</Typography>
								</Stack>
							</ListItemSecondaryAction>
						</ListItemButton>
					</List>
				</MainCard>
				<MainCard sx={{ mt: 2 }}>
					<Stack spacing={3}>
						<Grid container justifyContent='space-between' alignItems='center'>
							<Grid item>
								<Stack>
									<Typography variant='h5' noWrap>
										Help & Support Chat
									</Typography>
									<Typography variant='caption' color='secondary' noWrap>
										Typical replay within 5 min
									</Typography>
								</Stack>
							</Grid>
							<Grid item>
								<AvatarGroup
									sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
									<Avatar alt='Remy Sharp' src={avatar1} />
									<Avatar alt='Travis Howard' src={avatar2} />
									<Avatar alt='Cindy Baker' src={avatar3} />
									<Avatar alt='Agnes Walker' src={avatar4} />
								</AvatarGroup>
							</Grid>
						</Grid>
						<Button
							size='small'
							variant='contained'
							sx={{ textTransform: 'capitalize' }}>
							Need Help?
						</Button>
					</Stack>
				</MainCard>
			</Grid> */}
		</Grid>
	);
};

export default Dashboard;
