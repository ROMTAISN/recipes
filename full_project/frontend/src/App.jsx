import * as React from "react";
import  "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ErrorPage from "./ErrorPage"
import ApiRecipe from "./components/ApiRecipe";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import Onerecipe from "./components/Onerecipe";


function App() {
    return (
        <BrowserRouter>
            <Routes basename='/'>
                <Route path="/" element={<ApiRecipe/>}>
                    <Route index element={<Main/>} />
                    <Route path="/:category" element={<Recipe/>}/>
                    <Route path="/:category/:id" element={<Onerecipe />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App ;
