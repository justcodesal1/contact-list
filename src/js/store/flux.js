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
				fetch("https://3000-d7134c49-43c6-400a-b82e-a60cbc1a58af.ws-us1.gitpod.io/add", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						address: address,
						phone: phone
					})
				}).then(
					fetch("https://3000-d7134c49-43c6-400a-b82e-a60cbc1a58af.ws-us1.gitpod.io/contacts")
						.then(resp => resp.json())
						.then(data => {
							//console.log(data);
							let store = this.state.store;
							setStore({ contacts: data });
							history.push("/");
						})
						.catch(error => {
							//console.log(error);
						})
				);
			},

			deleteContact: elementId => {
				fetch("https://3000-d7134c49-43c6-400a-b82e-a60cbc1a58af.ws-us1.gitpod.io/contacts/" + elementId, {
					method: "DELETE",
					headers: { "Content-Type": "Application/json" }
				}).catch(error => {
					//console.log(error);
				});
				fetch("https://3000-d7134c49-43c6-400a-b82e-a60cbc1a58af.ws-us1.gitpod.io/contacts")
					.then(resp => resp.json())
					.then(data => {
						//console.log(data);
						let store = this.state.store;
						setStore({ contacts: data });
						history.push("/");
					})
					.catch(error => {
						//console.log(error);
					});
			},
			editContact: (name, email, address, phone, elementId, props) => {
				//console.log("Edit" + name, email, address, phone, elementId);
				fetch("https://3000-d7134c49-43c6-400a-b82e-a60cbc1a58af.ws-us1.gitpod.io/contacts/" + elementId, {
					method: "PUT",
					headers: { "Content-Type": "Application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						address: address,
						phone: phone
					})
				});
				fetch("https://3000-d7134c49-43c6-400a-b82e-a60cbc1a58af.ws-us1.gitpod.io/contacts")
					.then(resp => resp.json())
					.then(data => {
						//console.log(data);
						let store = this.state.store;
						setStore({ contacts: data });
						history.push("/");
					})
					.catch(error => {
						//console.log(error);
					});
			},
			getAllConctacts() {
				//console.log("About to strt looking for the contacts");
				fetch("https://3000-d7134c49-43c6-400a-b82e-a60cbc1a58af.ws-us1.gitpod.io/contacts")
					.then(resp => resp.json())
					.then(data => {
						//console.log(data);
						let store = getStore();
						//console.log("The contacts have just arrived", data);
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
