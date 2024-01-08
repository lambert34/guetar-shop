class Shopping {

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                    <td class="shopping-element__name">💲 ${name}</td>
                    <td class="shopping-element__price"> ${price.toLocaleString()} RUB</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
        <div class="shopping-container">
            <table>
                ${htmlCatalog}
                <tr>
                <td class="shopping-element__name">💥Сумма:</td>
                <td class="shopping-element__price"> ${sumCatalog.toLocaleString()} RUB</td>
                </tr>
            </table>
        </div>
        
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();