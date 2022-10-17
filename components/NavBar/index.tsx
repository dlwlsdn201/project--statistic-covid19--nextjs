import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
	const router = useRouter();

	return (
		<nav>
			<Link href='/'>
				<a className='nav1'>대시보드</a>
			</Link>
			<Link href='/statistic'>
				<a className='nav2'>유형별 조회</a>
			</Link>
		</nav>
	);
};

export default NavBar;
