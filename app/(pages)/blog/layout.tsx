import Footer from "@/app/components/layout/footer";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer id="blog" />
    </>
  );
}
