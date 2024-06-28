import React from "react";
import Button from "../../components/Button";

const CallAction: React.FC = () => {
  return (
    <section className="bg-secondary text-center py-[70px] h-[292px]">
      <h2 className="text-h2 font-[700]">Sign up to become a Seller</h2>
      <p className="text-body">
        We provide detailed information about suppliers and distributors
      </p>
      <div className="flex justify-center mt-5 hover:opacity-[0.8]">
        <Button title="Sign up now" />
      </div>
    </section>
  );
};

export default CallAction;
