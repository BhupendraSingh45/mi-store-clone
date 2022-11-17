
import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router ,Route, Routes} from "react-router-dom"
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {obj} from "./Data/data"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"

import Videos from './components/Videos.js';
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"

const banner=obj.banner;
function App () {
  return (
    <div>
      <Router> 
      <Prenavbar/>
      <Navbar/>
      <Slider start={banner.start} />
     <Offers offers={obj.offer} />
     <Heading text="STAR PRODUCT"/>
     <StarProduct starProduct={obj.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>
     <Routes>
     <Route exact element={<HotAccessories music={obj.hotAccessories.music} musicCover={obj.hotAccessoriesCover.music}/>} path="/music" />
     <Route exact element={<HotAccessories smartDevice={obj.hotAccessories.smartDevice} smartDeviceCover={obj.hotAccessoriesCover.smartDevice}/>}
    path="/smartDevice"/>
     <Route exact element={<HotAccessories home={obj.hotAccessories.home} homeCover={obj.hotAccessoriesCover.home}/>} path="/home" />
     <Route exact element={<HotAccessories lifeStyle={obj.hotAccessories.lifeStyle} homeCover={obj.hotAccessoriesCover.lifeStyle}/>} path="/lifestyle" />
     <Route exact element={<HotAccessories mobileAccessories={obj.hotAccessories.mobileAccessories} mobileAccessoriesCover={obj.hotAccessoriesCover.mobileAccessories}/>}
    path="/mobileAccessories"/>
    
     </Routes>
     <Heading text="PRODUCT REVIEWS"/>
     <ProductReviews productReviews={obj.productReviews}/>
     <Heading text="VIDEO"/>
     <Videos Videos={obj.videos}/>
     <Heading text="IN THE PRESS"/>
     <Banner banner={obj.banner}/>
     <Footer footer={obj.footer} />
      </Router>
    </div>

  );
}

export default App;
