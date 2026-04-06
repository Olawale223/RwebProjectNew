import apple from '../../Assets/FoodCourt/apple.svg';
import play from '../../Assets/FoodCourt/play.svg'; 

const DownloadPrompt = () => {
  return (
    <div className="download-prompt">
       
        <div className="fl-img">
          <a href="#" className="store-btn">
            <img src={apple} alt="Download on the App Store" className="app-store" />
            <div>Download on the App Store</div>
          </a>
          <a href="#" className="store-btn">
            <img src={play} alt="Get it on Google Play" className="play-store" />
            <div>Get it on Google Play</div>
          </a>
        </div>
      
    </div>
  );
};

export default DownloadPrompt;