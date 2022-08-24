import React from "react";
import Item from "./Item";
import "./itemList.css";

const ItemList = ({ products }) => {
	return (
		<div className="item-list-container">
			{products.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
};

export default ItemList;
