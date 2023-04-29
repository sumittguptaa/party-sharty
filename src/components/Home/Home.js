import React,{useState} from 'react'
import HeroSection from '../HeroSection/HeroSection'
import SearchBar from '../SearchBar/SearchBar'
import FeaturedRestaurant from '../FeaturedRestaurant/FeaturedRestaurant'
import SocialProof from '../SocialProof/SocialProof'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'
function Home() {
     const [showLoginPopup, setShowLoginPopup] = useState(false);

     const handleLoginClick = () => {
       setShowLoginPopup(true);
     };
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

  return (
    <div>
      {/* <Header onLoginClick={handleLoginClick} />
      <HeroSection />
      <SearchBar />
      <FeaturedRestaurant restaurants={restaurants} />
      <SocialProof />
      <Footer />
      {showLoginPopup && <Login onClose={() => setShowLoginPopup(false)} />} */}
      Home
    </div>
  );
}

export default Home