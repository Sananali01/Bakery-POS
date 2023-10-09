import productImage1 from '../images/image (1).png'
import productImage2 from '../images/image (2).png'
import productImage3 from '../images/image (3).png'
import productImage4 from '../images/image (4).png'
import productImage5 from '../images/image (5).png'
import productImage6 from '../images/image (6).png'
import productImage7 from '../images/image (7).png'
import productImage8 from '../images/image (8).png'
import productImage9 from '../images/image (9).png'
import productImage10 from '../images/image (10).png'
import productImage11 from '../images/image (11).png'
import productImage12 from '../images/image (12).png'
import productImage13 from '../images/image (13).png'
import productImage14 from '../images/image (14).png'
import productImage15 from '../images/image (15).png'
import productImage16 from '../images/image (16).png'
import productImage17 from '../images/image (17).png';
import productImage18 from '../images/image (18).png';
import productImage19 from '../images/image (19).png';
import productImage20 from '../images/image (20).png';
import productImage21 from '../images/image (21).png';
import productImage22 from '../images/image (22).png';
import productImage23 from '../images/image (23).png';
import productImage24 from '../images/image (24).png';
import productImage25 from '../images/image (25).png';
import productImage26 from '../images/image (26).png';
import productImage27 from '../images/image (27).png';
import productImage28 from '../images/image (28).png';
import productImage29 from '../images/image (29).png';
import productImage30 from '../images/image (30).png';
import productImage31 from '../images/image (31).png';
import productImage32 from '../images/image (32).png';

