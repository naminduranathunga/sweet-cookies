import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductHighlightsSection from "@/components/ProductHighlightsSection";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import Head from "next/head";


export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Sweet Creations</title>
        <meta property="og:title" content="Sweet Creations" key="title" />
      </Head>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ProductHighlightsSection />
      <GoogleReviews />
      <Footer />
    </div>
  );
}
