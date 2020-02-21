
//Required External Modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// App Variables
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);  // PORT must be defined in .env
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// App Middleware Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

// Server 
const server = app.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}`);
});

// Webpack Hot-Module Replacement Activation
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}