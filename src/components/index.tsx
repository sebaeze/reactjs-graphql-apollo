/*
*
*/
import * as React             from "react"             ;
import { Row, Col }           from "antd" ;
import { useQuery }           from '@apollo/client'    ;
import { GET_CUSTOMERS }      from "../data" ;
//
export const MyComp = () => {
    try {
        //
        const { loading, error, data } = useQuery(GET_CUSTOMERS);
        if (loading){
            console.log("...loading") ;
            return( <div>loading</div> ) ;
        };
        if (error){
            console.log("****ERROR*****error: ",error,"**") ;
            return( <div>Error</div> ) ;
        };
        //
        //console.log("...data: ",data,";") ;
        //
        let outRender =  <div style={{border:"2px solid red",width:'100%',height:'100px'}}>
                            {
                                data!=undefined && data.getCustomers!=undefined
                                    ?   data.getCustomers.map(( customer:{customerNumber:number, addressLine1:string }) => {
                                            console.log("...customer: ",customer,";") ;
                                            return (
                                                <Row key={customer.customerNumber} style={{color:"black",fontSize:'14px',border:'1px solid yellow'}} >
                                                    <h3 style={{color:"black",fontSize:'14px'}}>{customer.customerNumber}</h3>
                                                    <br />
                                                    <p style={{color:"black",fontSize:'14px'}}>{customer.addressLine1}</p>
                                                    <br />
                                                </Row>
                                            )}
                                        )
                                    :   null
                            }
                        </div> ;
        //
        return( outRender ) ;
        //
    } catch(errMyC){
        console.log("***ERROR: ",errMyC) ;
        throw errMyC ;
    } ;
} ; 
//
