//Uses config set global components for the layout
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ config, children }) {
  //Create at least a header and footer component
  const { font } = config.content;

  return (
    <>
      <Head>
        {font && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font}&display=swap`}
            rel="stylesheet"
          />
        )}
      </Head>
      <div style={{ fontFamily: font || "default-font" }}>
        <Header config={config} />
        <main>{children}</main>
        <Footer config={config}></Footer>
      </div>
    </>
  );
}
