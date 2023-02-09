/*
*
*/
import React                    from "react" ;
import { useState }             from "react" ;
import { useEffect }            from "react" ;
import {Row , Col }             from "antd"  ;
import Search                   from "antd/es/input/Search" ;
import { useQuery }             from '@apollo/client'    ;
import { useLazyQuery }         from "@apollo/client"    ;
import { GET_CUSTOMER  }        from "../../data" ;
import { GET_CUSTOMERS }        from "../../data" ;
import { TableCustomers }       from "../tables/TableCustomers";
import { CustomerDataType }     from "../interfaces/customer"  ;
//
export const BodyMain = (props: any) => {
    try {
        //
        const [searchCustomer,setSearchCustomer] = useState(false) ;
        const [arrayCustomers,setArrayCustomers] = useState<CustomerDataType[]>([]) ;
        //
        const fetchAllCustomers = useQuery(GET_CUSTOMERS) ;
        const [ fetchCustomInfo, customerInfoResult ] = useLazyQuery(GET_CUSTOMER) ;
        //
        useEffect(()=>{
            try {
                console.log( new Date().toISOString()+"...useEffect: searchCustomer: ",searchCustomer,";") ;
            } catch(errUE){
                console.log("***ERROR: useEffect: ",errUE) ;
                throw errUE  ;
            } ;
        }, [searchCustomer] ) ;
        //
        useEffect(()=>{
            if ( fetchAllCustomers.loading===false && fetchAllCustomers.data!=undefined && fetchAllCustomers.data.getCustomers!=undefined ){
                let arrayDataUpdated = fetchAllCustomers.data.getCustomers.map((elem2map:any,elemIndex:number)=>{ return {key:elemIndex,...elem2map}}) ;
                console.log("....arrayDataUpdated::l: ",arrayDataUpdated.length,";") ;
                setArrayCustomers( arrayDataUpdated ) ;
            } ;
        },[fetchAllCustomers.data])
        //
        useEffect(()=>{
            console.log("...BodyMain:: useEffect::searchCustomer: ",searchCustomer,";") ;
            fetchCustomInfo({
                variables: {customerNumber: searchCustomer}
            }) ;
        },[searchCustomer]) ;
        //
        useEffect(()=>{
            if ( customerInfoResult!=undefined && customerInfoResult.data!=undefined ){
                console.log("......estoy useEffect:: customerInfoResult.data.getCustomer: ",customerInfoResult.data.getCustomer,";") ;
                setArrayCustomers(customerInfoResult.data.getCustomer) ;
            }
        },[customerInfoResult.data])
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
                        <Row>
                            <Search onSearch={onChangeSearch} />
                        </Row>
                        <Row style={{paddingTop:'35px'}} >
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
