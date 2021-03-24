exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== "POST") {
      // Block GET requests
      return { statusCode: 400, body: null };
    }

    const Hubspot = require("hubspot");
    const hubspot = new Hubspot({ apiKey: process.env.HUBSPOT_KEY });
    const body = JSON.parse(event.body);
    const contact = await hubspot.contacts.createOrUpdate(body.form.email);

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
