  import React, {Component} from 'react';
  import Facebook from './Components/Facebook/Facebook';
  import Whatsapp from './Components/Whatsapp/Whatsapp';
  import Snapchat from './Components/Snapchat/Snapchat';
  import Tiktok from './Components/Tiktok/Tiktok';
  import Footer from './Components/Footer/Footer';
  import Instagram from './Components/Instagram/Instagram';
  import Navigation from './Components/Navigation/Navigation';
  // import Slideshow from './Components/Slideshow/Slideshow';
  import ParticlesBg from 'particles-bg'
  import './App.css';
// import Footer from './Components/Footer/Footer';

  class App extends Component {
    
    render(){
      return(
        <div className='App'>
          <ParticlesBg type="thick" bg={true} />
          <div>
            <Navigation/>
            <div style={{ padding: '3px'  }}></div>  
            <h2 style={{backgroundColor:'white'}}>Connect with us on social media</h2>
            <Facebook iconHref="https://www.facebook.com/share/1B2S2CukVM/?mibextid=wwXIfr"/>
            <Instagram iconHref="https://www.instagram.com/giftondime?igsh=Mm5sd3lraWhoMjg2"/>
            <Whatsapp iconHref="https://wa.me/+233202270634"/>
            <Tiktok iconHref="https://www.tiktok.com/@giftondime?_t=ZN-8zLQFpnX0mE&_r=1"/>
            <Snapchat iconHref="https://t.snapchat.com/wrIpyPi6"/>
            <Footer/>
          </div>
          <br/>
          <br/>
          
           {/* <div>
            <h1 style={{Color:'white'}}>My Image Slider</h1>
            <Slideshow/>
           </div> */}
          


        </div>

      );
    }
  }

  export default App;
