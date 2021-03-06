import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
// v6
import { useNavigate } from 'react-router-dom';

// export const SearchScreen = ( { history } ) => {
export const SearchScreen = () => {

    const navigate = useNavigate();

    // hook que obtiene la location
    const location = useLocation();
    // Leer y parsear queryString de la URL
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm( { 
        searchValue: q 
    } );
    
    const { searchValue } = formValues;

    //const heroesFiltered = getHeroesByName( searchValue );
    const heroesFiltered = useMemo( () => getHeroesByName( q ), [ q ] );

    const handleSearch = (e) => {
        e.preventDefault();
        // history.push(`?q=${ searchValue }`);
        navigate(`?q=${ searchValue }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch } >
                        <input 
                            type="text" 
                            name="searchValue"
                            placeholder="Find your hero" 
                            className="form-control" 
                            autoFocus={ true }
                            autoComplete="off"
                            value={ searchValue }
                            onChange={ handleInputChange }
                        />
                        <button 
                            type="submit" 
                            className="btn m-1 btn-block btn-outline-primary" 
                        > 
                            Search ... 
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '' ) 
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    } 

                    {                   
                        (q !== '' && heroesFiltered.length === 0 ) 
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    } 

                    {
                        heroesFiltered.map( hero => {
                            return <HeroCard key={ hero.id } hero={ hero } />
                        })
                    }

                </div>
            </div>

        </div>
    )
}
