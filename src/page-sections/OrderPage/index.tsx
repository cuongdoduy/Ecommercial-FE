import React, { useEffect, useState } from "react";
import Image from "next/image";
import OrderSuccess from "public/order-success.svg";
import VNPay from "public/vnpay-logo.svg";
import SuccessIcon from "public/success-icon.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { set } from "react-hook-form";

const OrderPage = () => {
  const router = useRouter();

  const [order, setOrder] = useState<{
    payment: number;
    userInfo: {
      fullName: string;
      phone: string;
      address: string;
    };
    status: string;
  }>({
    payment: 0,
    userInfo: {
      fullName: "",
      phone: "",
      address: "",
    },
    status: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");

  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  useEffect(() => {
    const orderId = router.query.crmOrderId;
    if (orderId) {
      setOrderId(orderId as string);
    }
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/order?orderId=${orderId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        const order = data.order;
        const userInfo = order.userInfo;
        setOrder({
          payment: order.payment,
          userInfo: {
            fullName: userInfo?.fullName,
            phone: userInfo?.phone,
            address: userInfo?.address,
          },
          status: order.status,
        });
      } catch (error) {
        console.error(error);
      }
    };
    orderId && fetchOrder();
  }, [router.query.crmOrderId]);

  const handleConfirmOrder = async () => {
    try {
      if (paymentMethod === "") {
        toast.error("Please choose payment method");
        return;
      }
      if (paymentMethod === "Cash") {
        const response = await fetch(`/api/order?orderId=${orderId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethod: paymentMethod,
          }),
        });
        const data = await response.json();
        if (data.status === "success") {
          toast.success(
            "Order successfully. Our staff will contact you soon. Now you will be redirected to home page in 3 seconds"
          );
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } else {
          toast.error("Order failed");
        }
      }

      if (paymentMethod === "vnpay") {
        const response = await fetch(`/api/checkout/createPaymentUrl`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId: orderId,
          }),
        });
        const data = await response.json();
        if (data.status === "success") {
          toast.success("Redirecting to payment gateway");
          setTimeout(() => {
            window.location.href = data.data;
          }, 1000);
        } else {
          toast.error("Order failed");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    order.status && (
      <div className="relative h-[100vh] bg-[#F7F7F7]">
        <div className="absolute left-[50%] -translate-x-[50%] bg-white shadow-lg rounded-lg min-h-[50vh] mt-[40px]">
          <div className="w-full bg-secondary px-[10px] py-[6px]">
            <header className="flex items-center justify-start w-fit mx-auto flex-wrap">
              <div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="m-2 h-14 w-16 rounded-md object-cover object-center"
                  src={OrderSuccess}
                  alt=""
                />
              </div>
              <h4 className="text-h4 font-bold mr-4">Order successfully</h4>
            </header>
          </div>
          {order.status !== "1" ? (
            <div className="px-[20px] my-[6px]">
              <p className="text-body text-center my-4">
                Thanks mr. John Doe for giving us the opportunity to serve you.
              </p>
              <div className="max-w-2xl mx-auto rounded">
                <div className="p-4 pb-0 flex justify-between bg-[#F7F7F7]">
                  <h4 className="text-h4 font-bold">ĐƠN HÀNG: </h4>
                  <div className="flex items-center">
                    <div className="text-blue-500">Quản lý đơn hàng</div>
                    <div className="text-red-500 ml-4">Huỷ</div>
                  </div>
                </div>
                <div className="mb-4 p-4 pb-0 bg-[#F7F7F7]">
                  <p className="text-body">
                    <span className="font-semibold">- Người nhận hàng:</span>{" "}
                    Anh {order.userInfo.fullName}, {order.userInfo.phone}
                  </p>
                  <p className="text-body">
                    <span className="font-semibold">- Giao đến: </span>
                    {order.userInfo.address} (nhân viên sẽ gọi xác nhận trước
                    khi giao)
                  </p>
                  <p className="text-body">
                    <span className="font-semibold">- Tổng tiền: </span>{" "}
                    <span className="text-red-600 font-semibold">
                      {order.payment}₫
                    </span>
                  </p>
                </div>
                <div className="mb-4 p-2 rounded bg-[rgba(251,110,46,.2)]">
                  <p className="text-[#fb6e2e] text-center">
                    Đơn hàng chưa được thanh toán
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold">Chọn hình thức thanh toán</h3>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        className="form-radio"
                        checked={paymentMethod === "Cash"}
                        onChange={() => handlePaymentMethod("Cash")}
                      />
                      <span className="ml-2">
                        Thanh toán tiền mặt khi nhận hàng
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        className="form-radio"
                        checked={paymentMethod === "vnpay"}
                        onChange={() => handlePaymentMethod("vnpay")}
                      />
                      <span className="ml-2 flex items-center">
                        <Image
                          src={VNPay}
                          alt="vnpay"
                          className="mr-2"
                          width={60}
                          height={50}
                        />
                        VNPAY QR
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded mb-[20px]"
                  onClick={() => handleConfirmOrder()}
                >
                  XÁC NHẬN
                </button>
              </div>
            </div>
          ) : (
            <div className="px-[20px] my-[6px]">
              {order.userInfo?.fullName != "" && (
                <p className="text-body text-center my-4">
                  Thanks {order.userInfo.fullName} for giving us the opportunity
                  to serve you.
                </p>
              )}
              <div className="flex items-center justify-center">
                <Image
                  src={SuccessIcon}
                  alt="vnpay"
                  className="mr-2"
                  width={200}
                  height={160}
                />
              </div>
              <p className="text-body text-center my-4">
                Your order is being processed. Our staff will contact you soon.
              </p>
              <Link href="/">
                <button className="w-full bg-blue-500 text-white py-2 rounded mb-[20px]">
                  Continue shopping
                </button>
              </Link>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    )
  );
};

export default OrderPage;
