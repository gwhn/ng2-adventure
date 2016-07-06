export class ProductModel {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public departments: string[],
        public price: number) {

    }
}
