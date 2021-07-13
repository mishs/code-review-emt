import React, { useState, useContext, useEffect } from 'react'
import "./App.css";
import "./styles/index.scss"
import { Col, Row, Container, Button } from "react-bootstrap";
import DevicesHeader from "./components/DevicesHeader";
import LicenseGroups from "./components/LicenseGroups";
import Details from "./components/Details";
import Filters from "./components/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { DevicesProvider } from "./Context/DevicesContext";
import { DevicesContext } from './Context/DevicesContext'
import ColComp from './components/ColComp';
import TableComp from './components/TableComp';

function App() {
  const  [filtersOpen, setFiltersOpen] = useState(false);
  const { activeRow,activeGroup,activeSGroup } = useContext(DevicesContext);

  useEffect(() => {
  }, [activeRow.selected,activeSGroup,activeGroup])

  const handleClick = () => {
    setFiltersOpen(true)
  }

  return (
    <DevicesProvider>
      <Container fluid>
        <Button className="mb-3 position-sticky sticky-top">
            <FontAwesomeIcon icon={faFilter} onClick={handleClick}/>
        </Button>

        <Row>
          {
            filtersOpen && <Col md={2} className="pl-0">
              <Filters setFiltersOpen={setFiltersOpen}/>
            </Col>
          }

          <TableComp filtersOpen={filtersOpen} />
            <ColComp/>
        </Row>
      </Container>
    </DevicesProvider>
  );
}

export default App;
