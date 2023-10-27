import React from "react";
import { Layout } from "antd";
import "./SideBar.scss"
import dummy from "../../asset/dummy.png";
import Logout from "../../asset/Logout.png";
const SideBar = ({ menu }) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
      <div style={{ position: 'absolute', bottom: 32 }}>
        <div style={{
          margin: 20, alignContent: "center", display: "flex", justifyContent: "center", textAlign: "center", gap: 10, alignItems: "center"
        }}>
          <div style={{ padding: 10, backgroundColor: "#F1F4FA", borderRadius: "12.676px", marginBottom: 10 }}>
            <img src={dummy} alt="Logo" height={20} width={20} />
          </div>
          {/* {!collapsed && ( */}
          <div style={{ marginTop: 10 }}>
            <span style={{ margin: 0 }}>Easin Arafat</span>
            <p className='freeAccount'>Free Account</p>
          </div>
          {/* )} */}
          <div>
            <img src={Logout} alt="Logo" height={20} width={20} style={{}} />
          </div>
        </div>
      </div>
    </Layout.Sider>
  );
};

export default SideBar;