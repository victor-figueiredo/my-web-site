import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

export default function ProjectSlide({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full sm:max-w-[400px] lg:max-w-[500px]"
        style={
          { '--swiper-navigation-color': '#5B7AC4' } as React.CSSProperties
        }
      >
        {images?.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              src={image}
              alt={`${image}-${i}`}
              width={500}
              height={500}
              className="m-0-auto h-auto w-full object-cover sm:w-[400px] lg:w-[500px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
