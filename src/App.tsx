// App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout "; // new
import Login from "./module/auth/pages/Login";
import Register from "./module/auth/pages/Registration";
import Home from "./module/home/pages/Home";
import Activity from "./module/activity/pages/Activity";
import Promotion from "./module/promotion/pages/Promotion";
import Wallet from "./module/wallet/pages/Wallet";
import Account from "./module/account/pages/Account";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activity" element={<Activity />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="account" element={<Account />} />

      </Route>
    </Routes>
  );
}
