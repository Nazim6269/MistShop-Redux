import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";
import style from "./card.module.css";

const Cart = () => {
  const addedCart = useSelector((state) => state.cart);
  const cart = addedCart.cart;

  const addedList = cart.map((item) => {
    const { id, category, description, price, image, title } = item;
    return (
      <div key={id}>
        <Card className={style.card}>
          <Card.Img variant="top" src={image} className={style.image} />
          <Card.Body>
            <h3>{category}</h3>
            <h4>Name: {title}</h4>
            <h4>Price:$ {price}</h4>
            <p>{description}</p>
            <Button
              variant="primary"
              onClick={() => {
                removeFromCart(id);
              }}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return <>{addedList}</>;
};

export default Cart;
