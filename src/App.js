import React from "react";
import { Layout } from "antd";
import TopicMenu from "./components/TopicMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from './screen/dashBoard'; // Import the Dashboard component
import Invoice from "./screen/dashBoard/Invoice";

function App() {
  const topics = ["Dashboard", "Invoice"];

  const Menu = (
    <TopicMenu topics={topics} />
  );

  return (
    <Router> {/* Wrap your entire app with the Router */}
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <NavBar menu={Menu} />
        <Layout>
          <SideBar menu={Menu} />
          <Layout.Content className="content">
            <Routes>
              <Route index path="Dashboard" element={<Dashboard />} />
              <Route path="Invoice" element={<Invoice />} />

            </Routes>
          </Layout.Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
