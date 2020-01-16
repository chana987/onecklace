
$("#submit").on("click", function() {
    let item = {}
    item.name = this.closest("form").find("h2")
    item.price = this.closest("form").find("h3")
    item.birthstone = this.closest("form").find(".birthstone")
    item.name = this.closest("form").find(".name")
    dataManager.saveItem(item)
})
