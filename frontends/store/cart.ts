import type { Product } from '~/types/product'
export const useCartStore = defineStore('cartStore', () => {
    const cart = useCookie<Product[]>("cart", { default: () => [] });

    // total products in the cart
    const totalCartProducts = computed(() => {
        return cart.value.length;
    });

    const productQuantity = computed(() => (book_id: number) => {
        const item = cart.value.find((item) => item.book_id === book_id);
        return item?.qty
    });

    // the total price of all the products in the cart
    const totalProductsPrice = computed(() => {
        //@ts-ignore
        return cart.value.reduce((val, product) => val + product.price * product?.quantity, 0).toFixed(2)
    });

    const addProductToCart = (product: Product) => {
        const item = cart.value.find((item) => item.book_id === product.book_id);
        if (item) {
            if (item.qty) {
                return item.qty++
            }
        } else {
            cart.value.push({ ...product , qty: 1 })
        }
    };

    const removeProductFromCart = (book_id: number) => {
        // check if the product exists in the cart
        const item = cart.value.find((item) => item.book_id === book_id);

        if (item) {
            // if the product exists in the cart and the quantity is greater than one, we decrease the quantity
            if (item.qty && item.qty > 1) {
                return item.qty--
            } else {
                // if the quantity is less than one, we remove the product from the cart
                cart.value = cart.value.filter((item) => item.book_id !== book_id)
            }
        }
    };
    const removeAll = () => {
        cart.value = []
    }

    return {
        cart,
        totalCartProducts,
        productQuantity,
        totalProductsPrice,
        addProductToCart,
        removeProductFromCart,
        removeAll
    }
})