"use client";
import Link from "next/link";
import { Logo } from "../components/svg/Logo.jsx";
import { LogoIcon } from "../components/svg/LogoIcon";

export const Page2 = () => {
  const BACKEND_ENDPOINT = "http://localhost:3000/sign-up";

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      password: event.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();

    console.log(data);
  };
  return (
    <div className="">
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full flex items-center justify-end pr-[126px]">
          <div className="w-[384px] h-[426px] flex flex-col gap-10">
            <div className="flex justify-center items-center gap-[10px] p-[6px]">
              <LogoIcon />
              <Logo />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold leading-8 text-[#0F172A]">
                Create Geld account
              </h1>
              <p className="text-base font-normal text-[#334155]">
                Sign up below to create your Wallet account
              </p>
            </div>

            <div>
              <form
                className="flex flex-col gap-3"
                action=""
                onSubmit={handleOnSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered text-[#A3A3A3] text-base w-full  border  border-[#D1D5DB] bg-[#F3F4F6]"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered text-[#A3A3A3] text-base w-full  border  border-[#D1D5DB] bg-[#F3F4F6]"
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered text-[#A3A3A3] text-base w-full  border  border-[#D1D5DB] bg-[#F3F4F6]"
                />
                <input
                  type="text"
                  placeholder="Re-password"
                  className="input input-bordered text-[#A3A3A3] text-base w-full  border  border-[#D1D5DB] bg-[#F3F4F6]"
                />
                <button className="btn btn-primary rounded-[20px] text-xl leading-7 text-white">
                  Log in
                </button>
              </form>
            </div>
            <div className="flex gap-1 h-8 justify-center items-center">
              <p className="text-[#0F172A] text-base font-normal">
                Don't have account?
              </p>
              <Link href="./sign-in">
                <button className="text-[#0166FF] text-base font-normal leading-6">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF] w-1/2 h-full"></div>
      </div>
    </div>
  );
};
export default Page2;
