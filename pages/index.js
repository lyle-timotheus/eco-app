import React from 'react';
import { useSession } from 'next-auth/react';
import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner } from '../components';
import ContactBanner from '../components/ContactBanner';
import WhyUs from '../components/WhyUs';

const Home = ({ products, bannerData, bestSellingData }) => {
  const { data: session } = useSession();

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      {/* HERE WE WILL CONDITIONAL RENEDER WHAT THE USER WILL SEE AND WHAT THE GUEST USER WILL SEE */}
      {session ? (
        <div>
          <h3>{session.user.name}</h3> <h3>{session.user.email}</h3>
        </div>
      ) : (
        ''
      )}

      <div className="mt-16">
        <h2 className="block text-3xl font-extrabold sm:text-5xl text-center">
          Best
          <span className="font-extrabold text-purple-300">
            {' '}
            Selling Products
          </span>
        </h2>
        <strong className="text-center block font-extrabold mt-2">
          Fabrics of many variations
        </strong>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {bestSellingData?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />

      <WhyUs />

      <ContactBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const bestSellingProductsQuery =
    '*[_type == "product" && bestSelling == true]';
  const bestSellingData = await client.fetch(bestSellingProductsQuery);

  return {
    props: { products, bannerData, bestSellingData },
  };
};

export default Home;
