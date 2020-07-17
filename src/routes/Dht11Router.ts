import { Router } from 'express';
import { Dht11Component } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/dhts
 *
 * @swagger
 * /v1/dhts:
 *   get:
 *     description: Get all stored dhts in Database
 *     tags: ["dhts"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of dhts
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Dht11Schema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', Dht11Component.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/dhts
 *
 * @swagger
 * /v1/dhts:
 *   post:
 *      description: Create new Dht
 *      tags: ["dhts"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Dht11Schema'
 *            example:
 *              name: userName
 *              email: test.user@mail.com
 *      responses:
 *        201:
 *          description: return created dhts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/Dht11Schema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', Dht11Component.create);

/**
 * GET method route
 * @example http://localhost:PORT/v1/dhts/:id
 *
 * @swagger
 * /v1/dhts/{id}:
 *  get:
 *    description: Get dht by dhtId
 *    tags: ["dhts"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique dhtId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return dht by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/Dht11Schema'
 */
router.get('/:id', Dht11Component.findOne);

/**
 * @export {express.Router}
 */
export default router;
