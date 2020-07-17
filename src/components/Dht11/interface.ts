import { IDht11Model } from './model';

/**
 * @export
 * @interface IDht11Service
 */
export interface IDht11Service {
    /**
     * @returns {Promise<IDht11Model[]>}
     * @memberof IDht11Service
     */
    findAll(): Promise<IDht11Model[]>;

    /**
     * @param {string} code
     * @returns {Promise<IDht11Model>}
     * @memberof IDht11Service
     */
    findOne(code: string): Promise<IDht11Model>;

    /**
     * @param {IDht11Model} IDht11Model
     * @returns {Promise<IDht11Model>}
     * @memberof IDht11Service
     */
    insert(IUserModel: IDht11Model): Promise<IDht11Model>;
}