import React from 'react'
import config from "@config/config.json";

export default function about() {
  const { meta_image } = config.metadata;
  return (
        <p>
          Designed and built by 
          <span className="inline-flex items-baseline">
            <img src={meta_image} alt="" className="self-center w-5 h-5 rounded-full mx-1" />
            <span>Nendy Azhad Nurahman</span>
          </span>
        </p>
  )
}
