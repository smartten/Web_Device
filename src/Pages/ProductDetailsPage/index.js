import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "Pages/ProductDetailsPage/style.scss";
import StarRating from "component/StarRating/StarRatingComponent";
import { BsPersonCircle } from "react-icons/bs";
import Slider from "react-slick";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState(""); // Thêm state cho size
  const [color, setColor] = useState(""); // Thêm state cho color
  const [transitioning, setTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [rating, setRating] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

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
  useEffect(() => {
    if (product && product.img) {
      setSelectedImage(product.img);
    }
  }, [product]);
  useEffect(() => {
    // Dữ liệu featureProducts có thể được di chuyển đến một nơi lưu trữ chung
    // để lấy dữ liệu trong cả HomePage và ProductDetailPage.
    const featureProducts = [
      {
        id: 1,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-15.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-15-700x700.jpg",
        name: "Valianto Air Orbital Palm Sander with Speed Regulation",
        price: "$310.00",
        description:
          "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      },
      {
        id: 2,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-14.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-14.jpg",
        name: "DeWalt Oil-Lube Hand Carry Air Compressor",
        price: "$250.00 – $300.00",
        description:
          "Your speaker is waterproof, splash resistant, and dust proof. It is rated IP67 and IP64. You can immerse the speaker in water for up to 30 minutes at a depth of up to 3.3 ft (1 m). It can also be used while showering and in the rain or snow.",
      },
      {
        id: 3,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-8.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-8-700x700.jpg",
        name: "DeWALT DW616 2.2-Hp Fixed Base Woodworking Router",
        price: "$89.00",
        description:
          "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      },
      {
        id: 4,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-11-700x700.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-11-700x700.jpg",
        name: "Black and Decker BDROUT127-B5 1600W Router",
        price: "$200.00",
        description:
          "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      },
      {
        id: 5,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-6-700x700.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-6-700x700.jpg",
        name: "BLACK DECKER Max Lithium Cordless Circular Saw",
        price: "$120.00",
        description:
          "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      },
      {
        id: 6,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-9.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-9-700x700.jpg",
        name: "Rapid PRO PB131 Pneumatic Nailer Tools Only",
        price: "$122.00",
        description:
          "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      },
      {
        id: 7,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-17.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-17-700x700.jpg",
        name: "DeWalt DDVG512 Brushless XR Circular Saw Range",
        price: "$300.00",
        description:
          "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      },
      {
        id: 8,
        img: "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-7-700x700.jpg",
        imgHover:
          "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-7-700x700.jpg",
        name: "Generic Cordless Drill Driver 3/8-inch Electric Drill",
        price: "$122.00",
        description:
          "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      },
    ];
    const foundProduct = featureProducts.find(
      (item) => item.id === parseInt(id, 10)
    );
    setProduct(foundProduct);
  }, [id]);

  const handleImageClick = (img) => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedImage(img);
      setTransitioning(false);
    }, 300); // Thời gian khớp với thời gian transition
  };

  const handleClearSelection = () => {
    setColor("");
    setSize("");
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted rating:", rating);
    // Xử lý gửi dữ liệu
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <>
      <div className="container_about">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <a href="/">Home / </a>
              <a href="/shop">Shop /</a>
              {product.name}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="product_detail_container">
            <div className="product_images">
              <div
                className={`main_image ${
                  transitioning ? "transitioning" : ""
                }`}>
                <img src={selectedImage} alt={product.name} />
              </div>
              <div className="thumbnail_images">
                <img
                  src={product.img}
                  alt={`${product.name} primary`}
                  onClick={() => handleImageClick(product.img)}
                />
                <img
                  src={product.imgHover}
                  alt={`${product.name} secondary`}
                  onClick={() => handleImageClick(product.imgHover)}
                />
              </div>
            </div>

            <div className="product_info">
              <h1>{product.name}</h1>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="price_info">{product.price}</p>
              <p className="description">{product.description}</p>
              <div className="color_selection">
                <label htmlFor="color">Color:</label>
                <select
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}>
                  <option value="">Choose an option</option>
                  <option value="red">Orange</option>
                </select>
              </div>
              <div className="size_selection">
                <label htmlFor="size">Size:</label>
                <select
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}>
                  <option value="">Choose an option</option>
                  <option value="large">Large</option>
                  <option value="medium">Medium</option>
                  <option value="small">Small</option>
                </select>
                <a
                  href="#"
                  onClick={handleClearSelection}
                  className="clear_selection">
                  Clear
                </a>
              </div>
              <div className="quantity_container">
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  defaultValue="1"
                  className="quantity_input"
                />
                <button className="add_to_cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="options">
            <button
              className={`option_btn ${
                selectedOption === "option1" ? "active" : ""
              }`}
              onClick={() => handleSelect("option1")}>
              Description
            </button>
            <button
              className={`option_btn ${
                selectedOption === "option2" ? "active" : ""
              }`}
              onClick={() => handleSelect("option2")}>
              Additional information
            </button>
            <button
              className={`option_btn ${
                selectedOption === "option3" ? "active" : ""
              }`}
              onClick={() => handleSelect("option3")}>
              Reviews (2)
            </button>
          </div>
          {selectedOption === "option1" && (
            <>
              <div className="image">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/Product-Banner-01.jpg"
                  alt="Description"
                />
              </div>
              <div className="text_section">
                <h2>
                  Power your passive speakers to give your home soundtrack a
                  boost and The soundtrack to your life Maximize your amplifier
                  with powerful Bose speakers with your home soundtrack a boost
                  and The soundtrack to your life
                </h2>
                <ul>
                  <li>
                    This product will have a battery that exceeds 80% capacity
                    relative to new.
                  </li>
                  <li>
                    Accessories may not be original, but will be compatible and
                    fully functional. Product may come in generic box.
                  </li>
                  <li>
                    Product will come with a SIM removal tool, a charger and a
                    charging cable. Headphone and SIM card are not included.
                  </li>
                  <li>
                    This product is eligible for a replacement or refund within
                    90-day of receipt if it does not work as expected.
                  </li>
                </ul>
                <p>
                  Fully unlocked and compatible with any carrier of choice (e.g.
                  AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro,
                  etc.) The device does not come with headphones or a SIM card.
                  It does include a charger and charging cable that may be
                  generic.
                </p>
              </div>

              {/* Bức ảnh */}
              <div className="image">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/Product-Banner-1.jpg"
                  alt="Description"
                />
              </div>

              {/* Đoạn văn với tiêu đề */}
              <div className="text_section">
                <h2>About this item</h2>
                <p>
                  Products with electrical plugs are designed for use in the US.
                  Outlets and voltage differ internationally and this product
                  may require an adapter or converter for use in your
                  destination. Please check compatibility before purchasing.
                </p>
                <p>
                  Supports wireless charging. Designed for iPhone 12 mini
                  5.4-Inch. Perfectly fits your device Made with PC and TPU.
                  Inner tiny dots design avoids ugly watermark against the phone
                  back and sides. Lightweight and slim design. Ultra transparent
                  and scratch-resistant back Raised bezels offer extra
                  protection for screen and camera. Unique shock-absorption
                  design: 4 corners effectively absorb shocks Easy access to all
                  the controls and features; Perfect cutouts for speakers,
                  camera and other ports Package includes: iPhone 12 mini
                  5.4-Inch case in retail package
                </p>
              </div>
            </>
          )}

          {selectedOption === "option2" && (
            <div className="description_table">
              <div className="description_row">
                <div className="description">Weight</div>
                <div className="data"> 0.8 kg</div>
              </div>
              <div className="description_row d_gray">
                <div className="description">Dimensions</div>
                <div className="data"> 6 × 5 × 1 cm</div>
              </div>
              <div className="description_row">
                <div className="description">color</div>
                <div className="data">Orange</div>
              </div>
              <div className="description_row d_gray">
                <div className="description">size</div>
                <div className="data">Large, Medium, Small</div>
              </div>
            </div>
          )}

          {/* Nội dung theo lựa chọn */}
          {selectedOption === "option3" && (
            <div className="content_review">
              <div className="left-column-op">
                <h2>2 Review for {product.name}</h2>
                <div className="review-box">
                  <div className="icon_rev">
                    <BsPersonCircle />
                  </div>
                  <div className="review-details">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <div className="date">
                      <b>admin </b> – June 19, 2023
                    </div>
                    <div className="review-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don\’t look even slightly believable.
                    </div>
                  </div>
                </div>
                <div className="review-box">
                  <div className="icon_rev">
                    <BsPersonCircle />
                  </div>
                  <div className="review-details">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <div className="date">
                      <b>admin </b>– June 19, 2023
                    </div>
                    <div className="review-text">
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-column-op">
                {/* Nội dung bên phải */}
                <h2>Add a review</h2>
                <p>
                  <i>
                    Your email address will not be published. Required fields
                    are marked *
                  </i>
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="rating">
                    <label>Your rating *</label>
                    <StarRating onRatingChange={handleRatingChange} />
                    <input type="hidden" value={rating} name="rating" />
                  </div>
                </form>
                <div className="form-group">
                  <label htmlFor="input1">Your review *</label>
                  <input className="input_l" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="input2">Name *</label>
                  <input className="input_m" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="input3">Email *</label>
                  <input className="input_m" type="text" />
                </div>

                <div className="checkbox-group">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <button className="submit-btn">SUBMIT</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="container_intro">
                <div className="first_intro">Related products</div>
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
                    <div className="product-name">
                      <a href="#">{newProducts.name}</a>
                    </div>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <div className="price">{newProducts.price}</div>
                    <button className="btn_card">SELECT OPTION</button>
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

export default ProductDetailPage;
