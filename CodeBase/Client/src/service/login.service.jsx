import axios from "../util/axios";

const loginService = {
	logIn: async (data) => {
		try {
			const response = await axios.post("api/login", data);
	
			if (response.status == 200) {
				const tokenObject = response.data.token;
				console.log(tokenObject);
				localStorage.setItem("employee", JSON.stringify(tokenObject));

				alert(response.data.message);
				return {sucess: true, role: response.data.employee_role};
			}
			// console.log(response);
		} catch (error) {
		
			alert(error.response.data.message);
			return {sucess: false};
		}
	},
};

export default loginService;
