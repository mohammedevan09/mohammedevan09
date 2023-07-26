import { Swiper, SwiperSlide } from 'swiper/react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './App.css'
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { data } from './data'

function App() {
  return (
    <>
      <div>
        <img
          src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="bg-image"
        />
        <div className="container">
          <h1 className="heading">The Paradise</h1>
          <div className="image-container">
            <br />
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              className="swiper_container"
            >
              {data?.map((item) => (
                <SwiperSlide>
                  <img src={item?.img} alt="" className="container-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swipe-left">
              Swipe Right <BsFillArrowRightCircleFill />
            </div>
            <div className="link-btn">
              <a href="https://www.facebook.com/hamimalrashid22B">
                <button>Shop Now</button>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
