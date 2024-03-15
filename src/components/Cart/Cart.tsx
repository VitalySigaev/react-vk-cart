import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from '../CartItem/CartItem';
import { Typography } from '@mui/material';
import { FC } from 'react';



const Cart: FC = () => {
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    return (
        <Grid2 container spacing={4} justifyContent="center" alignItems="center" >
            <Grid2 xs={9} >
                <CartItem />
            </Grid2>
            <Grid2 xs={3} sx={{ margin: '0 auto' }} >
                <Typography variant="h3" >
                    Итого: {totalPrice} руб
                </Typography>
            </Grid2>
        </Grid2>
    )
}
export default Cart;