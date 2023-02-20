import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';
import { BsGoogle, BsFillLockFill } from 'react-icons/bs';

export default function Contact() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      // firstName: '',
      // lastName: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: register_validate,
    onSubmit: onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };
    await fetch('http://localhost:3000/api/auth/signup', options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push('http://localhost:3000/login');
      });
  }

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  // const [formSuccess, setFormSuccess] = useState(false);
  // const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // const handleInput = (e) => {
  //   const fieldName = e.target.name;
  //   const fieldValue = e.target.value;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [fieldName]: fieldValue,
  //   }));
  // };

  // const submitForm = (e) => {
  //   // We don't want the page to refresh
  //   e.preventDefault();

  //   const formURL = e.target.action;
  //   const data = new FormData();
  //   console.log(data.redirect_url);

  //   // Turn our formData state into data we can use with a form submission
  //   Object.entries(formData).forEach(([key, value]) => {
  //     data.append(key, value);
  //   });

  //   // POST the data to the URL of the form
  //   fetch(formURL, {
  //     method: 'POST',
  //     body: data,
  //     headers: {
  //       accept: 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFormData({
  //         name: '',
  //         email: '',
  //         password: '',
  //         confirmPassword: '',
  //       });

  //       setFormSuccess(true);
  //       setFormSuccessMessage(data.submission_text);
  //     });
  // };

  return (
    <div>
      <h1>Register form</h1>
      {/* {formSuccess ? (
        <div>{formSuccessMessage}</div>
      ) : ( */}
      <form
        method="POST"
        action="/api/auth/signup"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            // onChange={handleInput}
            // value={formData.name}
            {...formik.getFieldProps('name')}
          />
        </div>
        {formik.errors.name && formik.touched.name ? (
          <span>{formik.errors.name}</span>
        ) : (
          <></>
        )}

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            // onChange={handleInput}
            // value={formData.email}
            {...formik.getFieldProps('email')}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <span>{formik.errors.email}</span>
        ) : (
          <></>
        )}

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            // onChange={handleInput}
            // value={formData.password}
            {...formik.getFieldProps('password')}
          />
        </div>
        {formik.errors.password && formik.touched.password ? (
          <span>{formik.errors.password}</span>
        ) : (
          <></>
        )}

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            // onChange={handleInput}
            // value={formData.confirmPassword}
            {...formik.getFieldProps('confirmPassword')}
          />
        </div>
        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
          <span>{formik.errors.confirmPassword}</span>
        ) : (
          <></>
        )}

        <button type="submit">Sign Up</button>
      </form>
      {/* )} */}

      {/* NEW UI CHANGES */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up for your free account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href={'/login'}>
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  already have an account?
                </span>
              </Link>
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  {...formik.getFieldProps('firstName')}
                  required
                  className="mb-6 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <span>{formik.errors.firstName}</span>
                ) : (
                  <></>
                )}
              </div>

              <div>
                <label className="sr-only">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  {...formik.getFieldProps('lastName')}
                  required
                  className="mb-6 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <span>{formik.errors.lastName}</span>
                ) : (
                  <></>
                )}
              </div>

              <div>
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  {...formik.getFieldProps('email')}
                  required
                  className="mb-6 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formik.errors.email && formik.touched.email ? (
                  <span>{formik.errors.email}</span>
                ) : (
                  <></>
                )}
              </div>

              <div>
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...formik.getFieldProps('password')}
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formik.errors.password && formik.touched.password ? (
                  <span>{formik.errors.password}</span>
                ) : (
                  <></>
                )}
              </div>

              <div>
                <label className="sr-only">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  {...formik.getFieldProps('confirmPassword')}
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <span>{formik.errors.confirmPassword}</span>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* NEW UI CHANGES END */}
    </div>
  );
}
