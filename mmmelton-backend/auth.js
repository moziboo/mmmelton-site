exports.handler = async function (event) {
  const token = event.authorizationToken;
  const apiKeyExpected = process.env.API_KEY;

  if (token === apiKeyExpected) {
    return generatePolicy("user", "Allow", "*");
  } else {
    return generatePolicy("user", "Deny", event.methodArn);
  }
};

function generatePolicy(principalId, effect, resource) {
  const policyDocument = {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: effect,
        Resource: resource,
      },
    ],
  };

  return {
    principalId: principalId,
    policyDocument: policyDocument,
  };
}
