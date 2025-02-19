import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const WooCommerce = new WooCommerceRestApi({
  url: 'https://shop.aavyamart.com/', // Your store URL
  consumerKey: 'ck_5ff5befe5afa03bd12ddf1f4445129da3d9e8ab0', // Your consumer key
  consumerSecret: 'cs_ed12e8d833a2f29cc84aacd1f6cbbaa6c7ef3a0a', // Your consumer secret
  version: 'wc/v3', // WooCommerce API version
});

// Fetch products with pagination
export const fetchProducts = async (page, perPage) => {
    console.log(page);
    console.log(perPage);
}