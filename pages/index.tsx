export default function Home() {
  return (
    <div className="text-gray-700 max-w-4xl mx-auto">
      <main className="my-10">
        <section className="flex justify-center space-x-6">
          <summary className="bg-white shadow-sm border rounded-xl justify-center items-center p-6 text-center">
            <img
              className="h-40 w-40 mx-auto rounded-xl mb-4"
              src="https://static.ouorz.com/wp-content/uploads/2020/12/2021010105320083.jpg"
            />
            <h1 className="text-2xl font-medium whitespace-nowrap tracking-wide">
              Known Unknowns
            </h1>
            <p className="text-lg text-gray-500 tracking-wide">已知未知播客</p>
          </summary>
          <article className="bg-white shadow-sm border rounded-xl px-9 py-5 items-center flex">
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-medium mb-1">关于 About</h1>
                <p className="text-gray-500 tracking-wide text-lg">
                  已知未知是一档聚焦生活、科技与职业的非定期更新播客。信息过载的时代，我们从已知探索未知。
                </p>
              </div>
              <div className="flex space-x-2 whitespace-nowrap mb-3">
                <button className="text-yellow-400 border-yellow-300 border shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1">
                  <i className="ri-rss-fill"></i>
                  <span>RSS</span>
                </button>
                <button className="text-pink-500 border-pink-300 border shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1">
                  <i className="ri-anchor-fill"></i>
                  <span>Anchor.FM</span>
                </button>
                <button className="text-green-500 border-green-300 border shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1">
                  <i className="ri-google-fill"></i>
                  <span>Google Podcasts</span>
                </button>
                <button className="text-gray-500 border-gray-300 border shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1">
                  <i className="ri-apple-fill"></i>
                  <span>Apple Podcasts</span>
                </button>
              </div>
              <div className="flex space-x-2 whitespace-nowrap">
                <button className="text-indigo-400 border-indigo-300 border shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1">
                  <i className="ri-globe-fill"></i>
                  <span>小宇宙</span>
                </button>
                <button className="text-blue-400 border-blue-300 border shadow-sm rounded-md py-1 px-3.5 items-center justify-center flex space-x-1">
                  <i className="ri-twitter-fill"></i>
                  <span>Twitter</span>
                </button>
              </div>
            </div>
          </article>
        </section>
        <section></section>
      </main>
      <footer className="text-center text-gray-500 font-light tracking-wide">
        <p>
          &copy; 2020 - 2021 Known Unknowns Podcast ·{" "}
          <a href="https://twitter.com/ttttonyhe">@ttttonyhe</a>
        </p>
      </footer>
    </div>
  );
}
