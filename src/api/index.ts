/*
*
*/
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
//
type Customer = {
    customerNumber:         string ,
    customerName:           string ,
    contactLastName:        string ,
    contactFirstName:       string ,
    phone:                  string ,
    addressLine1:           string ,
    addressLine2:           string ,
    city:                   string ,
    state:                  string ,
    postalCode:             string ,
    country:                string ,
    salesRepEmployeeNumber: number ,
    creditLimit:            number
} ;
//
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql/',
    cache: new InMemoryCache(),
});
//
const GET_CUSTOMER = gql`
    query getCustomer($customerNumber:Int!) {
            phone,salesRepEmployeeNumber,country,customerNumber,contactLastName,city,addressLine1
    }
`;
//
export const fetchCustomers = (): Promise<Customer[]> => {
    return new Promise<Customer[]>((respOk,respRech)=>{
        try {
            /*
           client
           .query({
             query: gql`
               query getCustomer { }
             `
           })
           .then((result) => console.log(result));
           */
           const { loading, error, data } = useQuery(GET_CUSTOMER, {
                variables: { customerNumber: 112 },
            });
            //
            console.log(loading, error, data) ;
           //
        } catch(errFC){
            respRech(errFC) ;
        } ;
    }) ;
} ;
//