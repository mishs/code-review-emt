import React, { useState, useContext, useEffect } from 'react'
import "./App.css";
import { Col, Row, Container, Button } from "react-bootstrap";
import DevicesHeader from "./components/DevicesHeader";
import LicenseGroups from "./components/LicenseGroups";
import Details from "./components/Details";
import Filters from "./components/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { DevicesProvider } from "./Context/DevicesContext";
import { DevicesContext } from './Context/DevicesContext'

function App() {
  const  [filtersOpen, setFiltersOpen] = useState(false);
  const { activeRow } = useContext(DevicesContext);

  useEffect(() => {
    console.log('active from App js', activeRow.selected)
  }, [activeRow])

  const handleClick = () => {
    setFiltersOpen(!filtersOpen)
  }

  return (
    <DevicesProvider>
      <Container fluid>
        <Button>
          <FontAwesomeIcon icon={faFilter} onClick={handleClick}/>
        </Button>

        <Row>
          {
            filtersOpen && <Col md={2}>
              <Filters />
            </Col>
          }

          <Col md={filtersOpen ? 5 : 7}>
            <DevicesHeader />
            <LicenseGroups />
          </Col>

            <ColComp/>
      </Container>
    </DevicesProvider>
  );
}

export default App;
