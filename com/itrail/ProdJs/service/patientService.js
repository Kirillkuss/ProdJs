import * as entity from "../models/entity.js"

/**
 * Полчение списка всех пациентов с их документом
 * @param {*} request 
 * @param {*} response 
 */
export async function getPatients( request, response, client ){
    if (  request.method === "GET") {
        const res = await client.query("select p.*, d.* from patient p, document d where p.document_id = d.id_document" )
        response.writeHead(200, { "Content-Type": "application/json" });
        const listPatients = new Array();
        for (var i = 0; i < res.rows.length; i++) {
            const patient = new entity.Patient( res.rows[i].surname,
                                         res.rows[i].name,
                                         res.rows[i].full_name,
                                         res.rows[i].gender,
                                         res.rows[i].phone,
                                         res.rows[i].address,
                                         new entity.Document( res.rows[i].type_Document,
                                                       res.rows[i].seria,
                                                       res.rows[i].numar,
                                                       res.rows[i].snils,
                                                       res.rows[i].polis ));
            listPatients[i] = patient;
        }
        response.end(JSON.stringify(  listPatients ));
    }else{
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Ошибка сервера" }));
    }
}
/**
 * Полчение пациента с его документом по ИД
 * @param {*} request 
 * @param {*} response 
 */
export async function getPatientById( request, response, client ){
    if ( request.method === "GET" ) {
        const res = await client.query("select p.*, d.* from patient p, document d where p.document_id = d.id_document and p.id_patient =" + request.params.id )
        if ( res.rows.length == 0 ){
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({  message: "Пациент не найден" }));
        }else{
            var patient = new entity.Patient();
            for (var i = 0; i < res.rows.length; i++) {
                patient = new entity.Patient( res.rows[i].surname,
                                             res.rows[i].name,
                                             res.rows[i].full_name,
                                             res.rows[i].gender,
                                             res.rows[i].phone,
                                             res.rows[i].address,
                                             new entity.Document( res.rows[i].type_Document,
                                                           res.rows[i].seria,
                                                           res.rows[i].numar,
                                                           res.rows[i].snils,
                                                           res.rows[i].polis ));
            }
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(  patient ));
        }
      }else{
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(JSON.stringify({  message: "Ошибка сервера" }));
      }
}
/**
 * Добавление пациента
 * @param {*} request 
 * @param {*} response 
 */
export async function addPatient( request, response, client ){
    if (  request.method === "POST") {
        if( (await client.query("select * from patient p where p.phone = '" + request.body.phone + "';"  )).rows.length != 0 ){
            response.writeHead( 400, { "Content-Type": "application/json" });
            response.end(JSON.stringify( { code: 400, message: "Номер телефона не уникальный"}));
        }else
        if( (await client.query("select * from document d where d.id_document = '" + request.params.id + "';"  )).rows.length === 0){
            response.writeHead( 400, { "Content-Type": "application/json" });
            response.end(JSON.stringify( { code: 400, message: "Документ с таким ИД не существует"}));
        }else 
        if( (await client.query("select p.* from patient p, document d where p.document_id = d.id_document and p.document_id =" + request.params.id )).rows.length != 0){
            response.writeHead( 400, { "Content-Type": "application/json" });
            response.end(JSON.stringify( { code: 400, message: "Пользователь с таким документом уже существует"}));
        }
        else{
        const res = await client.query("insert into patient ( id_patient, surname, name, full_name, gender, phone, address, document_id ) values ( default, " + "'"+[request.body.surname, request.body.name ,request.body.fullname, request.body.gender, request.body.phone, request.body.address, request.params.id].join("','") + "'" + ") RETURNING *");
        var patient = new Patient();
        for (var i = 0; i < res.rows.length; i++) {
            const doctor = await client.query("select * from document d where d.id_document =" + res.rows[i].document_id );
            var newDoctor = new entity.Document();
            for (var j = 0; j < doctor.rows.length; j++){
                newDoctor =  new entity.Document( doctor.rows[j].type_Document,
                                           doctor.rows[j].seria,
                                           doctor.rows[j].numar,
                                           doctor.rows[j].snils,
                                           doctor.rows[j].polis )
            }
            patient = new entity.Patient( res.rows[i].surname,
                                   res.rows[i].name,
                                   res.rows[i].full_name,
                                   res.rows[i].gender,
                                   res.rows[i].phone,
                                   res.rows[i].address,
                                   newDoctor );
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify( patient ));
        }
    }else{
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({  message: "Ошибка сервера" }));
    }
} 
