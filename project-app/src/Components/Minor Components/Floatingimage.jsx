import './CardComponent.css'
import phonee from '../../Assets/FoodCourt/phonee.png';
import DownloadPrompt from './DownloadPrompts';

export default function FloatingImage() {
  return (
    <>
      <div className="floating-cont">
        <div className="fl-cont-arr">
          <div className="fl-text-cont">
            <h1>Hungry?</h1>
            <p>Order now!</p>
            
          </div>
          <DownloadPrompt />
        </div>
        <div className="fl-img-cont">
          
          <img
            src={phonee}
            alt="Mobile app interface preview"
            
          />
        </div>
      </div>
      <div className="floating-cont-responsive">
        <img src={phonee} alt="App preview" style={{ width: '60vw', maxWidth: 220, margin: '0 auto 1rem', display: 'block' }} />
        <h1 style={{ fontSize: '1.3rem', color: 'white', margin: '0 0 0.5rem', textAlign: 'center' }}>Order food, fast!</h1>
        <p style={{ fontSize: '1rem', color: 'white', margin: '0 0 1rem', textAlign: 'center' }}>Get your favorite meals delivered to your door.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', width: '100%' }}>
          <DownloadPrompt />
        </div>
      </div>
    </>
  )
}

