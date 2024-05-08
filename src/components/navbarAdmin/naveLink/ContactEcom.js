
import { useForm } from 'react-hook-form';
import { FaEnvelope } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { BsFillGeoAltFill } from "react-icons/bs";
import NaveLinks from '../NavLinks';
import Footer from '../../footer/footer';

function ContactEcom() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
    <div className='bg-gray-700 py-[20px] h-auto px-10'>
    <NaveLinks className=" mb-[8%]"/>
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
      <div className="flex flex-col  items-center">
        <h1 className="relative inline uppercase font-bold text-[24px] text-white">
          Contact
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[2px] w-[70px]"></span>
        </h1>
        <div className='flex mt-[5rem] gap-5 items-center text-gray-500 hover:bg-gray-500 hover:text-white px-5 rounded py-3'>
        <FaEnvelope className='text-lg'/>
        <p className='text-lg '>marhaba@gmail.com</p>
        </div>

        <div className='flex mt-[5rem] gap-5 items-center text-gray-500 hover:bg-gray-500 hover:text-white px-5 rounded py-3'>
       
        <FaPhone className='text-lg ' />
        <p className='text-lg '>221 78 345 30 53</p>
        </div>

        <div className='flex mt-[5rem] items-center gap-5 items-center text-gray-500 hover:bg-gray-500 hover:text-white px-5 rounded py-3'>
        <BsFillGeoAltFill className='text-lg '/>
        <p className='text-lg '>Scat Urban</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 bg-white  px-[50px]  py-[30px] w-[28rem] rounded-[10px]">
        <h1 className='font-bold text-2xl text-center text-gray-700 my-3'>MARHABA STORE</h1>
        <div className="flex flex-col mb-3">
          <label>Votre Nom</label>
          <input
            {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            className="p-2 outline-none border border-white border-b-[3px] border-b-gray-700  "
          />
          {errors.name?.type === 'required' && (
            <span className="text-red-500">Your name is required</span>
          )}
          {errors.name?.type === 'minLength' && (
            <span className="text-red-500 mt-1">Your name min length is 3</span>
          )}
          {errors.name?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your name max length is 100
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Votre Email</label>
          <input
            {...register('email', {
              required: true,
              minLength: 3,
              maxLength: 100,
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            className="p-2 outline-none border border-white border-b-[3px] border-b-gray-700"
          />
          {errors.email?.type === 'pattern' && (
            <span className="text-red-500 mt-1">Your email is invalid</span>
          )}
          {errors.email?.type === 'required' && (
            <span className="text-red-500 mt-1">Your email is required</span>
          )}
          {errors.email?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your email min length is 3
            </span>
          )}
          {errors.email?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your email max length is 100
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            {...register('message', {
              minLength: 3,
              maxLength: 500,
            })}
            cols="5"
            rows="3"
            className="resize-none border  border-white border-b-[3px] border-b-gray-700 outline-none p-2"
          ></textarea>
          {errors.message?.type === 'minLength' && (
            <span className="text-red-500 mt-1">
              Your message min length is 3
            </span>
          )}
          {errors.message?.type === 'maxLength' && (
            <span className="text-red-500 mt-1">
              Your message max length is 500
            </span>
          )}
        </div>
        <button className="bg-gray-700 text-white uppercase duration-300 rounded-full p-2 flex gap-5 text-center items-center justify-center w-[50%]">
        <BsFillSendFill />
          <span>Envoyer</span>
        </button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default ContactEcom;