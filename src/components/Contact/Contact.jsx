import React, { useEffect, useRef } from 'react';
import { BlueBtn } from '../BlueBtn/BlueBtn';
import './contact.scss';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
const api = 'https://viewvilla.onrender.com/order';

export const Contact = () => {
  const loadingRef = useRef();
  const successRef = useRef();

  const fullname = useRef();
  const phone = useRef();
  const message = useRef();

  const initialValues = {
    fullName: '',
    phoneNumber: '',
    message: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Enter your full name!'),
    phoneNumber: Yup.string()
      .required('Enter your phone number!')
      .min(9, 'Phone number must be more than 9 digits!')
      .max(12, 'Phone number must be less than 12 digits!'),
  });

  const onSubmit = (values, evt) => {
    loadingRef.current.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    axios.post(api, values).then((data) => {
      if (data.status == 200) {
        loadingRef.current.style.display = 'none';
        successRef.current.style.display = 'flex';
        evt.resetForm();

        setTimeout(() => {
          document.body.style.overflow = 'auto';
          successRef.current.style.display = 'none';
        }, 2000);
      }
    });
  };

  return (
    <>
      <section className="contact">
        <div className="contact__inner">
          <motion.div
            className="contact__form"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <h2>Hoziroq bron qiling</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <label>
                  <Field
                    type="text"
                    ref={fullname}
                    name="fullName"
                    placeholder="Ism"
                  />
                  <span className="err-message">
                    <ErrorMessage name="fullName" />
                  </span>
                </label>
                <label>
                  <Field
                    type="tel"
                    name="phoneNumber"
                    ref={phone}
                    placeholder="Telefon"
                  />
                  <span className="err-message">
                    <ErrorMessage name="phoneNumber" />
                  </span>
                </label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Xabar"
                  cols="30"
                  ref={message}
                />
                <BlueBtn
                  type="submit"
                  bg="linear-gradient(269.47deg, #1D4ED8 2.21%, #052D9C 97.11%)"
                  text="Order"
                  displayIcon="none"
                />
              </Form>
            </Formik>
          </motion.div>
        </div>
        <div className="contact__map">
          <iframe
            id="myIframe"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5958.752156129644!2d70.05670205677457!3d41.6908163928344!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQxJzI3LjAiTiA3MMKwMDMnNDAuNSJF!5e0!3m2!1sru!2s!4v1685981916239!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5958.752156129644!2d70.05670205677457!3d41.6908163928344!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQxJzI3LjAiTiA3MMKwMDMnNDAuNSJF!5e0!3m2!1sru!2s!4v1685981916239!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className="center" ref={loadingRef}>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div class="check" ref={successRef}>
        <svg
          id="successAnimation"
          class="animated"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <path
            id="successAnimationResult"
            fill="#D8D8D8"
            d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
          />
          <circle
            id="successAnimationCircle"
            cx="35"
            cy="35"
            r="24"
            stroke="#979797"
            stroke-width="2"
            stroke-linecap="round"
            fill="transparent"
          />
          <polyline
            id="successAnimationCheck"
            stroke="#979797"
            stroke-width="2"
            points="23 34 34 43 47 27"
            fill="transparent"
          />
        </svg>
      </div>
    </>
  );
};
