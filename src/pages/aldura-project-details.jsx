import React from "react";
import SEO from "../common/seo";
import ProjectDetails from "../components/aldura-project-details";
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