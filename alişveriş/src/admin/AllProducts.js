import React from "react";
import { Col, Container, Row } from "reactstrap";
import UseGetData from "../custom-hooks/useGetData";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = UseGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  // console.log(productsData);
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <table className="table">
              <thead>
                <tr>
                  <th>Resimler</th>
                  <th>ürün ismi</th>
                  <th>Kategori</th>
                  <th>Fiyat</th>
                  <th>Sil</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h4 className="py-5 text-center fw-bold">Loading...</h4>
                ) : (
                  productsData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td key={item.id}>
                          <img src={item.imgUrl} alt="" />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.category}</td>
                        <td>${item.price}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteProduct(item.id);
                            }}
                          >
                           Sil
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
