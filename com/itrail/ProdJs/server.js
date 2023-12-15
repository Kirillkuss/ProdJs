import * as fdoctor from "./service/fdoctor.js"
import * as swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import express from 'express'
import * as doctorService from './service/doctorService.js'
import * as documentService from './service/documentService.js'
import * as patientService from './service/patientService.js'
import * as DataSource from './config/dbconfig.js'

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      consumes:["application/json"],
      produces:["application/json"],
      info: {
        title: 'API for Node.js',
        version: '1.0.0',
        description: 'RESTful API for Node.js',
        contact: {
          name: "Kirill Borisevich",
          email: "borisevich711@gmail.com",
          url: "https://github.com/Kirillkuss",
         }
        },
      servers: [
        {
          url: 'http://localhost:3000',
          description: "Local server",
        }
      ],
    },
    apis: ['./routes/*.js'],
  };

const client = DataSource.dbConnect();
const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use( express.json());
app.use( express.urlencoded({
    extended: true
}));

/**
 * Endpoints for doctors
 */
app.get('/doctors', async (request, response) => {
    doctorService.getDoctors( request, response, client  );
});
app.get('/doctors/:id' , async (request, response) => {
    doctorService.getDoctorById( request, response, client  );
});

app.post('/doctors/add', async (request, response) => {
    doctorService.addDoctor( request, response, client  );
});

/**
 * Endpoints for documents
 */
app.get('/documents', async (request, response) => {
    documentService.getDocuments( request, response, client );
});
app.get('/documents/:id' , async (request, response) => {
    documentService.getDocumentById( request, response, client );
});

app.post('/documents/add', async (request, response) => {
    documentService.addDocument( request, response, client );
});

/**
 * Endpoints for patients
 */
app.get('/patients', async (request, response) => {
    const p = patientService.getPatients( request, response, client );
});
app.get('/patients/:id' , async (request, response) => {
    patientService.getPatientById( request, response, client );
});

app.post('/patients/add/:id' , async (request, response) => {
    patientService.addPatient( request, response, client );
});

/**
 * Фронт
 */
app.use( async  (request, response) => {
  fdoctor.getRest( request, response, client );
});

app.listen(3000, () => console.log('Server running on port 3000'));



  