const productData = [
  // Product 1
 {
   id: 1,
   title: "Chocolate Biscuits",
   description: "Indulge in the rich chocolate goodness of our delicious biscuits.",
   price: 19,
   image: productImage1,
   category: "Cookies",
   rating: { rate: 4.5, count: 10 },
   stock: 5,
 },
  // Product 2
 {
   id: 2,
   title: "Apple Cider Donut",
   description: "Enjoy the delightful taste of our apple cider donut.",
   price: 29,
   image: productImage2,
   category: "Donuts",
   rating: { rate: 4.0, count: 8 },
   stock: 0,
 },
  // Product 3
 {
   id: 3,
   title: "Twist Donut",
   description: "A classic twist donut with a perfect balance of flavors.",
   price: 24,
   image: productImage3,
   category: "Donuts",
   rating: { rate: 4.2, count: 12 },
   stock: 0,
 },
  // Product 4
 {
   id: 4,
   title: "Key Lime Pie",
   description: "Indulge in the tangy delight of our key lime pie.",
   price: 39,
   image: productImage4,
   category: "Pie",
   rating: { rate: 4.8, count: 15 },
   stock: 0,
 },
  // Product 5
 {
   id: 5,
   title: "Strawberry Pie",
   description: "A classic strawberry pie with a flaky, buttery texture.",
   price: 14,
   image: productImage5,
   category: "Pie",
   rating: { rate: 3.9, count: 7 },
   stock: 0,
 },
  // Product 6
 {
   id: 6,
   title: "Sparkling Water",
   description: "Savor the authentic flavors of our sparkling water.",
   price: 34,
   image: productImage6,
   category: "Beverages",
   rating: { rate: 4.4, count: 11 },
   stock: 0,
 },
  // Product 7
 {
   id: 7,
   title: "Orange Juice",
   description: "Healthy and delicious orange juice for your daily needs.",
   price: 22,
   image: productImage7,
   category: "Beverages",
   rating: { rate: 3.7, count: 9 },
   stock: 0,
 },
 // Product 8
 {
   id: 8,
   title: "Lollipop",
   description: "Add a pop of flavor to your day with our lollipop assortment.",
   price: 17,
   image: productImage8,
   category: "Candy",
   rating: { rate: 4.1, count: 13 },
   stock: 0,
 },
 // Product 9
 {
   id: 9,
   title: "Baguette",
   description: "Experience the taste of Germany with our delicious baguette.",
   price: 28,
   image: productImage9,
   category: "Bread",
   rating: { rate: 4.6, count: 14 },
   stock: 0,
 },
 // Product 10
 {
   id: 10,
   title: "Carrot Cake",
   description: "Savor the crunchiness of our delightful carrot cake.",
   price: 19,
   image: productImage10,
   category: "Cakes",
   rating: { rate: 4.2, count: 11 },
   stock: 0,
 },
 // Product 11
 {
   id: 11,
   title: "Ciabatta",
   description: "An assortment of delicious ciabatta bread for your table.",
   price: 31,
   image: productImage11,
   category: "Bread",
   rating: { rate: 4.7, count: 17 },
   stock: 0,
 },
 // Product 12
 {
   id: 12,
   title: "Fruit Cake",
   description: "Enjoy the fruity delight of our special fruit cake recipe.",
   price: 23,
   image: productImage12,
   category: "Cakes",
   rating: { rate: 4.3, count: 9 },
   stock: 0,
 },
 // Product 13
 {
   id: 13,
   title: "Lady Baltimore Cake",
   description: "A delightful assortment of cakes, cookies, and pastries to suit your taste.",
   price: 27,
   image: productImage13,
   category: "Cakes",
   rating: { rate: 4.5, count: 10 },
   stock: 0,
 },
 // Product 14
 {
   id: 14,
   title: "Multi-grain Bread",
   description: "Enjoy the creamy and delicious goodness of our multi-grain bread.",
   price: 16,
   image: productImage14,
   category: "Bread",
   rating: { rate: 4.0, count: 8 },
   stock: 0,
 },
 // Product 15
 {
   id: 15,
   title: "Orange Chiffon Cake",
   description: "Nourish yourself with our wholesome orange chiffon cake.",
   price: 25,
   image: productImage15,
   category: "Cakes",
   rating: { rate: 4.2, count: 12 },
   stock: 0,
 },
 // Product 16
 {
   id: 16,
   title: "Pumpernickel Bread",
   description: "Start your day with a smile and enjoy the perfect pumpernickel bread.",
   price: 21,
   image: productImage16,
   category: "Bread",
   rating: { rate: 4.6, count: 16 },
   stock: 0,
 },
  // Product 17
  {
   id: 17,
   title: "Rye Bread",
   description: "A wholesome rye bread with a touch of tradition.",
   price: 19,
   image: productImage17,
   category: "Bread",
   rating: { rate: 4.3, count: 12 },
   stock: 0,
 },
 // Product 18
 {
   id: 18,
   title: "Sour Dough Bread",
   description: "Experience the classic taste of our sourdough bread.",
   price: 14,
   image: productImage18,
   category: "Bread",
   rating: { rate: 4.7, count: 15 },
   stock: 0,
 },
 // Product 19
 {
   id: 19,
   title: "Whole Wheat Bread",
   description: "Indulge in the wholesome goodness of our whole wheat bread.",
   price: 29,
   image: productImage19,
   category: "Bread",
   rating: { rate: 4.8, count: 18 },
   stock: 0,
 },
 // Product 20
 {
   id: 20,
   title: "Raspberry Pink Velvet Cake",
   description: "A cake that's as delightful as it sounds with a rich raspberry flavor.",
   price: 24,
   image: productImage20,
   category: "Cakes",
   rating: { rate: 4.5, count: 14 },
   stock: 0,
 },
 // Product 21
 {
   id: 21,
   title: "Cotton Candy",
   description: "Experience the sweet magic of cotton candy in every bite.",
   price: 15,
   image: productImage21,
   category: "Candy",
   rating: { rate: 4.2, count: 9 },
   stock: 0,
 },
 // Product 22
 {
   id: 22,
   title: "Chocolate Truffle Cake",
   description: "Indulge in the ultimate chocolate experience with our truffle cake.",
   price: 39,
   image: productImage22,
   category: "Cakes",
   rating: { rate: 4.9, count: 20 },
   stock: 0,
 },
 // Product 23
 {
   id: 23,
   title: "Vanilla Cupcake",
   description: "Enjoy the simplicity of our classic vanilla cupcakes for any occasion.",
   price: 12,
   image: productImage23,
   category: "Cakes",
   rating: { rate: 4.4, count: 11 },
   stock: 0,
 },

 // Product 24
 {
   id: 24,
   title: "Almond Biscotti",
   description: "Pair your coffee with our crunchy almond biscotti for a delightful treat.",
   price: 10,
   image: productImage24,
   category: "Cookies",
   rating: { rate: 4.0, count: 8 },
   stock: 0,
 },
 // Product 25
 {
   id: 25,
   title: "Chocolate Chip Cookie",
   description: "Satisfy your chocolate cravings with our irresistible chocolate chip cookies.",
   price: 27,
   image: productImage25,
   category: "Cookies",
   rating: { rate: 4.3, count: 13 },
   stock: 0,
 },
 // Product 26
 {
   id: 26,
   title: "Coke",
   description: "Quench your thirst with the refreshing taste of our classic cola.",
   price: 16,
   image: productImage26,
   category: "Beverages",
   rating: { rate: 4.6, count: 16 },
   stock: 0,
 },
 // Product 27
 {
   id: 27,
   title: "Mint Margarita",
   description: "Sip on the cool and soothing minty goodness of our margarita.",
   price: 21,
   image: productImage27,
   category: "Beverages",
   rating: { rate: 4.2, count: 12 },
   stock: 0,
 },
 // Product 28
 {
   id: 28,
   title: "Blueberry Pie",
   description: "Experience the homemade delight of our blueberry pie with a hint of cinnamon.",
   price: 18,
   image: productImage28,
   category: "Pie",
   rating: { rate: 4.5, count: 14 },
   stock: 0,
 },
 // Product 29
 {
   id: 29,
   title: "Pecan Pie",
   description: "Treat yourself to the rich and nutty goodness of our pecan pie, perfect for the holidays.",
   price: 32,
   image: productImage29,
   category: "Pie",
   rating: { rate: 4.4, count: 10 },
   stock: 0,
 },

 // Product 30
 {
   id: 30,
   title: "Donuts with Sprinkles",
   description: "Indulge in the joy of our delightful donuts adorned with colorful sprinkles.",
   price: 20,
   image: productImage30,
   category: "Donuts",
   rating: { rate: 4.7, count: 19 },
   stock: 0,
 },
 {
   id: 31,
   title: "Chocolate Donut",
   description: "Satisfy your chocolate cravings with our delectable chocolate donut.",
   price: 20,
   image: productImage31,
   category: "Donuts",
   rating: { rate: 4.7, count: 19 },
   stock: 0,
 },
 {
   id: 32,
   title: "Oreo Cookies",
   description: "Experience the classic taste of our Oreo cookies, perfect for dunking in milk.",
   price: 20,
   image: productImage32,
   category: "Cookies",
   rating: { rate: 4.7, count: 19 },
   stock: 0,
 },
];

export default productData;
