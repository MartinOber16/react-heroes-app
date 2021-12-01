import React from 'react';
// v6: Routes x Switch
import { Route, Routes } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">

                <Routes>
                    <Route path="/marvel" element={ <MarvelScreen />  } />
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                    <Route path="/dc" element={ <DcScreen /> } />
                    <Route path="/search" element={ <SearchScreen /> } />
                    
                    {/* <Navigate to="/marvel" /> */}
                    <Route path="/" element={ <MarvelScreen /> } />
                </Routes>
                
            </div> 
        </>
    )
}
