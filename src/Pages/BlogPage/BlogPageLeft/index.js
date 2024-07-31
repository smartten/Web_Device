import React from "react";
import "Pages/BlogPage/BlogPageLeft/style.scss";
import { BsSearch } from "react-icons/bs";

const BlogPageLeft = () => {
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
              <a href="">Home/</a>Blog
            </div>
            <div className="page-title">Blog</div>
          </div>
        </div>
      </div>
      <div className="container_blog">
        <div className="container">
          <div className="row">
            <div className="col_left_blogs">
              <div className="search_box">
                <input type="text" placeholder="Search..." />
                <i className="search_icon">
                  <BsSearch />
                </i>
              </div>
              <div className="category_box">
                <h2>Categories</h2>
                <ul>
                  <li>
                    <a href="#">Abrasives</a>
                  </li>
                  <li>
                    <a href="#">Air Tools</a>
                  </li>
                  <li>
                    <a href="#">Blades</a>
                  </li>
                  <li>
                    <a href="#">Cutting Tools</a>
                  </li>
                  <li>
                    <a href="#">Hand Tools</a>
                  </li>
                  <li>
                    <a href="#">Nailes</a>
                  </li>
                  <li>
                    <a href="#">Power Tools</a>
                  </li>
                  <li>
                    <a href="#">Pressure Washers</a>
                  </li>
                  <li>
                    <a href="#">Safety Workwear</a>
                  </li>
                  <li>
                    <a href="#">Staple Guns</a>
                  </li>
                </ul>
              </div>
              <div className="post_box">
                <h2>Recent Posts</h2>
                <div className="post">
                  <img
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/01-2-150x150.jpg"
                    alt="Post Image"
                  />
                  <div className="post_info">
                    <p>
                      <a href="#">Nullam ullamcorper</a>
                    </p>
                    <p>June 6, 2023</p>
                  </div>
                </div>
                <div className="post">
                  <img
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/02-2-150x150.jpg"
                    alt="Post Image"
                  />
                  <div className="post_info">
                    <p>
                      <a href="#">Morbi condimentum</a>
                    </p>
                    <p>June 6, 2023</p>
                  </div>
                </div>
                <div className="post">
                  <img
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/03-1-150x150.jpg"
                    alt="Post Image"
                  />
                  <div className="post_info">
                    <p>
                      <a href="#">Nemo enim ipsam</a>
                    </p>
                    <p>June 6, 2023</p>
                  </div>
                </div>
                <div className="post">
                  <img
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/04-2-150x150.jpg"
                    alt="Post Image"
                  />
                  <div className="post_info">
                    <p>
                      <a href="#">Urna pretium elit mauris</a>
                    </p>
                    <p>June 6, 2023</p>
                  </div>
                </div>
                <div className="post">
                  <img
                    src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/05/05-150x150.jpg"
                    alt="Post Image"
                  />
                  <div className="post_info">
                    <p>
                      <a href="#">The Ultimate cursus</a>
                    </p>
                    <p>June 6, 2023</p>
                  </div>
                </div>
              </div>
              <div className="tag_box">
                <h2>Tags</h2>
                <div className="tags_blog">
                  <span className="tag_blog">
                    <a href="#">carpenter</a>
                  </span>
                  <span className="tag_blog">
                    <a href="#">contruction</a>
                  </span>
                  <span className="tag_blog">
                    <a href="#">handtools</a>
                  </span>
                  <span className="tag_blog">
                    <a href="#">newtools</a>
                  </span>
                  <span className="tag_blog">
                    <a href="#">powertools</a>
                  </span>
                  <span className="tag_blog">
                    <a href="#">toolsofthetrade</a>
                  </span>
                  <span className="tag_blog">
                    <a href="#">toolstorage</a>
                  </span>
                  <span className="tag_blog">
                    <a href="#">tradesman</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col_right_blogs">
              {cardsData.map((card, index) => (
                <div className="card_blog" key={index}>
                  <img src={card.imgSrc} alt={card.title} />
                  <h2>
                    <a href="">{card.title}</a>
                  </h2>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPageLeft;
