import * as Joi from 'joi';
import Dht11Model, {IDht11Model} from './model';
import Dht11Validation from './validation';
import {IDht11Service} from './interface';
import {Types} from 'mongoose';

/**
 * @export
 * @implements {IDht11Service}
 */
const Dht11Service: IDht11Service = {
    /**
     * @returns {Promise < IDht11Model[] >}
     * @memberof Dht11Service
     */
    async findAll(): Promise<IDht11Model[]> {
        try {
            return await Dht11Model.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IDht11Model >}
     * @memberof Dht11Service
     */
    async findOne(id: string): Promise<IDht11Model> {
        try {
            const validate: Joi.ValidationResult<{
                id: string
            }> = Dht11Validation.getDht({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await Dht11Model.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IDht11Model} user
     * @returns {Promise < IDht11Model >}
     * @memberof Dht11Service
     */
    async insert(body: IDht11Model): Promise<IDht11Model> {
        try {
            const validate: Joi.ValidationResult<IDht11Model> = Dht11Validation.createDht(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const user: IDht11Model = await Dht11Model.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default Dht11Service;
