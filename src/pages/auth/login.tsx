import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "public/logo.svg";
import Link from "next/link";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";

const Login = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [callBackURL, setCallBackURL] = useState("");

  useEffect(() => {
    const callbackurl =
      window && new URLSearchParams(window.location.search).get("callbackUrl");
    const error =
      window && new URLSearchParams(window.location.search).get("error");
    if (error) {
      toast.error("Invalid credentials, please try again");
    }
    setCallBackURL(callbackurl || "/");
  }, []);

  return (
    <>
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
              <form
                name="Credentials"
                className="max-w-screen-lg mt-4 mb-2 w-80 sm:w-96"
                method="post"
                action="/api/auth/callback/credentials"
              >
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
                <div className="flex flex-col gap-6 mb-1">
                  <div className="relative w-full min-w-[200px]">
                    <label className="">
                      <h6 className="block mb-1 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                        Email
                      </h6>
                      <input
                        name="email"
                        placeholder="john@gmail.com"
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </label>
                  </div>

                  <div className="relative w-full min-w-[200px]">
                    <label className="">
                      <h6 className="block mb-1 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                        Password
                      </h6>
                      <input
                        name="password"
                        autoComplete="new-password"
                        type="password"
                        placeholder="********"
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </label>
                  </div>
                </div>

                <button
                  className="mt-6 block w-full select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                >
                  Log in
                </button>
                <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                  Not registered? &nbsp;
                  <Link
                    href={`/auth/sign-up?callbackUrl=${encodeURIComponent(
                      callBackURL
                    )}`}
                    className="text-gray-900 underline text-primary font-bold"
                  >
                    Create account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Login;
