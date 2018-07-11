import React from "react";
import Helmet from "react-helmet";
import Page from "../components/Page";
import FormWizard from "../containers/FormWizard";

export default () => (
  <Page>
    <h1>Form 2</h1>
    <FormWizard slug="form-2" />
    <Helmet title="Form 2" />
  </Page>
);
