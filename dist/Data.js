class DataManager {
    constructor() {
        this.products = []
        this.currentProduct = ''
    }

    async getProducts() {
        let products = await $.get('http://localhost:3000/products')
        for (let product of products) {
            product.img = `https://cdn.onecklace.com/products/${product.id}/product_${product.id}_1_730.jpeg`
            product.imgGold = `https://cdn.onecklace.com/products/${product.id}/gold_plated_product_${product.id}_1_730.jpeg`
        }
        this.products = products
        return this.products
    } 

    setCurrentProduct(id) {
        this.currentProduct = this.products.find(p => p.id === id)
        this.currentProduct.material = 'silver'
    }

    getCurrentProduct() {
        return this.currentProduct
    }

    changeMaterial(material) {
        this.currentProduct.material = material
    }

    async saveItem(name) {
        this.currentProduct.name = name
        await $.post('http://localhost:3000/product', this.currentProduct, function(res) {
            console.log(res)
        })
    }
}