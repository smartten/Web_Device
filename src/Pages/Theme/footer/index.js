import { memo } from "react";
import "./style.scss";
import {
  BsEnvelopePaper,
  BsFacebook,
  BsGoogle,
  BsHeadset,
  BsInstagram,
  BsTwitter,
  BsVimeo,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="box_tittle">
        <div className="container_tittle">
          <div className="row">
            <div className="col-xl-5 header__top_left">
              <div className="icon-footer">
                <BsEnvelopePaper />
              </div>
              <div className="text-content-footer">
                <div className="first-line-tittle">Join Our Newsletter, Get 10% Off</div>
                <div className="second-line-tittle">
                  Get all latest information on events, sales and offers
                </div>
              </div>
            </div>
            <div className="col-xl-7 header__footer_right">
              <input type="text" placeholder="Email" />
              <button type="button">Subcrise</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 section-1">
            <div className="info-top-f">Contact Information</div>
            <div className="info-middle-f">
              <div className="icon-middle">
                <BsHeadset />
              </div>
              <div className="text-content-f">
                <div className="first-line">
                  You have any Questions ? Call us 24x7
                </div>
                <div className="second-line">(+01) 1234 567 890</div>
              </div>
            </div>
            <div className="info-bottom-f">
              <p>1487 Rocky Horse Carrefour 1487</p>
              <p>Rocky Horse Arlington, TX 16819 United</p>
              <a href="#">demo@example.com</a>
            </div>
            <div className="icons">
              <i>
                <BsFacebook />
              </i>
              <i>
                <BsTwitter />
              </i>
              <i>
                <BsInstagram />
              </i>
              <i>
                <BsGoogle />
              </i>
              <i>
                <BsYoutube />
              </i>
              <i>
                <BsVimeo />
              </i>
            </div>
          </div>
          <div className="col-lg-2 col-12 section-2">
            <div className="info-f">My account</div>
            <div className="list-end">
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Redeem Voucher</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
                <li>
                  <a href="#">Shopping Cart</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Gift Card</a>
                </li>
                <li>
                  <a href="#">Service Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-12 section-3">
            <div className="info-f">Information</div>
            <div className="list-end">
              <ul>
                <li>
                  <a href="#">Product Support</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">License Policy</a>
                </li>
                <li>
                  <a href="#">Submit a Dispute</a>
                </li>
                <li>
                  <a href="#">Locality</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Policies & Rules</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-12 section-4">
            <div className="info-f">Company Details</div>
            <div className="list-end">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Submit a Dispute</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);
