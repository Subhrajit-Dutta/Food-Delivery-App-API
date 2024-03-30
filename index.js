const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const dotenv = require("dotenv");
const { calculatePriceController } = require("./controllers/priceController");

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/calculate-price", calculatePriceController);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
