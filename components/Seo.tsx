import Head from 'next/head';
import React, { FC } from 'react';

type TProp = {
	title: string;
};

const Seo: FC<TProp> = ({ title }) => {
	return (
		<Head>
			<title>{title} | page</title>
		</Head>
	);
};

export default Seo;
