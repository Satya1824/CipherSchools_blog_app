import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="sm:px-20 px-3">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ margin: "0px" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Blog App",
  description: "",
  keywords: "mern,react,node,mongodb",
  author: "Satya Prakash",
};

export default Layout;
