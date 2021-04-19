import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api/index.mjs";
import config from '../woocommerce-api.config';

class WoocommerceApi {
    constructor() {
        this.apiWrapper = new WooCommerceRestApi({
            url: config.url,
            consumerKey: config.consumerKey,
            consumerSecret: config.consumerSecrete,
            wpAPI: true,
            version: 'wc/v1',
            verifySsl: false,
        });
    }

    getAllProducts() {
        return this.apiWrapper.get("products");
    }

    getProduct(id) {
        return this.apiWrapper.get(`products/${id}`);
    }

    getProductsByCategory(id) {
        return this.apiWrapper.get(`products?category=${id}`);
    }
    
    getCategories() {
        return this.apiWrapper.get("products/categories");
    }


}

export default WoocommerceApi;