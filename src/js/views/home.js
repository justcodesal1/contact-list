import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import ContactCard from "../component/ContactCard"

export class Home extends React.Component {
	render() {
		return (
			<ul className="text-center mt-5">
			<ContactCard />
			</ul>
		);
	}
}
