import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from '../../MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({
	color,
	title,
	count,
	percentage,
	isLoss,
	extra,
	subtitle,
	unit
}) => (
	<MainCard contentSX={{ p: 2.25 }}>
		<Stack spacing={0.5}>
			<Typography variant='h6' color='textSecondary'>
				{title}
			</Typography>
			<Grid container alignItems='center'>
				<Grid item>
					<Typography variant='h4' color='inherit'>
						{count ?? '-'}
					</Typography>
				</Grid>
				{typeof percentage && percentage !== 'NaN' && (
					<Grid item>
						<Chip
							variant='combined'
							color={Number(percentage) > 0 ? 'warning' : 'primary'}
							icon={
								<>
									{Number(percentage) > 0 ? (
										<RiseOutlined
											style={{ fontSize: '0.75rem', color: 'inherit' }}
										/>
									) : (
										<FallOutlined
											style={{ fontSize: '0.75rem', color: 'inherit' }}
										/>
									)}
								</>
							}
							label={`${percentage}% (전일 대비)`}
							sx={{ ml: 1.25, pl: 1 }}
							size='small'
						/>
					</Grid>
				)}
			</Grid>
		</Stack>
		<Box sx={{ pt: 2.25 }}>
			<Typography variant='caption' color='textSecondary'>
				인구 10만명당 {subtitle}{' '}
				<Typography
					component='span'
					variant='caption'
					sx={{ color: `${'success'}.main` }}>
					{`${extra ?? '-'} (${unit})`}
				</Typography>{' '}
			</Typography>
		</Box>
	</MainCard>
);

AnalyticEcommerce.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
	count: PropTypes.string,
	percentage: PropTypes.number,
	isLoss: PropTypes.bool,
	extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
	color: 'primary'
};

export default AnalyticEcommerce;
