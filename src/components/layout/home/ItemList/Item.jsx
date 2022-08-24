import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ item }) => {
	return (
		<section className="card-item">
			<h5>{item && item.name}</h5>
			<img src={item.pictureUrl} alt="image" style={{ maxHeight: 120 }} />
			<br />
			<span className="text-stock">Stock: {item.stock}</span>
			<p>
				<button className="btn btn-select">
					<Link to={`/product/${item.id}`}>Ver detalle</Link>
				</button>
			</p>
		</section>
	);
};

export default Item;
