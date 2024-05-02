import '../css/Recipe.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Recipe() {
  const {category} = useParams();
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/recipes/?category=${category}`)
      .then(data => {
        setRecipies(data.data);
      }).catch(error => {
        console.log(error)
      })
  }, [category]);
  

  return (
    <div className='recipes'>
        {recipies.map(recipe => <ul key={recipe.id}>
            <li className='title'>
              <Link to={{pathname: `${recipe.id}`}} className='dish'>{recipe.name}</Link>
            </li>
              <img src={recipe.file} alt={recipe.name}/>
        </ul> )}
    </div>

  );
};

export default Recipe;