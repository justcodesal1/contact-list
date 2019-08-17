import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard.js";
import Modal from "../component/modal.js";

export default class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					</p>
					<Context.Consumer>
						{({ store, actions }) => {
							return store.contacts.map((item, index) => {
								return (
									<div
										key={index}
										id="contacts"
										className="panel-collapse collapse show"
										aria-expanded="true">
										<ul className="list-group pull-down" id="contact-list">
											<ContactCard
												contact={item}
												position={index}
												onDelete={cont => this.setState({ showModal: true, cont })}
											/>
										</ul>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
				<Modal
					contact={this.state.cont}
					show={this.state.showModal}
					onClose={() => this.setState({ showModal: false })}
				/>
			</div>
		);
	}
}
