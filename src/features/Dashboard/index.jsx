import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardSider from "./components/DashboardSider";
import AccountPage from "./pages/AccountPage";
import CalendarPage from "./pages/CalendarPage";
import ProfilePage from "./pages/ProfilePage";
import SettingPage from "./pages/SettingPage";
import UserPage from "./pages/UserPage";
import "./styles.css";

const Dashboard = () => {
  return (
    <Layout className="dashboard-container-layout">
      <DashboardSider />

      <Layout className="dashboard-site-layout">
        <Routes>
          <Route path="/" element={<CalendarPage />} end />
          <Route path="user" element={<UserPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
