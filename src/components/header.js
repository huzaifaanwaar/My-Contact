import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary p-2">
          <div className="navbar-nav">
            <Link className="navbar-brand text-white" to="/" style={{ fontSize: "40px" }}>
              Contacts-No.
            </Link>
            <Link className="nav-link active text-dark mt-3 " aria-current="page" to="/addcontact">
              Add Contacts
            </Link>
            <Link className="nav-link text-dark mt-3" to="/contactDetail">
              All Contacts
            </Link>
          </div>
      </nav>
    </>
  );
};
export default Header;
