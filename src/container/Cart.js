import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListItem from '../components/ProductListItem';
import { modifyItem, removeItem } from '../redux/reducer/cart';

export default function Cart() {
  const list = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };

  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListItem
              key={item.id}
              {...item}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <div className='mt-3' style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
            <strong>Total Price: {`Rs ${total}`}</strong>
          </div>
        </>
      ) : (
        <div className='m-2 text-center' style={{ color: '#777' }}>
          <h3>No items in the cart</h3>
        </div>
      )}
    </>
  );
}