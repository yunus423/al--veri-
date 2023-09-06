import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "../Styles/login.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

import { storage } from "../firebase.config";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storegeRef = ref(storage, `ìmages/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storegeRef, file);

      uploadTask.on(
             "state_changed",

        (snapshot)=>{


        },
        (error) => {
          setLoading(false);
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //upsate user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email:email,
              photoURL: downloadURL,
            })
            .then(()=>{
              console.log("kullanıcılar başarıyla oluşturuldu");
            })
            .catch(()=>{
              console.log("bir hata oldu")
            })
          });
        }
      );

      console.log(user);
      setLoading(false);
      toast.success("hesap oluşturuldu");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("bir şeyler yanlış gitti");
    }
  };

  const signWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Helmet title="Üye ol">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">ÜYE OL</h3>

                <Form className="auth__form" onSubmit={signup}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Kullanıcı adı giriniz"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Maili giriniz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="şifreyi giriniz"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </FormGroup>

                  <Container>
                    <Row>
                      <button type="submit" className="buy__btn auth__btn">
                        Üyelik oluştur
                      </button>
                    </Row>
                    <Row>
                      <button
                        onClick={signWithGoogle}
                        style={{
                          fontSize: "14px",
                          marginTop: "20px",
                          border: "none",
                          backgroundColor: "red",
                          color: "white",
                          fontWeight: "600",
                        }}
                      >
                        google ile giriş yap
                      </button>
                    </Row>
                  </Container>
                  <p className="p">
                    Zaten hesabınız var mı? <Link to="/login">Giriş</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;






