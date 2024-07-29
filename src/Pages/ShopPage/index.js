import React, { memo, useState } from "react";
import "Pages/ShopPage/style.scss";
import FilterComponent from "component/FilterComponent/FilterComponent";
import ProductListComponent from "component/ProductListComponent/ProductListComponent";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";

const ShopPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Black and Decker BDROUT127-B5 1600W Router",
      description:
        "Very impressive. Whether you’re on a crowded bus or on a plane, the Buds 2 Pro ANC will deliver the kind of surrounding world silencing you’d want, so you can enjoy your music fully in peace. Of course, you can turn off ANC and switch to Ambient sound if you actually want to hear what’s happening around you.",
      price: "200.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-11.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-11.jpg",
    },
    {
      id: 2,
      name: "BLACK DECKER Max Lithium Cordless Circular Saw",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula.",
      price: "120.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-6.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-6.jpg",
    },
    {
      id: 3,
      name: "BOSCH Brute Breaker Hammer BH2760VC 150-Volt",
      description:
        "iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our largest sensor yet — and it leverages the LiDAR Scanner for Night mode portraits. Ultra Wide gets a wider aperture, a faster sensor, and all-new autofocus. And Telephoto now has Night mode.",
      price: "400.00 – 500.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-16.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-16.jpg",
    },
    {
      id: 4,
      name: "DeWalt DDVG512 Brushless XR Circular Saw Range",
      description:
        "You can use these Noise earbuds to enjoy music or handle calls. The ergonomic design of each earbud facilitates comfortable usage. Each earbud has a mic too. What’s more, pairing them with other devices is convenient as they feature Bluetooth 5.0 technology.",
      price: "300.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-17.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-17-700x700.jpg",
    },
    {
      id: 5,
      name: "DeWALT DW616 2.2-Hp Fixed Base Woodworking Router",
      description:
        "Active Noise Cancelling (ANC) continuously blocks unwanted external noise. Switch to Transparency mode when you need to hear the world around you. External-facing microphones allow the sounds of your surroundings back in for a natural listening experience",
      price: "89.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-8.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-8.jpg",
    },
    {
      id: 6,
      name: "DeWalt Minimal 200W 355mm Multi Cutter Cold Saw",
      description:
        "Features like higher frame rates and ray tracing make the PS5 feel truly new-gen (to console gamers at least), while the DualSense is an amazing controller that really enhances games when used well.",
      price: "105.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-10-700x700.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-10-700x700.jpg",
    },
    {
      id: 7,
      name: "DeWalt Oil-Lube Hand Carry Air Compressor",
      description:
        "Your speaker is waterproof, splash resistant, and dust proof. It is rated IP67 and IP64. You can immerse the speaker in water for up to 30 minutes at a depth of up to 3.3 ft (1 m). It can also be used while showering and in the rain or snow.",
      price: "250.00 – 300.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-14.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-14-700x700.jpg",
    },
    {
      id: 8,
      name: "Dual Power Portable Hybrid Electric Ryobi Fan",
      description:
        "The AirPods Max is the best noise cancelling headset out right now, but it’s not the easiest to use, or even the most comfortable. The lack of a headphone jack is frustrating and the “smart” case … isn’t. If none of that bothers you, you’ll love the AirPods Max.",
      price: "99.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-4-700x700.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-4-700x700.jpg",
    },
    {
      id: 9,
      name: "Generic Cordless Drill Driver 3/8-inch Electric Drill",
      description:
        "Complete any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home.",
      price: "122.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-7.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-7.jpg",
    },
    {
      id: 10,
      name: "Hyper Tough Lithium Cordless Brushless Impact Driver",
      description:
        "The unibody model debuted in October 2008 in 13- and 15-inch variants, with a 17-inch variant added in January 2009. Called the “unibody” model because its case was machined from a single piece of aluminum",
      price: "120.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-1.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-2-700x700.jpg",
    },
    {
      id: 11,
      name: "Milwaukee Gauge Angled Finishing Nailer 18V Fuel 16",
      description:
        "The SoundLink Mini II Special Edition delivers full, natural sound with dramatically deeper bass than you’d expect from a speaker that fits in the palm of your hand. It also features a built-in microphone for taking calls and makes easy wireless connections any time, anywhere.",
      price: "110.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-2.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-3-700x700.jpg",
    },
    {
      id: 12,
      name: "Paslode Impulse Framing Nailer IM900 MACH45TT34",
      description:
        "Apple’s made clear its interest in augmented reality, and we may hear more about its plans to make AR Glasses in 2023. The rumors suggest that we could see Apple’s AR or VR headset product in 2023. Apple’s upcoming xrOS may even be the start of a whole new ecosystem of devices.",
      price: "130.00 – 190.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-13.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-13.jpg",
    },
    {
      id: 13,
      name: "Porter Cable 40v Max Lithium Ion Impact Driver",
      description:
        "The switches used in Logitech Silent Mice are made of a rubber actuator that dampens both the vibration and the sound. A red plastic cap covers the rubber actuator to improve the switch’s tactile feedback and lengthen its lifespan.",
      price: "180.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-12.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-12.jpg",
    },
    {
      id: 14,
      name: "Rapid PRO PB131 Pneumatic Nailer Tools Only",
      description:
        "The iPad Air (5th generation), colloquially known as the iPad Air 5, is a tablet computer designed, developed, and marketed by Apple Inc. It was announced by Apple on March 8, 2023.",
      price: "122.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-9-100x100.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-9.jpg",
    },
    {
      id: 15,
      name: "RYOBI Cordless Multi-Material Plunge Saw",
      description:
        "Logitech 2.4 GHz Digital Cordless for Business features frequency agility. With this technology, the Logitech mouse or keyboard that encounters any interference from another cordless device will automatically identify and switch to a more “quiet” location in the band to transmit data.",
      price: "250.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/a1-1-700x700.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/a2-1-700x700.jpg",
    },
    {
      id: 16,
      name: "Skil 20V Cordless 6.5-Inch Circular Saw HPTT05",
      description:
        "Regular fit, round neckline, long sleeves. 100% cotton, brushed inner side for extra comfort. massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula.",
      price: "130.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-5.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-5-700x700.jpg",
    },
    {
      id: 17,
      name: "Valianto Air Orbital Palm Sander with Speed Regulation",
      description:
        "The Watch 5 Pro comes with Google’s Wear OS powered by Samsung, so that means you get Google Maps, Google Assistant, Google Pay, Messages, Keep Notes, and more. In addition, Samsung Pay, Samsung Messages, Samsung Health, Bixby, and other Samsung apps are provided.",
      price: "310.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-15.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-15.jpg",
    },
    {
      id: 18,
      name: "Variable Speed Orbital Jig Saw With Laser And LED Light",
      description:
        "Wireless headphones have been around since the 1960s. However, in 2004, Bluetooth wireless headphones came onto the market and revolutionized personal audio listening, gaining great popularity among audio consumers and professionals alike.",
      price: "59.00",
      image:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a1-700x700.jpg",
      hoverImage:
        "https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2019/01/a2-1-700x700.jpg",
    },
  ]);

  return (
    <>
      <div className=" container-bread">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <a href="">Home/</a>Shop
            </div>
            <div className="page-title">Shop</div>
          </div>
        </div>
      </div>

      <div className="list-bread">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <FilterComponent />
            </div>
            <div className="col-right">
              <div className="top-row">
                <div className="product-count">Showing 1–16 of 18 results</div>
                <div className="filters">
                  <div className="dropdown-container">
                    <select className="sort-menu">
                      <option value="default">Default sorting</option>
                      <option value="popular">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="lastest">Sort by lastest</option>
                      <option value="price-low">
                        Sort by price: low to high
                      </option>
                      <option value="price-high">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div>
                  <div className="view-options">
                    <div
                      className={`icon ${viewMode === "grid" ? "active" : ""}`}
                      onClick={() => handleViewChange("grid")}>
                      <BsFillGrid3X3GapFill />
                    </div>
                    <div
                      className={`icon ${viewMode === "list" ? "active" : ""}`}
                      onClick={() => handleViewChange("list")}>
                      <BsList />
                    </div>
                  </div>
                </div>
              </div>
              <ProductListComponent products={products} viewMode={viewMode} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ShopPage);
