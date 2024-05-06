const corsHandler = require('./utils/corsHandler');

exports.main = async function (event) {
  return {
    statusCode: 200,
    headers: corsHandler(event.headers.origin),
    body: JSON.stringify({
      message: "We going to put an open API spec here probably",
    }),
  };
};
