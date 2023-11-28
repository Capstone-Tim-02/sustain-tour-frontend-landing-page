import React, { useRef, useState, useEffect } from 'react';
import Emailjs from '@emailjs/browser';

import { ContactInfo } from './SideContact';
import { ModalSuccess, ModalFailed } from './ModalContact';

const data = {
  title: 'Kontak Kami',
  desc: 'Kami Menantikan Cerita Unik Anda. Mulailah Perbincangan, Temukan Inspirasi, dan Bergabung dengan Komunitas Petualang Destimate!',
};

export const Contact = () => {
  const form = useRef();
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [inputForm, setInputForm] = useState(initialForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [onTouched, setOnTouched] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const formFocus = () => {
    setOnTouched(true);
  };

  const formUnFocus = () => {
    setOnTouched(false);
  };

  const modalClose = () => {
    setIsSuccess(false);
    setIsFailed(false);
  };

  const validateInput = (inputForm) => {
    return {
      firstName: /\s/.test(inputForm.firstName)
        ? 'Nama depan tidak boleh mengandung spasi'
        : inputForm.firstName.length === 0
        ? 'Nama depan harus diisi'
        : '',

      email: !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputForm.email)
        ? 'Invalid email format.'
        : '',

      phone:
        inputForm.phone[0] !== '0' && inputForm.phone.length !== 0
          ? 'No. Telephone harus dimulai dengan angka 0'
          : (inputForm.phone.length < 11 || inputForm.phone.length > 13) &&
            inputForm.phone.length !== 0
          ? 'No. Telephone harus 11-13 karakter'
          : '',

      message: inputForm.message.length === 0 ? 'Pesan Tidak boleh kosong' : '',
    };
  };

  useEffect(() => {
    setErrors(validateInput(inputForm));
  }, [
    inputForm.firstName,
    inputForm.lastName,
    inputForm.email,
    inputForm.phone,
    inputForm.message,
  ]);

  const handleSendEmail = (e) => {
    e.preventDefault();

    Emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIK_KEY
    ).then(
      () => {
        setInputForm(initialForm);
        setIsSuccess(true);
      },
      () => {
        setInputForm(initialForm);
        setIsFailed(true);
      }
    );

    form.current.reset();
    setTimeout(() => {
      setIsSuccess(false);
      setIsFailed(false);
    }, 3000);
  };

  return (
    <section id="kontak">
      <div className="my-6 p-7">
        <div className="mx-auto flex flex-col items-center gap-2 text-center">
          <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
            {data.title}
          </h1>
          <p className="max-w-[500px] font-sans text-sm sm:text-lg md:max-w-[600px] md:text-base">
            {data.desc}
          </p>
          <div className="mt-5 flex max-h-full max-w-full flex-col rounded-2xl bg-white shadow-[-13px_4px_53px_0px_rgba(0,0,0,0.25)] md:max-h-full md:w-[1000px] md:flex-row xl:max-h-[430px]">
            <ContactInfo />
            <form
              ref={form}
              onSubmit={handleSendEmail}
              className="flex flex-col gap-0 px-10 py-4 md:gap-3 md:py-12"
            >
              <div className="mb-5 flex flex-col justify-between gap-4 md:max-w-full md:flex-row md:gap-3 xl:max-w-full">
                <FormInput
                  type="text"
                  placeholder="Nama Depan"
                  name="firstName"
                  value={inputForm.firstName}
                  onChange={handleChange}
                  onFocus={formFocus}
                  onBlur={formUnFocus}
                  error={errors.firstName}
                  onTouched={onTouched}
                />
                <FormInput
                  type="text"
                  placeholder="Nama Belakang"
                  name="lastName"
                  value={inputForm.lastName}
                  onChange={handleChange}
                  onFocus={formFocus}
                  onBlur={formUnFocus}
                  error={errors.lastName}
                  onTouched={onTouched}
                />
              </div>
              <div className="mb-5 flex flex-col justify-between gap-4 md:max-w-full md:flex-row md:gap-3 xl:max-w-full">
                <FormInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={inputForm.email}
                  onChange={handleChange}
                  onFocus={formFocus}
                  onBlur={formUnFocus}
                  error={errors.email}
                  onTouched={onTouched}
                />
                <FormInput
                  type="number"
                  placeholder="No. Telephone"
                  name="phone"
                  value={inputForm.phone}
                  onChange={handleChange}
                  onFocus={formFocus}
                  onBlur={formUnFocus}
                  error={errors.phone}
                  onTouched={onTouched}
                />
              </div>
              <div>
                <div className="my-0 border-b-2 border-gray-300 py-1 md:max-w-full xl:max-w-full">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full appearance-none border-none bg-transparent px-0 py-1 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="Pesan Anda"
                    value={inputForm.message}
                    onChange={handleChange}
                    error={errors.message}
                    onFocus={formFocus}
                    onBlur={formUnFocus}
                  ></textarea>
                </div>
                {onTouched && errors.message && (
                  <p className="text-left text-sm text-red-400 md:text-xs">{errors.message}</p>
                )}
              </div>
              <div className="mt-3 text-left md:mt-0">
                <button
                  className={
                    Object.values(errors).some((error) => error !== '')
                      ? 'mt-4 cursor-not-allowed rounded-xl bg-primary-100 px-12 py-2 font-semibold  text-white'
                      : 'mt-8 cursor-pointer rounded-xl bg-primary-100 px-12 py-2 font-semibold text-white hover:bg-opacity-90'
                  }
                  disabled={Object.values(errors).some((error) => error !== '')}
                  type="submit"
                >
                  Kirim
                </button>
              </div>
            </form>
            {isSuccess && <ModalSuccess onClick={modalClose} />}
            {isFailed && <ModalFailed onClick={modalClose} />}
          </div>
        </div>
      </div>
    </section>
  );
};

const FormInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  onFocus,
  onBlur,
  onTouched,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center border-b-2 border-gray-300 py-1 md:max-w-[300px] lg:w-[300px] xl:w-[280px]">
        <input
          className="w-full appearance-none border-none bg-transparent px-0 py-1 leading-tight text-gray-700 focus:outline-none"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
      </div>
      {onTouched && error && (
        <p className="text-left font-sans text-sm text-red-400 md:text-xs">{error}</p>
      )}
    </div>
  );
};
