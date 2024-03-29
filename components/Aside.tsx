import Image from "next/image";
import Link from "next/link";
import logo from "../static/kukfm_logo.jpg";

export default function Aside() {
	return (
		<aside>
			<summary className='mb-5 lg:mb-0 w-full bg-white shadow-sm border rounded-xl justify-center items-center p-6 py-8 text-center'>
				<Image
					className='mx-auto rounded-xl'
					src={logo}
					width='170'
					height='170'
					alt='Known Unknowns'
					placeholder='blur'
				/>
				<h1 className='mt-4 text-2xl font-medium whitespace-nowrap tracking-wide'>
					Known Unknowns
				</h1>
				<p className='text-lg text-gray-500 tracking-wide'>已知未知播客</p>
			</summary>
			<Link href='/'>
				<div className='text-gray-600 mt-6 mb-2 bg-white shadow-sm border rounded-xl tracking-wider justify-center items-center flex p-2 text-lg cursor-pointer hover:bg-gray-50'>
					<i className='ri-home-3-line mr-1'></i>
					Home
				</div>
			</Link>
			<a target='_blank' href='/rss'>
				<div className='text-gray-600 mt-3 mb-2 bg-white shadow-sm border rounded-xl tracking-wider justify-center items-center flex p-2 text-lg cursor-pointer hover:bg-gray-50'>
					<i className='ri-rss-fill mr-1'></i> RSS
				</div>
			</a>
			<a href='mailto:hi@kukfm.com'>
				<div className='text-gray-600 mt-3 mb-2 bg-white shadow-sm border rounded-xl tracking-wider justify-center items-center flex p-2 text-lg cursor-pointer hover:bg-gray-50'>
					<i className='ri-mail-line mr-1'></i> Email
				</div>
			</a>
			<a href='https://www.ouorz.com/sponsor' target='_blank' rel='noreferrer'>
				<div className='text-gray-600 mt-3 mb-6 lg:mb-2 bg-white shadow-sm border rounded-xl tracking-wider justify-center items-center flex p-2 text-lg cursor-pointer hover:bg-gray-50'>
					<i className='ri-hand-heart-line mr-1'></i> Sponsor
				</div>
			</a>
		</aside>
	);
}
