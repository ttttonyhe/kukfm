import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Known Unknowns | 已知未知 Podcast</title>
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎙️</text></svg>'
				/>
			</Head>
			<NextNprogress
				color='#D1D5DB'
				height={2}
				options={{ showSpinner: false }}
			/>
			<Component {...pageProps} />
			<Footer />
			<Script
				async
				defer
				data-do-not-track='true'
				data-domains='kukfm.com'
				data-website-id='35bd3542-5f84-4573-b77c-5eb02cf4cdca'
				src='https://analytics.ouorz.com/analytics.js'
			/>
		</div>
	);
}

export default MyApp;
