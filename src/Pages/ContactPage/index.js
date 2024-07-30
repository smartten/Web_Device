import React from "react";
import "Pages/ContactPage/style.scss";
import { BsEnvelope, BsFillTelephoneFill, BsGeoAlt } from "react-icons/bs";

const ContactPage = () => {
  return (
    <>
      <div className="container_about">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <a href="">Home/</a>Contact Us
            </div>
            <div className="page-title">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="container_inform">
        <div className="container">
          <div className="row">
            <div className="left_column_contact">
              <div className="contact_tittle">Contact Information</div>
              <div className="contact_info">
                <div className="info_item">
                  <div className="icon_title">
                    <i className="icon_example">
                      <BsGeoAlt />
                    </i>
                    <div className="info_title">Our Location</div>
                  </div>
                  <div className="info_text">
                    <div className="info_description">
                      3308 Bassell Avenue, Los Angeles
                    </div>
                    <div className="info_description">
                      California, United States
                    </div>
                  </div>
                </div>
                <div className="info_item">
                  <div className="icon_title">
                    <i className="icon_example">
                      <BsFillTelephoneFill />
                    </i>
                    <div className="info_title">Phone Number</div>
                  </div>
                  <div className="info_text">
                    <div className="info_description">+001 123 4567</div>
                    <div className="info_description">+001 456 7890</div>
                  </div>
                </div>
                <div className="info_item_n">
                  <div className="icon_title">
                    <i className="icon_example">
                      <BsEnvelope />
                    </i>
                    <div className="info_title">Email Address</div>
                  </div>
                  <div className="info_text">
                    <div className="info_description">info@example.com</div>
                    <div className="info_description">test@example.com</div>
                  </div>
                </div>
              </div>
              <div className="image_container_contact">
                <img
                  src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/06/contact-us-img.jpg"
                  alt="Contact"
                />
              </div>
            </div>
            <div className="right_column_contact">
              <div className="form_section_contact">
                <h2 className="form_title">Contact us for any questions</h2>
                <div className="form_row">
                  <div className="form_group">
                    <label htmlFor="input1">First name*</label>
                    <input type="text" id="input1" placeholder="First Name" />
                  </div>
                  <div className="form_group">
                    <label htmlFor="input2">Last name*</label>
                    <input type="text" id="input2" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form_row">
                  <div className="form_group">
                    <label htmlFor="input3">Your Email*</label>
                    <input type="text" id="input3" placeholder="Your Email" />
                  </div>
                  <div className="form_group">
                    <label htmlFor="input4">Phone Number</label>
                    <input type="text" id="input4" placeholder="000-000-0000" />
                  </div>
                </div>
                <div className="form_row">
                  <div className="form_group">
                    <label htmlFor="input5">Subject*</label>
                    <input type="text" id="input5" placeholder="Subject" />
                  </div>
                </div>
                <div className="form_row">
                  <div className="form_group full_width">
                    <label htmlFor="input6">Your message (optional)</label>
                    <input
                      type="text"
                      id="input6"
                      className="large_input"
                      placeholder="Write message"
                    />
                  </div>
                </div>
                <button className="submit_button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_map">
        <div className="container">
          <div className="row">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2zTeG6r3QgTHXDom4gxJDDtG4!5e0!3m2!1svi!2sus!4v1722327436977!5m2!1svi!2sus"
                width="1230"
                height="350"
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container_info_quest">
  <div className="container">
    <div className="row">
      <div className="header_section">
        <h2>Popular Question and Answer</h2>
        <p>Popular Question and Answer</p>
      </div>
      <div className="accordion">
        <input type="radio" name="accordion" id="item1" className="accordion_radio"/>
        <label className="accordion_header" for="item1"><span className="icon"></span>How can I set up an ecommerce store?</label>
        <div className="accordion_content">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
        </div>

        <input type="radio" name="accordion" id="item2" className="accordion_radio"/>
        <label className="accordion_header" for="item2"><span className="icon"></span>What are the best platforms for building an ecommerce store?</label>
        <div className="accordion_content">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </div>

        <input type="radio" name="accordion" id="item3" className="accordion_radio"/>
        <label className="accordion_header" for="item3"><span className="icon"></span>How can I optimize my ecommerce store for search engines?</label>
        <div className="accordion_content">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
        </div>

        <input type="radio" name="accordion" id="item4" className="accordion_radio"/>
        <label className="accordion_header" for="item4"><span className="icon"></span>What are the most effective strategies for driving traffic to an ecommerce store?</label>
        <div className="accordion_content">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </div>

        <input type="radio" name="accordion" id="item5" className="accordion_radio"/>
        <label className="accordion_header" for="item5"><span className="icon"></span>How can I improve the conversion rate of my ecommerce store?</label>
        <div className="accordion_content">
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default ContactPage;
