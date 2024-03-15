import { FC } from 'react';
import { Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantityChangerProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityChanger: FC<QuantityChangerProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid >
        <Button
          variant="contained"
          color="primary"
          onClick={onDecrease}
          disabled={quantity <= 1}
          startIcon={<RemoveIcon />}
        />
      </Grid>
      <Grid item>
        <span>{quantity}</span>
      </Grid>
      <Grid item >
        <Button
          variant="contained"
          color="primary"
          onClick={onIncrease}
          disabled={quantity >= 10}
          startIcon={<AddIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default QuantityChanger;
