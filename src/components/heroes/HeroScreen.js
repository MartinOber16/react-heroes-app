import React, { useMemo } from 'react';
// v6: Navigate x Redirect 
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

// export const HeroScreen = ( { history } ) => {
export const HeroScreen = () => {

    // Hook para obtener los parametros de la url
    const { heroId } = useParams();
    const navigate = useNavigate();

    //const hero = getHeroById( heroId )
    const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);

    const handleReturn = () => {
        navigate( -1 );
    }
    
    if( !hero ) {
        return <Navigate to="/" />;
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const imagePath = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    src={ imagePath }
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
