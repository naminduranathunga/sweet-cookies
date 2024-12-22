//import { Geist, Geist_Mono } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import Head from "next/head";
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Sweet Creations</title>
        <meta property="og:title" content="Sweet Creations" key="title" />
      </Head>
      <NavigationBar />
      <MenuSection />
      <Footer />
    </div>
  );
}
