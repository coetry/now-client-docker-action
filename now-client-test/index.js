const { createDeployment } = require("now-client");

let sitePaths = [`${__dirname}/dist/site1`, `${__dirname}/dist/site2`];

Promise.all(
  sitePaths.map(sitePath =>
    deploy(sitePath)
      .then(d => d)
      .catch(console.error)
  )
).then(console.log);

async function deploy(sitePath) {
  console.log(`${sitePath}`);
  let deployment;
  for await (const event of createDeployment(sitePath, {
    token: process.env.NOW_TOKEN
  })) {
    if (event.type === "ready") {
      deployment = event.payload;
      break;
    }
  }
  return deployment;
}
