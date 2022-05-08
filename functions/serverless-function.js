exports.handler = async (event) => {
  const param = event.queryStringParameters.param;

  return {
    statusCode: 200,
    body: JSON.stringify({ param }),
  };
};
