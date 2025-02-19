import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: "https://shop.aavyamart.com/", // Your store URL
  consumerKey: "ck_5ff5befe5afa03bd12ddf1f4445129da3d9e8ab0", // Your consumer key
  consumerSecret: "cs_ed12e8d833a2f29cc84aacd1f6cbbaa6c7ef3a0a", // Your consumer secret
  version: "wc/v3", // WooCommerce API version
});

// Fetch products with pagination
export const getProducts = async (page, perPage) => {

  try {
    const response = await WooCommerce.get("products", {
      page,
      per_page: perPage,
    });
    const products = response.data;
    const totalItems = response.headers['x-wp-total'];
    const totalPages = response.headers['x-wp-totalpages'];

    return {
        products,
        totalItems: parseInt(totalItems, 10),
        totalPages: parseInt(totalPages, 10),
      };
  } catch (error) {
    throw error;
  }
};
