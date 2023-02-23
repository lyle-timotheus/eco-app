import { useState, useEffect } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import TopBanner from './TopBanner';
import ProfileDropDownMenu from './ProfileDropDownMenu';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { data: session, status } = useSession();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [userStatus, setUserStatus] = useState('');

  useEffect(() => {
    if (session == undefined) {
      setUserStatus('Login');
    } else {
      setUserStatus(session.user.email.charAt(0).toUpperCase());
    }
  }, [session]);

  console.log(status);

  return (
    <>
      <TopBanner />
      <div className="navbar-container">
        <div className="left-side-nav-container">
          <a href="/">
            <Image src="/logo.jpg" height={80} width={80} alt="" />
          </a>

          {/* {!session ? (
            <a
              className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-12 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </a>
          ) : (
            <a
              className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </a>
          )} */}
        </div>

        <div className="right-side-nav-container">
          {!session ? (
            <a
              className="mr-2 group relative flex justify-center rounded-md border border-transparent bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </a>
          ) : (
            <ProfileDropDownMenu />
          )}
          {/* <ProfileDropDownMenu /> */}
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          {showCart && <Cart />}

          {/* <Link href={'/profile'}>
            <button
              type="button"
              className="profile-button font-bold bg-indigo-600 "
              href="/profile"
            >
              <span className="text-lg">{userStatus}</span>
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
