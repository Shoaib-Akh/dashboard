// import React, { useState } from 'react';
// import { Layout } from 'antd';
// import HeaderComponent from './Component/layout/HeaderComponent';
// import SidebarComponent from './Component/layout/SidebarComponent';
// import "./App.css"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useRoutes,
// } from "react-router-dom";
// import DashBoard from './screen/dashBoard';

// const { Content } = Layout;

// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   const RoutesComponent = () => {
//     return (
//       <Routes>
//         <Route path="/" element={<DashBoard />} />
//       </Routes>
//     );
//   };

//   return (
//     <div style={{
//       display: "flex",
//       width: "100%",
//       overflow: "hidden",

//       backgroundColor: "#F1F4FA"
//     }}>
//       <SidebarComponent collapsed={collapsed} onCollapse={setCollapsed} />

//       <div style={{
//         width: "100%",
//         maxHeight: "calc(100vh )",
//         minWidth: collapsed ? "100%" : "calc(100% - 312px",
//         overflow: "scroll"
//       }}>
//         <HeaderComponent collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
//         <Content
//           style={{
//             margin: 24
//           }}
//         >

//           <Router>
//             <RoutesComponent />
//           </Router>
//         </Content>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./components/TopicMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";// Import necessary routing components

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard, { DashBoard } from './screen/dashBoard'; // Import the Dashboard component from the second code snippet

function App() {
  const topics = ["Dashboard"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const RoutesComponent = () => {
    return (
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    );
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">
          {/* {topics[contentIndex]} */}
          <Router>
            {<RoutesComponent />}
          </Router>
        </Layout.Content>
      </Layout>

    </div>
  );
}

export default App;

