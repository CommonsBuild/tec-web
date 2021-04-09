// const Hubspot = require("hubspot");
// const hubspot = new Hubspot({ apiKey: "25abf925-8fa2-475e-9949-12c1a2f7e5d4" });
// hubspot.contacts
//   .createOrUpdate("kristofer@fmckl.se")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

const hubspot = require("@hubspot/api-client");
const hubspotClient = new hubspot.Client({
  apiKey: "25abf925-8fa2-475e-9949-12c1a2f7e5d4",
});

const contactObj = {
  properties: {
    email: "kristofer@kristoferlund.se",
  },
};

hubspotClient.crm.contacts.basicApi.create(contactObj).then((response) => {
  console.log(response);
});
