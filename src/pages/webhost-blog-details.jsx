import React from "react";
import SEO from "../common/seo";
import BlogDetails from "../components/webhost-blog-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Amiyon"} />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
