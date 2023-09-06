import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../Styles/dashboard.css";
import UseGetData from "../custom-hooks/useGetData";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { data: products } = UseGetData("products");
  const { data: users } = UseGetData("users");

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className="revenue__box">
                <h5>Toplam Satış</h5>
                <span>${totalAmount}</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="order__box">
                <h5>Siparişler</h5>
                <span>${totalAmount}</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="products__box">
                <h5>Tüm ürünler</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="users__box">
                <h5>Tüm Kullanıcılar</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
