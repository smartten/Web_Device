import "./style.scss";
import React, { memo, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown, Menu, Drawer, Button} from "antd";
import {
  BsFillPhoneFill,
  BsFillEnvelopeFill,
  BsPersonFill,
  BsList,
  BsRepeat,
  BsSuitHeart,
  BsCart3,
} from "react-icons/bs";
import { Input } from "antd";
import "antd/dist/reset.css";
const { Search } = Input;
const { SubMenu } = Menu;

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSearch = (value) => console.log(value);
  const drawerMenu = (
    <Menu
      mode="inline"
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}>
      <SubMenu key="sub1" title="Power Tools">
        <SubMenu key="sub1-1" title="240v Power Tools">
          <Menu.Item key="1-1-1">
            <a href="">Angle Grinders</a>
          </Menu.Item>
          <Menu.Item key="1-1-2">
            <a href="">Hammer Drills</a>
          </Menu.Item>
          <Menu.Item key="1-1-3">
            <a href="">Multi Tools</a>
          </Menu.Item>
          <Menu.Item key="1-1-4">
            <a href="">Paddle Mixers</a>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub1-2" title="Cordless Power Tools">
          <Menu.Item key="1-2-1">
            <a href="">Circular Saws</a>
          </Menu.Item>
          <Menu.Item key="1-2-2">
            <a href="">Drill Drivers</a>
          </Menu.Item>
          <Menu.Item key="1-2-3">
            <a href="">Impact Drivers</a>
          </Menu.Item>
          <Menu.Item key="1-2-4">
            <a href="">Power Tool Kits</a>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub1-3" title="Power Tool Accessories">
          <Menu.Item key="1-3-1">
            <a href="">Batteries</a>
          </Menu.Item>
          <Menu.Item key="1-3-2">
            <a href="">Cable Reels</a>
          </Menu.Item>
          <Menu.Item key="1-3-3">
            <a href="">Chargers</a>
          </Menu.Item>
          <Menu.Item key="1-3-4">
            <a href="">Holesaws</a>
          </Menu.Item>
          <Menu.Item key="1-3-5">
            <a href="">SDS-Plus Drill</a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="1-4">
          <a href="">Plunge Saws</a>
        </Menu.Item>
        <Menu.Item key="1-5">
          <a href="">Reciprocating Saws</a>
        </Menu.Item>
        <Menu.Item key="1-6">
          <a href="">SDS-MAX Demolition</a>
        </Menu.Item>
        <Menu.Item key="1-7">
          <a href="">Straight Grinders</a>
        </Menu.Item>
        <Menu.Item key="1-8">
          <a href="">Table Saws</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title="Hand Tools">
        <Menu.Item key="2-1">
          <a href="">Hammers</a>
        </Menu.Item>
        <Menu.Item key="2-2">
          <a href="">Hand Saws</a>
        </Menu.Item>
        <Menu.Item key="2-3">
          <a href="">Measuring and Inspection</a>
        </Menu.Item>
        <Menu.Item key="2-4">
          <a href="">Pliers & Cutters</a>
        </Menu.Item>
        <Menu.Item key="2-5">
          <a href="">Screwdrivers</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" title="Safety Workwear">
        <Menu.Item key="3-1">
          <a href="">Automotive</a>
        </Menu.Item>
        <Menu.Item key="3-2">
          <a href="">Contractors Equipment</a>
        </Menu.Item>
        <Menu.Item key="3-3">
          <a href="">Ladders & Platforms</a>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="4">
        <a href="/addresses">Abrasives</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="/account-details">Air Tools</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="/compare">Blades</a>
      </Menu.Item>
      <Menu.Item key="7">
        <a href="/wishlist">Cordless Kits</a>
      </Menu.Item>
      <Menu.Item key="8">
        <a href="/logout">Cutting Tools</a>
      </Menu.Item>
      <Menu.Item key="9">
        <a href="/logout">Nailers</a>
      </Menu.Item>
      <Menu.Item key="10">
        <a href="/logout">Pressure Washers</a>
      </Menu.Item>
      <Menu.Item key="11">
        <a href="/logout">Safety Equipment</a>
      </Menu.Item>
      <Menu.Item key="12">
        <a href="/logout">Stape Guns</a>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/profile">Dashboard</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/settings">Orders</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/logout">Downloads</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/logout">Addresses</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/logout">Account details</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/logout">Compare</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/logout">Whislist</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/logout">Logout</a>
      </Menu.Item>
    </Menu>
  );

  const blogMenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/blog/news">Blog Left Sidebar</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/blog/tutorials">Blog Right Sidebar</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/blog/reviews">Blog Without Sidebar</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              Biggest Offer On - WaterProof, DSLR Camera Lenses & Earphones
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <BsFillPhoneFill /> Call Us : (+01) 589 559 555
                </li>
                <li>
                  <BsFillEnvelopeFill /> example@gmail.com
                </li>
                <li>
                  <Dropdown overlay={menu} trigger={["hover"]}>
                    <span style={{ cursor: "pointer" }}>
                      <BsPersonFill /> <span> My account</span>
                    </span>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <a href="/Home">
            <div className="header__logo">
              <img
                src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/logo.svg"
                alt="Logo"
                style={{ height: "30px", width: "auto" }}
              />
            </div>
            </a>
          </div>
          <div className="col-xl-1">
            <Button onClick={showDrawer} style={{ marginLeft: "10px" }}>
              <BsList />
            </Button>
            <Drawer
              title="Shop by Category"
              placement="left"
              closable={true}
              onClose={onClose}
              visible={visible}>
              {drawerMenu}
            </Drawer>
          </div>
          <div className="col-xl-5">
            <Search
              className="custom-search"
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>
          <div className="col-xl-3 header__top_right">
            <ul>
              <li className="header__icon">
                <BsRepeat />
                <span className="notification-badge">5</span>
              </li>
              <li className="header__icon">
                <BsSuitHeart />
                <span className="notification-badge">3</span>
              </li>
              <li className="header__icon">
                <BsCart3 />
                <span className="notification-badge">1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="box_tittle">
        <div className="container_tittle">
          <div className="row">
            <div className="col-xl-3 header__top_left">
              <Dropdown
                overlay={drawerMenu}
                trigger={["click"]}
                placement="bottomLeft">
                <Button style={{ marginLeft: "10px" }}>
                  <BsList />
                  <span style={{ marginLeft: "8px" }}>SHOP BY CATEGORY </span>
                </Button>
              </Dropdown>
            </div>
            <div className="col-xl-6 header__top_center">
              <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li>
                  <Dropdown overlay={blogMenu} trigger={["hover"]}>
                    <span style={{ cursor: "pointer" }}>Blog</span>
                  </Dropdown>
                </li>
                <li><a href="/About-us">About Us</a></li>
                <li><a href="/Contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-xl-3 header__top_right">
              <Button className="btn_order" style={{ marginLeft: "10px" }}>
                <span style={{ marginLeft: "8px" }}>FREE ON ORDER $50+ </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
