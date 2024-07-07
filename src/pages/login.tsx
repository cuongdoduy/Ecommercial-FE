import React from "react";
import Image from "next/image";
import Logo from "public/logo.svg";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import GoogleLogo from "public/logo-google.png";
import { MetaTags } from ".";

const Login = () => {
  return (
    <>
      <MetaTags />
      <main className="bg-[#F7F7F7] fixed top-0 bottom-0 left-0 right-0">
        <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
          <header className="flex items-center justify-start w-[70%] mx-auto flex-wrap">
            <h4 className="text-h4 font-bold mr-4">Login to</h4>
            <Link href="/">
              <Image src={Logo} alt="logo" priority />
            </Link>
          </header>
          <p className="text-body text-center">
            We provide detailed information about suppliers and distributors
          </p>
          <div className="flex items-center justify-between p-[40px] bg-white rounded-lg max-w-[500px] my-8">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-none rounded-xl bg-clip-border">
              <Button
                variant="outlined"
                size="lg"
                className="mt-6 flex h-12 items-center justify-center gap-2 border-[#0000000F]"
                fullWidth
              >
                <Image src={GoogleLogo} alt="google" className="h-6 w-6" />{" "}
                Continue with google
              </Button>
              <hr className="my-6 border border-gray-200" />
              <form className="max-w-screen-lg mt-4 mb-2 w-80 sm:w-96">
                <div className="flex flex-col gap-6 mb-1">
                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Username
                  </h6>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      placeholder="john_doe"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>

                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Password
                  </h6>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      autoComplete="new-password"
                      type="password"
                      placeholder="********"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>

                <button
                  className="mt-6 block w-full select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Log in
                </button>
                <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                  Not registered? &nbsp;
                  <Link
                    href="/signup"
                    className="text-gray-900 underline text-primary font-bold"
                  >
                    Create account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
