
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation';

// import styles bundle

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import Left from "../assets/images/hero-icon-left.svg"
import Right from "../assets/images/hero-icon-right.svg"
import SliderImage from "../assets/images/slider-banner.jpg"



const Hero = () => {
 
 
    const SliderBanner = [
        {
            id:1,
            title: "unleash your MBA potention",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image: SliderImage
        },
        {
            id:2,
            title: "unleash your MBA potention",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image: SliderImage
        },
        {
            id:3,
            title: "unleash your MBA potention",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image: SliderImage
        },
    ];
  return (
    <>
    <section className="px-[2rem] lg:px-[10rem] 2xl:max-w-[130rem] xl:max-w-[90rem] lg:max-w-[72rem] md:max-w-[60rem] sm:max-w-[54rem] max-w-screen mx-auto py-1 relative">
    <span className="absolute top-[40%] left-0">
        <img src={Left} alt className="w-[6rem]" />
    </span>
    <span className="absolute top-[40%] right-0 -z-50">
        <img src={Right} alt />
    </span>
    <div className={`md:py-10 md:space-y-10 py-4 bg-cover frame`}>
        <h1 className="2xl:max-w-full xl:max-w-6xl sm:max-w-3xl font-black 2xl:text-[3rem] xl:text-[2.7rem] lg:text-[2.4rem] md:text-[2rem] mb-6">
        <strong className="font-bold md:leading-[2.8rem] lg:leading-[3.2rem] xl:leading-[3.6rem]">
            <b className="text-primary-2"> Companies </b>
            <b className="text-primary-1"> save over 70% </b>
            <b className="text-primary-2"> of time in hiring by utilizing </b>
            <b className="text-primary-1"> the aI@mbaroles.com </b>
        </strong>
        </h1>
        <div className="my-2 flex flex-col 2xl:mx-24 p-5 bg-white border rounded-md shadow-lg sm:items-center sm:justify-between">
        <div className="mb-3 relative md:w-[20rem] xl:w-[30rem] xl:mb-4 ">
            <input type="text" className="block w-full px-3 py-1 text-sm xl:text-lg border-b border-gray-600 peer ps-7 focus:ring-0" placeholder="Job title, skills, experience level or company" />
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-1">
            <svg className="flex-shrink-0 fill-gray-500 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            </div>
        </div>
        <div className="mb-3 relative md:w-[20rem] xl:w-[30rem] xl:mb-4">
            <input type="text" className="block w-full px-3 py-1 text-sm xl:text-lg border-b border-gray-600 peer ps-7 focus:ring-0" placeholder="All locations or Remote" />
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-1">
            <svg className="flex-shrink-0 fill-gray-500 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            </div>
        </div>
        <div className="col-span-11 sm:col-span-11 md:col-span-3 flex justify-center">
            <button type="button" className="px-4 xl:px-8 sm:py-2 md:py-2.5 lg:py-3 py-1.5 bg-primary-1 text-xs sm:text-sm !text-gray-200 font-bold rounded-md">
            See Matching Jobs
            </button>
        </div>
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-between pt-6">
        <p className="w-1/2 sm:w-3/4 lg:text-lg md:text-base font-display text-[0.85rem] font-semibold text-primary-1">
            Use advanced search for additional job search options
        </p>
        <div className="flex mt-4 md:mt-0 justify-start md:ml-[8.75rem] sm:w-1/4 lg:pr-4">
            <button type="button" className="px-4  lg:py-2 py-1.5  flex items-center justify-start gap-1 bg-primary-1 md:text-sm text-xs !text-gray-300 rounded">
            <span className="text-white text-[1rem] me-[5px]"><i className="fa-solid fa-arrow-up" /></span>
            Upload your CV
            </button>
        </div>
        </div>
        {/* Swiper */}
        <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation = {{
          nextEl : '.swiper-button-next',
          prevEl : '.swiper-button-prev',
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper w-100 md:h-[200px] relative mt-[1.5rem] max-w-[100%]">
        <div className="swiper-wrapper h-[350px] md:h-[200px]">
           {
            SliderBanner.map((slider) => (
            <SwiperSlide  className=" me-1 w-[100%]" key={slider.id}>
            <div className="flex-row md:flex md:relative">
                <div className="sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] bg-white">
                <div className="hidden md:block lg:top-[-3%] lg:w-[21rem] lg:h-[203%] xl:w-[23rem] xl:h-[150%] absolute right-[16rem] -top-[3.25rem] w-[52%] 2xl:w-[56%] 2xl:-top-[8rem] desktop-lg:w-[168%] desktop-lg:top-[-51rem] desktop-lg:h-[194%] h-[135%] bg-white rotate-45 border-primary-1 border-t-[16px] border-r-[16px] rounded-tr-[1.5rem] rounded-r-[1.5rem]" />
                <div className="px-2 z-40 md:absolute text-center md:w-[50%] h-[100] md:h-[200px] md:top-[3rem] lg:top-[1px] xl:top-[3rem] left-[5rem]">
                    <h2 className="font-display font-semibold text-md md:text-2xl text-center text-primary-1 pt-[20px] capitalize">
                     {slider.title}
                    </h2>
                    <p className="font-display font-normal text-primary-1 py-[10px] text-sm">
                     {slider.des}
                    </p>
                </div>
                </div>
                <div className="sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]">
                <img src={slider.image} className="bg-cover h-[200px] w-[100%]" alt="" />
                </div>
            </div>
            </SwiperSlide>
            ))
           }
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-prev absolute top-[50%] left-[.75rem] z-20">
            <i className="fa-solid fa-angle-left text-black text-[1rem] md:text-[1.5rem] py-1 px-2 border-2 border-primary-2 rounded-[50%]" />
        </div>
        <div className="swiper-button-next absolute md:top-[50%] md:right-[1.25rem]">
            <i className="fa-solid fa-angle-right text-black text-[1rem] md:text-[1.5rem] py-1 px-2 border-2 border-primary-2 rounded-[50%]" />
        </div>
        </Swiper>
    </div>
    </section>

    </>
  )
}

export default Hero