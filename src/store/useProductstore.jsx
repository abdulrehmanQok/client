import { create } from "zustand";
import axiosins from "../lib/axios";

export const useProductstore = create((set) => ({
    products: [],
    loading: false,
    setProduct: (products) => set({ products }),
    createProduct: async (productData) => {
        set({ loading: true });
        try {
            const res = await axiosins.post("/products", productData);
            set((state) => ({
                products: [...state.products, res.data],
                loading: false,
            }));
        } catch (error) {
            console.error("Error creating product:", error);
            set({ loading: false });
        }
    },
    deleteProduct: async (productId)=>{
        set({ loading: true });
        try {
            await axiosins.delete(`/products/${productId}`);
            set((productstate) => ({
                products: productstate.products.filter((product) => product._id!== productId),
                loading: false,
            }));
        } catch (error) {
            console.error("Error deleting product:", error);
            set({ loading: false });
        }
    },
    updateProduct: async (productId, updatedProductData) =>{
        set({ loading: true });
        try {
            const res = await axiosins.put(`/products/${productId}`, updatedProductData);
            set((productstate) => ({
                products: productstate.products.map((product) => product._id === productId? res.data : product),
                loading: false,
            }));
        } catch (error) {
            console.error("Error updating product:", error);
            set({ loading: false });
        }
    },
    getallProduct: async ()=>{
        set({ loading: true });
        try {
            const res = await axiosins.get("/products");
            set({ products: res.data, loading: false });
        } catch (error) {
            console.error("Error fetching products:", error);
            set({ loading: false });
        }
    },
    getProductById: async (productId) => {
        set({ loading: true });
        try {
            const res = await axiosins.get(`/products/${productId}`);
            set({ product: res.data, loading: false });
        } catch (error) {
            console.error("Error fetching product:", error);
            set({ loading: false });
        }
    },
    fetchProductbyCategory: async (category) => {
        set({ loading: true });
        try {
            const res = await axiosins.get(`/products/category/${category}`);
            set({ products: res.data, loading: false });
        } catch (error) {
            console.error("Error fetching products by category:", error);
            set({ loading: false });
        }

    },
    togglefeatureProduct:async(productId)=>{
        
    }
}));


