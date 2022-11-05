import app from "./server.js";
import CONFIG from "./src/config/config.js";
import connectDB from "./src/db/connect.js";
import seedGifs from "./src/db/seed.js";

connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("DB CONNECTED");
  // seedGifs();
  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`,
    );
  });
});
