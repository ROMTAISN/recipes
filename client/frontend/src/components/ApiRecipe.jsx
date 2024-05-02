import  React , {Component} from "react";
import axios from "axios";
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import "../css/ApiRecipe.css";
import Category from "./Category";


class ApiRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        };
    }
    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        axios.get('http://127.0.0.1:8000/categories/')
            .then(data => {
                this.setState({
                    isLoaded: true,
                    data: data.data
                });
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (!this.state.isLoaded ? "loading..." : (
            <div>
                <Header/>
                <div className='block_ApiRecipes'>
                    <ul className='ApiRecipes'>
                        {this.state.data.map(el => (
                            <Category key={el.id} category={el.name} id={el.id} />

                        ))}
                    </ul>

                    <main className='container'>
                        <Outlet />
                    </main>

                </div>
            </div>

        ))

    }
}


export default ApiRecipe;