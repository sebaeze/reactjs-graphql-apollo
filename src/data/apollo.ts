/*
*
*/
import { ApolloClient }        from '@apollo/client' ;
import { InMemoryCache }       from '@apollo/client' ;
import { HttpLink }            from "@apollo/client" ;
//
console.log("...process.env.REACT_APP_GRAPHQL_ENDPOINT: ",process.env.REACT_APP_GRAPHQL_ENDPOINT,";") ;
const link = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
}) ;
//
export const client = new ApolloClient({
    link:  link ,
    cache: new InMemoryCache(),
}) ;
//