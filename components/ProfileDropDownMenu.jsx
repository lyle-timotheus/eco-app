import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaDoorOpen, FaDoorClosed } from 'react-icons/fa';

import { signIn, signOut, useSession } from 'next-auth/react';

const ProfileDropDownMenu = () => {
  const [userStatus, setUserStatus] = useState('');
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session == undefined) {
      setUserStatus('G');
    } else {
      setUserStatus(session.user.email.charAt(0).toUpperCase());
    }
  }, [session]);

  console.log(status);
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="profile-button font-bold bg-indigo-600">
            <span className="text-lg">{userStatus}</span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link href={'/profile'}>
                  <button
                    type="button"
                    className="flex justify-start items-center bg-white text-gray-400 border-none flex w-full items-center py-2 px-2 rounded-md text-sm"
                    href="/profile"
                  >
                    <FaUserAlt />
                    <span className="ml-2">Profile</span>
                  </button>
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {!session ? (
                  <button
                    type="submit"
                    className="flex justify-start items-center bg-white text-gray-400 border-none flex w-full items-center px-2 py-2  text-sm"
                    href="/api/auth/signin"
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    <FaDoorOpen />
                    <span className="ml-2">Sign In</span>
                  </button>
                ) : (
                  <button
                    className="flex justify-start items-center bg-white text-gray-400 border-none flex w-full items-center px-2 py-2  text-sm"
                    type="submit"
                    href="/api/auth/signout"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    <FaDoorClosed />
                    <span className="ml-2">Sign Out</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

export default ProfileDropDownMenu;
