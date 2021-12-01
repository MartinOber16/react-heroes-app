import React, { useMemo } from 'react';
// v6: Navigate x Redirect 
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

//import batman from '../../assets/heroes/dc-batman.jpg'; // Estático
//const heroesImages = require.context('../../assets/heroes', true); // https://webpack.js.org/guides/dependency-management/#requirecontext
import { heroesImages } from '../../helpers/heroesImages';

// export const HeroScreen = ( { history } ) => {
export const HeroScreen = () => {

    const navigate = useNavigate();

    // Hook para obtener los parametros de la url
    const { heroId } = useParams();

    //const hero = getHeroById( heroId )
    const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);

    if( !hero ) {
        return <Navigate to="/" />;
    }

    const handleReturn = () => {
        if( navigate.length <= 2 ) {
            // history.push('/');
            navigate('/');
        } else {
            // history.goBack();
            navigate.goBack();
        }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    // src={ `../assets/heroes/${heroId}.jpg` } // desde public/assets
                    //src={ batman } // import
                    src={ heroesImages(`./${ heroId }.jpg`).default } 
                />
            </div>
            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info" 
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
