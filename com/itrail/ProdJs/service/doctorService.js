/**
 * Получение всех докторов
 * @param {*} request 
 * @param {*} response 
 * @param {*} client 
 */
export async function getDoctors( request, response, client ){
    if (  request.method === "GET") {
        const res = await client.query("Select * from doctor" )
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(  res.rows ));
    }else{
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Доктор не найден" }));
    }
}
/**
 * Получение доктора по ИД
 * @param {*} request 
 * @param {*} response 
 * @param {*} client 
 */
export async function getDoctorById( request, response, client  ){
    if (  request.method === "GET") {
    const res = await client.query("Select * from doctor where doctor.id_doctor =" + request.params.id   )
        if ( res.rows.length == 0 ){
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({  message: "Доктор не найден" }));
        }else{
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(  res.rows[0] ));
        }
      }else{
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(JSON.stringify({  message: "Ошибка сервера" }));
      }
}
/**
 * Добавить доктора
 * @param {*} request 
 * @param {*} response 
 * @param {*} client 
 */
export async function addDoctor( request, response, client  ){
    if (  request.method === "POST") {
        const res = await client.query("insert into doctor ( id_doctor, surname, name, full_name ) values ( default, " + "'"+[request.body.surname, request.body.name ,request.body.fullname].join("','") + "'" + ") RETURNING *");
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify( res.rows ));
    }else{
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Ошибка сервера" }));
    }
} 
