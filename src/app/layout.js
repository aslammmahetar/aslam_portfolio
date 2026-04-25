import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./ThemeProvider";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aslam | Full Stack Developer",
  description: "Building scalable web apps & automation tools",
};

export default function RootLayout({ children }) {
  return <html
    lang="en" suppressHydrationWarning
    className={` h-full antialiased`}
  >
    <body className={`${inter.className}`}>
      <Provider>
        {children}
      </Provider>
    </body>
  </html>

}
