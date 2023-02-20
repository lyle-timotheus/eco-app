import React from 'react';
import Link from 'next/link';

const ContactBanner = () => {
  return (
    <section className="relative rounded-2xl bg-[url(/contact-banner-image.avif)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us be your
            <strong className="block font-extrabold text-indigo-700">
              perfect fabric partner
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Feel free to send us a message to see if we can meet your fabric
            needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link href={'/contact'}>
              <a className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto">
                Contact Us
              </a>
            </Link>

            <Link href={'/contact'}>
              <a className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
