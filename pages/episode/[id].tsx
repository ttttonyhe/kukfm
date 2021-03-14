import { GetServerSideProps } from "next";
import Aside from "../../components/Aside";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Head from "next/head";

export default function Episode({ episode }) {
  return (
    <div className="text-gray-700 xl:w-4xl mx-auto w-full">
      <Head>
        <title>{episode.title.rendered}</title>
      </Head>
      <main className="my-5 mx-5 lg:my-10 lg:flex lg:justify-center lg:space-x-6">
        <div>
          <Aside />
        </div>
        <div>
          <section className="mt-6 lg:mt-0 mb-6 bg-white shadow-sm border rounded-xl p-7 lg:pt-6 lg:pb-5 lg:px-10">
            <AudioPlayer
              className="podcast-player focus:outline-none"
              autoPlayAfterSrcChange={false}
              src={episode.post_metas.podcast.audioUrl}
            />
          </section>
          <section className="lg:flex justify-center mb-6">
            <article className="overflow-hidden lg:max-w-2xl bg-white shadow-sm border rounded-xl p-7 lg:px-10 lg:py-9 items-center flex">
              <div className="max-w-full">
                <h1 className="font-medium text-2xl lg:text-3xl mb-5 tracking-wide flex items-center cursor-pointer">
                  <span className="bg-gray-50 rounded-md border px-2.5 text-gray-500 mr-3 text-lg">
                    EP{episode.post_metas.podcast.episode}
                  </span>
                  {episode.title.rendered}
                </h1>
                <div
                  className="prose lg:prose-lg"
                  dangerouslySetInnerHTML={{
                    __html: episode.content.rendered,
                  }}
                ></div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    "https://blog.ouorz.com/wp-json/wp/v2/posts/" + context.params.id
  );

  const episode = await response.json();
  return {
    props: {
      episode: episode,
    },
  };
};
