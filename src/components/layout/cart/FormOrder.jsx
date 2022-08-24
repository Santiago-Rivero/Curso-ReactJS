import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { myContext } from "../../CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import LoaderCircular from "../../shared/LoaderCircular";

const FormOrder = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [orderId, setOrderId] = useState("");
	const [showForm, setShowForm] = useState(true);
	const [loader, setLoader] = useState(true);
	const { products, getTotalPrice } = useContext(myContext);

	useEffect(() => {
		console.log(products);
		setLoader(false);
	}, []);

	const generateOrder = () => {
		setShowForm(false);
		setLoader(true);
		let totalPrice = getTotalPrice();
		const order = {
			buyer: { name, phone, email },
			items: products,
			total: totalPrice,
		};
		const db = getFirestore();
		const refCollection = collection(db, "orders");

		addDoc(refCollection, order).then((res) => {
			setOrderId(res.id);
			setLoader(false);
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("haciendo click", name);
		generateOrder();
	};

	return (
		<div>
			{showForm && (
				<form onSubmit={handleSubmit} className="form-container">
					<br />
					<h6>
						Completa el formulario con tus datos para poder generar tu orden
					</h6>
					<div className="row-form">
						<section className="label-form">
							<PersonIcon color="disabled" />
							<label>Nombre:</label>
						</section>
						<p>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</p>
					</div>
					<div className="row-form">
						<section className="label-form">
							<PhoneIphoneIcon color="disabled" />
							<label>Telefono:</label>
						</section>
						<p>
							<input
								type="text"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</p>
					</div>
					<div className="row-form">
						<section className="label-form">
							<AlternateEmailIcon color="disabled" />
							<label>E-mail:</label>
						</section>
						<p>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</p>
					</div>
					<Button variant="outlined" type="submit" color="success">
						Generar Orden
					</Button>
				</form>
			)}
			{loader && <LoaderCircular />}
			{!showForm && !loader && (
				<div>
					<p>Gracias por tu compra {name}</p>
					<p>Se genero tu orden satifactoriamente</p>
					<p>Nro de tramite: {orderId}</p>
				</div>
			)}
		</div>
	);
};

export default FormOrder;
