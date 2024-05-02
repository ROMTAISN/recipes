import  React , {Component} from "react";
import {NavLink} from 'react-router-dom';
import '../css/Category.css'

class  Category extends Component {
    render() {
        return (
            <>
                <li className='category'>
                    <nav>
                        <NavLink to={{pathname: `${this.props.category}`}} className='cat'>{this.props.category}</NavLink>
                    </nav>
                </li>
            </>
        )
    }
}

export default Category;
