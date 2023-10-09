/* About.js */

import "./about.css";
import img from './pics (4).png';
import img2 from './pics (5).png';
import img3 from './pics (6).png';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Pinoy Tindahan Bakery</h1>
        <p>
          Welcome to Pinoy Tindahan Bakery, where delicious pastries meet Filipino flavors. Our bakery specializes in creating mouthwatering Filipino delicacies with a modern twist.
          From creamy Ube-filled pastries to savory Empanadas, we ve got your cravings covered. Come visit us and experience the rich flavors of the Philippines right in your neighborhood.
        </p>
        <p>
          At Pinoy Tindahan Bakery, we take pride in using only the finest ingredients to create our delectable treats. Our team of skilled bakers ensures that every bite is a taste of home.
        </p>
        <p>
          Whether you re celebrating a special occasion or simply indulging in a sweet delight, we have a wide range of baked goods to satisfy your palate. From cakes and pastries to fresh bread, theres something for everyone.
        </p>
      </div>
      
      <div className="image-gallery">
        <div className="gallery-item">
          <img src={img} alt="Bakery Image 1" />

        </div>
        <div className="gallery-item">
          <img src={img2} alt="Bakery Image 2" />
        </div>
        <div className="gallery-item">
          <img src={img3} alt="Bakery Image 3" />
        </div>
      </div>
    </div>
  );
}

export default About;
