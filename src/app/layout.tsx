import type { Metadata } from "next";
import { Inter, Space_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-space"
});
const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export const metadata: Metadata = {
  title: "Uthrathithan",
  description: "Portfolio website of Uthrathithan",
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

      </head>
      <body className={`  ${inter.className} ${space.variable} ${mont.variable}`}>
        {children}
      </body>
    </html>
  );
}
