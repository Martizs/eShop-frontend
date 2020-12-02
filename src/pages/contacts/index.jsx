import SimpleTextPage from "components/SimpleTextPage";

export const Contacts = () => (
  <SimpleTextPage
    getEndpoint="getContact"
    saveEndpoint="saveContact"
    title="KONTAKTAI"
  />
);
