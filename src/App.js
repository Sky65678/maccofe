
import './App.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from './Carousel/Carousel';
import Carouselswipe from './Carousel-swipe/Carousel-swipe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className='revo-img'></div>
        </div>
         <div>         
          <div className='main-img'>
            <div className='your-coffe-img'>YOUR<br></br><span className='big-brown'> PERSONALIZED</span><br></br>  COFFEE</div>
          </div>
        </div>
         <div className='sale-menu'>
            <div className='sale-icon'>
              <div className='sale-img'></div>
              <div className='under-sale-img'></div>
            </div>
            <div>
              <ul>
                <li>TRANG CHỦ</li>
                <li>COFFEE</li>
                <li>PHIN MẠ MÀU</li>
                <li>COMBO PHIN PHÊ</li>
                <li>GIFTSET</li>
                <li>LIÊN HỆ</li>
              </ul>
            </div>
        </div>
      </header>
        <body>
          <div className='Personalized-Coffee'>
            <div className='Personalized-Coffee-Text'>
              <p id='Personalized-text'>Your Personalized Coffee</p>
              <h2>COFFEE BUILD YOUR BASE</h2>
            </div>
            <div className='Personalized-Coffee-Flex'>
              <div className='Personalized-Coffee-Flex-Text'>
                <div className='Personalized-Coffee-Img1'></div>
                <h4>Nguồn gốc</h4>
                <p>Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>
              </div>
              <div className='Personalized-Coffee-Flex-Text'>
                <div className='Personalized-Coffee-Img2'></div>
                <h4>Chất lượng</h4>
                <p>Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.</p>
              </div>
              <div className='Personalized-Coffee-Flex-Text'>
                <div className='Personalized-Coffee-Img3'></div>
                <h4>Các loại hạt</h4>
                <p>70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.</p>
              </div>
              <div className='Personalized-Coffee-Flex-Text'>
                <div className='Personalized-Coffee-Img4'></div>
                <h4>Pha chế</h4>
                <p>Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.</p>
              </div>
          </div>
          </div>
          <div className='Carousel'>
            <div className='Carousel-blue'></div> 
              <p id='Carousel-p'>Choose Your Favorite</p>
              <h3 id='Carousel-h3'>CHUẨN GU ĐÚNG VỊ</h3>
              <Carousel/>
          </div>
          <div className='Carousel-swipe'>
            <div className='Carousel-white'></div>
              <p id='Carousel-p'>Best Gift For Best Friend</p>
              <h3 id='Carousel-h3'>GIFTSET</h3>
            <Carouselswipe/>
            
          </div>
        </body>
    </div>
  );
}

export default App;
