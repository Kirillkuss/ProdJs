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
 *   tags:
 *   name: Documents
 *   description: Документ
 * /documents:
 *   get:
 *     summary: Получение списка документов
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: Успешно
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Document'
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
 * /documents/{id}:
 *   get:
 *     summary: Получение документа по ИД
 *     tags: [Documents]
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
 *               required:
 *                - id
 *                - surname
 *                - name
 *                - fullname
 *               items:
 *                $ref: '#/components/schemas/Document'
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
 * /documents/add:
 *   post:
 *     summary: Добавить документ
 *     tags: [Documents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Document'
 *     responses:
 *       200:
 *         description: Успешно
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Document'
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