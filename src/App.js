import React from "react";
import { Layout } from "antd";
import TopicMenu from "./components/TopicMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from './screen/dashBoard';
import Invoice from "./screen/Invoice";
import Schedule from "./screen/Schedule";
import TaskPreview from "./screen/TaskPreview";

function App() {
  const topics = ["Dashboard", "Invoice", "Schedule", "TaskPreview"];

  const Menu = (
    <TopicMenu topics={topics} />
  );
  return (
    <Router> {/* Wrap your entire app with the Router */}
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <NavBar />
        <Layout>
          <SideBar menu={Menu} />
          <Layout.Content className="content">
            <Routes>
              <Route index path="/Dashboard" element={<Dashboard />} />
              <Route path="Invoice" element={<Invoice />} />
              <Route path="Schedule" element={<Schedule />} />
              <Route path="TaskPreview" element={<TaskPreview />} />




            </Routes>
          </Layout.Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
