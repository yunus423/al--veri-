import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import UseGetData from "../custom-hooks/useGetData";

const Orders = () => {
  const { data: products } = UseGetData("products");
  const { data: users } = UseGetData("users");

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className="order__box">
                <h5>Siparişler</h5>
                <span>${totalAmount}</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="products__box">
                <h5>Sepetdeki Ürün Sayısı</h5>
                <span>{totalQuantity}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Orders;
