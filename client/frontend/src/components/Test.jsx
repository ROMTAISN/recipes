/*import  React , {useEffect, useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from "./Header";
import "../App.css";
import ApiRecipe from "./ApiRecipe";


function Test() {
    const [recipies, setRecipies] = useState([]);
  
    useEffect(() => {
      axios
        .get(`http://127.0.0.1:8000/recipes/`)
        .then(data => {
          setRecipies(data.data);
        }).catch(error => {
          console.log(error)
        })
    }, []);
    
  
    return (
        <>
        <div className="header">
            <Header/>
        </div>
        <div>
            <ApiRecipe/>
        </div>
        <div className='container'>
            {recipies.map(recipe => <ul key={recipe.id}>
                <Link to={{pathname: `${recipe.id}`}}>{recipe.name}</Link>
                <img src={recipe.file} alt={recipe.name}/> 
            </ul> )}
        </div>
        </>
  
    );
  };
  
  export default Test;*/

  /*import '../App.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Rec() {
 // const {category} = useParams();
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/recipes/`)
      .then(data => {
        setRecipies(data.data);
      }).catch(error => {
        console.log(error)
      })
  }, []);
  

  return (
    <div className='recipe'>
      {recipies.map((recipe, id) => {
        return (
          <div key={id}>
            <Link to={{pathname: `${recipe.id}`}}>{recipe.name}</Link>
            <p>{recipe.category}</p>
            <img src={recipe.file} alt='фото блюда' />
          
          </div>
        );
      })}
    </div>
  );
};

export default Rec;*/