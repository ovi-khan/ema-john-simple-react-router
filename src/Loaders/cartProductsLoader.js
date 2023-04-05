import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCard = getShoppingCart()
    const savedCard = [];
    console.log(storedCard)

    for(const id in storedCard) {
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct) {
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            savedCard.push(addedProduct)
        }
    }
    console.log(products)
    return savedCard
}
export default cartProductLoader