import React from "react";

const UserCard = (props) => {
  return (
    <React.Fragment>
      <h1>Olá, {props.nome}</h1>
      <h4>User: {props.user}</h4>
      <img src={props.avatar} />
    </React.Fragment>
  );
};
export default UserCard;
