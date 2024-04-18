import React, { PureComponent } from 'react'
import classes from './City.module.css'

class CityClass extends PureComponent {

    render() {
        return (
            <div>
                <h2>{this.props.cityName}</h2>
                <h2>{this.props.countryName}</h2>
                <h2>{this.props.date}</h2>
                <div className={classes.container}>
                    <img src={this.props.img} alt="" />
                    <img src={this.props.img} alt="" />
                    <img src={this.props.img} alt="" />
                </div>
            </div>
        )
    }
}

export default CityClass