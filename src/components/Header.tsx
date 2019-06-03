import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../store";

type Props = {
  auth: boolean;
};

function Header({ auth }: Props) {
  console.log(auth);

  const authLink = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authLink}
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }: AppState) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
