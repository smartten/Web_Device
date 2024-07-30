import React from "react";
import "Pages/AboutUsPage/style.scss";
import CountUp from "react-countup";
import { BsEmojiSmile, BsGlobe, BsHandThumbsUp } from "react-icons/bs";
import Slider from "react-slick";

const AboutUsPage = () => {
  const imgAdd = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };
  const data = [
    { number: 90, label: "Employee Empowered", unit: "" },
    { number: 10, label: "Worldwide Distributors", unit: "M" },
    { number: 5000, label: "Receive Daily Ordered", unit: "+" },
    { number: 80, label: "Get Growth Per Year", unit: "%" },
    { number: 20, label: "Overall Top Brands", unit: "+" },
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
  return (
    <>
      <div className="container_about">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <a href="">Home/</a>About Us
            </div>
            <div className="page-title">About Us</div>
          </div>
        </div>
      </div>
      <div className="container_about_store">
        <div className="container">
          <div className="row">
            <div className="col_left_about">
              <h2>About Tooldic WooCommerce Store</h2>
              <p>
                The Tooldic WooCommerce Store prioritizes customer convenience
                by offering secure payment options reliable shipping services.
                It ensures a smooth checkout process and provides tracking
                information for timely order delivery. Additionally responsive
                customer support team is available inquiries or concerns
                promptly.
              </p>
              <ul>
                <li>Discover the Future of Electronics: Shop Innovative!</li>
                <li>Unleash Your Inner Tech Guru: DIY Electronics!</li>
                <li>Electronics Shopping with a Conscience our!</li>
                <li>Stay Ahead of the Tech Curve: Get the Industry!</li>
              </ul>
            </div>
            <div className="col_right_about">
              <img
                src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/About-us-img-01.jpg"
                alt="Image 1"
              />
              <img
                src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/About-us-img-02.jpg"
                alt="Image 2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container_about">
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col_count">
                <div className="number_count">
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2}
                    suffix={item.unit}
                  />
                </div>
                <div className="label_count">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container_about_store">
        <div className="container">
          <div className="row">
            <div className="col_left_variations">
              <img
                src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/About-us-img-03.jpg"
                alt="Large Image"
                className="large_image"
              />
            </div>
            <div className="col_right_variations">
              <h2>Approximately 10K+ Products available on Tooldic Store</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
              <p>
                <i>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </i>
              </p>
              <div className="icon_row">
                <div className="icon_col">
                  <i className="icon_class">
                    <BsGlobe />
                  </i>
                  <p>Access Our Store From Worldwide</p>
                </div>
                <div className="icon_col">
                  <i className="icon_class">
                    <BsHandThumbsUp />
                  </i>
                  <p>100% Finest Quality Products</p>
                </div>
                <div className="icon_col">
                  <i className="icon_class">
                    <BsEmojiSmile />
                  </i>
                  <p>Next Level Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_about_store">
        <div className="container">
          <div className="row">
            <div className="top_content_about">
              <h2 className="title_about">Meet Our Executive Members</h2>
              <p className="description_about">
                Check out all The Member of simple product discovery & Meet Our
                Executive Members
              </p>
            </div>
            <div className="bottom_content_about">
              <div className="profile_about">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/team-img-01-253x300.jpg"
                  alt="Hình 1"
                />
                <div className="name_about">Johen Deceno</div>
                <div className="job_about">Hammer user</div>
              </div>
              <div className="profile_about">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/team-img-02-253x300.jpg"
                  alt="Hình 2"
                />
                <div className="name_about">July Wood</div>
                <div className="job_about">Designer</div>
              </div>
              <div className="profile_about">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/team-img-03-253x300.jpg"
                  alt="Hình 3"
                />
                <div className="name_about">Monojy Malik</div>
                <div className="job_about">Cutter user</div>
              </div>
              <div className="profile_about">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/team-img-04-253x300.jpg"
                  alt="Hình 4"
                />
                <div className="name_about">Rubina Delik</div>
                <div className="job_about">Scraper</div>
              </div>
              <div className="profile_about">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/team-img-05-253x300.jpg"
                  alt="Hình 5"
                />
                <div className="name_about">Mitchell Doyle</div>
                <div className="job_about">Multi user</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_slider">
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
      </div>
    </>
  );
};

export default AboutUsPage;
