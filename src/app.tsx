/*
*
*/
import * as React             from "react"     ;
import { createRoot }         from "react-dom/client" ;
//
import type { FC } from 'react';
import { Button } from 'antd';
//
import 'antd/dist/reset.css';
import { fetchCustomers }    from "./api" ;
//
const App: FC = () => {
    fetchCustomers() ;
    return (
        <div className="App">
            <br/><br/><br/><h1>***antd</h1>
            <Button type="primary">Button</Button>
        </div>
        )
};
//
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App  />);
//