import axios from "../util/axios";

const loginService = {
	logIn: async (data) => {
		try {
			const response = await axios.post("api/login", data);
			if (response.status == 200) {
				const tokenObject = response.data.token;
				console.log(tokenObject);
				// localStorage.setItem({ employee: response.data.token });
				// localStorage.removeItem("employee").then(() => {
				localStorage.setItem("employee", JSON.stringify(tokenObject));
				alert(response.data.message);
				return true;
				// });
			}
			// console.log(response);
		} catch (error) {
			console.log(error);
			alert(error.response.data.message);
			return false;
		}
	},
};

export default loginService;
