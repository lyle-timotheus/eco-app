import React from 'react';
import Link from 'next/link';

const about = () => {
  return (
    <section class="bg-white my-12">
      <div className="relative rounded isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
        <svg
          viewBox="0 0 577 310"
          aria-hidden="true"
          className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
        >
          <path
            id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
            fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
            fillOpacity=".3"
            d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
          />
          <defs>
            <linearGradient
              id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
              x1="614.778"
              x2="-42.453"
              y1="26.617"
              y2="96.115"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 577 310"
          aria-hidden="true"
          className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
        >
          <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
        </svg>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-500">
              Powering innovation at{' '}
              <span class="font-extrabold">200,000+</span> companies worldwide
            </h2>
            <p class="mb-4 font-light text-gray-600">
              Zootylala_Kidz is a mommy dream-team of two. Our passion for
              children apparel and decor comes from being mothers ourselves and
              knowing what is essential in our day to day to routine. Our luxury
              bespoke items use our own designs, printed locally and made with
              love, creative unique items with a twist.
            </p>
            <p class="mb-4 font-medium">
              We offer muslin and flannel swaddle blankets, large enough to be
              used by toddlers too. Burp Cloths with luxurious towel backing,
              that can also be used as an impromptu change mat. Bandana Bibs
              with soft waffle weave backing. The press studs can be adjusted
              for two sizes to ensure that your little one is comfortable.
              Designer Dummy Clips with metal ends, soft and easy to clean.
              Milestone Card Set of 24 cards, designed to capture your precious
              moments for the first year of your child's milestone
            </p>
            <Link href={`/product`}>
              <a
                href="#"
                class="text-gray-500 inline-flex items-center font-medium hover:text-gray-800"
              >
                Product Catologue
                <svg
                  class="ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>{' '}
      </div>
    </section>
  );
};

export default about;
