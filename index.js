function render() {

    const productsStore = localStorageUtil.getProducts();
    
    headerPage.render(productsStore.lenght);
    productsPage.render();
}

render();

let CATALOG = [];