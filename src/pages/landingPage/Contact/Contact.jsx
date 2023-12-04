import { useEffect, useState } from 'react';
import axios from 'axios';

import { CONST } from '@/utils/constants';

import { ModalFailed, ModalSuccess } from './ModalContact';
import { ContactInfo } from './SideContact';

const data = {
  title: 'Kontak Kami',
  desc: 'Kami Menantikan Cerita Unik Anda. Mulailah Perbincangan, Temukan Inspirasi, dan Bergabung dengan Komunitas Petualang Destimate!',
};

export const Contact = () => {
  const initialForm = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
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
      first_name: !/^[a-zA-Z0-9 ]*$/.test(inputForm.first_name)
        ? 'Nama depan tidak boleh mengandung simbol'
        : inputForm.first_name.length < 3
        ? 'Nama depan minimal 3 karakter'
        : '',
      email: !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputForm.email)
        ? 'Kesalahan format email'
        : '',
      phone_number:
        inputForm.phone_number.length < 11 || inputForm.phone_number.length > 13
          ? 'No. Telephone harus 11-13 karakter'
          : inputForm.phone_number[0] !== '0'
          ? 'No. Telephone harus dimulai dengan angka 0'
          : '',
      message: inputForm.message.length < 10 ? 'Pesan minimal 10 karakter' : '',
    };
  };

  useEffect(() => {
    setErrors(validateInput(inputForm));
  }, [
    inputForm.first_name,
    inputForm.last_name,
    inputForm.email,
    inputForm.phone_number,
    inputForm.message,
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${CONST.BASE_URL_API}/cooperation`, inputForm);
      setIsSuccess(true);
    } catch (error) {
      console.error(error.response ? error.response.data.message : error);
      setIsFailed(true);
      throw new Error(error);
    } finally {
      setInputForm(initialForm);
      setTimeout(() => {
        setIsSuccess(false);
        setIsFailed(false);
      }, 2000);
    }
  };

  return (
    <section id="kontak">
      <div className="my-6 py-7  mt-0 md:px-7">
        <div className="mx-auto flex flex-col items-center gap-2 text-center">
          <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
            {data.title}
          </h1>
          <p className="max-w-[500px] font-sans text-xs sm:text-sm md:max-w-[600px] ">
            {data.desc}
          </p>
          <div className="mt-5 flex max-h-full w-screen flex-col bg-white shadow-[-13px_4px_53px_0px_rgba(0,0,0,0.25)] md:max-h-full md:max-w-[880px] md:flex-row md:rounded-2xl xl:max-h-[430px] xl:max-w-[1000px]">
            <ContactInfo />
            <form onSubmit={onSubmit} className="flex flex-col gap-0 px-10 py-4 md:py-8">
              <div className="mb-5 flex flex-col justify-between gap-5 md:max-w-full md:flex-row md:gap-3 xl:max-w-full">
                <FormInput
                  type="text"
                  placeholder="Nama Depan"
                  name="first_name"
                  value={inputForm.first_name}
                  onChange={handleChange}
                  onFocus={formFocus}
                  onBlur={formUnFocus}
                  error={errors.first_name}
                  onTouched={onTouched}
                />
                <FormInput
                  type="text"
                  placeholder="Nama Belakang"
                  name="last_name"
                  value={inputForm.last_name}
                  onChange={handleChange}
                  onFocus={formFocus}
                  onBlur={formUnFocus}
                  error={errors.last_name}
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
                  name="phone_number"
                  value={inputForm.phone_number}
                  onChange={handleChange}
                  onFocus={formFocus}
                  onBlur={formUnFocus}
                  error={errors.phone_number}
                  onTouched={onTouched}
                />
              </div>
              <div>
                <div className="my-0 py-1 md:max-w-full xl:max-w-full">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="block w-full p-0 placeholder:text-sm text-sm appearance-none border-0 border-b-2 border-gray-200 bg-transparent focus:border-gray-500 focus:outline-none focus:ring-0"
                    type="text"
                    placeholder="Pesan Anda"
                    value={inputForm.message}
                    onChange={handleChange}
                    onFocus={formFocus}
                    onBlur={formUnFocus}
                  ></textarea>
                </div>
                {onTouched && errors.message && (
                  <p className="-mb-4 text-left font-sans text-xs sm:text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="mt-3 text-center sm:text-left md:mt-5">
                <button
                  className={
                    Object.values(errors).some((error) => error !== '')
                      ? 'mt-4 cursor-not-allowed rounded-xl bg-primary-100 px-12 py-2 font-semibold text-sm text-white'
                      : 'mt-8 cursor-pointer rounded-xl bg-primary-100 px-12 py-2 font-semibold text-sm text-white hover:bg-opacity-90'
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
      <div className="flex items-center py-1 md:max-w-[300px] lg:w-[300px] xl:w-[280px]">
        <input
          className="block w-full appearance-none border-0 border-b-2 text-sm placeholder:text-sm border-gray-200 bg-transparent px-0 focus:border-gray-500 focus:outline-none focus:ring-0"
          style={{ outline: 'none' }}
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
        <p className="-mb-4 text-left font-sans text-xs sm:text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};
