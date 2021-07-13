import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import { DevicesContext } from '../Context/DevicesContext'


function Filters(props) {
    const { filters, updateFilters,updateData } = useContext(DevicesContext);
    
    console.log(filters,"dsdsdsdsd")
    function toggleFilter(checked,category,value) {
        let newFilter = filters
        let newCategoryArray = newFilter[category]
        if(checked){
            newCategoryArray.push(value)
        }else{
            newCategoryArray = newCategoryArray.filter(v=>(v!=value))
        }
        newFilter[category] = newCategoryArray
        console.log(newFilter)
        updateFilters(newFilter)
    }

    useEffect(() => {
    }, [filters])

    return (
        <Form className="filters-box pl-3">
            <div className="d-flex align-items-center justify-content-between">
                <h3>Filter</h3>
                <div className="mr-3">
                    <FontAwesomeIcon icon={faAngleLeft} 
                    onClick={
                        ()=>{
                            props.setFiltersOpen(false)
                        }
                    }
                    /> 
                    <FontAwesomeIcon icon={faFilter} /> 
                </div>
            </div>

            <div className="filters-section">
                <div>
                    <p>online state</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="onlineState"
                                    onChange={(e)=>toggleFilter(e.target.checked,"onlineState","online")}
                                    defaultChecked={false}
                                />
                                 online
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="offlineState"
                                    onChange={(e)=>toggleFilter(e.target.checked,"onlineState","offline")}
                                    defaultChecked={false}
                                />
                                 offline
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>policy state</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="notApplied"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"policyState","applied")}
                                    defaultChecked={false}
                                />
                                 applied
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="applied"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"policyState","notApplied")}
                                    defaultChecked={false}
                                />
                                 not applied
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>license</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="allOk"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"licenseState","allOk")}
                                    defaultChecked={false}
                                />
                                 all ok
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="aboutToExpire"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"licenseState","aboutToExpire")}
                                    defaultChecked={false}
                                />
                                 about to expire
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="runOut"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"licenseState","expired")}
                                    defaultChecked={false}
                                />
                                 run out
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>device type</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="raspberryPi"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"deviceState","Raspberry Pi 3")}
                                    defaultChecked={false}
                                />
                                 Rasberry Pi
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="other"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"deviceState","others")}
                                    defaultChecked={false}
                                />
                                 other
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>OS version</p>
                    <ul>
                        <li>
                            <Form.Group controlId="1.0.0">
                                <Form.Check type="checkbox" label="1.0.0" 
                                    onChange={(e)=>toggleFilter(e.target.checked,"OSVersion","1.0.0")}
                                />
                            </Form.Group>
                        </li>
                        <li>                        
                            <Form.Group controlId="1.1.0">
                                <Form.Check type="checkbox" label="1.1.0" 
                                    onChange={(e)=>toggleFilter(e.target.checked,"OSVersion","1.1.0")}
                                />
                            </Form.Group>
                        </li>
                    </ul>
                </div>
            </div>
        </Form>
    )
}


export default Filters
