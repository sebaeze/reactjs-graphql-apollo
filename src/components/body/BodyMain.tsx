/*
*
*/
import React                    from "react" ;
import { useState }             from "react" ;
import { useEffect }            from "react" ;
import {Row , Col }             from "antd"  ;
import Search                   from "antd/es/input/Search" ;
import { useQuery }             from '@apollo/client'    ;
import { GET_CUSTOMER  }        from "../../data" ;
import { GET_CUSTOMERS }        from "../../data" ;
import { TableCustomers }       from "../tables/TableCustomers";
import { CustomerDataType }     from "../interfaces/customer"  ;
//
const initialData: CustomerDataType[] = [
    {key: 1, customerNumber:0, customerName: "seba", contactLastName: "eze", phone:"1234567890",addressLine1:"calle falsa",addressLine2:"1234",creditLimit:15.5 }
] ;
//
export const BodyMain = (props: any) => {
    try {
        //
        const [searchCustomer,setSearchCustomer] = useState(112) ;
        useEffect(()=>{
            try {
                console.log( new Date().toISOString()+"...useEffect: searchCustomer: ",searchCustomer,";") ;
            } catch(errUE){
                console.log("***ERROR: useEffect: ",errUE) ;
                throw errUE  ;
            } ;
        }, [searchCustomer] ) ;
        //
        const [arrayCustomers,setArrayCustomers] = useState<CustomerDataType[]>( initialData ) ;
        // const { loading, error, data } = useQuery(GET_CUSTOMER,{variables: {customerNumber: searchCustomer} }) ;
        const { loading, error, data } = useQuery(GET_CUSTOMERS) ;
        //
        useEffect(()=>{
            //
            if ( loading===false && data!=undefined && data.getCustomers!=undefined ){
                console.log("...dentro de useEffecto::loading: ",loading,
                    " data.getCustomers.ll: ",data.getCustomers.length,
                ";")
                //
                let arrayDataUpdated = data.getCustomers.map((elem2map:any,elemIndex:number)=>{ return {key:elemIndex,...elem2map}}) ;
                console.log("....arrayDataUpdated::l: ",arrayDataUpdated.length,";") ;
                setArrayCustomers( arrayDataUpdated ) ;
                //
            } ;
        },[loading])
        //
        useEffect(()=>{
            console.log("...BodyMain:: useEffect::searchCustomer: ",searchCustomer,";") ;
            
        },[searchCustomer]) ;
        //
        const onChangeSearch = (argValueToSearch:string) => {
            try {
                //
                let toNumber = parseInt( argValueToSearch.replace(/0*(\d+)/, '$1')) ;
                console.log("..onChangeSearch:: arg: ",argValueToSearch," toNumber: ",toNumber,";") ;
                setSearchCustomer( toNumber ) ;
                //
            } catch(errOCS){
                console.log("**ERROR: ",errOCS) ;
                throw errOCS ;
            } ;
        } ;
        //
        return(
            <React.Fragment>
                <Row style={{paddingTop:'30px'}}>
                    <Col xs={0} md={0} lg={4} xl={4} xxl={5} ></Col>
                    <Col xs={24} md={24} lg={16} xl={16} xxl={15} >
                        <Row style={{paddingTop:'15px',border:'1px solid red'}} >
                            <Search onSearch={onChangeSearch} />
                        </Row>
                        <Row>
                            <TableCustomers arrayCustomer={arrayCustomers} />
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        ) ;
        //
    } catch(errBM){
        console.log("***ERROR: ",errBM) ;
        throw errBM ;
    } ;
} ;
//
