import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const red_hat_text = Red_Hat_Text({
  variable: "--font-red_hat_text",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Product List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${red_hat_text.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
