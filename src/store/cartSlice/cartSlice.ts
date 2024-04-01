import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Product,UpdateProductQuantityArgs  } from "./cartSliceTypes";

export const fetchCartProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
    'cart/fetchCartProducts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=5');
            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            const products= data.map((product: Product) => ({
                ...product,
                quantity: 1,
                price: Math.round(product.price * 92)
            }));

            return products;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState: CartState = {
    products: [],
    totalPrice: 0,
    status: 'idle',
    error: null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateProductQuantity(state, action: PayloadAction<UpdateProductQuantityArgs>) {
            const { productId, quantity } = action.payload;
            const product = state.products.find(p => p.id === productId);
            if (product) {
                if (quantity >= 1 && quantity <= 10) {
                    product.quantity = quantity;
                    state.totalPrice = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
                }
            }
        },
        removeProduct(state, action: PayloadAction<number>) {
            const productId = action.payload;
            const removedProduct = state.products.find(product => product.id === productId);
            if (removedProduct) {
                state.products = state.products.filter(product => product.id !== productId);
                state.totalPrice -= removedProduct.price * removedProduct.quantity;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartProducts.pending, (state) => {
            state.status = 'pending';
            state.error = null;
        })
        builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.products = action.payload
            state.totalPrice = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        });
        builder.addCase(fetchCartProducts.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
});

export const { updateProductQuantity, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
