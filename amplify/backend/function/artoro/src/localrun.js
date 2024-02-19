const { handler } = require("./index.js"); // Adjust the path as necessary
const mockEvent = require("./mockEvent.json");

async function runLocalLambda() {
  try {
    const result = await handler(mockEvent);
    console.log("Lambda function executed successfully:", result);
  } catch (error) {
    console.error("Lambda function execution failed:", error);
  }
}

runLocalLambda();
