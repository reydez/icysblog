import { useEffect, useState } from "react";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import { auth, db, redirectResult } from "./service/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  /*const [posts, setPosts] = useState(null);
  const postsRef = collection(db, "posts");

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getDocs(postsRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchPosts();
  }, []);*/

  useEffect(() => {
    redirectResult();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route path="/post/:id" element={<h1>post details</h1>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
