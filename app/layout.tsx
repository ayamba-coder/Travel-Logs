import "@/app/(ui)/global.css";
import { inter_latin } from "./(ui)/fonts";
import { Header } from "./(ui)/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Travel Logs</title>
      </head>
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
