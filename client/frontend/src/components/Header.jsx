import * as React from "react";
import "../css/Header.css";


function Header(props) {
    return(
        <header className='header'>
            <h1>Рецепты блюд</h1>
            <ul className="apiSwag">
                <a href='http://localhost:8000/api/schema/swagger-ui/' className="swagger">Swagger</a>
                <a href='http://localhost:8000' className="api_root">Api Root</a>
            </ul>
            
        </header>
    )
}
export default Header