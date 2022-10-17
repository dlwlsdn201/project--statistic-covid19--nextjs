import dayjs from 'dayjs';
import React from 'react';

const Header = () => {
	const nowTime = dayjs().format('YYYY-MM-DD HH:mm');
	console.log(nowTime);
	return (
		<div className='header-container'>
			<strong className='header-title'>국내 COVID19 현황 대시보드</strong>
			<span className='lookup-time'>{`(${nowTime} 기준)`}</span>
		</div>
	);
};

export default Header;
