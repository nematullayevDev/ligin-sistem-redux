import { FaRegUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import google from "../../public/google.svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/usersSLice";
import { useNavigate } from "react-router-dom";

export function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const paswordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      pasword: paswordRef.current.value,
    };
    dispatch(register(user));
    nameRef.current.value = null;
    emailRef.current.value = null;
    paswordRef.current.value = null;
    navigate("/login");
  }

  return (
    <div className="">
      <div className="w-[550px] mx-auto flex flex-col items-center mt-8 bg-white  rounded-[10px] dark:bg-[#181818]">
        <h1 className="text-3xl font-bold pt-[10px] dark:text-white">
          Let’s go!
        </h1>
        <form className="mt-[30px]" onSubmit={handleSubmit}>
          {/* NAME INPUT */}
          <div className="w-full ]">
            <h3 className="mb-[10px] text-[17px] dark:text-white">Full Name</h3>
            <div className="flex items-center bg-white gap-2 border-solid border-2 rounded-[10px] border-[#797979] dark:bg-[#181818]">
              <FaRegUser className="text-[#797979] ml-[10px] " />
              <input
                ref={nameRef}
                type="text"
                name=""
                id=""
                className="w-[420px] py-[14px] outline-none pr-[10px] rounded-[10px] dark:bg-[#181818] dark:text-white"
                placeholder="Full Name..."
              />
            </div>
          </div>

          {/* MAIL INPUT */}
          <div className="w-full mt-[20px] ">
            <h3 className="mb-[10px] text-[17px] dark:text-white">Email</h3>
            <div className="flex items-center bg-white gap-2 border-solid border-2 rounded-[10px] border-[#797979] dark:bg-[#181818] ">
              <IoMailOutline className="text-[#797979] ml-[10px] " />
              <input
                ref={emailRef}
                type="text"
                name=""
                id=""
                className="w-[420px] py-[14px] outline-none pr-[10px] rounded-[10px] dark:bg-[#181818] dark:text-white"
                placeholder="Email..."
              />
            </div>
          </div>

          {/* PASSWORD INPUT */}
          <div className="w-full mt-[20px]">
            <h3 className="mb-[10px] text-[17px] dark:text-white">
              Choose Password
            </h3>
            <div className="flex items-center bg-white gap-2 border-solid border-2 rounded-[10px] border-[#797979] dark:bg-[#181818]">
              <FaLock className="text-[#797979] ml-[10px] " />
              <input
                ref={paswordRef}
                type="text"
                name=""
                id=""
                className="w-[420px] py-[14px] outline-none pr-[10px] rounded-[10px] dark:bg-[#181818] dark:text-white"
                placeholder="Minimum 8 characters..."
              />
            </div>
          </div>
          {/* BUTTON  */}
          <button className="w-[455px] mt-[30px] rounded-[10px] bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] py-[20px] hover: hover:bg-gradient-to-l transition duration-1000  text-white text-xl font-bold ">
            Sign Up
          </button>
        </form>

        {/* GOOGLE BUTTON */}
        <button className="w-[455px]  border-solid border-2 rounded-[10px] border-[#797979] py-[20px] mt-4 font-[600] text-[#797979] relative">
          <div className="flex items-center justify-center gap-4">
            <img src={google} alt="" width={29} height={29} />
            Sign Up with Google
          </div>
        </button>
        <span className="text-xl font-[400] mt-[20px] mb-[20px] dark:text-white">
          or login with SSO
        </span>
        {/* FOOTER */}
        <div className="border-solid border  border-[#9f9e9e] w-full"></div>
        <span className="w-[450px] text-[12px] p-[10px] dark:text-white">
          By lobby the button above, you agree to our Terms of Service and
          Privacy Policy.
        </span>
      </div>
    </div>
  );
}
