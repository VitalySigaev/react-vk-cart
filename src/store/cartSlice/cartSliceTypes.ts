
export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    rating: {
        count: number
    };
    quantity: number;
}

export interface CartState {
    products: Product[];
    totalPrice: number;
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: null | string | undefined;
}

export interface UpdateProductQuantityArgs {
    productId: number;
    quantity: number;
}

