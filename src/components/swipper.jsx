import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  return (
    <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
      <style>
        {`
          /* Pagination Dots */
          .swiper-pagination-bullet {
            background-color: black !important; /* Change dots color */
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background-color: black!important; /* Active dot color */
            opacity: 1;
          }

          /* Navigation Arrows */
          .swiper-button-next, .swiper-button-prev {
            color: black !important; /* Arrow Color */
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Gap between images
        slidesPerView={1} // Default (mobile)
        breakpoints={{
          640: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 4 }, // Desktop
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide
        // navigation // Arrows for next/prev
        // pagination={{ clickable: true }} // Dots below
        loop={true} // Infinite loop
      >
        {/* Image Slides */}
        <SwiperSlide>
          <img
            src="https://static01.nyt.com/images/2020/09/02/travel/02safari/02safari-superJumbo.jpg"
            alt="Pizza"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://t4.ftcdn.net/jpg/10/63/13/23/360_F_1063132360_0v2hMljnPEEdCGdqXHKiqmPCJCUkUURG.jpg"
            alt="Burger"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/field-covered-greenery-surrounded-by-zebras-sunlight-blue-sky_181624-18150.jpg"
            alt="Pasta"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/16:9/w_3599,h_2024,c_limit/Safari-GettyImages-143917249.jpg"
            alt="Sushi"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/697689066/photo/three-giraffe-in-national-park-of-kenya.jpg?s=612x612&w=0&k=20&c=PkC1FAG_dl35Q89Qrfsr_N7siaC645dy8EmP5SekYCI="
            alt="Cake"
            style={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/16:9/w_3599,h_2024,c_limit/Safari-GettyImages-143917249.jpg"
            alt="Fries"
            style={styles.image}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// Styles for images
const styles = {
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  },
};

export default ImageSlider;
