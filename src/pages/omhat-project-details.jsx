import React from "react";
import SEO from "../common/seo";
import ProjectDetails from "../components/omhat-project-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Amiyon"} />
      <ProjectDetails />
    </Wrapper>
  );
};

export default index;
