/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       required:
 *         - id
 *         - surname
 *         - name
 *         - fullname
 *       properties:
 *         id:
 *           type: int
 *           description: Ид доктора
 *         surname:
 *           type: string
 *           description: Фамилия
 *         name:
 *           type: string
 *           description: Имя
 *         fullname:
 *           type: string
 *           description: Отчество
 *       example:
 *         surname: Barysevich
 *         name: Kirill
 *         fullname: Alexndrovich
 */

/**
 * @swagger
 *   tags:
 *   name: Doctors
 *   description: Доктор
 * /doctors:
 *   get:
 *     summary: Получение списка докторов
 *     tags: [Doctors]
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
 *                $ref: '#/components/schemas/Doctor'
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
 * /doctors/{id}:
 *   get:
 *     summary: Получение докторa по ИД
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: The doctor id
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
 *                $ref: '#/components/schemas/Doctor'
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
 * /doctors/add:
 *   post:
 *     summary: Добавить доктора
 *     tags: [Doctors]
 *     requestBody:
 *       required: true
 *       example:
 *         surname: Barysevich 34
 *         name: Kirill
 *         fullname: Alexndrovich
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Doctor'
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
 *                $ref: '#/components/schemas/Doctor'
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