import SideBarContent from './third-party/SideBar';
import Navigation from './NavBar/Navigation';
const SideBar = () => (
	<SideBarContent
		sx={{
			'& .simplebar-content': {
				display: 'flex',
				flexDirection: 'column'
			}
		}}>
		<Navigation />
		{/* <NavCard /> */}
	</SideBarContent>
);

export default SideBar;
