
//Required External Modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./../_src/presentation/itemsRouter";

// App Variables
dotenv.config();
if (!process.env.PORT) {
    console.log(`ERROR - .env file must exist at root and must define value for PORT`);
    process.exit(1);  // PORT must be defined in .env
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// App Middleware Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/items", itemsRouter);

// Server 
const server = app.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}`);
});

// Webpack Hot-Module Replacement Activation
type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}