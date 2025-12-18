import { slidesData } from "../constants/staticGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./ui/Button";
import CircleFlag from "./CircleFlag";
import bgToday from "../assets/images/bg-today-large.svg";
const HomeGallery = ({ setLocation }) => {
  return (
    <div className="w-full lg:max-w-[800px] mx-auto my-5">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper h-[300px]"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="rounded-lg w-full object-cover h-full"
            />
            <img
              src={bgToday}
              className="h-full absolute overflow-hidden top-0 opacity-30 z-10 left-0 w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-10 bg-neutral-900/80 p-5 rounded-lg max-w-[350px] z-50">
              <div>
                <div className="flex gap-2.5 items-center pb-1">
                  {slide.flag && (
                    <CircleFlag countryCode={slide.flag} className="w-5" />
                  )}
                  <h2 className="font-bric text-3xl tracking-wide">
                    {slide.title}
                  </h2>
                </div>
                <p className="pb-4 text-sm text-neutral-200">
                  {slide.description}
                </p>
                {slide.soundtrack && (
                  <p className="text-xs pb-1 text-neutral-200">
                    <span className="pr-1 font-semibold">
                      Soundtrack:
                    </span>
                    {slide.soundtrack}
                  </p>
                )}
                {slide.movie && (
                  <p className="text-xs text-neutral-200">
                    <span className="pr-1 font-semibold">
                      Movie:
                    </span>{" "}
                    {slide.movie}
                  </p>
                )}
<div className="pt-3">
     <Button
                  label="Check local weather"
                  type="desc"
                  onClickHandle={() => setLocation(slide.title)}
                />
</div>
             
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeGallery;
