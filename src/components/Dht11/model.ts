import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';

/**
 * @export
 * @interface IDht11Model
 * @extends {Document}
 */
export interface IDht11Model extends Document {
    temperature: string;
    humidity: string;
}


/**
 * @swagger
 * components:
 *  schemas:
 *    Dht11Schema:
 *      required:
 *        - temperature
 *        - humidity
 *      properties:
 *        id:
 *          type: string
 *        temperature:
 *          type: string
 *        humidity:
 *          type: string
 *    Dht11:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Dht11Schema'
 */
const Dht11Schema : Schema = new Schema ( {
    temperature: String,
    humidity: String
}, {
    collection: 'dht11model',
    versionKey: false,
    timestamps: true
});

export default connections.db.model<IDht11Model>('Dht11Model', Dht11Schema);