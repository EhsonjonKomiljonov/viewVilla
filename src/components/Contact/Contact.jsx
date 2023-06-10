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
    loadingRef.current.classList.add('load');
    loadingRef.current.textContent = '';
    console.log(loadingRef);

    axios.post(api, values).then((data) => {
      if (data.status == 200) {
        loadingRef.current.classList.remove('load');
        loadingRef.current.classList.add('success');
        evt.resetForm();

        setTimeout(() => {
          loadingRef.current.classList.remove('success');
          loadingRef.current.textContent = 'Order';
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
                  Ref={loadingRef}
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2979.371876932252!2d70.0612199!3d41.6909071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af6b81ce257389%3A0xf0e1bf81977fdd5!2sView%20Villa%20%7C%20DACHA%20SIJJAK!5e0!3m2!1sru!2s!4v1686239926843!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.3700216097195!2d70.05854841982116!3d41.69094715844369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af6b81ce257389%3A0xf0e1bf81977fdd5!2sView%20Villa%20%7C%20DACHA%20SIJJAK!5e0!3m2!1sru!2s!4v1686292028391!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
