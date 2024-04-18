import React from 'react'
import CityClass from './CityClass'

function City() {
    return (
        <div>
            <h1>City info</h1>
            <CityClass cityName="Paris" countryName="France" date="3rd century BCE" img="imgs/Tower.jpg"/>
        </div>
    )
}

export default City
