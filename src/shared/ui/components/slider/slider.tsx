'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NextButton } from '@/shared/ui/components/slider/next-button';
import { PrevButton } from '@/shared/ui/components/slider/prev-button';

import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css';

export function Slider({ slides }: { slides: React.ReactNode[] }) {
  return (
    <section style={{ position: 'relative' }}>
      <div style={{ maxWidth: '80vw', margin: '0 auto' }}>
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          slidesPerView={2}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            1080: { slidesPerView: 2 },
          }}
          loop
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={'slide' + i}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="arrowContainer">
        <span className="arrow-left arrow">
          <PrevButton />
        </span>
        <span className="arrow-right arrow">
          <NextButton />
        </span>
      </div>
    </section>
  );
}
