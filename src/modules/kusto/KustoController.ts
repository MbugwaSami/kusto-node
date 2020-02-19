import { Request, Response } from "express";
import { Client, KustoConnectionStringBuilder } from "azure-kusto-data";

import { Error, KustoResult } from "../../interfaces/kustoInterface";

class KustoQuery {
    static async queryData(req: Request, res: Response) {

        const password = process.env.PASSWORD;
        const clusterName = process.env.CLUSTER;
        const username = process.env.USERNAME;
        console.log(username);
        const tablename = "table-name";
        const db = "database";
            const connection: KustoConnectionStringBuilder = KustoConnectionStringBuilder.withAadUserPasswordAuthentication(`https://${clusterName}.kusto.windows.net`, username, password);
            const plcClient = new Client(connection);
            const query = `
            ${tablename}
            | project time, zone`;
            console.log(query);
            plcClient.execute(
                db,
                query,
                (err: Error, results: KustoResult) => {
                    if (err) {
                        return res.status(400).json({
                            success: false,
                            message: err.message
                        });
                    }
                    console.log(JSON.stringify(results));
                    console.log(results.primaryResults[0].toString());
                    return res.status(200).json({
                        success: true,
                        data: {}
                    });
                }
                );


    }
}

export default KustoQuery;
