import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PLayout from "./PLayout";
import Courses from "./Courses";
import ContactUs from "./ContactUs";
import Login from "./Login";
import LoginAdmin from "./LoginAdmin";
import NotFoundPage from "../../component/NotFoundPage";
import Paiement from "./paiement";

export default function PublicRoute() {
  return (
    <Routes>
      <Route element={<PLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="home" element={<HomePage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="adminLogin" element={<LoginAdmin/>}/>
        <Route path="paiement" element={<Paiement/>}/>
      </Route>
    </Routes>
  );
}
