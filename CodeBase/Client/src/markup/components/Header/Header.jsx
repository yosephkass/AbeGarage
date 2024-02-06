import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import the logo image
import logo from "../../../assets/images/logo.png";
// Import the auth hook
import { useAuth } from "../../../Contexts/AuthContext";

function Header(props) {
	const navigator = useNavigate();
	const { isLogged, setIsLogged, employee,isAdmin } = useAuth();
	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigator("/login");
	// 	}
	// }, []);

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigator("/login");
	// 	}
	// 	// else{
	// 	//  console.log(isAdmin);
	// 	// }
	// }, [navigator]);

	// logout function
	const handleLogout = () => {
		localStorage.removeItem("employee");
		setIsLogged(false);
	};

	return (
		<div>
			<header class="main-header header-style-one">
				<div class="header-top">
					<div class="auto-container">
						<div class="inner-container">
							<div class="left-column">
								<div class="text">Enjoy the Beso while we fix your car</div>
								<div class="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
							</div>
							<div class="right-column">
								<div class="phone-number">
									Schedule Your Appontment Today :{" "}
									<strong>1800 456 7890</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="header-upper">
					<div class="auto-container">
						<div class="inner-container">
							<div class="logo-box">
								<div class="logo">
									<Link to="/">
										<img src={logo} alt="" />
									</Link>
								</div>
							</div>
							<div class="right-column">
								<div class="nav-outer">
									<div class="mobile-nav-toggler">
										<img src="assets/images/icons/icon-bar.png" alt="" />
									</div>
									<nav class="main-menu navbar-expand-md navbar-light">
										<div
											class="collapse navbar-collapse show clearfix"
											id="navbarSupportedContent"
										>
											<ul class="navigation">
												<li class="dropdown">
													<Link to="/">Home</Link>
												</li>
												<li class="dropdown">
													<Link to="/about">About Us</Link>
												</li>
												<li class="dropdown">
													<Link to="/services">Services</Link>
												</li>
												<li>
													<Link to="/contact">Contact Us</Link>
												</li>
												<li>
													<h5>{!isAdmin? employee.employee_first_name: <Link to='/admin/dashbord'></Link>}</h5>
												</li>
											</ul>
										</div>
									</nav>
								</div>
								<div class="search-btn"></div>
								<div class="link-btn">
									{isLogged ? (
										<Link
											class="theme-btn btn-style-one"
											onClick={handleLogout}
										>
											Logout
										</Link>
									) : (
										<Link to="/login" class="theme-btn btn-style-one">
											Login
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sticky-header">
					<div class="header-upper">
						<div class="auto-container">
							<div class="inner-container">
								<div class="logo-box">
									<div class="logo">
										<Link to="/">
											<img src="assets/images/custom/logo.png" alt="" />
										</Link>
									</div>
								</div>
								<div class="right-column">
									<div class="nav-outer">
										<div class="mobile-nav-toggler">
											<img src="assets/images/icons/icon-bar.png" alt="" />
										</div>

										<nav class="main-menu navbar-expand-md navbar-light"></nav>
									</div>
									<div class="search-btn"></div>
									<div class="link-btn">
										{isLogged ? (
											<Link
												class="theme-btn btn-style-one"
												onClick={handleLogout}
											>
												Logout
											</Link>
										) : (
											<Link to="/login" class="theme-btn btn-style-one">
												Login
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mobile-menu">
					<div class="menu-backdrop"></div>
					<div class="close-btn">
						<span class="icon flaticon-remove"></span>
					</div>

					<nav class="menu-box">
						<div class="nav-logo">
							<Link to="index.html">
								<img src="assets/images/logo-two.png" alt="" title="" />
							</Link>
						</div>
						<div class="menu-outer"></div>
					</nav>
				</div>

				<div class="nav-overlay">
					<div class="cursor"></div>
					<div class="cursor-follower"></div>
				</div>
			</header>
		</div>
	);
}

export default Header;
