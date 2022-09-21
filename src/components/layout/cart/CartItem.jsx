import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { myContext } from "../../CartContext";

const CartItem = ({ item, setLoader }) => {
	//removeItem
	const { removeItem } = useContext(myContext);
	const subTotal = (price, qty) => {
		return `${(price * qty).toFixed(2)}`;
	};

	const handleDeleteClick = () => {
		removeItem(item.id);
		setLoader(true);
	};
	return (
		<div className="row-item">
			<span>{item && item.name}</span>
			<span>${item && item.price.toFixed(2)}</span>
			<span>{item && item.quantity}</span>
			<span>${item && subTotal(item.price, item.quantity)}</span>
			<span>
				<Button variant="outlined" color="error">
					<DeleteIcon onClick={handleDeleteClick} />
				</Button>
			</span>
		</div>
	);
};

export default CartItem;
