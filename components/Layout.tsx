import React, { FC, useMemo } from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Header from './Header';
import MiniDrawerStyled from './MiniDrawerStyled';
import Footer from './Footer';
import { Spin } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import Head from 'next/head';
type TProp = {
	children: JSX.Element;
};

const Layout: FC<TProp> = ({ children }) => {
	const theme = useTheme();
	const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
	const drawerSidebar = useMemo(() => <Sidebar />, []);
	const dashboardState = useSelector(
		(state: any) => state.dashboard,
		shallowEqual
	);
	return (
		<>
			<Head>
				{/* 페이지 제목/아이콘 */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
			</Head>
			<Header />
			<Spin
				spinning={dashboardState.loading}
				tip='Data Loading...'
				size='large'>
				<div className='inner-container'>
					{/* {!matchDownMD && (
				<MiniDrawerStyled variant='permanent' open={true}>
					{drawerSidebar}
				</MiniDrawerStyled>
			)} */}
					<div>{children}</div>
				</div>
			</Spin>
			<Footer />
		</>
	);
};

export default Layout;
