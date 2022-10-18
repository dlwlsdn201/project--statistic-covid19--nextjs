import React, { FC, useMemo } from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Header from './Header';
import MiniDrawerStyled from './MiniDrawerStyled';
import Footer from './Footer';
type TProp = {
	children: JSX.Element;
};

const Layout: FC<TProp> = ({ children }) => {
	const theme = useTheme();
	const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

	const drawerSidebar = useMemo(() => <Sidebar />, []);
	return (
		<>
			<Header />
			<div className='inner-container'>
				{/* {!matchDownMD && (
				<MiniDrawerStyled variant='permanent' open={true}>
					{drawerSidebar}
				</MiniDrawerStyled>
			)} */}
				<div>{children}</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
