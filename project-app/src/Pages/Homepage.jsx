import  '../App.css';
import Floatingimage from '../Components/Minor Components/Floatingimage';
import DownloadPrompt from '../Components/Minor Components/DownloadPrompts';


function Homepage() {
  return (
    <>
      <div className="Homepage-container">
        <h1>welcome to FoodCourt</h1>
        <h4>Chef Prepared meals, at the click of a button</h4>
          <DownloadPrompt/>
          <Floatingimage/>
       
    </div>
    </>
  );
}

export default Homepage;
