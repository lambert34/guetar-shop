function render() {

    const productsStore = localStorageUtil.getProducts();
    
    headerPage.render(productsStore.lenght);
    productsPage.render();
}

let CATALOG = [];

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })

    .catch(error => {
        console.log(error);
    });

//axios - библиотека для запросов через Internet Explorer, если надо
