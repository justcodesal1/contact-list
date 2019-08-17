const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			saveContact: (name, email, address, phone) => {
				//console.log(name + email + address + phone);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "da_best_agenda",
						address: address,
						phone: phone
					})
				}).then(
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/da_best_agenda")
						.then(resp => resp.json())
						.then(data => {
							//console.log(data);
							let store = this.state.store;
							this.setState({ store: { ...store, contacts: data } });
						})
						.catch(error => {
							//console.log(error);
						})
				);
			},

			deleteContact: elementId => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + elementId, {
					method: "DELETE",
					headers: { "Content-Type": "Application/json" }
				}).catch(error => {
					//console.log(error);
				});
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/da_best_agenda")
					.then(resp => resp.json())
					.then(data => {
						//console.log(data);
						let store = this.state.store;
						this.setState({ store: { ...store, contacts: data } });
					})
					.catch(error => {
						//console.log(error);
					});
			},
			editContact: (name, email, address, phone, elementId) => {
				//console.log("Edit" + name, email, address, phone, elementId);
				fetch("https://assets.breatheco.de/apis/fake/contact/" + elementId, {
					method: "PUT",
					headers: { "Content-Type": "Application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "da_best_agenda",
						address: address,
						phone: phone
					})
				});
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/da_best_agenda")
					.then(resp => resp.json())
					.then(data => {
						//console.log(data);
						let store = this.state.store;
						this.setState({ store: { ...store, contacts: data } });
					})
					.catch(error => {
						//console.log(error);
					});
			},
			getAllConctacts() {
				console.log("About to strt looking for the contacts");
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/da_best_agenda")
					.then(resp => resp.json())
					.then(data => {
						//console.log(data);
						let store = getStore();
						console.log("The contacts have just arrived", data);
						setStore({ contacts: data });
					})
					.catch(error => {
						//console.log(error);
					});
			}

			//console.log(elementId);
		}
	};
};

export default getState;
