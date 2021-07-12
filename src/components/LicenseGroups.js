import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import SubscriptionGroup from './SubscriptionGroup'
import { DevicesContext } from './../Context/DevicesContext'

function LicenseGroups() {
  const { data, searchResults, searchQuery } = useContext(DevicesContext)

  console.log('data', data)
  console.log('searchres', searchResults)

    return (
        <div>
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>OS version</th>
                        <th>Description</th>
                    </tr>
                </thead>
            </Table>

            {
              searchQuery === '' ?  

              data.map((subscription, i) =>  
                <SubscriptionGroup 
                  title={subscription.subscription} 
                  data={subscription.groups} 
                  description={subscription.description}
                  type={subscription.type}
                  creationDate={subscription.creationDate}
                  expirationDate={subscription.expirationDate}
                  noOfDevices={subscription.noOfDevices}
                  key={i} 
                />) 
              :
              searchResults.map((subscription, i) => 
                <SubscriptionGroup 
                  title={subscription.item.subscription} 
                  data={subscription.item.groups} 
                  key={i} 
                />)
            }


           
        </div>
    )
}

export default LicenseGroups
