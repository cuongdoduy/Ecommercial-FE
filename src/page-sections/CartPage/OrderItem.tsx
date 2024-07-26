import { CartItem } from "@/contexts/CartContext";
import Image from "next/image";
import React from "react";
import Trash from "public/trash.svg";
import AddIcon from "public/addition.svg";
import MinusIcon from "public/subtraction.svg";
import useDebounce from "@/hooks/useDebounce";

interface OrderItemProps extends CartItem {
  handleIncrement: (cart: CartItem) => void;
  handleDecrement: (cart: CartItem) => void;
  handleRemoveItem: (id: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = (cart) => {
  const [quantity, setQuantity] = React.useState(cart.quantity);

  const quantityDebounce = useDebounce(quantity, 500);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  React.useEffect(() => {
    // newValue > cart.quantity
    cart.handleDecrement({
      ...cart,
      quantity: Number(quantityDebounce),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityDebounce]);

  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-3 h-[184px]">
        <Image
          src={cart.image}
          alt="product"
          className="w-full h-full rounded-[20px]"
          width="0"
          sizes="100vw"
          height="0"
        />
      </div>
      <div className="col-span-5 flex flex-col justify-between">
        <div>
          <h4 className="text-h4 font-bold">{cart.name}</h4>
          <p className="text-body text-gray-500 my-4">Size: {cart.size}</p>
          <p className="text-body text-gray-500">Color: {cart.color}</p>
        </div>

        <h3 className="text-h3 font-bold">${cart.price}</h3>
      </div>
      <div className="col-span-2 flex flex-col justify-between items-end">
        <div
          className="cursor-pointer"
          onClick={() => {
            cart.handleRemoveItem(cart.id);
          }}
        >
          <Image src={Trash} alt="delete" width={20} height={20} />
        </div>
        <div className="py-[12px] px-[32px] first:ml-0 bg-[#F0F0F0] text-black flex items-center justify-between min-w-[200px] rounded-[62px]">
          <div
            className={`${
              cart.quantity === 1 && "opacity-[0.3] cursor-auto"
            } cursor-pointer`}
            onClick={() => cart.quantity != 1 && handleDecrement()}
          >
            <Image src={MinusIcon} alt="minus" width={16} height={16} />
          </div>
          <p className="font-[700]">{quantity}</p>
          <div className="cursor-pointer" onClick={() => handleIncrement()}>
            <Image src={AddIcon} alt="minus" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
