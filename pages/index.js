import React from 'react';
import { useSession } from 'next-auth/react';
import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner } from '../components';
import ContactBanner from '../components/ContactBanner';
import WhyUs from '../components/WhyUs';

const Home = ({ products, bannerData }) => {
  const { data: session } = useSession();

  console.log('session', session);
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      {/* HERE WE WILL CONDITIONAL RENEDER WHAT THE USER WILL SEE AND WHAT THE GUEST USER WILL SEE */}
      {session ? (
        <div>
          <h3>{session.user.name}</h3> <h3>{session.user.email}</h3>
        </div>
      ) : (
        <h3>Guest User</h3>
      )}

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Fabrics of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
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

  return {
    props: { products, bannerData },
  };
};

export default Home;
