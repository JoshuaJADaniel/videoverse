import React from "react";
import Template from "templates/Template";
import SectionMessage from "components/SectionMessage";

const NoMatch = () => (
  <Template loading={false} page={"Page Not Found"}>
    <SectionMessage
      title="Page not found"
      subtitle="We're sorry, we couldn't find the page you requested"
    />
  </Template>
);

export default NoMatch;
