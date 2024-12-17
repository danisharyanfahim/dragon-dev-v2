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
        <title>DragonDev.ca</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
