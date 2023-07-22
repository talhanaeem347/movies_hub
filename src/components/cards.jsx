import React, { useState } from 'react';
import Card from './card';

const Cards = () => {
    const [movies, setMovies] = useState([
        {
            image: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            title: "Black Panther",
            year: "2020",
            rating: 5
        },
        {
            image: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            title: "Black Panther",
            year: "2020",
            rating: 5
        },
        {
            image: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            title: "Black Panther",
            year: "2020",
            rating: 5
        },
        {
            image: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            title: "Black Panther",
            year: "2020",
            rating: 5
        },
        {
            image: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            title: "Black Panther",
            year: "2020",
            rating: 5
        },

    ]);


    return (
        <>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 p-2 ">
        
            {movies.map((movie, index) => (
                <Card key={index} image={movie.image} title={movie.title} year={movie.year} rating={movie.rating} />
            ))}
            </div>
        </>
    )
}
export default Cards;