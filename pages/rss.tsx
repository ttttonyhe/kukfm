import { GetServerSideProps } from "next";
import { FC } from "react";
import { Podcast } from "podcast";
import { htmlToText } from "html-to-text";

interface Post {
	status: string;
	post_metas: {
		podcast: {
			episode: string;
			audioUrl: any;
			fileSize: any;
			duration: string;
		};
	};
	title: { rendered: any };
	content: { rendered: any };
	id: any;
	date: string | number | Date;
}

const hmsToSecondsOnly = (durationStr: string) => {
	const parsedStr = parseInt(durationStr);
	if (!parsedStr) {
		let p = durationStr.split(":"),
			s = 0,
			m = 1;

		while (p.length > 0) {
			s += m * parseInt(p.pop(), 10);
			m *= 60;
		}

		return s;
	} else {
		return parsedStr;
	}
};

const RSS: FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	if (res) {
		const year = new Date().getFullYear();
		const feed = new Podcast({
			title: "已知未知 Known Unknowns",
			description:
				"已知未知是一档聚焦生活、科技与职业的非定期更新播客。信息过载的时代，我们从已知探索未知。",
			generator: "Node.js",
			feedUrl: "https://kukfm.com/rss",
			siteUrl: "http://kukfm.com",
			imageUrl: "https://static.ouorz.com/kuk_podcast_logo.jpg",
			author: "Tony He",
			copyright: `${year} Tony He`,
			language: "zh-cn",
			pubDate: "December 31, 2021 23:00:00 GMT",
			ttl: 60,
			itunesAuthor: "Tony He",
			itunesSummary:
				"已知未知是一档聚焦生活、科技与职业的非定期更新播客。信息过载的时代，我们从已知探索未知。",
			itunesOwner: { name: "TonyHe", email: "tony.hlp@hotmail.com" },
			itunesExplicit: false,
			itunesCategory: [
				{
					text: "Society & Culture",
					subcats: [
						{
							text: "Personal Journals",
						},
					],
				},
			],
			itunesImage: "https://static.ouorz.com/kuk_podcast_logo.jpg",
		});

		const response = await fetch(
			"https://blog.ouorz.com/wp-json/wp/v2/posts?&categories=120&per_page=20"
		);

		const episodes = await response.json();

		episodes.forEach((post: Post) => {
			if (post.status == "publish") {
				feed.addItem({
					title: `EP${post.post_metas.podcast.episode}: ${post.title.rendered}`,
					description: post.content.rendered,
					url: `https://kukfm.com/episode/${post.id}`,
					date: new Date(post.date),
					enclosure: {
						url: post.post_metas.podcast.audioUrl,
						size: post.post_metas.podcast.fileSize,
					},
					itunesExplicit: false,
					itunesSummary: htmlToText(post.content.rendered, {
						tags: { a: { options: { hideLinkHrefIfSameAsText: true } } },
					}),
					itunesDuration: hmsToSecondsOnly(post.post_metas.podcast.duration),
					itunesEpisode: parseInt(post.post_metas.podcast.episode),
					itunesEpisodeType: "full",
					itunesImage: "https://static.ouorz.com/kuk_podcast_logo.jpg",
				});
			}
		});

		res.setHeader("Content-Type", "text/xml");
		res.write(feed.buildXml());
		res.end();
	}

	return {
		props: {},
	};
};

export default RSS;
