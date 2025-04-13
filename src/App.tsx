// App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout "; // new
import Login from "./module/auth/pages/Login";
import Register from "./module/auth/pages/Registration";
import Home from "./module/home/pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
