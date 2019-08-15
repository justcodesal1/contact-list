import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
class ModalExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>
					{this.props.buttonLabel}
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Delete Contact</ModalHeader>
					<ModalBody>ARE YOU SURE YOU WANT TO DELETE THIS CONTACT???</ModalBody>
					<ModalFooter>
						<Button color="success" onClick={this.toggle}>
							No, its ok lets keep it
						</Button>{" "}
						<Button color="danger" onClick={() => actions.deleteContact(elementId)}>
							Yes, lets delete this thing
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
ModalExample.propTypes = {
	className: PropTypes.string,
	buttonLabel: PropTypes.string
};
export default ModalExample;
