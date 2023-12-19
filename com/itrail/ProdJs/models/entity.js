export class Patient{
    surname;
    name;
    fullname;
    gender;
    phone;
    address;
    document = new Document();
    constructor( surname, name, fullname, gender, phone, address, document ){
        this.surname = surname;
        this.name = name;
        this.fullname = fullname;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
        this.document = document;
    }
}

export class Document{
    typeDocument;
    seria;
    numar;
    snils;
    polis;
    constructor( typeDocument, seria, numar, snils, polis ){
        this.typeDocument = typeDocument;
        this.seria = seria;
        this.numar = numar;
        this.snils = snils;
        this.polis = polis;
    }
}

export function getGender( gender ){
    var response;
    if( gender == 1){
        response = "WOMAN";
    }else
    if( gender == 0){
        response = "MAN";
    }
    return response;
}

export function setGender( gender ){
    var response;
    if( gender == "WOMAN"){
        response = 1;
    }else
    if( gender == "MAN"){
        response = 0;
    }else{
        response = 2;
    }
    return response;
}