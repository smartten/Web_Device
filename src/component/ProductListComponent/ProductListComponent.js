import React, { useState } from "react";
import "component/ProductListComponent/style.scss";

const ProductList = ({ products, viewMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className={`product-list ${viewMode}-view`}>
        {currentProducts.map((product, index) => (
          <div key={index} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="default-img"
              />
              <img
                src={product.hoverImage}
                alt={`${product.name} hover`}
                className="hover-img"
              />
            </div>
            <div className="details">
              <h2 className="card_product_name"><a href="#">{product.name}</a></h2>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="price">${product.price}</p>
              {viewMode === "list" && <p>{product.description}</p>}
              <button className="btn_card_buy">SELECT OPTIONS</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
