import { Application } from "express";
import KustoRouter from "./kusto";

const apiPrefix = "/api/v1";

const routes = (app: Application): Application =>
{
    app.use(apiPrefix, KustoRouter);
    return app;
};

export default routes;
