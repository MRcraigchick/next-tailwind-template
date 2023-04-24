import Head from "next/head";
import ResponsiveNavBar from "../../responsive-navbar/responsive-nav-bar";
import Footer from "../../footer/footer";

export default function PageLayout({
  headChildren = null,
  mainContainerClass = "",
  navbar = true,
  footer = true,
  children,
}) {
  return (
    <>
      <Head>
        <title>{/* Title here */}</title>
        {headChildren ? headChildren : <></>}
      </Head>

      {navbar ? (
        <>
          <ResponsiveNavBar />
        </>
      ) : (
        <></>
      )}

      <main className={`w-full overflow-hidden ${mainContainerClass}`}>
        {children}
      </main>
      {footer ? <Footer /> : <></>}
    </>
  );
}
