import './App.css';
import Navbar from './Navbar';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
     <Header
     text="Deals and promotion"
     img ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
     />
     <Header
     text="Dresses"
     img ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
     />
     <Header 
     text="Get fit at home"
     img ="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
     />
     </div>
     <div>
     <Header
     text="Easy returns"
     img ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
     />
     <Header
     text="Electronics"
     img ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
     />
     
     </div>
    </div>
    
  );
}

export default App;
