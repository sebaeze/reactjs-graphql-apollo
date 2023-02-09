/*
*
*/
import React, { useEffect, useState }            from "react" ;
import { Table }                                 from "antd"  ;
import { ColumnsType }                           from "antd/es/table";
import { Customer }                              from "../interfaces/customer" ;
import { CustomerDataType }                      from "../interfaces/customer" ;
//
//
const columnsCustomer: ColumnsType<CustomerDataType> = [
    { title: "Name", dataIndex: "customerName", key: "customerName" } ,
    { title: "Last Name", dataIndex: "contactLastName", key: "contactLastName" } ,
    { title: "Phone", dataIndex: "phone", key: "phone" } ,
    { title: "Address", dataIndex: "addressLine1", key: "addressLine1" } ,
    { 
        title: "Credit Limit", dataIndex: "creditLimit", key: "creditLimit",
        render: (text)=>{ return(<div style={{fontWeight:'bolder',textAlign:'right'}}>{text.toFixed(2)}</div>);}
    }
] ;
//
export interface PropsTableCustomer {
    arrayCustomer: CustomerDataType[]
} ;
//
export const TableCustomers: React.FC<PropsTableCustomer> = ({ arrayCustomer=[] }) => {
    try{ 
        //
        const [customersData,setCustomersData] = useState([]) ;
        //
        useEffect( ()=>{
            setCustomersData(arrayCustomer) ;
        }, [arrayCustomer] )
        //
        //console.log( new Date().toISOString()+"...TableCustomers::customersData: ",customersData.length,";") ;
        //
        let outRender = <Table 
                            columns={columnsCustomer}
                            dataSource={customersData}
                        /> ;
        //
        return(outRender ) ;
        //
    } catch(errTC){
        console.log("***ERROR: TableCustmers:: ",errTC,";") ;
        throw errTC ;
    } ;
} ;
//