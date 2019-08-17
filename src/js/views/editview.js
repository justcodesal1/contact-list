import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export default class EditView extends React.Component {
	constructor() {
		super();
		this.state = {
			full_name: "",
			email: "",
			phone: "",
			address: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const contact = store.contacts.find(c => c.id === this.props.match.params.id);
					console.log("###", contact);
					if (typeof contact === "undefined") return "Loading...";
					//console.log("This is the contact we found", contact);
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Edit Contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											defaultValue={contact.full_name}
											onChange={e => this.setState({ full_name: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Full Name"
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											defaultValue={contact.email}
											onChange={e => this.setState({ email: e.target.value })}
											type="email"
											className="form-control"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											defaultValue={contact.phone}
											onChange={e => this.setState({ phone: e.target.value })}
											type="phone"
											className="form-control"
											placeholder="Enter phone"
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											defaultValue={contact.address}
											onChange={e => this.setState({ address: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Enter address"
										/>
									</div>
									<button
										onClick={() =>
											actions.editContact(
												this.state.full_name,
												this.state.email,
												this.state.address,
												this.state.phone,
												this.props.match.params.id
											)
										}
										type="button"
										className="btn btn-primary form-control">
										Save Edited Contact
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										Go Back to Contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

EditView.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
	contact: PropTypes.object
};
