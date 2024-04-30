import React, { useEffect, useState} from "react";
import { useLocation, useParams} from "react-router-dom";
import axios from "axios";
import '../css/Onerecipe.css'

function Onerecipe(){
    const params = useParams();
    const [recipe, setRecipe] = useState([]);
    const location = useLocation();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/${params.id}/`).then(response => {
            setRecipe(response.data);

        }).catch(error => {
            console.log(error);
        })
    },[useParams().params])

    return(
        <div className='container'>
            <div className='list_item'>
                <h2>{recipe.name}</h2>
                <img src={recipe.file} alt={recipe.name} className="image"/>
                <p>{recipe.description}</p>
                
            </div>
        </div>
    );
};

export default Onerecipe;