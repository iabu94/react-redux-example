import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions';

function ProductDetail() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
}

export default ProductDetail;
