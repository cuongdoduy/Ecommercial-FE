import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { set } from "react-hook-form";
import Link from "next/link";
import { CartContext, CartItem } from "@/contexts/CartContext";
import { toast, ToastContainer } from "react-toastify";
const CheckoutPage = () => {
  const { cartItems, getCartTotal } = useContext(CartContext) || {
    cartItems: [],
  };

  const [cartItemsClient, setCartItemsClient] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setCartItemsClient(cartItems);
    setTotal((getCartTotal && getCartTotal()) || 0);
  }, [cartItems, getCartTotal]);

  const [address, setAddress] = React.useState({
    fullName: "",
    phone: "",
    address: "",
    ward: "",
    district: "",
    city: "",
  });

  const [cities, setCities] = React.useState<
    Array<{
      province_id: string;
      province_name: string;
      province_type: string;
    }>
  >([]);
  const [districts, setDistricts] = React.useState<
    Array<{
      district_id: string;
      district_name: string;
      district_type: string;
      province_id: string;
    }>
  >([]);
  const [wards, setWards] = React.useState<
    Array<{
      ward_id: string;
      ward_name: string;
      ward_type: string;
      district_id: string;
    }>
  >([]);

  useEffect(() => {
    fetch("https://vapi.vnappmob.com/api/province")
      .then((response) => response.json())
      .then((data) => {
        setCities(data.results);
      });
  }, []);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = e.target.value;
    fetch(`https://vapi.vnappmob.com/api/province/district/${cityId}`)
      .then((response) => response.json())
      .then((data) => {
        setDistricts(data.results);
        setWards([]);
      });
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const districtId = e.target.value;
    fetch(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
      .then((response) => response.json())
      .then((data) => {
        setWards(data.results);
      });
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const cityName = cities.find(
      (city) => city.province_id === address.city
    )?.province_name;

    const districtName = districts.find(
      (district) => district.district_id === address.district
    )?.district_name;

    const wardName = wards.find(
      (ward) => ward.ward_id === address.ward
    )?.ward_name;

    const fullAddress = `${address.address}, ${wardName}, ${districtName}, ${cityName}`;
    const userInfo = {
      address: fullAddress,
      phone: address.phone,
      fullName: address.fullName,
    };

    const res = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        userInfo: userInfo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.status === "success") {
        toast.success("Order placed successfully");
        console.log(data);
        const orderId = data.order._id;
        setTimeout(() => {
          window.location.href = `/cart/order-success?crmOrderId=${orderId}`;
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } else {
      toast.error("Internal Server Error");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="/cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </Link>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {/* <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="text-lg font-bold">$138.99</p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="mt-auto text-lg font-bold">$238.99</p>
              </div>
            </div> */}
            {cartItemsClient.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.image}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.name}</span>
                  <span className="float-right text-gray-400">
                    ({item.color} - {item.size}) x {item.quantity}
                  </span>
                  <p className="mt-auto text-lg font-bold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              htmlFor="full_name"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Full name
            </label>
            <div className="relative">
              <input
                type="text"
                id="full_name"
                name="fullName"
                onChange={handleAddressChange}
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-2 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
            </div>
            <label
              htmlFor="phone"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                onChange={handleAddressChange}
                name="phone"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-2 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your phone number here"
              />
            </div>

            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row flex-wrap">
              <select
                name="city"
                value={address.city}
                onChange={handleCityChange}
                className="w-6/12 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Choose City/Province</option>
                {cities.map((city) => (
                  <option key={city.province_id} value={city.province_id}>
                    {city.province_name}
                  </option>
                ))}
              </select>
              <select
                name="district"
                value={address.district}
                onChange={handleDistrictChange}
                className="w-6/12 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Choose District</option>
                {districts.map((district) => (
                  <option
                    key={district.district_id}
                    value={district.district_id}
                  >
                    {district.district_name}
                  </option>
                ))}
              </select>
              <select
                name="ward"
                value={address.ward}
                onChange={handleAddressChange}
                className="w-6/12 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Choose Ward</option>
                {wards.map((ward) => (
                  <option key={ward.ward_id} value={ward.ward_id}>
                    {ward.ward_name}
                  </option>
                ))}
              </select>
              <div className="relative flex-shrink-0 sm:w-6/12">
                <input
                  type="text"
                  name="address"
                  onChange={handleAddressChange}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/82862d96f28cd0c385b2afb862be8393.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">${total}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$10.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                ${total + 10}
              </p>
            </div>
          </div>
          <button
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            onClick={() => handleSubmit()}
          >
            Place Order
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CheckoutPage;
