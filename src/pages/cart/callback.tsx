import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const LoadingScreenForRedicrect = () => {
  const router = useRouter();
  const [transactionID, setTransactionID] = React.useState<string>("");

  React.useEffect(() => {
    const fetchTransaction = async () => {
      const res = await fetch(
        `/api/checkout/transaction?transactionId=${transactionID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        router.push(
          "/cart/order-success?crmOrderId=" + data.transaction.order_id
        );
      }
    };
    // Polling to check transaction status
    const interval = setInterval(() => {
      fetchTransaction();
    }, 2000);
    return () => clearInterval(interval);
  }, [transactionID, router]);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get("vnp_TxnRef"));
    if (params.get("vnp_TxnRef")) {
      setTransactionID(params.get("vnp_TxnRef") || "");
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>

      <div className="h-[100vh] flex flex-col gap-4 items-center justify-center">
        <div className="-ml-[0.75rem] w-16 h-16 border-t-[1px] border-primary rounded-full animate-spin"></div>
        <p className="text-center text-primary text-xl font-bold">Loading...</p>
      </div>
    </>
  );
};
export default LoadingScreenForRedicrect;
