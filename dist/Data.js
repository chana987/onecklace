class DataManager {
    constructor() {
        this.products = []
    }

    async fetchProducts() {
        let products = await $.get('http://127.0.0.1:3000/products')
        for (let product of products[0]) {
            product.img = `https://cdn.onecklace.com/products/${product.id}/product_${product.id}_1_730.jpeg`
        }
        this.products = products[0]
    } 

    getProducts() {
        return this.products
    }

    saveItem(item) {
        
    }
}