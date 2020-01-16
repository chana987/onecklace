const dataManager = new DataManager

const onLoad = async function() {
    await dataManager.fetchProducts()
    let products = dataManager.getProducts()
    
    console.log(products)
    $('.products').empty()
    for (let product of products) {
        $('.products').append(`<div class="product">
        <img src=${product.img} alt="" class="image">
        <h3 class="name">${product.name}</h3>
        <p class="price">${product.price}</p>
    </div>`)
    }
}

onLoad()

$(".products").on("click", "product", function() {
    let name = this.closest(".product").find(".name")
})