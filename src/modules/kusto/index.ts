import express from "express";
import KustoQuery from "./KustoController";

const KustoRouter = express.Router();

KustoRouter.get(
    "/queries",
    KustoQuery.queryData
);

export default KustoRouter;
