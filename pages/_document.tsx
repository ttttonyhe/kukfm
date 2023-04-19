import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html lang="zh-cn">
        <Head>
          <meta name="robots" content="index,follow"></meta>
          <meta name="googlebot" content="index,follow"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@ttttonyhe"></meta>
          <meta name="twitter:creator" content="@ttttonyhe"></meta>
          <meta property="og:url" content="https://kukfm.com"></meta>
          <meta property="og:type" content="website"></meta>
          <meta
            property="og:title"
            content="已知未知 Known Unknowns Podcast"
          ></meta>
          <meta
            property="og:description"
            content="已知未知是一档聚焦生活、科技与职业的非定期更新播客。信息过载的时代，我们从已知探索未知。"
          ></meta>
          <meta
            property="og:image"
            content="https://static.ouorz.com/kuk_podcast_logo.jpg"
          ></meta>
          <meta property="og:image:alt" content="KUKFM"></meta>
          <meta property="og:locale" content="zh_CN"></meta>
          <meta property="og:site_name" content="KUKFM"></meta>
          <meta name="theme-color" content="#f7f8f9"></meta>
          <link
            rel="apple-touch-icon"
            href="https://static.ouorz.com/kuk_podcast_logo.jpg"
          ></link>
          <link
            rel="mask-icon"
            href="https://static.ouorz.com/kuk_podcast_logo.jpg"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
