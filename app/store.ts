import { productType } from "@/types/productType";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type productsStoreArgs = {
  products: productType[];
  isLoading: boolean;
  category: number;
  fetchProducts: () => void;
  setCategory: (newCategory: number) => void;
};

export const useProductsStore = create<productsStoreArgs>((set, get) => ({
  products: [],
  isLoading: true,
  category: 0,
  fetchProducts: async () => {
    const { category } = get();
    try {
      const response = await fetch(
        `https://e8f3cbfeeb52e31c.mokky.dev/products?category=${category}`
      );
      const products = await response.json();
      set({ products: products, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  setCategory: (newCategory: number) => set({ category: newCategory }),
}));

type productCartArgs = {
  cart: productType[];
  totalPrice: number;
  totalCount: number;
  addToCart: (product: productType) => void;
  removeProduct: (product: productType) => void;
  clearCart: () => void;
};

export const useProductsCart = create<productCartArgs>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        totalPrice: 0,
        totalCount: 0,
        addToCart: (product) => {
          set((state) => {
            const existingProductIndex = state.cart.findIndex(
              (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
              // Product already in cart, increase quantity
              state.cart[existingProductIndex].quantity += 1;

              return {
                cart: state.cart,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + product.price,
              };
            } else {
              // Product not in cart, add to cart
              return {
                cart: [...state.cart, { ...product, quantity: 1 }],
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + product.price,
              };
            }
          });
        },
        removeProduct: (product) => {
          set((state) => {
            const existingProductIndex = state.cart.findIndex(
              (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
              if (state.cart[existingProductIndex].quantity > 1) {
                // Decrease quantity if more than 1
                state.cart[existingProductIndex].quantity -= 1;
              } else {
                // Remove item from cart if quantity is 1
                state.cart.splice(existingProductIndex, 1);
              }

              return {
                cart: state.cart,
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - product.price,
              };
            }

            return state;
          });
        },
        clearCart: () => {
          set({ cart: [], totalPrice: 0, totalCount: 0 });
        },
      }),
      { name: "burger storage" }
    )
  )
);
