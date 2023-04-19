import { GetServerSideProps } from "next";
import Aside from "../components/Aside";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Link from "next/link";
import Image from "next/image";

export default function Home({ episodes }) {
	return (
		<div className='text-gray-700 xl:w-4xl mx-auto w-full'>
			<main className='my-5 mx-5 lg:my-10 lg:flex lg:justify-center lg:space-x-6'>
				<div>
					<Aside />
				</div>
				<div>
					<section className='lg:flex justify-center mb-6'>
						<article className='overflow-hidden lg:max-w-2xl bg-white shadow-sm border rounded-xl p-7 lg:px-10 lg:py-9 items-center flex'>
							<div className='max-w-full'>
								<div className='mb-8'>
									<h1 className='text-2xl font-medium mb-1'>关于 About</h1>
									<p className='text-gray-500 tracking-wide text-lg'>
										已知未知是一档聚焦生活、科技与职业的非定期更新播客。信息过载的时代，我们从已知探索未知。
									</p>
								</div>
								<div className='grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:space-x-2 xl:whitespace-nowrap mb-3'>
									<a
										href='https://www.xiaoyuzhoufm.com/podcast/5fedc678dee9c1e16da7c152'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-indigo-400 border-indigo-300 w-full lg:w-auto border shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<i className='ri-globe-fill'></i>
											<span>小宇宙</span>
										</button>
									</a>
									<a
										href='https://www.breaker.audio/yi-zhi-wei-zhi-known-unknowns'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-blue-400 border-blue-300 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<Image
												src='https://static.ouorz.com/breaker_logo.png'
												width='13'
												height='13'
												className='rounded-full'
												alt='Breaker'
											/>
											<span>Breaker</span>
										</button>
									</a>
									<a
										href='https://podcasts.apple.com/us/podcast/%E5%B7%B2%E7%9F%A5%E6%9C%AA%E7%9F%A5-known-unknowns/id1546993177'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-gray-500 border-gray-400 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<i className='ri-apple-fill'></i>
											<span>Apple Podcasts</span>
										</button>
									</a>
									<a
										href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80NjEyZTY5OC9wb2RjYXN0L3Jzcw=='
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-green-500 border-green-300 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<i className='ri-google-fill'></i>
											<span>Google Podcasts</span>
										</button>
									</a>
								</div>
								<div className='grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:space-x-2 xl:whitespace-nowrap mb-3'>
									<a
										href='https://castbox.fm/channel/id3666710'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-yellow-500 border-yellow-400 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<Image
												src='https://static.ouorz.com/castbox_logo.png'
												width='13'
												height='13'
												className='rounded-full'
												alt='Castbox'
											/>
											<span>Castbox</span>
										</button>
									</a>
									<a
										href='https://anchor.fm/the-known-unknowns'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-pink-500 border-pink-300 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<i className='ri-anchor-fill'></i>
											<span>Anchor</span>
										</button>
									</a>
									<a
										href='https://overcast.fm/p2604911-6b4FNh'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-yellow-600 border-yellow-500 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<Image
												src='https://static.ouorz.com/overcast_logo.png'
												width='13'
												height='13'
												className='rounded-full'
												alt='Overcast'
											/>
											<span>Overcast</span>
										</button>
									</a>
									<a
										href='https://pca.st/cqr2jmh4'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-red-400 border-red-300 border shadow-sm w-full lg:w-auto rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<Image
												src='https://static.ouorz.com/pocketcasts_logo.png'
												width='13'
												height='13'
												className='rounded-full'
												alt='Pocket Casts'
											/>
											<span>Pocket Casts</span>
										</button>
									</a>
								</div>
								<div className='grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:space-x-2 xl:whitespace-nowrap'>
									<a
										href='https://radiopublic.com/known-unknowns-6L3VRo'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-red-500 border-red-400 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<Image
												src='https://static.ouorz.com/radiopublic_logo.svg'
												width='13'
												height='13'
												className='rounded-full'
												alt='RadioPublic'
											/>
											<span>RadioPublic</span>
										</button>
									</a>
									<a
										href='https://open.spotify.com/show/1wyg21KT66xDoG5dB2ouGa'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-green-500 border-green-400 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<i className='ri-spotify-line'></i>
											<span>Spotify</span>
										</button>
									</a>
									<a
										href='https://music.163.com/#/djradio?id=796784079'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-red-600 border-red-500 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<i className='ri-netease-cloud-music-line'></i>
											<span>网易云音乐</span>
										</button>
									</a>
									<a
										href='https://www.ximalaya.com/gerenchengzhang/45246859'
										target='_blank'
										rel='noreferrer'
									>
										<button className='text-red-600 border-red-500 border w-full lg:w-auto shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1'>
											<Image
												src='https://static.ouorz.com/ximalaya_logo.png'
												width='13'
												height='13'
												className='rounded-full'
												alt='喜马拉雅'
											/>
											<span>喜马拉雅</span>
										</button>
									</a>
								</div>
							</div>
						</article>
					</section>
					<section>
						{episodes.map((episode) => {
							return (
								<div
									key={episode.id}
									className='hover:shadow-md overflow-hidden mb-4 lg:max-w-2xl bg-white shadow-sm border rounded-xl p-7 lg:px-9 pt-9 pb-6 items-center'
								>
									<div className='lg:hidden inline-block mb-3 bg-gray-50 rounded-md border px-3 text-gray-500 mr-3 text-lg'>
										EP{episode.post_metas.podcast.episode}
									</div>
									<Link href={`/episode/${episode.id}`}>
										<h2 className='font-medium text-2xl mb-4 tracking-wide flex items-center cursor-pointer'>
											<span className='lg:block hidden bg-gray-50 rounded-md border px-2.5 text-gray-500 mr-3 text-lg'>
												EP{episode.post_metas.podcast.episode}
											</span>
											{episode.title.rendered}
										</h2>
									</Link>
									<p
										className='text-gray-500 tracking-wide leading-6 line-clamp-3'
										dangerouslySetInnerHTML={{
											__html: episode.post_excerpt.four + "...",
										}}
									></p>
									<div className='mt-8'>
										<AudioPlayer
											className='podcast-player focus:outline-none'
											autoPlayAfterSrcChange={false}
											src={episode.post_metas.podcast.audioUrl}
											autoPlay={false}
											preload='metadata'
										/>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</main>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch(
		"https://blog.ouorz.com/wp-json/wp/v2/posts?&categories=120&per_page=20"
	);

	const episodes = await response.json();

	return {
		props: {
			episodes: episodes,
		},
	};
};
