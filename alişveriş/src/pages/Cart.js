import React from "react";
import "../Styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/CommonSection";
import { Col, Container, Row } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/CartSlice";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Cart = () => {

const cartİtems=useSelector((state)=>state.cart.cartİtems)
const totalAmount=useSelector((state)=>state.cart.totalAmount)

  return (
 <Helmet title='SEPET'>
  <CommonSection title='Alışveriş Sepeti' />
 <Container>
  <Row>
    <Col lg='9'>

{cartİtems.length === 0 ? (

   <h2 className="fs-4 text-center">Sepete ürün eklenmemiş</h2>
     
):(
<table className="table bordered">
        <thead>
         <tr>
          <th>Resim</th>
          <th>Ürün adı</th>
          <th>Fiyat</th>
          <th>Adet</th>
          <th>Sil</th>
          
          
          </tr> 
        </thead>
        <tbody>
          {
               cartİtems.map((item,index)=>(
              
             <Tr item={item} key={index}></Tr>
               ))

          }
    
        </tbody>

      </table>
)
}
      
      
    </Col>
    <Col lg='3'>
      <div>
      <span className="fs-4 fw-bold">${totalAmount}</span>
        <h6 className="d-flex align-item-center justify-content-between">Ara toplam</h6>
  
        <p className="fs-6 mt-2" >Vergiler ve nakliye,çıkış'ta hesaplanacaktır</p>
       
        <button className="buy__btn w-100 "><Link to='/checkout'>Çıkış</Link></button>
        <button className="buy__btn w-100 mt-3"><Link to='/shop'>Alışverişe devam</Link></button>
      </div>
    </Col>
  </Row>
 </Container>
 
 </Helmet>

  )
};

const Tr=({item})=>{
  const dispatch=useDispatch();
  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id));
  };
  return(
  <tr >
                <td><img src={item.imgUrl} alt="" ></img></td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><motion.i whileTap={{scale:1.2}} class='ri-delete-bin-line' onClick={deleteProduct}></motion.i></td>
               </tr>
  )
}

export default Cart;
