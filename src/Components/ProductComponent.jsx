//external imports
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//internal imports
import style from "./card.module.css";

//code starts from here
const ProductDetails = () => {
  const products = useSelector((state) => state.allProducts.product);

  const renderList = products.map((product) => {
    let { id, title, category, image, price } = product;
    return (
      <div key={id}>
        <Card className={style.card}>
          <Card.Img variant="top" src={image} className={style.image} />
          <Card.Body>
            <h3>{category}</h3>
            <h4>Name: {title}</h4>
            <h4>Price:$ {price}</h4>
            <Link to={`/product/${id}`}>
              <Button variant="primary">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return <div className={style.cards}>{renderList}</div>;
};

export default ProductDetails;
