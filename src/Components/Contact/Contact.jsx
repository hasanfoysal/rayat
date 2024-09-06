
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { IoIosSend } from "react-icons/io";
import Swal from "sweetalert2";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lze8di7', 'template_bn90hj1', form.current, {
        publicKey: '6NkVpjCB_Zga3kkGq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        },
      );
  };
    return (
      <div className="min-h-screen">
        <div className="lg:max-w-[1200px] mx-auto   lg:mt-48 shadow-lg mb-3  shadow-green-400  ">
            <h1 className="text-center text-white font-bold   ml-[50px] md:ml-[300px] lg:ml-[520px] justify-center text-4xl btn btn-outline border-0 border-b-4 border-green-400  shadow-sm shadow-green-400 mt-7">Contact Me</h1>
            <div className="flex flex-col lg:flex-row md:flex-row justify-between sm:mt-8 md:mt-10 lg:mt-12">
            <div className="card bg-base-100 w-64 md:w-80 mx-auto my-10 lg:w-[500px] border border-green-400  shadow-green-400 shadow-sm">
  
  <div className="card-body bg-black text-white">
<li className="lg:text-xl"><span className="text-slate-300 lg:text-lg ">phone:</span> +8801328363809</li>
<li className="lg:text-xl sm:text-lg "><span className="text-slate-300 lg:text-lg">Email:</span> rayathaque@gmail.com</li>
<li className="lg:text-xl"><span className="text-slate-300 lg:text-lg">Location:</span>House # 03 (2nd Floor), Ward # 08,  Block -  B, Pollibiddut, Dhaka</li>
<div className='lg:mt-6 mt-3 md:mt-4 flex space-x-4'>
      <a href="https://www.facebook.com/king.rayat.10/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="https://www.facebook.com/profile.php?id=100009256108068&mibextid=ZbWKwL" height="30" width="40" /></a>
      <a href="https://github.com/hossaincse" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="https://github.com/hasanfoysal" height="30" width="40" /></a>
      <a href="https://www.instagram.com/_sodium_._chloride_/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="https://www.facebook.com/arefin.ahmed.3956/" height="30" width="40" /></a>
      </div>


  </div>
</div>
<div  className="card bg-base-100 w-64 md:w-80 mx-auto my-10 lg:w-[500px] border border-green-400  shadow-green-400 shadow-sm">
  <div className="card-body bg-black text-white">
  <form ref={form} onSubmit={sendEmail}>
<label className="input input-bordered flex items-center w-48 lg:w-96 text-black gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" name="to_name" className="grow" placeholder="Username" />
</label>
<label className="input input-bordered flex w-48 lg:w-96 items-center mt-2 text-black gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" name="from_email" className="grow" placeholder="Email" />
</label>


<label className="input input-bordered flex w-48 lg:w-96 items-center text-black mt-2 gap-2">
<IoIosSend />
  <input type="text" name="message" className="grow" placeholder="Enter your message" />
</label>

<input className="btn btn-outline mt-4 border-green-400 text-green-400 shadow-md  shadow-green-400  hover:bg-green-400 hover:text-black" type="submit" value="Send" /> 
      {/* <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /> */}
    </form>
    
  </div>
</div>
</div>
        </div>
        </div>
    );
};

export default Contact;