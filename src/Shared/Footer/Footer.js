import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, number, email, message });
  };

  return (
    <section className="text-accent text-center container mx-auto">
      <div className="grid xl:grid-cols-4 gap-8">
        <div className="shadow-md p-5 mb-10">
          <div className="flex flex-col justify-center items-center text-center py-5 my-5">
            <FiPhoneCall className="text-4xl" />
            <h6 className="text-2xl">+09xxxxxxxxxx23</h6>
          </div>
          <div className="flex flex-col justify-center items-center text-center py-5 my-5">
            <HiOutlineMail className="text-4xl" />
            <h6 className="text-2xl">example@gmail.com</h6>
          </div>
          <div className="flex flex-col justify-center items-center text-center py-5 my-5">
            <HiOutlineMail className="text-4xl" />
            <h6 className="text-2xl">example@gmail.com</h6>
          </div>
        </div>
        <div className="shadow-md p-5 mb-10">
          <h5 className="text-2xl font-semibold">Menu</h5>
          <div>
            <Link
              className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
              to="/"
            >
              Shop
            </Link>
            <Link
              className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
              to="/men"
            >
              Men's Collection
            </Link>
            <Link
              className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
              to="/women"
            >
              Women's Collection
            </Link>
            <Link
              className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
              to="/food"
            >
              Food & Spice
            </Link>
          </div>
          <div>
            
          </div>
        </div>
        <div className="shadow-md p-5 mb-10 col-span-2">
          <h5 className="text-2xl font-semibold">Contact us</h5>
          <h6 className="text-xl mt-2 mb-3">
            You can contact me if you need anything to know?
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-3">
              <label className="flex flex-col text-start my-2 w-[50%]">
                Name:
                <input
                  type="text"
                  value={name}
                  className="text-accent px-3 py-1 bg-transparent border-b rounded-md focus:border-secondary "
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="flex flex-col text-start w-[50%]">
                Number/Whatsapp
                <input
                  type="te;"
                  value={number}
                  className="text-accent px-3 py-1 bg-transparent border-b rounded-md focus:border-secondary "
                  onChange={(e) => setNumber(e.target.value)}
                />
              </label>
            </div>
            <label className="flex flex-col text-start">
              Email:
              <input
                type="email"
                value={email}
                className="text-accent px-3 py-1 bg-transparent border-b rounded-md focus:border-secondary "
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="flex flex-col text-start">
              Message:
              <textarea
                value={message}
                className="text-accent px-3 py-1 bg-transparent border-b rounded-md focus:border-secondary "
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button
              className="py-2 bg-primary text-secondary font-semibold hover:bg-accent w-full my-4"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="py-5 border-t ">
        <h6>
          Copyright © All right reserved by{" "}
          <Link className="text-primary font-semibold" to="/">
            BestBuy
          </Link>
        </h6>
      </div>
    </section>
  );
};

export default Footer;
