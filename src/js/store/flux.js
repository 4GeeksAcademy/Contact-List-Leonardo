import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contactos: [],

			newcontact: false

		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/LeonardoContacto")
					.then(response => response.json())
					.then(response => setStore({ "contactos": response.contacts }))
			},

			actualizador: () =>{
				setStore({newcontact:(prev => !prev)})
			}


		}
	};
};

export default getState;