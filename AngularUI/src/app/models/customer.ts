export class Customer {
    constructor(public id: number = null, public name: string = '', public address: string = '',
        public phone: number = null, public isDeleted: boolean = false) {
    }
}