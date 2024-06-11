import express, { Application, Request, Response } from "express";
import { BALANCE_SHEET } from "./data";
import { camelizeKeys } from "./utils";
import http from "http";

export const app: Application = express();
export let httpServer: ReturnType<typeof http.createServer>;
const port: number = 5000;

export const Main = () => {
  app.get("/api/reports/BalanceSheet", async (req: Request, res: Response) => {
    try {
      const result = camelizeKeys(BALANCE_SHEET);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(result);
    } catch (error) {
      console.error("There was a problem with the Fetch operation:", error);
    }
  });

  httpServer = http.createServer(app);
  httpServer.listen(port, () => {
    console.log(`Server listening pn port ${port}`);
  });
};

export const Shutdown = (callback: any) =>
  httpServer && httpServer.close(callback);

Main();
