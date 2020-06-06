import React from "react";
import Layout from "../components/layout/layout";

export default () => {
  return (
    <Layout>
      <h1
        css={`
          grid-column: 4/12;
        `}
      >
        oops!! This page does not exist
      </h1>
    </Layout>
  );
};
