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
import Vip from "./module/account/pages/Vip";
import GameHistory from "./module/account/pages/GameHistory";
import Aboutus from "./module/account/pages/Aboutus";
import AccountFeedback from "./module/account/pages/AccountFeedback";
import AccountGifts from "./module/account/pages/AccountGifts";
import AccountNotification from "./module/account/pages/AccountNotification";
import AgreementConfidentiality from "./module/account/pages/AgreementConfidentiality";
import ChangePassword from "./module/account/pages/ChangePassword";
import DepositHistory from "./module/account/pages/DepositHistory";
import GameRules from "./module/account/pages/GameRules";
import GamesStats from "./module/account/pages/GamesStats";
import Language from "./module/account/pages/Language";
import SettingMail from "./module/account/pages/SettingMail";
import Settings from "./module/account/pages/Settings";
import TransactionHistory from "./module/account/pages/TransactionHistory";
import Withdraw from "./module/account/pages/Withdraw";
import WalletWithdrawHistory from "./module/wallet/pages/WalletWithdrawHistory";
import WalletWithdraw from "./module/wallet/pages/WalletWithdraw";
import WalletDepositHistory from "./module/wallet/pages/WalletDepositHistory";
import WalletDeposit from "./module/wallet/pages/WalletDeposit";
import PartnerReward from "./module/promotion/pages/PartnerReward";
import SubordinateData from "./module/promotion/pages/SubordinateData";
import { InvitationRules } from "./module/promotion/pages/InvitationRules";
import WalletBankDetails from "./module/wallet/pages/WalletBankDetails";
import WalletAddBank from "./module/wallet/pages/WalletAddBank";
import WalletUpdateBank from "./module/wallet/pages/WalletUpdateBank";
import MoneyWithdraw from "./module/wallet/pages/MoneyWithdraw";
import EditDetails from "./module/account/pages/EditDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activity" element={<Activity />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="partnerreward" element={<PartnerReward />} />
        <Route path="subordinatedata" element={<SubordinateData />} />
        <Route path="invitationrules" element={<InvitationRules />} />

        <Route path="wallet" element={<Wallet />} />
        <Route path="walletdeposit" element={<WalletDeposit />} />
        <Route path="walletdeposithistory" element={<WalletDepositHistory />} />
        <Route path="walletwithdraw" element={<WalletWithdraw />} />
        <Route
          path="walletwithdrawhistory"
          element={<WalletWithdrawHistory />}
        />
        <Route path="walletBankDetails" element={<WalletBankDetails />} />
        <Route path="walletAddBank" element={<WalletAddBank />} />
        <Route path="walletUpdateBank" element={<WalletUpdateBank />} />

        <Route path="account" element={<Account />} />
        <Route path="vip" element={<Vip />} />
        <Route path="gamehistory" element={<GameHistory />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="accountfeedback" element={<AccountFeedback />} />
        <Route path="accountgifts" element={<AccountGifts />} />
        <Route path="accountnotification" element={<AccountNotification />} />

        <Route
          path="agreementconfidentiality"
          element={<AgreementConfidentiality />}
        />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="deposithistory" element={<DepositHistory />} />
        <Route path="gamerules" element={<GameRules />} />
        <Route path="gameStats" element={<GamesStats />} />
        <Route path="language" element={<Language />} />
        <Route path="settingmail" element={<SettingMail />} />
        <Route path="settings" element={<Settings />} />
        <Route path="transactionhistory" element={<TransactionHistory />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="MoneyWithdraw" element={<MoneyWithdraw />} />
        <Route path="/editdetails" element={<EditDetails />} />
      </Route>
    </Routes>
  );
}
