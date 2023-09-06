import React from "react";
import "./Footer.css"


import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year=new Date().getFullYear();
  return (

  <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className="mb-4" md='6'>
        <div className="logo">
             
              <div className="multimart">
                <h1 className="text-white">Alışveriş</h1>
              </div>
            </div>
            <p className="footer__text mt-4">Günümüzün en önemli sorunlarından bir tanesi değil mi, zamanın hızına yetişememek! Elbette, öyle! İnsanların çoğu ev-iş ya da ev-okul arasında mekik dokuyup duruyor. Pek çok kişi yoğunluktan dolayı başını kaşıyacak vakit bulamadığında dert yakınıyor. İşte tam da bu noktada online alışveriş, deyim yerindeyse imdadımıza koşuyor. Çünkü internetten alışverişin en büyük avantajlarından bir tanesi, bize fazlasıyla zaman kazandırması! Sonuçta online alışveriş yapmak için adım atmamıza bile gerek yok. 
                 </p>
        
        </Col>
        <Col lg='3' md='3'  className="mb-4">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">En İyi Kategoriler</h4>
         <ListGroup>

          <ListGroupItem className="ps-0 border-0" >
            <Link to="#">Cep telefonları</Link>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
            <Link to="#">modern kanepe</Link>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
            <Link to="#">Koltuk</Link>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
            <Link to="#">Akıllı saatler</Link>
          </ListGroupItem>

         </ListGroup>

          </div>

        </Col>
        <Col lg='2' md='3' className="mb-4">
        <div className="footer__quick-links">
            <h4 className="quick__links-title">kullanışlı bağlantılar</h4>
         <ListGroup>

          <ListGroupItem className="ps-0 border-0" >
            <Link to="/shop">Mağaza</Link>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
            <Link to="/card">Sepet</Link>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
            <Link to="login">Giriş</Link>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
            <Link to="#">Gizlilik Politikası</Link>
          </ListGroupItem>

         </ListGroup>

          </div>
        </Col>

        <Col lg='1' md='4' >
 
        <div className="footer__quick-links">
            <h4 className="quick__links-title">İletişim</h4>
         <ListGroup>

          <ListGroupItem className="ps-0 border-0" >
        <span><i class='ri-map-pin-line'></i></span>
        <p>47,Dargeçit,Mardin,Türkiye</p>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
          <span><i class='ri-phone-line'></i></span>
        <p>05457389200</p>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
          <span><i class='ri-mail-line'></i></span>
        <p>Yunusdogan202@gmail.com</p>
          </ListGroupItem>

       

         </ListGroup>

          </div>
      

        </Col>
        <Col lg='12'>
          <p className="footer__copyright">Alışveriş {year} yunus doğan tarafından
          geliştirilmiştir.tüm hakları saklıdır.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>

  )
}

export default Footer;
