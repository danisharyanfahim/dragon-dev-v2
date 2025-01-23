import Navbar from "./components/layout/navbar";
import { ThemeProvider } from "./context/theme-provider";
import "./styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="dragon-dev, dragondev, DragonDev, Dragondev, Dragon-dev, dragonDev, Danish Fahim, Danish Aryan Fahim, danish fahim, Danish fahim, danish Fahim"
        />
        <meta name="description" content="DragonDev.ca" />
        <meta name="author" content="Danish Fahim" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="DragonDev.ca" />
        <meta
          property="og:description"
          content="DragonDev.ca is the portfolio website of Danish Fahim."
        />
        <meta
          property="og:image"
          content="https://dragondev.ca/public/static/icons/dragon-dev.svg"
        />
        <meta property="og:url" content="https://dragondev.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DragonDev.ca" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:author" content="Dragon Dev" />
        <meta property="og:published_time" content="2025-01-22T10:00:00Z" />
        <title>DragonDev.ca</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
