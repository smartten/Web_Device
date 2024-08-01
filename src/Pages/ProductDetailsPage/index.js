import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
    const foundProduct = featureProducts.find(
      (item) => item.id === parseInt(id, 10)
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
