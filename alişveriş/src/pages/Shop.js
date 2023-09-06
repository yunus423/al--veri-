import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "../Styles/shop.css"
import products from "../assets/data/products";
import ProductList from "../components/Ul/ProductList";

const Shop = () => {

const [productsData, setProductsData]=useState(products);

const Sorting = (e) => {
  const sortBy = e.target.value;

  if (sortBy === "ascending") {
    setProductsData((prevProducts) =>
      [...prevProducts].sort((a, b) => parseInt(a.price) - parseInt(b.price))
    );
  }

  if (sortBy === "descending") {
    setProductsData((prevProducts) =>
      [...prevProducts].sort((a, b) => parseInt(b.price) - parseInt(a.price))
    );
  }
};

const handleSearch=(e)=>{

  const searchTerm=e.target.value;

  const searchedProducts=products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

setProductsData(searchedProducts)

}

const handleFilter=(e)=>{

  const filterValue=e.target.value;
   
   


  if(filterValue==="kanepe"){


    const filteredProducts=products.filter((item)=>item.category==="kanepe");

    setProductsData(filteredProducts)

}
  if(filterValue==="mobile"){

    const filteredProducts=products.filter((item)=>item.category==="mobile");

    setProductsData(filteredProducts);
  }
  if(filterValue==="sandalye"){

    const filteredProducts=products.filter((item)=>item.category==="sandalye");

    setProductsData(filteredProducts);
  }
  if(filterValue==="saat"){

    const filteredProducts=products.filter((item)=>item.category==="saat");

    setProductsData(filteredProducts);
  }
  if(filterValue==="kablosuz"){

    const filteredProducts=products.filter((item)=>item.category==="kablosuz");

    setProductsData(filteredProducts);
  }
 };


  return (
  <Helmet title='Shop'>
    <CommonSection title='Ürünler'/>
    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
         <select onChange={handleFilter} >
         <option >kategoriye göre filtrele</option>
          <option value="kanepe">Kanepe</option>
          <option value="mobile">mobil cihazlar</option>
          <option value="sandalye">sandalye</option>
          <option value="saat">saat</option>
          <option value="kablosuz">kablosuz</option>

         </select>
         </div>
          </Col>

          <Col lg='3' md='6' className="text-end">
          <div className="filter__widget">
         <select onChange={Sorting}>
         <option >Göre sırala </option>
          <option value="ascending">artan</option>
          <option value="descending">azalan</option>
         </select>
         </div>
          </Col>

          <Col lg='6' md='12'>
            <div className="search__box">
              <input type="text" placeholder="Ara....." onChange={handleSearch}></input>
        
            <span>
              <i class='ri-search-line'></i>
            </span>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          {productsData.length===0 ? (

            <h1 className="text-center fs-4 " >Ürün Bulunamadı</h1>
             
           ) :(<ProductList data={productsData}/>)

          

          }
        </Row>
      </Container>
    </section>
  </Helmet>
)};
export default Shop;
