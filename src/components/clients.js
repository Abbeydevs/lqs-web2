"use client";

import React from "react";
import clients from "./client-data";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination  } from "swiper/modules";
import './clients.css'

export const Clients = () => {
  return (
    <div className="clients-container">
      <p>
        LQS (Life Quality Service) strives to offer excellent and affordable
        home care services to individuals and families in and around West
        Sussex.
      </p>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
        className="swiper-parent"
      >
        <div className="clients">
          {clients.map(({ id, client }) => {
            return (
              <SwiperSlide className="client" key={id}>
                <Image
                  src={client}
                  alt="client logos"
                  className="client-images"
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
