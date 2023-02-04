/*
*
*/
import * as React             from "react"     ;
import { createRoot }         from "react-dom/client" ;
import type { FC }            from 'react'            ;
import { Button }             from "antd"             ;
import { ApolloProvider }     from '@apollo/client'  ;
//
import 'antd/dist/reset.css';
//
import { client  }            from "./data/apollo" ;
import { MyComp  }            from "./components"  ;
//
//
const App: FC = () => {
    //
    return (
        <ApolloProvider client={client} >
            <div className="App">
                <br/><br/><br/><h1>***antd</h1>
                <MyComp />
                <Button type="primary">Button</Button>
            </div>
        </ApolloProvider>
        )
} ;
//
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App  />);
//