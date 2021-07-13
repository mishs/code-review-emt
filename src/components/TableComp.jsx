import React from 'react'
import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { DevicesContext } from '../Context/DevicesContext';
import DevicesHeader from "./DevicesHeader";
import LicenseGroups from "./LicenseGroups";

function TableComp(props) {
  const { activeRow, activeGroup, activeSGroup } = useContext(DevicesContext);

    return (
        <Col md={(props.filtersOpen || activeRow.selected || activeGroup || activeSGroup) ? 5 : 11} className="mx-auto">
          
            <DevicesHeader />
            <LicenseGroups />
          </Col>
    )
}

export default TableComp
