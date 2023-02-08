/*
*
*/
import * as React             from "react"     ;
import { createRoot }         from "react-dom/client" ;
import type { FC }            from 'react'            ;
import { ApolloProvider }     from '@apollo/client'  ;
//
import 'antd/dist/reset.css';
//
import { client  }             from "./data" ;
import { BodyMain }            from "./components"  ;
//
//
const App: FC = () => {
    //
    return (
        <ApolloProvider client={client} >
            <div className="App" style={{paddingTop:'20px'}}>
                <BodyMain />
            </div>
        </ApolloProvider>
        )
    
} ;
//
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App  />);
//