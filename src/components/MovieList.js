//import React from 'react'
import * as React from 'react'
// @flow
type Props = {
    list: Array
}

// @flow
const MovieList = (props:Props) => {
    console.log(props.doesExist)

    return props.list.map(movie => <p>{movie}</p>)
}

export default MovieList
