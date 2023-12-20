const employeeAuthHeader = async () => {
  let employee = await JSON.parse(localStorage.getItem("employee"));
  // console.log(employee);
  let empValue = {
    employee_id: "",
    employee_first_name: "",
    employee_role: "",
  };
  if (employee && employee) {
    const decodedToken = await decodeTokenPayload(employee);
    // console.log(decodedToken);
    empValue.employee_role = decodedToken.employee_role;
    empValue.employee_id = decodedToken.employee_id;
    empValue.employee_first_name = decodedToken.employee_first_name;
    // console.log(empValue);
    return empValue;
  } else {
    return null;
  }
};
/*{
    "employee_id": 17,
    "employee_first_name": "Yoseph",
    "employee_role": "employee",
    "iat": 1703045474
}*/

// Function to decode the payload from the token
// The purpose of this code is to take a JWT token, extract its payload,
// decode it from Base64Url encoding, and then convert the decoded payload into a JavaScript object
//for further use and manipulation

const decodeTokenPayload = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export default employeeAuthHeader;
