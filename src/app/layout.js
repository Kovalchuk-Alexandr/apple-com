import { Geist, Geist_Mono } from "next/font/google";
import './reset.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
	title: 'Apple replica',
	description: 'Copy of Apple.com',
};

export default function RootLayout({ children }) {
  return (
		<html
			lang="en"
			// className={`${geistSans.variable} ${geistMono.variable} `}
		>
			<body className="">{children}</body>
		</html>
  );
}
