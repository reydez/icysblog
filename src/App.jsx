import { useEffect, useState } from "react";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import { redirectResult } from "./service/firebase";
import { Route, Routes, useNavigate } from "react-router-dom";
import Content from "./components/Content";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CreateDiscussion from "./components/CreateDiscussion";
import DiscussionDetail from "./components/DiscussionDetail";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const getRedirectResult = async () => {
      await redirectResult();
    };
    getRedirectResult();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route path="/discussion/:id" element={<DiscussionDetail />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-discussion"
          element={
            <PrivateRoute>
              <CreateDiscussion />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
