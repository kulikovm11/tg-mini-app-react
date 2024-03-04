import {useEffect} from "react";
import {Route, Routes} from "react-router-dom"

import './App.css'
import {useTelegram} from "./hooks";
import {Form, Header, Products} from "./components";


const App = () => {

    const { tg } = useTelegram()

    useEffect(()=>{
        tg.ready()
    },[])




    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<Products/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>
        </div>
    );
};

export {App};
