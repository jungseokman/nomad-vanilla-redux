import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const currentId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(currentId));
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    toDos: state,
  };
};

export default connect(mapStateToProps)(Detail);
