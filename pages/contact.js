import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { contact_us_validate } from '../lib/validate';
import SuccessAlert from '../components/SuccessAlert';
import ErrorAlert from '../components/ErrorAlert';

const contact = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 5000);
    }
  }, [submitted]);

  const formik = useFormik({
    initialValues: {
      email: '',
      subject: '',
      message: '',
    },
    validate: contact_us_validate,
    onSubmit: onSubmit,
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    // e.preventDefault();
    console.log('Sending');
    let data = {
      email: values.email,
      subject: values.subject,
      message: values.message,
    };
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        formik.resetForm();
        setShowSuccessAlert(true);
      }
    });
  }
  return (
    <section className="bg-gray-500 rounded-md my-4">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our business? Let us know.
        </p>
        <form className="space-y-8" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
              value={formik.email}
              {...formik.getFieldProps('email')}
            />
            {formik.errors.email && formik.touched.email ? (
              <ErrorAlert message={formik.errors.email} />
            ) : (
              <></>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Let us know how we can help you"
              required
              {...formik.getFieldProps('subject')}
            />
            {formik.errors.subject && formik.touched.subject ? (
              <ErrorAlert message={formik.errors.subject} />
            ) : (
              <></>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment..."
              {...formik.getFieldProps('message')}
            ></textarea>
            {formik.errors.message && formik.touched.message ? (
              <ErrorAlert message={formik.errors.message} />
            ) : (
              <></>
            )}
          </div>
          <button
            type="submit"
            className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send message
          </button>
        </form>
      </div>
      {showSuccessAlert ? <SuccessAlert /> : <></>}
    </section>
  );
};

export default contact;
