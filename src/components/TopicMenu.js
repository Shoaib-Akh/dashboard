import React from "react";
import { Menu } from "antd";
import CategoryActive from "../../src/asset/category.svg";
import "../components/SideBar/SideBar.scss"


const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
  const styledTopics = [];
  topics.forEach((topic, index) =>
    styledTopics.push(
      // <Menu.Item key={index} onClick={changeSelectedKey}>
      //   {topic}
      // </Menu.Item>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key='1' icon={<div> <img src={CategoryActive} height={20} width={20} />
        </div>}>
          {topic}
        </Menu.Item>
      </Menu>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
}
export default TopicMenu;
