import {React , useState} from 'react'
import './RestaurantPage.css'
// import Header from '../Header/Header'

const RestaurantPage = () => {
    const [selectedWishList,setselectedWishList] = useState(false)
  return (
    <div>
        {/* <Header /> */}
        <div className="list-of-restaurants">
            <div className="each-restaurant">
            <img className='each-restaurant-image' src="/images/restaurant2.jpg" alt="" height="220rem" width="300rem" />
            
            <div style={{display:"flex"}}>
            <div><p style={{marginTop:"0.3rem",fontWeight:"500"}}>Lucknow,India</p>
            <p style={{marginTop:"-1rem",color:"grey"}}>500km away</p>
            </div>
            <div>
            {(selectedWishList) ? ( <img src="/images/pink-heart-removebg-preview.png" style={{marginLeft:"9.4rem"}} className='wishlist-logo' alt="" height="20rem" width="27rem"onClick={() => {
                setselectedWishList(false)
            }} />) : 
            (<img src="/images/png-clipart-white-heart-shape-illustration-heart-outline-wedding-hearts-love-angle-removebg-preview.png" className='wishlist-logo' alt="" height="20rem" width="40rem" onClick={() => {
                setselectedWishList(true)
            }}/>)}
            </div>
            </div>
            <p style={{marginTop:"-1rem",color:"grey"}}>5-10 May</p>
            <p style={{marginTop:"-1rem"}}><span style={{fontWeight:"500"}}>₹2000</span> per night</p>
            </div>

            <div className="each-restaurant">
            <img className='each-restaurant-image' src="/images/restaurant2.jpg" alt="" height="220rem" width="300rem" />
            
            <div style={{display:"flex"}}>
            <div><p style={{marginTop:"0.3rem",fontWeight:"500"}}>Lucknow,India</p>
            <p style={{marginTop:"-1rem",color:"grey"}}>500km away</p>
            </div>
            <div>
            {(selectedWishList) ? ( <img src="/images/pink-heart-removebg-preview.png" style={{marginLeft:"9.4rem"}} className='wishlist-logo' alt="" height="20rem" width="27rem"onClick={() => {
                setselectedWishList(false)
            }} />) : 
            (<img src="/images/png-clipart-white-heart-shape-illustration-heart-outline-wedding-hearts-love-angle-removebg-preview.png" className='wishlist-logo' alt="" height="20rem" width="40rem" onClick={() => {
                setselectedWishList(true)
            }}/>)}
            </div>
            </div>
            <p style={{marginTop:"-1rem",color:"grey"}}>5-10 May</p>
            <p style={{marginTop:"-1rem"}}><span style={{fontWeight:"500"}}>₹2000</span> per night</p>
            </div>

            <div className="each-restaurant">
            <img className='each-restaurant-image' src="/images/restaurant2.jpg" alt="" height="220rem" width="300rem" />
            
            <div style={{display:"flex"}}>
            <div><p style={{marginTop:"0.3rem",fontWeight:"500"}}>Lucknow,India</p>
            <p style={{marginTop:"-1rem",color:"grey"}}>500km away</p>
            </div>
            <div>
            {(selectedWishList) ? ( <img src="/images/pink-heart-removebg-preview.png" style={{marginLeft:"9.4rem"}} className='wishlist-logo' alt="" height="20rem" width="27rem"onClick={() => {
                setselectedWishList(false)
            }} />) : 
            (<img src="/images/png-clipart-white-heart-shape-illustration-heart-outline-wedding-hearts-love-angle-removebg-preview.png" className='wishlist-logo' alt="" height="20rem" width="40rem" onClick={() => {
                setselectedWishList(true)
            }}/>)}
            </div>
            </div>
            <p style={{marginTop:"-1rem",color:"grey"}}>5-10 May</p>
            <p style={{marginTop:"-1rem"}}><span style={{fontWeight:"500"}}>₹2000</span> per night</p>
            </div>

            <div className="each-restaurant">
            <img className='each-restaurant-image' src="/images/restaurant2.jpg" alt="" height="220rem" width="300rem" />
            
            <div style={{display:"flex"}}>
            <div><p style={{marginTop:"0.3rem",fontWeight:"500"}}>Lucknow,India</p>
            <p style={{marginTop:"-1rem",color:"grey"}}>500km away</p>
            </div>
            <div>
            {(selectedWishList) ? ( <img src="/images/pink-heart-removebg-preview.png" style={{marginLeft:"9.4rem"}} className='wishlist-logo' alt="" height="20rem" width="27rem"onClick={() => {
                setselectedWishList(false)
            }} />) : 
            (<img src="/images/png-clipart-white-heart-shape-illustration-heart-outline-wedding-hearts-love-angle-removebg-preview.png" className='wishlist-logo' alt="" height="20rem" width="40rem" onClick={() => {
                setselectedWishList(true)
            }}/>)}
            </div>
            </div>
            <p style={{marginTop:"-1rem",color:"grey"}}>5-10 May</p>
            <p style={{marginTop:"-1rem"}}><span style={{fontWeight:"500"}}>₹2000</span> per night</p>
            </div>
        </div>

    </div>
  )
}

export default RestaurantPage