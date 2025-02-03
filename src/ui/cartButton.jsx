import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  getItem,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

export default function CartButtons({ id }) {
  const dispatch = useDispatch();
  const item = useSelector(getItem(id));

  function handleDecreaseItemQuantity() {
    if (item?.quantity === 1) {
      dispatch(deleteItem(id));
    } else {
      dispatch(decreaseItemQuantity(id));
    }
  }

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(id));
  }
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleDecreaseItemQuantity}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-lg font-bold"
      >
        −
      </button>

      <span className="text-lg font-semibold">{item.quantity}</span>

      <button
        onClick={handleIncreaseItemQuantity}
        className="px-3 py-1 bg-yellow-400 hover:bg-yellow-300 text-white rounded-full text-lg font-bold"
      >
        +
      </button>
    </div>
  );
}
