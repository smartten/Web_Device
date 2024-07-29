import "./style.scss";
import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
import {
  BsTruck,
  BsShieldCheck,
  BsFillBoxFill,
  BsHeadset,
} from "react-icons/bs";
import "antd/dist/reset.css";

const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  const settingsAdd = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const newsAdd = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const imgAdd = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  const featureProducts = [
    {
      id: 1,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-15.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-15-700x700.jpg",
      name: "Valianto Air Orbital Palm Sander with Speed Regulation",
      price: "$310.00",
    },
    {
      id: 2,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-14.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-14.jpg",
      name: "DeWalt Oil-Lube Hand Carry Air Compressor",
      price: "$250.00 – $300.00",
    },
    {
      id: 3,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-8.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-8-700x700.jpg",
      name: "DeWALT DW616 2.2-Hp Fixed Base Woodworking Router",
      price: "$89.00",
    },
    {
      id: 4,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-11-700x700.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-11-700x700.jpg",
      name: "Black and Decker BDROUT127-B5 1600W Router",
      price: "$200.00",
    },
    {
      id: 5,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-6-700x700.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-6-700x700.jpg",
      name: "BLACK DECKER Max Lithium Cordless Circular Saw",
      price: "$120.00",
    },
    {
      id: 6,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-9.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-9-700x700.jpg",
      name: "Rapid PRO PB131 Pneumatic Nailer Tools Only",
      price: "$122.00",
    },
    {
      id: 7,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-17.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-17-700x700.jpg",
      name: "DeWalt DDVG512 Brushless XR Circular Saw Range",
      price: "$300.00",
    },
    {
      id: 8,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-7-700x700.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-7-700x700.jpg",
      name: "Generic Cordless Drill Driver 3/8-inch Electric Drill",
      price: "$122.00",
    },
  ];

  const newProducts = [
    {
      id: 1,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-15.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-15-700x700.jpg",
      name: "Valianto Air Orbital Palm Sander with Speed Regulation",
      price: "$310.00",
    },
    {
      id: 2,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-14.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-14.jpg",
      name: "DeWalt Oil-Lube Hand Carry Air Compressor",
      price: "$250.00 – $300.00",
    },
    {
      id: 3,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-8.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-8-700x700.jpg",
      name: "DeWALT DW616 2.2-Hp Fixed Base Woodworking Router",
      price: "$89.00",
    },
    {
      id: 4,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-13.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-13.jpg",
      name: "Paslode Impulse Framing Nailer IM900 MACH45TT34",
      price: "$130.00 – $190.00",
    },
    {
      id: 5,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-16-700x700.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-16.jpg",
      name: "BOSCH Brute Breaker Hammer BH2760VC 150-Volt",
      price: "$400.00 – $500.00",
    },
    {
      id: 6,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-12.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-12-700x700.jpg",
      name: "Porter Cable 40v Max Lithium Ion Impact Driver",
      price: "$180.00",
    },
    {
      id: 7,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-11.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-11.jpg",
      name: "Black and Decker BDROUT127-B5 1600W Router",
      price: "$200.00",
    },
    {
      id: 8,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-6.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-6.jpg",
      name: "BLACK DECKER Max Lithium Cordless Circular Saw",
      price: "$120.00",
    },
    {
      id: 9,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-9.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-9.jpg",
      name: "Rapid PRO PB131 Pneumatic Nailer Tools Only",
      price: "$122.00",
    },
    {
      id: 10,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-2.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-3-700x700.jpg",
      name: "Milwaukee Gauge Angled Finishing Nailer 18V Fuel 16",
      price: "$110.00",
    },
  ];

  const addProducts = [
    {
      id: 1,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-13.jpg",
      name: "Paslode Impulse Framing Nailer IM900 MACH45TT34",
      price: "$130.00 – $190.00",
      discount: "32%",
    },
    {
      id: 2,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-17.jpg",
      name: "DeWalt DDVG512 Brushless XR Circular Saw Range",
      price: "$300.00",
      discount: "25%",
    },
    {
      id: 3,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-16.jpg",
      name: "BOSCH Brute Breaker Hammer BH2760VC 150-Volt",
      price: "$400.00",
      discount: "20%",
    },
    {
      id: 4,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-14.jpg",
      name: "DeWalt Oil-Lube Hand Carry Air Compressor",
      price: "$250.00 – $300.00",
      discount: "17%",
    },
  ];

  const bestProducts = [
    {
      id: 1,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-4-700x700.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-4-700x700.jpg",
      name: "Dual Power Portable Hybrid Electric Ryobi Fan",
      price: "$99.00",
    },
    {
      id: 2,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-14.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-14.jpg",
      name: "DeWalt Oil-Lube Hand Carry Air Compressor",
      price: "$250.00 – $300.00",
    },
    {
      id: 3,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-15.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-15.jpg",
      name: "Valianto Air Orbital Palm Sander with Speed Regulation",
      price: "$310.00",
    },
    {
      id: 4,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-7.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-7.jpg",
      name: "Generic Cordless Drill Driver 3/8-inch Electric Drill",
      price: "$122.00",
    },
    {
      id: 5,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-8.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-8-700x700.jpg",
      name: "DeWALT DW616 2.2-Hp Fixed Base Woodworking Router",
      price: "$89.00",
    },
    {
      id: 6,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-13.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-13.jpg",
      name: "Paslode Impulse Framing Nailer IM900 MACH45TT34",
      price: "$130.00 – $190.00",
    },
    {
      id: 7,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-16.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-16.jpg",
      name: "BOSCH Brute Breaker Hammer BH2760VC 150-Volt",
      price: "$400.00 – $500.00",
    },
    {
      id: 8,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-12.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-12.jpg",
      name: "Porter Cable 40v Max Lithium Ion Impact Driver",
      price: "$180.00",
    },
    {
      id: 9,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-11.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-11.jpg",
      name: "Black and Decker BDROUT127-B5 1600W Router",
      price: "$200.00",
    },
    {
      id: 10,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-6.jpg",
      imgHover:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-6-700x700.jpg",
      name: "BLACK DECKER Max Lithium Cordless Circular Saw",
      price: "$120.00",
    },
  ];

  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/client_01.jpg",
      name: "Allie Grater",
      feedback: "Desginer",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.",
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/client_02.jpg",
      name: "John Doe",
      feedback: "Tools Expert",
    },
    {
      text: "There are many variations of passages of Lorem Ipsum availble, but the majority have suffered alteration in some form.",
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/client_03.jpg",
      name: "Rose Bush",
      feedback: "Engineer",
    },
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/client_04.jpg",
      name: "Percy Kewshun",
      feedback: "Architech",
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/client_05.jpg",
      name: "Fay Daway",
      feedback: "Technician",
    },
  ];

  const images = [
    "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/brand-01.png",
    "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/brand-02.png",
    "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/brand-03.png",
    "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/brand-04.png",
    "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/brand-05.png",
    "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/brand-06.png",
    "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/brand-07.png",
  ];

  const news = [
    {
      id: 1,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/01-2.jpg",
      name: "Nullam ullamcorper nisl quis ornare molestie saepe eveniet",
      date: "By Justin | 06 June, 2023",
    },
    {
      id: 2,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/02-2.jpg",
      name: "Morbi condimentum molestie Nam enim odio sodales",
      date: "By Justin | 02 June, 2023",
    },
    {
      id: 3,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/03-1.jpg",
      name: "Nemo enim ipsam voluptatem quia voluptas ssit aspernatur aut",
      date: "By Justin | 02 June, 2023",
    },
    {
      id: 4,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/04-2.jpg",
      name: "Urna pretium elit mauris cursus Curbitur at elit Vestibulum",
      date: "By Justin | 01 June, 2023",
    },
    {
      id: 5,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/05/05.jpg",
      name: "The Ultimate cursus vestibulum at interdum Vivamus",
      date: "By Justin | 12 May, 2023",
    },
    {
      id: 6,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/04/06.jpg",
      name: "Turpis at eleifend ps mi elit Aenean porta ac sed faucibus",
      date: "By Justin | 12 April, 2023",
    },
    {
      id: 7,
      img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/04/07.jpg",
      name: "Unleashing At risus pretium urna tortor metus fringilla",
      date: "By Justin | 12 April, 2023",
    },
  ];

  return (
    <>
      <div className="carousel">
        <div className="container">
          <div className="row h-100">
            <div className="col-xl-7 left-content">
              <Carousel dots={false} autoplay>
                <div className="carousel-item item-1">
                  <div className="left-content-inner">
                    <div className="text-content">
                      <p className="slogan">ALL THE PART YOU NEED</p>
                      <span className="tittle">SPECIAL OFFER</span>
                      <h3>ON POWER TOOL</h3>
                      <div className="text-container">
                        <span className="percentage">30%</span>
                        <span className="label">off</span>
                      </div>
                      <button className="button_buy">Shop Now</button>
                    </div>
                    <div className="image-content-wrapper">
                      <div className="image-content">
                        <img
                          src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/main-banner-1.png"
                          alt="Page 1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item-2">
                  <div className="left-content-inner">
                    <div className="text-content">
                      <p className="slogan">ALL THE PART YOU NEED</p>
                      <span className="tittle">FATMAX J7CS</span>
                      <h3>JUMP STARTER</h3>
                      <div className="text-container">
                        <span className="percentage">50%</span>
                        <span className="label">off</span>
                      </div>
                      <button className="button_buy">Shop Now</button>
                    </div>
                    <div className="image-content-wrapper">
                      <div className="image-content">
                        <img
                          src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/main-banner-2.png"
                          alt="Page 2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item-3">
                  <div className="left-content-inner">
                    <div className="text-content">
                      <p className="slogan">ALL THE PART YOU NEED</p>
                      <span className="tittle">33-POCKET 16 IN</span>
                      <h3>BIG TOOL BAG</h3>
                      <div className="text-container">
                        <span className="percentage">25%</span>
                        <span className="label">off</span>
                      </div>
                      <button className="button_buy">Shop Now</button>
                    </div>
                    <div className="image-content-wrapper">
                      <div className="image-content">
                        <img
                          src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/main-banner-3.png"
                          alt="Page 3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="col-xl-5 right-column">
              <div className="row h-100">
                <div className="col-12 right-top">
                  <div className="image-content-wrapper">
                    <div className="image-content">
                      <img
                        src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/cms-banner-1.jpg"
                        alt="Page 4"
                      />
                    </div>
                    <div className="text-overlay-container">
                      <div className="text-overlay">$29.99 ONLY</div>
                      <div className="text-overlay">BOSCH</div>
                      <div className="text-overlay">MINI DRILL</div>
                      <div className="text-overlay">
                        <a href="#">Show Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 right-bottom">
                  <div className="image-content-wrapper">
                    <div className="image-content">
                      <img
                        src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/cms-banner-2.jpg"
                        alt="Page 5"
                      />
                    </div>
                    <div className="text-overlay-container">
                      <div className="text-overlay">START FROM $9.99</div>
                      <div className="text-overlay">BRAND</div>
                      <div className="text-overlay">HAND TOOLS</div>
                      <div className="text-overlay">
                        <a href="#">Show Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container_note">
        <div className="row">
          <div className="col-xl-3 separator">
            <div className="content">
              <div className="icon">
                <BsTruck />
              </div>
              <div className="text">
                <div className="lineB">Easy Free Delivery</div>
                <div className="line">Order On $100*</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 separator">
            <div className="content">
              <div className="icon">
                <BsShieldCheck />
              </div>
              <div className="text">
                <div className="lineB">Premium Warranty</div>
                <div className="line">Up to 2 Year</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 separator">
            <div className="content">
              <div className="icon">
                <BsFillBoxFill />
              </div>
              <div className="text">
                <div className="lineB">Easy Free Return</div>
                <div className="line">365 Days Return</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 separator">
            <div className="content">
              <div className="icon">
                <BsHeadset />
              </div>
              <div className="text">
                <div className="lineB">24*7 Online Support</div>
                <div className="line">Premium Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container_intro">
            <div className="first_intro">Shop by Categories</div>
            <div className="second_intro">
              Check out all the feature categories for simple product discovery.
            </div>
          </div>
          <div className="category-box">
            <div className="row">
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/11.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Power Tools (13)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/03.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Air Tools (8)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/09.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Abrasives (5)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/04.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Blades (7)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/02.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Cordless Kits (8)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/07.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Cutting Tools (13)</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/12.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Hand Tools (13)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/05.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Nailers (11)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/01.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Pressure Washers (9)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/10.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Safety Workwear (12)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/06.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Staple Guns (10)</div>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <img
                    className="tag"
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/08.png"
                    alt="Category 1"
                  />
                  <div className="cat_name">Safety Equipment (10)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container_intro">
            <div className="first_intro">Featured Products</div>
            <div className="second_intro">
              Check out our collection of the top Featured Products that
              encourage conversion.
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            {featureProducts.map((featureProducts) => (
              <div key={featureProducts.id} className="card">
                <div className="image-container">
                  <img
                    src={featureProducts.img}
                    alt={featureProducts.name}
                    className="default-img"
                  />
                  <img
                    src={featureProducts.imgHover}
                    alt={featureProducts.name}
                    className="hover-img"
                  />
                </div>
                <div className="product-name">{featureProducts.name}</div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="price">{featureProducts.price}</div>
                <button className="btn_card">SELECT OPTION</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="image-content">
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/cms-banner-04.jpg"
              alt="Image 1"
            />
            <div className="text-overlay-container-product">
              <div className="text-overlay-product text-price">
                START FROM $9.99
              </div>
              <div className="text-overlay-product text-brand">BRAND</div>
              <div className="text-overlay-product text-product">
                HAND TOOLS
              </div>
              <div className="text-overlay-product">
                <a href="#">Show Now</a>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/cms-banner-05.jpg"
              alt="Image 2"
            />
            <div className="text-overlay-container-product">
              <div className="text-overlay-product text-price">
                START FROM $9.99
              </div>
              <div className="text-overlay-product text-brand">BRAND</div>
              <div className="text-overlay-product text-product">
                HAND TOOLS
              </div>
              <div className="text-overlay-product">
                <a href="#">Show Now</a>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/cms-banner-06.jpg"
              alt="Image 3"
            />
            <div className="text-overlay-container-product">
              <div className="text-overlay-product text-price-o">
                START FROM $9.99
              </div>
              <div className="text-overlay-product text-brand-0">BRAND</div>
              <div className="text-overlay-product text-product-0">
                HAND TOOLS
              </div>
              <div className="text-overlay-product text-buy">
                <a href="#">Show Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container_intro">
            <div className="first_intro">New Products</div>
            <div className="second_intro">
              Check out our collection of the top New Products that encourage
              conversion.
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            {newProducts.map((newProducts) => (
              <div key={newProducts.id} className="card">
                <div className="image-container">
                  <img
                    src={newProducts.img}
                    alt={newProducts.name}
                    className="default-img"
                  />
                  <img
                    src={newProducts.imgHover}
                    alt={newProducts.name}
                    className="hover-img"
                  />
                </div>
                <div className="product-name">{newProducts.name}</div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="price">{newProducts.price}</div>
                <button className="btn_card">SELECT OPTION</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="image-container-column">
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/sub-banner-1.jpg"
              alt="Banner"
            />
            <div className="overlay-text">
              <div className="text-left">TOOLS</div>
              <div className="text-right">
                <div className="text-right-first">$20 GIFT BONUS</div>
                <div className="text-right-second">
                  SPECIAL OFFER FOR TODAY ONLY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-deal">
        <div className="row">
          <div className="container_intro">
            <div className="first_intro">Featured Products</div>
            <div className="second_intro">
              Check out our collection of the top Featured Products that
              encourage conversion.
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Slider {...settingsAdd}>
            {addProducts.map((addProducts, index) => (
              <div key={addProducts.id} className="card-container">
                <div className="card-deal">
                  <div className="discount-badge">{addProducts.discount}</div>
                  <div className="left-content-deal">
                    <img
                      src={addProducts.img}
                      alt={addProducts.name}
                      className="default-img"
                    />
                  </div>
                  <div className="right-content-deal">
                    <div className="product-name">{addProducts.name}</div>
                    <div className="star">☆☆☆☆☆</div>
                    <div className="price">{addProducts.price}</div>
                    <button className="btn_card">SELECT OPTION</button>
                  </div>
                </div>
                {index < addProducts.length - 1 && (
                  <div className="separator-deal"></div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="image-content">
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/cms-banner-3.jpg"
              alt="Image 1"
            />
            <div className="text-overlay-container-product">
              <div className="text-overlay-product text-prices">
                START FROM $129
              </div>
              <div className="text-overlay-product text-brands">HOME DEPOT</div>
              <div className="text-overlay-product text-products">
                POWER TOOLS
              </div>
              <div className="text-overlay-products">
                <a href="#">SHOW NOW</a>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/cms-banner-4.jpg"
              alt="Image 2"
            />
            <div className="text-overlay-container-product">
              <div className="text-overlay-product text-prices">
                BIG SAVING ON
              </div>
              <div className="text-overlay-product text-brands">
                METAL & WOOD
              </div>
              <div className="text-overlay-product text-products">
                CUTTING TOOLS
              </div>
              <div className="text-overlay-products">
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container_intro">
            <div className="first_intro">Bestseller Products</div>
            <div className="second_intro">
              Check out our collection of the top Bestseller Products that
              encourage conversion.
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            {bestProducts.map((bestProducts) => (
              <div key={bestProducts.id} className="card">
                <div className="image-container">
                  <img
                    src={bestProducts.img}
                    alt={bestProducts.name}
                    className="default-img"
                  />
                  <img
                    src={bestProducts.imgHover}
                    alt={bestProducts.name}
                    className="hover-img"
                  />
                </div>
                <div className="product-name">{bestProducts.name}</div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="price">{bestProducts.price}</div>
                <button className="btn_card">SELECT OPTION</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container_intro">
            <div className="first_intro">See What Our Customers Says</div>
            <div className="second_intro">
              Check our latest reviews from customers and say your feedback.
            </div>
          </div>
        </div>
        <Slider {...settingsAdd}>
          {reviews.map((review, index) => (
            <div className="carousel-box">
              <div key={index} className="carousel-item-review">
                <div className="carousel-text-review">{review.text}</div>
                <div className="carousel-content-review">
                  <img src={review.img} alt={`Customer ${index + 1}`} />
                  <div className="carousel-info-review">
                    <div>{review.name}</div>
                    <div>{review.feedback}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className="row">
          <div className="image-container-column">
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/sub-banner-2.jpg"
              alt="Banner"
            />
            <div className="text-overlay-container-banner">
              <div className="text-overlay-product banner-tittle">
                LIMITED TIME OFFER
              </div>
              <div className="text-overlay-product banner-brands">
                OUTDOOR TOOLS
              </div>
              <div className="text-overlay-product banner-products">
                FOR CHAIN SAW
              </div>
              <div className="text-overlay-banner">
                <a href="#">SHOW NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="carousel-container">
            <Slider {...imgAdd}>
              {images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container_intro">
            <div className="first_intro">Get Latest Update & News</div>
            <div className="second_intro">
              Check our latest news and events.
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Slider {...newsAdd}>
            {news.map((news) => (
              <div key={news.id} className="card-new">
                <div className="image-container-new">
                  <img
                    src={news.img}
                    alt={news.name}
                    className="default-img-new"
                  />
                </div>
                <div className="new-name">{news.name}</div>
                <div className="date-new">{news.date}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
