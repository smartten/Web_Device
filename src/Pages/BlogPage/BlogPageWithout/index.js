import React from "react";
import "Pages/BlogPage/BlogPageWithout/style.scss";

const BlogPageWithout = () => {
  const cardsData = [
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/01-2.jpg",
      title: "Nullam ullamcorper nisl quis ornare molestie saepe eveniet",
      description: "By Justin . June 6, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/02-2.jpg",
      title: "Morbi condimentum molestie Nam enim odio sodales",
      description: "By Justin . June 2, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/03-1.jpg",
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
      description: "By Justin . June 2, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/04-2.jpg",
      title: "Urna pretium elit mauris cursus Curabitur at elit Vestibulum",
      description: "By Justin . June 1, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/05/05.jpg",
      title: "The Ultimate cursus vestibulum at interdum Vivamus",
      description: "By Justin . May 12, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/04/06.jpg",
      title: "Turpis at eleifend ps mi elit Aenean porta ac sed faucibus",
      description: "By Justin . April 12, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/04/07-768x596.jpg",
      title: "Unleashing At risus pretium urna tortor metus fringilla",
      description: "By Justin . April 12, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/04/08-768x596.jpg",
      title: "The Rise of Wearable Tech: A Look into the Future",
      description: "By Justin . April 12, 2023",
    },
    {
      imgSrc:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/03/09-768x596.jpg",
      title: "Drones to Smart Homes The Future of Electronics",
      description: "By Justin . March 12, 2023",
    },

    // Thêm các đối tượng khác cho các card bổ sung
  ];
  return (
    <>
      <div className="container_about">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <a href="">Home/</a>Blog Without Sidebar
            </div>
            <div className="page-title">Blog Without Sidebar</div>
          </div>
        </div>
      </div>
      <div className="container_blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-container">
                {cardsData.map((card, index) => (
                  <div className="card_blog" key={index}>
                    <img src={card.imgSrc} alt={card.title} />
                    <h2>
                      <a href="#">{card.title}</a>
                    </h2>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPageWithout;
