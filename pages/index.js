import Head from "next/head";
import Homepage from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominic Freytag|Portfolio|Web-Developer|WebApp</title>

        <meta
          name="description"
          content="Auf dieser Seite erzähle ich ein wenig zu meiner Person und meinen Freizeitprojekten als WebApp-Developer, die Projekte sind verlinkt. Vom Elektroniker zum WebApp-Developer"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/DF3.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/DF3.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/DF2.png"
          sizes="180x180"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Homepage />
    </>
  );
}
