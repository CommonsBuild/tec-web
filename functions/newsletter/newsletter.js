exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== "POST") {
      // Block GET requests
      return { statusCode: 400, body: null };
    }

    const body = JSON.parse(event.body);
    const contactObj = {
      properties: {
        email: body.email,
      },
    };

    const hubspot = require("@hubspot/api-client");
    const hubspotClient = new hubspot.Client({
      apiKey: process.env.HUBSPOT_KEY,
    });

    const createResponse = await hubspotClient.crm.contacts.basicApi.create(
      contactObj
    );

    console.log(`Created contact, email: ${body.email}`);

    return {
      statusCode: 200,
      body: "Contact created",
    };
  } catch (err) {
    const get = require("lodash/get");
    const statusCode = get(err, "response.statusCode", false);

    if (!statusCode) {
      console.log(`Error creating contact: ${err.toString()}`);
      return { statusCode: 500, body: err.toString() };
    }

    const body = get(err, "response.body.message", false);

    console.log(`Error creating contact, code: ${statusCode} message: ${body}`);

    return { statusCode, body };
  }
};
