import * as fs from 'fs'

// обрабатываем полученные от клиента данные
function getReqData(req) {
    return new Promise(async (resolve, reject) => {
        try {
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const data = JSON.parse(Buffer.concat(buffers).toString());
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

export async function getRest( request, response, client ){
     if (request.url === "/api/test" && request.method === "GET") {
        const res = await client.query('Select * from doctor')
        response.end(JSON.stringify( res ));
    }
    else if (request.url === "/" || request.url === "/index.html") {
        fs.readFile("index.html", (error, data) => response.end(data));
    }
    else{
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Ресурс не найден" }));
    }
}