import * as Joi from 'joi';
import Validation from '../validation';
import { IDht11Model } from './model';

/**
 * @export
 * @class Dht11Validation
 * @extends Validation
 */
class Dht11Validation extends Validation {
    /**
     * Creates an instance of Dht11Validation.
     * @memberof UserValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IDht11Model} params
     * @returns {Joi.ValidationResult<IDht11Model >}
     * @memberof Dht11Validation
     */
    createDht(
        params: IDht11Model
    ): Joi.ValidationResult <IDht11Model> {
        const schema: Joi.Schema = Joi.object().keys({
            temperature: Joi.string().required(),
            humidity: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof Dht11Validation
     */
    getDht(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new Dht11Validation();