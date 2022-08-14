import React from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.albums";

const MainAlbums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        {/* <h3>{props.title}</h3>
        <p>{props.description}</p> */}
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default MainAlbums;