import { useEffect, useState } from "react";
import "./style.css";
import img1 from "./image1.webp";
import img2 from "./image2.webp";
import img3 from "./image3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock,faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Index() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <div>
      <section className="hero-section">
      <h1 className="main-heading "><FontAwesomeIcon icon={faCakeCandles} />    Pinoy Tindahan</h1> 
        <div className="home-container">
          <div className="flex-container">
            <div className="content-container">
              <h1 className="main-heading">
                All-in-One POS and Management System
              </h1>
              <p className="sub-heading">
                <strong>Pinoy Tindahan</strong> Indulge in our heavenly
                assortment of freshly baked bread, pastries, and cakes, each
                crafted with love and care. From flaky croissants that melt in
                your mouth to decadent cakes that celebrate life moments, we
                have something for every palate.
              </p>
              <p>
                Our talented bakers use only the finest ingredients, ensuring
                every bite is a taste of perfection. Whether you are picking up a
                morning pick-me-up, celebrating a special occasion, or simply
                treating yourself, its your go-to destination for all things
                delicious.
              </p>
            </div>
            <div className={`login-container ${showForm ? "show" : ""}`}>
              <h2 className="login-heading"> <FontAwesomeIcon icon={faLock} /> Admin</h2>
              <form className="login-form">
                <div className="form-group2">
                  <label htmlFor="username">
                    <FontAwesomeIcon icon={faUser} className="icon" /> Username
                  </label>
                  <input type="text" className="inpp" id="username" name="username" style={{width:'auto'}}/>
                </div>
                <div className="form-group2">
                  <label htmlFor="password">
                    <FontAwesomeIcon icon={faLock} className="icon" /> Password
                  </label>
                  <input type="password" className="inpp" id="password" name="password" />
                </div>
                <Link to='/Stock' className="login-button">Login</Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="additional-images">
        <div className="home-container">
          <div className="centered-images">
            <div className="image-container">
              <img
                src={img1}
                alt="Image 1"
                className="additional-image"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
            <div className="image-container">
              <img
                src={img2}
                alt="Image 2"
                className="additional-image"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
            <div className="image-container">
              <img
                src={img3}
                alt="Image 3"
                className="additional-image"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}