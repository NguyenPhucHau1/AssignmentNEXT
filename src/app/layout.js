"use client";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "../../public/bootstrap-5.3.3-dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import styles from './styles/styles.css';
import { setLanguage , hidePoster} from "./components/index";
const inter = Inter({ subsets: ["latin"] });



const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Canalis</title>
        <script src="https://kit.fontawesome.com/0cf775c6e4.js" crossOrigin="anonymous"></script>
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
    
  );
};
export default RootLayout;
