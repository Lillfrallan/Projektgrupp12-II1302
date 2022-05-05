import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import * as api_client from '../services/api_client'

function HeaderPresenter() {
    
    const [lastCreatedBlob, setLastCreatedBlob] = useState("");

    useEffect(() => {
        async function blobStorage() {
            
            let blobs = api_client.containerClient.listBlobsFlat();
            let newArrayforDates = [];
            

            for await (const blob of blobs) {
                newArrayforDates.push(
                    blob.properties.lastModified.getDate() + "/" + 
                    blob.properties.lastModified.getMonth() + "-" + 
                    blob.properties.lastModified.getFullYear() + " " + 
                    blob.properties.lastModified.getHours() + ":" + 
                    blob.properties.lastModified.getMinutes() + ":" + 
                    blob.properties.lastModified.getSeconds()
                )    
            }

            var lastBlob;
            newArrayforDates.reverse();
            for(var i = 0; i <= newArrayforDates.length; i++) {
                lastBlob = newArrayforDates[i-1];
                        
            }
            setLastCreatedBlob(lastBlob);
        }
        return blobStorage;
    }, [lastCreatedBlob])

    return  (
        <div>
            <HeaderView
                lastCreatedBlob={lastCreatedBlob}
            />
        </div>
    )
}

export default HeaderPresenter
