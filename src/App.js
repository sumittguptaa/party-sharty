import React,{useState} from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import FeaturedRestaurants from "./components/FeaturedRestaurants/FeaturedRestaurants";
import SocialProof from "./components/SocialProof/SocialProof";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
    const [showLoginPopup, setShowLoginPopup] = useState(false);
  const restaurants = [
    {
      id: 1,
      name: "The Italian Kitchen",
      image: "restaurant1.jpg",
      description: "Authentic Italian cuisine with a modern twist.",
      url: "https://unsplash.com/photos/CAhjZmVk5H4",
    },
    {
      id: 2,
      name: "The Taco Joint",
      image: "restaurant2.jpg",
      description: "The best tacos in town, made fresh daily.",
      url: "https://unsplash.com/photos/CAhjZmVk5H4",
    },
    {
      id: 3,
      name: "Sushi Haven",
      image: "restaurant3.jpg",
      description: "Fresh sushi made to order.",
      url: "https://unsplash.com/photos/CAhjZmVk5H4",
    },
  ];
 const handleLoginClick = () => {
   setShowLoginPopup(true);
 };
  return (
    <div className="app">
      <Header onLoginClick={handleLoginClick} />
      {showLoginPopup && <Login onClose={() => setShowLoginPopup(false)} />}

      <HeroSection />
      <SearchBar />
      <FeaturedRestaurants restaurants={restaurants} />
      <SocialProof />
      <Footer />
      {/* <Login /> */}
    </div>
  );
}

export default App;
