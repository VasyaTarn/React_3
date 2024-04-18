import React, { PureComponent } from 'react'

class BookClass extends PureComponent {

    render() {
        return (
            <div>
                <h2>{this.props.bookTitle}</h2>
                <h2>{this.props.authorName}</h2>
                <h2>{this.props.genre}</h2>
                <h3>{this.props.nPages}</h3>
                <p>{this.props.review}</p>
            </div>
        )
    }
}

export default BookClass