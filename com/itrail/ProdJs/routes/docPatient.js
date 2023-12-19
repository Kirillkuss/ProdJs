/**
 * @swagger
 * components:
 *   schemas:
 *     Document:
 *       type: object
 *       required:
 *         - idDocument
 *         - typeDocument
 *         - seria
 *         - numar
 *         - snils
 *         - polis
 *       properties:
 *         idDocument:
 *           type: int
 *           description: Ид документа
 *         typeDocument:
 *           type: string
 *           description: Тип документа
 *         seria:
 *           type: string
 *           description: Cерия
 *         numar:
 *           type: string
 *           description: Номер
 *         snils:
 *           type: string
 *           description: СНИЛС
 *         polis:
 *           type: string
 *           description: Полис
 *       example:
 *         typeDocument: Паспорт
 *         seria: BM
 *         numar: 12656455
 *         snils: 123-456-234-0152
 *         polis: 1234 0000 5678 0000
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       required:
 *         - idPatient
 *         - surname
 *         - name
 *         - fullname
 *         - gender
 *         - phone
 *         - address
 *         - document [Document] 
 *       properties:
 *         idPatient:
 *           type: int
 *           description: Ид пациента
 *         surname:
 *           type: string
 *           description: фамилия
 *         name:
 *           type: string
 *           description: имя
 *         fullname:
 *           type: string
 *           description: отчество
 *         gender:
 *           type: string
 *           description: пол
 *           enum:
 *              0: MAN
 *              1: WOMAN
 *         phone:
 *           type: string
 *           description: телефон
 *         address:
 *           type: string
 *           description: адрес
 *         Document:
 *           type: object
 *           description: Документ
 *           required:
 *            - idDocument
 *            - typeDocument
 *            - seria
 *            - numar
 *            - snils
 *            - polis
 *       example:
 *         surname: Морозов
 *         name: Виктор
 *         fullname: Петрович
 *         gender: 'MAN'
 *         phone: '+78998956184'
 *         address: Мск, Проспект Тихорецкого д.5
 */

/**
 * @swagger
 *   tags:
 *   name: Patients
 *   description: Документ
 * /patients:
 *   get:
 *     summary: Получение списка пациентов
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: Успешно
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Patient'
 *       400:
 *        description: Плохой запрос
 *        content:  
 *          application/json:
 *            schema:
 *              type: string
 *              example:
 *                code: 400
 *                мessage: Плохой запрос
 *       500:
 *        description: Ошибка сервера 
 *        content: 
 *          application/json:
 *            schema:
 *              type: string
 *              example:
 *                code: 500
 *                мessage: Ошибка сервера
 * /patients/{id}:
 *   get:
 *     summary: Получение пациента по ИД
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: Ид пациента
 *     responses:
 *       200:
 *         description: Успешно
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               required:
 *                - id
 *                - surname
 *                - name
 *                - fullname
 *               items:
 *                $ref: '#/components/schemas/Patient'
 *       400:
 *        description: Плохой запрос
 *        content:  
 *          application/json:
 *            schema:
 *              type: string
 *              example:
 *                code: 400
 *                мessage: Плохой запрос
 *       500:
 *        description: Ошибка сервера 
 *        content: 
 *          application/json:
 *            schema:
 *              type: string
 *              example:
 *                code: 500
 *                мessage: Ошибка сервера
 * /patients/add/{id}:
 *   post:
 *     summary: Добавить пациента
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
  *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: Ид документа
 *     responses:
 *       200:
 *         description: Успешно
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Patient'
 *       400:
 *        description: Плохой запрос
 *        content:  
 *          application/json:
 *            schema:
 *              type: string
 *              example:
 *                code: 400
 *                мessage: Плохой запрос
 *       500:
 *        description: Ошибка сервера 
 *        content: 
 *          application/json:
 *            schema:
 *              type: string
 *              example:
 *                code: 500
 *                мessage: Ошибка сервера
 */