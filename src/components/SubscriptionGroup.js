import React, { useState } from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { DevicesContext } from "../Context/DevicesContext";
import Licenses from "./Licenses";
import Highlight from "react-highlighter";

function SubscriptionGroup({
  title,
  data,
  description,
  type,
  creationDate,
  expirationDate,
  noOfDevices,
  grpIndex,
}) {
  const {
    updateActiveGroup,
    updateActiveSGroup,
    updateActiveRow,
    searchQuery,
  } = React.useContext(DevicesContext);
  const [activeSGrp, setActiveSGrp] = useState(null);
  const [activeGrp, setActiveGrp] = useState(null);
  return (
    <div className="subs-group_container">
      <h2
        className={`cur-pointer ${
          activeGrp === grpIndex ? "highlight-box" : ""
        }`}
        onClick={(e) => {
          updateActiveGroup({
            name: title,
            noOfGroups: data.length,
            description,
            type,
            creationDate,
            expirationDate,
                      noOfDevices
                  })
                  updateActiveRow({selected: false})
                  updateActiveSGroup(null)
                }
              }
            >{title}<span>(3/5)</span></h2>

            <Accordion defaultActiveKey="0">
                {
                    data && data.map((item, index) => 
                    <Card key={index}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={index.toString()}
                className={`cur-pointer ${
                  activeSGrp === index ? "highlight-box" : ""
                }`}
                onClick={() => {
                  setActiveSGrp(index);
                }}
              >
                <i class="fas fa-angle-down togg-arrow mr-1"></i>
                <Table size="sm">
                                    <thead>
                                        <tr
                                        onClick={
                                            ()=>{
                                                updateActiveSGroup({
                                                    name:item.group,
                                                    description: item.description,
                                                    noOfDevices: item.licenses.length
                                                })
                                                updateActiveGroup(null)
                                                updateActiveRow({selected:false})
                                            }
                                        }
                                        >
                                            <th style={{width:"30%"}} >{item.group}<span>{item.licenses.length}</span></th>
                                            <th style={{width:"20%"}} >{item.model}</th>
                                            <th style={{width:"20%"}} >{item.osversion}</th>
                                            <th style={{width:"30%"}} >{item.description}</th>
                                        </tr> 
                                    </thead>  
                                </Table>                            
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={index.toString()}>
                                <Card.Body>
                                    {/* <Table>
                                        <tbody>
                                            {console.log(item.licenses.filter(v=>{
                                                let OSVersion = null
                                                if(filters["OSVersion"].length){
                                                    filters["OSVersion"].map(v1=>{
                                                        if(v1==v.osversion){
                                                            OSVersion = true
                                                        }else{
                                                            OSVersion = false
                                                        }
                                                    })
                                                }
                                        
                                                let onlineState = null
                                                if(filters["onlineState"].length){
                                                    filters["onlineState"].map(v1=>{
                                                        if((v.online==true)&&(v1=="online")){
                                                            onlineState = true
                                                        }else if((v.online==false)&&(v1=="offline")){
                                                            onlineState = true
                                                        }else{
                                                            onlineState = false
                                                        }
                                                    })
                                                }
                                        
                                                let deviceState = null
                                                if(filters["deviceState"].length){
                                                    filters["deviceState"].map(v1=>{
                                                        if(v.model==v1){
                                                            deviceState = true
                                                        }else if((v1=="others")&&(v.model!="Raspberry Pi 3")){
                                                            deviceState = true
                                                        }else{
                                                            deviceState = false
                                                        }
                                                    })
                                                }
                                        
                                                let policyState = null
                                                if(filters["policyState"].length){
                                                    filters["policyState"].map(v1=>{
                                                        if(v.policy==v1){
                                                            policyState = true
                                                        }else if((v1=="notApplied")&&(v.policy!="applied")){
                                                            policyState = true
                                                        }else{
                                                            policyState = false
                                                        }
                                                    })
                                                }
                                        
                                                let filtered = OSVersion||onlineState||deviceState||policyState
                                        
                                                if((OSVersion==null)&&(onlineState==null)&&(deviceState==null)&&(policyState==null)){
                                                    filtered = true
                                                }
                                                
                                                return filtered
                                            }))}
                                        
                                            {
                                                item.licenses.filter(v=>{
                                                    let OSVersion = null
                                                    // console.log("v,filters",v,filters)
                                                    if(filters["OSVersion"].length){
                                                        filters["OSVersion"].map(v1=>{
                                                    // console.log("v1,v.osversion",v1,v.osversion)
                                                            if(v1==v.osversion){
                                                                OSVersion = true
                                                            }else if(OSVersion!=true){
                                                                OSVersion = false
                                                            }
                                                        })
                                                    }

                                                    let onlineState = null
                                                    if(filters["onlineState"].length){
                                                        filters["onlineState"].map(v1=>{
                                                            if((v.online==true)&&(v1=="online")){
                                                                onlineState = true
                                                            }else if((v.online==false)&&(v1=="offline")){
                                                                onlineState = true
                                                            }else if(onlineState!=true){
                                                                onlineState = false
                                                            }
                                                        })
                                                    }

                                                    let deviceState = null
                                                    if(filters["deviceState"].length){
                                                        filters["deviceState"].map(v1=>{
                                                            if(v.model==v1){
                                                                deviceState = true
                                                            }else if((v1=="others")&&(v.model!="Raspberry Pi 3")){
                                                                deviceState = true
                                                            }else if(deviceState!=true){
                                                                deviceState = false
                                                            }
                                                        })
                                                    }

                                                    let policyState = null
                                                    if(filters["policyState"].length){
                                                        filters["policyState"].map(v1=>{
                                                            if(v.policy==v1){
                                                                policyState = true
                                                            }else if((v1=="notApplied")&&(v.policy!="applied")){
                                                                policyState = true
                                                            }else if(policyState!=true){
                                                                policyState = false
                                                            }
                                                        })
                                                    }

                                                    let licenseState = null
                                                    // console.log("v,filters",v,filters)
                                                    if(filters["licenseState"].length){
                                                        filters["licenseState"].map(v1=>{
                                                    // console.log("v1,v.osversion",v1,v.osversion)
                                                            if(v1==v.license){
                                                                licenseState = true
                                                            }else if(licenseState!=true){
                                                                licenseState = false
                                                            }
                                                        })
                                                    }

                                                    let filtered = OSVersion||onlineState||deviceState||policyState||licenseState

                                                    if((OSVersion==null)&&(onlineState==null)&&(deviceState==null)&&(policyState==null)&&(licenseState==null)){
                                                        filtered = true
                                                    }
                                                    
                                                    return filtered
                                                }).filter((paginate,index)=> index>=offset && index<(offset + 5)).map((licence, index) =>
                                                    <tr onClick={() => handleClick(licence.id)} key={index} className={licence.id === activeId ? 'active' : null} data-selector={licence.id} > 
                                                        <td style={{width:"30%",wordBreak:"break-all"}}>{licence.name}</td>
                                                        <td style={{width:"20%",wordBreak:"break-all"}}>{licence.model}</td>
                                                        <td style={{width:"20%",wordBreak:"break-all"}}>{licence.osversion}</td>
                                                        <td style={{width:"30%",wordBreak:"break-all"}}>{licence.description}</td>
                                                    </tr>  
                                                )
                                            }                                       
                                            <Pagination style={{width:"316%",justifyContent:"center"}}>
                                                <Pagination.Prev
                                                disabled={offset<5}
                                                onClick={()=> setOffset(offset - 5)}
                                                />
                                                <Pagination.Next
                                                disabled={}
                                                onClick={()=> setOffset(offset + 5)}
                                                />
                                            </Pagination>
                                        </tbody>
                                    </Table>  */}
                                    <Licenses item={item} data={data} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                }

            </Accordion>
    </div>
  );
}


export default SubscriptionGroup;
