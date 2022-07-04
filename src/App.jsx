import { useEffect, useState } from "react";
import NavbarComponent from "./components/Navbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./components/Footer";
import { db } from "./service/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState(null);
  const postsRef = collection(db, "posts");

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getDocs(postsRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <>
      <NavbarComponent />
      <Container
        className="m-0 p-0"
        style={{
          maxWidth: "100%",
          minHeight: "100%",
          overflow: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Row className="m-0" style={{ width: "100%" }}>
          <Col
            md={6}
            lg={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            {new Array(10).fill("item").map((item, idx) => (
              <div
                key={idx}
                style={{
                  width: "100%",
                  height: "300px",
                  background: "red",
                  margin: "10px",
                  borderRadius: "20px",
                  padding: ".5em",
                  boxShadow: "0px .8rem 1rem rgba(50, 50, 50, 0.45)",
                }}
              >{`${item} - ${idx + 1}`}</div>
            ))}
          </Col>
          <Col
            className="d-none d-md-block"
            md={6}
            lg={5}
            style={{
              flex: 0.5,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "50%",
                background: "yellow",
                margin: "10px 0",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
