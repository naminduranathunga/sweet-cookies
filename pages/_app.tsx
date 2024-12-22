import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Inter, Knewave} from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const knewave = Knewave({
  variable: "--font-knewave",
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
