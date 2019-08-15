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
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "Application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "my_agenda_slug",
						address: address,
						phone: phone
					})
				});
			},

			deleteContact: elementId => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/{contact_id}/", +elementId);
				const store = getStore();
				setStore({ contacts: store.contacts.filter(elementId => i !== elementId) });
			},

			updateContact: () => {}
		}
	};
};

export default getState;
