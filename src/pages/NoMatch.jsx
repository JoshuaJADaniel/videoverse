import React from "react";
import Template from "templates/Template";
import SectionNoMatch from "components/SectionNoMatch";

const NoMatch = () => (
  <Template loading={false} page={"Page Not Found"}>
    <SectionNoMatch />
  </Template>
);

export default NoMatch;
