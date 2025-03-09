import React, { useEffect, useRef, useContext } from "react";
import "./header.css";
import { Button, Container, Row } from "reactstrap";
import logo from "./../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const nav_links = [
  {
    path: "/home",
    display: "home",
  },
  {
    path: "/about",
    display: "About-us",
  },
  {
    path: "/tours",
    display: "tour",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

 

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });


  const toggleMenu=()=>{
    menuRef.current.classList.toggle('show__menu')
  }


  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav_wrapper">
              {/* =============logo start============= */}
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              {/* =============logo end============= */}

              {/* =============menu start============= */}
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu">
                  {nav_links.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* =============menu end============= */}


              {/* =============button start============= */}
              <div className="nav_right">
                <div className="nav_btns">
                  {user ? (
                    <>
                      <h5 className="mb-0">{user.username}</h5>
                      <button className="btn btn-dark" onClick={logout}>
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Button className="btn secondary__btn">
                        <Link to="/login">Login</Link>
                      </Button>

                      <Button className="btn primary__btn">
                        <Link to="/register">Register</Link>
                      </Button>
                    </>
                  )}
                </div>
                {/* =============button end============= */}


                <span className="mobile__menu" onClick={toggleMenu}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
