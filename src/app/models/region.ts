import { IRegion } from '../interface/iregion';
import * as _ from 'lodash';


export class Region implements IRegion{

    constructor(data : any){
     _.set(this,'data', data);
    }

    get code(): string{
        return _.get(this, 'data.code');
    }
    get name(): string{
        return _.get(this, 'data.name');
    }
}