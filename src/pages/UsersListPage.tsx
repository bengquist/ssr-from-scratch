import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import { fetchUsers } from "../store/user/actions";
import { Store } from "redux";

type Props = {
  fetchUsers: () => void;
  users: { id: string; name: string }[];
};

function UsersList(props: Props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUsers = () => {
    return props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div>
      <p>Here is a big list of users</p>
      <ul>{renderUsers()}</ul>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return { users: state.users };
};

const loadData = (store: any) => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList)
};
