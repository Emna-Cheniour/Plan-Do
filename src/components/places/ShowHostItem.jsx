import './showItem.css';
import image from './home.jpg';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Favorite from '../favorite/Favorite';

const ShowHostItem = ({ place, deleteHandler }) => {
    // const [favorite, setFavorite] = useState([]);
    // const addToFavorite = place => dispatch({
        
    // })

    //     // if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    //     // console.log(id);
      
    
    // // this one does the exact opposite, it removes the favorite recipe id's
    //   const removeFavorite = id => {
    //     let index = favorite.indexOf(id);
    //     console.log(index);
    //     let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    //     setFavorite(temp);
    //   };
    
    // this variable holds the list of favorite recipes, we will use it to render all the fav ecipes
      //let findfavorite = recipes.filter(recipe => favorite.includes(recipe.id));
    return (
        <div key={place.id} className="card text-center shadow">
            <div className="overflow">
                <img src={place.image} alt="home" className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{place.name}</h4>
                <p className="card-text text-secondary">{place.description} </p>
            </div>
            <div className='card-footer'>
                <Link to={`/estates/${place._id}`} className="btn btn-outline-primary">
                    Plus de Details
                </Link>  
                <div style={{margin:"0rem 0.5rem"}} className="btn btn-outline-danger" onClick={(e) => deleteHandler(place._id,e)}>Supprimer </div>
                  
                {/* <Favorite userFrom={localStorage.getItem('userId')}  /> */}
            </div>

        </div>
    );
}

export default ShowHostItem;