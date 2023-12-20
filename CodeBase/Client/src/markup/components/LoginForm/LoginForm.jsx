import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import loginService from '../../../service/login.service';

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    employee_email: '',
    employee_password: ''
  });
  
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  // const [employee_email, setEmail] = useState('');
  // const [employee_password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(form);

    // Handle client side validations here 
    let valid = true; // Flag 
    // Email validation
    if (!form.employee_email) {
      setEmailError('Please enter your email address first');
      valid = false;
    } else if (!form.employee_email.includes('@')) {
      setEmailError('Invalid email format');
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(form.employee_email)) {
        setEmailError('Invalid email format');
        valid = false;
      } else {
        setEmailError('');
      }
    }
    // Password has to be at least 6 characters long
    if (!form.employee_password || form.employee_password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      
      valid = false;
    } else {
      setPasswordError('');
    }
    
    // password validation on regex
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      if (!regex.test(form.employee_password )) {
        setPasswordError('include at least one uppercase letter, one lowercase letter, and one digit.');
        valid = false;
      } else {
        setPasswordError('');
      }


    if (!valid) {
      return;
    }
    // Handle form submission here
    // console.log(form);
    // Call the service
    const loginEmployee = loginService.logIn(form);
    // console.log(loginEmployee);
    // loginEmployee.then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === 'success') {
    //       // Save the user in the local storage
    //       if (response.data.employee_token) {
    //         console.log(response.data);
    //         localStorage.setItem("employee", JSON.stringify(response.data));
    //       }
    //       // Redirect the user to the dashboard
    //       // navigate('/admin');
    //       console.log(location);
    //       if (location.pathname === '/login') {
    //         // navigate('/admin');
    //         // window.location.replace('/admin');
    //         // To home for now 
    //         window.location.replace('/');
    //       } else {
    //         window.location.reload();
    //       }
    //     } else {
    //       // Show an error message
    //       setServerError(response.message);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setServerError('An error has occurred. Please try again later.' + err);
    //   });

  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Login to your account</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">

                    <div className="form-group col-md-12">
                      {serverError && <div className="validation-error" role="alert">{serverError}</div>}
                      <input type="email"   name="employee_email"  value={form.employee_email}    onChange={handleFormChange}   placeholder="Email" />
                      {emailError && <div className="validation-error" role="alert">{emailError}</div>}
                    </div>

                    <div className="form-group col-md-12">
                    <input type="password" name="employee_password" value={form.employee_password} onChange={handleFormChange} placeholder="Password" />
                      {passwordError && <div className="validation-error" role="alert">{passwordError}</div>}
                    </div>

                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Login</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default LoginForm;
