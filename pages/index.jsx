import Head from 'next/head';

export default function Home() {
	return (
		<div id="welcome">
			<Head>
				<title>Altis NodeJS</title>
			</Head>
			<p>Altis NodeJS is installed and ready to go.</p>
			<p>
				<a href="https://docs.altis-dxp.com/nodejs/">View documentation 🚀</a>
			</p>
		</div>
	);
}
