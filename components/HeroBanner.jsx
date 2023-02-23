import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container bg-purple-300">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/products`}>
            <button
              type="button"
              className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="desc">
            <h5>Zootylala</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
