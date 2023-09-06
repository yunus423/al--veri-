import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/CommonSection"

import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../Styles/checkout.css"
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Çıkış">
      <CommonSection title="Siparişlerim" />

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Fatura bilgileri</h6>
              <Form className="biling__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="isminizi giriniz" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="mailinizi giriniz" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="telefon numaranızı giriniz" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="posta kodunu giriniz" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="ülke giriniz" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                Toplam miktar: <span>{totalQty} adet</span>
                </h6>
                <h6>
                Ara toplam: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
             kargo:
                    <br /> Ücretsiz Kargo
                  </span>
                  <span>$0</span>
                </h6>

                <h4>
                Toplam tutar: <span>${totalAmount}</span>
                </h4>
                <button className="buy_btn auth_btn w-100">
              sipariş ver
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;


