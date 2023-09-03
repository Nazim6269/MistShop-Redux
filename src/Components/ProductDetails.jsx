//External imports
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//internal imports
import {
  addToCart,
  removeProduct,
  selectedProduct,
} from "../redux/actions/productActions";
import style from "./card.module.css";

//code starts from here
const ProductComponent = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct);
  const { image, title, id, price, category, description } = product;
  const data = useSelector((state) => state.cart);

  const fetchData = async () => {
    try {
      const res = await (
        await fetch(`https://fakestoreapi.com/products/${productId}`)
      ).json();

      dispatch(selectedProduct(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);

  return (
    <div>
      <Card className={style.card_details}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className={style.image}
        />
        <Card.Body>
          <h4>{title}</h4>
          <h3>Price: ${price}</h3>
          <h5>{category}</h5>
          <p>{description}</p>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductComponent;
