/*
*
*/
import { gql }      from '@apollo/client'  ;
//
export const GET_CUSTOMER = gql` query getCustomer($customerNumber: Int!){
    getCustomer(customerNumber: $customerNumber){
        customerName,phone,salesRepEmployeeNumber,country,customerNumber,contactLastName,city,addressLine1,creditLimit
    }
}
`;
//
export const GET_CUSTOMERS = gql` {getCustomers{
        customerName,phone,salesRepEmployeeNumber,country,customerNumber,contactLastName,city,addressLine1,creditLimit
    }
}`;
//