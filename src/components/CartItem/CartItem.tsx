import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchCartProducts, removeProduct } from '../../store/cartSlice/cartSlice';
import { Product } from '../../store/cartSlice/cartSliceTypes';
import DeleteIcon from '@mui/icons-material/Delete';
import QuantityChanger from '../QuantityChanger/QuantityChanger';
import { updateProductQuantity } from '../../store/cartSlice/cartSlice';
import cls from './CartItem.module.css'

const CartItem: FC = () => {
  const { status, error, products } = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);

  
  const handleRemove = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(updateProductQuantity({ productId, quantity }));
  };



  return (
    <Card>
      <CardContent>
        <Typography variant="h5" >
          Корзина товаров
        </Typography>
      </CardContent>
      {status === 'pending' && <CircularProgress color="primary" />}
      {error && <Alert severity="error">{error}</Alert>}
      <List>
        {products.map((prod: Product) => (
          <ListItem key={prod.id} className={cls.list}>
            <Box className={cls.product}>
              <Avatar src={prod.image} alt={prod.title} sx={{ width: 150, height: 150 }} />
              <Box>
                <ListItemText
                  primary={prod.title}
                  secondary={prod.description}
                />
                <ListItemText
                  primary={`${prod.rating.count} штук`}
                  secondary={`${prod.price} руб`}
                />
              </Box>
            </Box>
            <Box className={cls.buttons}>
              <QuantityChanger
                quantity={prod.quantity}
                onIncrease={() => handleQuantityChange(prod.id, prod.quantity + 1)}
                onDecrease={() => handleQuantityChange(prod.id, prod.quantity - 1)}
              />
              <Button size="small" onClick={() => handleRemove(prod.id)}>
                <DeleteIcon fontSize="small" />
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default CartItem;
