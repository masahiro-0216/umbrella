import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "umbrella",
  description: "傘の貸し出しサービスです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased flex justify-center pb-30`}
      >
        <div className="w-10/12 max-w-[1000px]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
