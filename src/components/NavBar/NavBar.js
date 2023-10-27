import React, { useState } from "react";
import { Drawer, Button, Row, Col, DatePicker } from "antd";
import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./NavBar.scss";

import logo from "../../asset/logo.png";
import dummy from "../../asset/dummy.png";
import Logout from "../../asset/Logout.png";
import CategoryActive from "../../asset/category.svg";

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
      <div className="header">



        <div className="logo-div">
          <img src={logo} alt="logo" height={64} width={64} />
          <h2 style={{ marginBottom: 0, marginRight: 25 }}>Dashboard</h2>

        </div>







        <div xs={12} className='DatePicker'>

          <>
            <DatePicker style={{ marginRight: 20 }} />
            <DatePicker style={{ marginRight: 20 }} />
          </>

        </div>


      </div>
    </nav>
  );
};

export default NavBar;
