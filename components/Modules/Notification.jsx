import { FrownTwoTone, SmileTwoTone } from '@ant-design/icons';
import { notification } from 'antd';
import React from 'react';

const CustomNotification = ({ result, errorMsg = undefined }) => {
	let props = {
		message: '데이터 호출을 성공하였습니다',
		placement: 'topRight',
		icon: <SmileTwoTone style={{ fontSize: 32 }} />
	};
	if (!result) {
		const description = (
			<div>
				<h4 style={{ marginBottom: '1.5em' }}>
					원인 : <span style={{ color: 'red' }}>{`${errorMsg}`}</span>
				</h4>
				<p>
					화면 상단에 <strong>새로고침</strong> 버튼을 클릭해주세요.
				</p>
			</div>
		);

		props = {
			...props,
			message: '데이터 호출을 실패하였습니다.',
			description: description,
			icon: <FrownTwoTone style={{ fontSize: 32 }} />
		};
	}

	const openNotification = (Attributes) => {
		notification.open({ ...Attributes, duration: 3 });
	};

	openNotification(props);
};

export default CustomNotification;
