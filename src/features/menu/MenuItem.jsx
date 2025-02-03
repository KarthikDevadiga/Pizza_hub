import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getItem } from "../cart/cartSlice";
import CartButtons from "../../ui/cartButton";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartItem.cart);
  const item = useSelector(getItem(id));
  const inCart = item?.quantity > 0;

  // const inCart = cart.find((ele) => ele.pizzaId === id);
  function handleAddToCart() {
    const item = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(item));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && !inCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
          {inCart && <CartButtons id={id} />}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
