const dataManager = new DataManager

const onLoad = async function () {
    let products = await dataManager.getProducts()

    $(".products").empty()
    $(".product-detail").hide()
    for (let product of products) {
        $(".products").append(` 
            <div class="card product medium col s6 m4 l3 hoverable" onClick=loadProduct(${product.id})>
                <div class="card-image card-image">
                    <img src=${product.img} alt="" class="responsive-img">
                </div>
                <div class="card-action">
                    <p class="name">${product.name}</p>
                    <p class="price right-align">$${product.price}</p>
                </div>
            </div>`)
    }
}

const loadProduct = function(id) {
    dataManager.setCurrentProduct(id)
    let product = dataManager.getCurrentProduct()

    $(".products").hide()
    $(".product-detail").show()
    $(".image-container").append(`<img src=${product.img} alt="" class="responsive-img">`)
    $(".form-container").append(`
        <h5>${product.name}</h5>
        <h7>$${product.price}</h7>
        <form action="" method="">
            <p>
                <label onclick=loadMaterial('silver')>
                    <input name="material" type="radio" class="amber accent-3 with-gap" checked />
                    <span>Silver</span>
                </label>
            </p>
            <p>
                <label onclick=loadMaterial('gold')>
                    <input name="material" type="radio" class="amber accent-3 with-gap" />
                    <span>Gold</span>
                </label>
            </p>
            <input type="text" placeholder="name" class="name" name="name">
            <button class="btn waves-effect waves-light submit" type="submit" name="action">Buy
                <i class="material-icons right">send</i>
            </button>
        </form>`)
}

const loadMaterial = function (material) {
    dataManager.changeMaterial(material)
    let product = dataManager.getCurrentProduct()
    let src = material === 'silver' ? product.img : product.imgGold
    $(".image-container").empty().append(`<img src=${src} alt="" class="responsive-img">`)
}

const returnToList = function () {
    $(".image-container").empty()
    $(".form-container").empty()
    $(".product-detail").hide()
    $(".products").show()
}

$(".back").on("click", function () {
    returnToList()
})

$(".form-container").on("click", ".submit", function (event) {
    event.preventDefault()
    let name = $("input[name='name']").val()
    dataManager.saveItem(name)
    returnToList()
})

onLoad()