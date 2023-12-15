/**
 * @swagger
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       required:
 *         - code
 *         - massage
 *       properties:
 *         code:
 *           type: int
 *           description: 500
 *         message:
 *           type: string
 *           description: Ошибка сервера
 *       example:
 *         code: 500
 *         message: Ошибка сервера
 */