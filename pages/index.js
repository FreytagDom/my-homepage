import Head from "next/head";
import Homepage from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominic Freytag</title>
        <meta name="description" content="Dominic Freytag" />

        <link rel="icon" href="/DF3.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/Img/DF2.png"
          sizes="180x180"
        />
      </Head>
      <Homepage />
    </>
  );
}
