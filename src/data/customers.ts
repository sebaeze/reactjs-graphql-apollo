/*
*
*/
import { gql }      from '@apollo/client'  ;
//
export const GET_CUSTOMER = gql` {getCustomer(customerNumber:112){
        phone,salesRepEmployeeNumber,country,customerNumber,contactLastName,city,addressLine1
    }
}`;
//
export const GET_CUSTOMERS = gql` {getCustomers{
        phone,salesRepEmployeeNumber,country,customerNumber,contactLastName,city,addressLine1
    }
}`;
//