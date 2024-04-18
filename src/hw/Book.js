import React from 'react'
import BookClass from './BookClass'

function Book() {
    return (
        <div>
            <h1>Book info</h1>
            <BookClass bookTitle="1984" authorName="George Orwell" genre="Dystopian Fiction, Science Fiction" nPages="328" review=" Vestibulum consectetur nulla a tortor auctor, quis commodo odio varius. Donec condimentum, tellus non vehicula accumsan, tellus justo pretium nunc, id egestas ipsum purus non sem. Phasellus at gravida justo. Quisque eros enim, tristique quis consequat quis, dapibus a dolor. Integer fringilla tellus gravida, porttitor nisi et, sagittis tortor. Phasellus posuere imperdiet condimentum. Integer eu enim rutrum, mollis mi et, sollicitudin velit. In hac habitasse platea dictumst. Sed blandit ligula enim. Vestibulum id est at nibh egestas lacinia id in felis."/>
        </div>
    )
}

export default Book
