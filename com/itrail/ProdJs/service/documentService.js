/**
 * Получение списка документов
 * @param {*} request 
 * @param {*} response 
 * @param {*} client 
 */
export async function getDocuments( request, response, client ){
    if (  request.method === "GET") {
        const res = await client.query("Select * from document" )
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(  res.rows ));
    }else{
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Документы не найдены" }));
    }
}
/**
 * Получение документа по ИД
 * @param {*} request 
 * @param {*} response 
 * @param {*} client 
 */
export async function getDocumentById( request, response, client ){
  if (  request.method === "GET") {
    const res = await client.query("Select * from document where document.id_document =" + request.params.id   )
    if ( res.rows.length == 0 ){
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Документ не найден" }));
    }else{
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(  res.rows[0]));
    }
  }else{
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Ошибка сервера" }));
  }
}
/**
 * Добавить документ
 * @param {*} request 
 * @param {*} response 
 * @param {*} client 
 */
export async function addDocument( request, response, client ){
    if (  request.method === "POST") {
        if ( (await client.query("select * from document where document.numar = '" + request.body.numar + "';" )).rows.length != 0 ){
            response.writeHead( 400, { "Content-Type": "application/json" });
            response.end(JSON.stringify( { code: 400, message: "Номер документа не уникальный"}));
        } else
        if ( (await client.query("select * from document where document.snils = '" + request.body.snils + "';" )).rows.length != 0 ){
            response.writeHead( 400, { "Content-Type": "application/json" });
            response.end(JSON.stringify( { code: 400, message: "СНИСЛ документа не уникальный"}));
        } else
        if ( (await client.query("select * from document where document.polis = '" + request.body.polis + "';" )).rows.length != 0 ){
            response.writeHead( 400, { "Content-Type": "application/json" });
            response.end(JSON.stringify( { code: 400, message: "Полис документа не уникальный"}));
        }
        else{
            const res = await client.query("insert into document ( id_document, type_document, seria, numar, snils, polis ) values ( default, " + "'"+[request.body.typeDocument, request.body.seria ,request.body.numar, request.body.snils, request.body.polis].join("','") + "'" + ") RETURNING *");
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify( res.rows ));
        }
    }else{
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Ошибка сервера" }));
    }
} 