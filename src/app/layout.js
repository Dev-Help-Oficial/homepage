import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Help",
  description:
    "Uma comunidade focada em ajudar novatos na programação onde todos são bem-vindos!",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
  );
}
