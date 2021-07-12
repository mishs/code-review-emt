import React from 'react'
import { useContext } from 'react';
import { Col } from "react-bootstrap";
import { DevicesContext } from '../Context/DevicesContext'
import Details from "./Details";

function ColComp(props) {
  const { activeRow,activeGroup,activeSGroup } = useContext(DevicesContext);

  console.log("check comp",activeRow,activeGroup,activeSGroup)

    return (
        <Col md={(activeRow.selected || activeGroup || activeSGroup)?5:1}>
              { <Details /> }
            </Col>
    )
}

export default ColComp
