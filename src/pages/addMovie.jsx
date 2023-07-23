import AddMovieForm from "../components/addMovieForm";
import AddMovieImage from "../components/addMovieImage";
import React, { useState,useMemo, useEffect } from 'react';
const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [rating, setRating] = useState(2);

    return (
        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col w-full px-4  pt-8 my-8 bg-gray-600">
            <div className="lg:w-2/5 md:w-2/5 sm:w-2/5 w-full h-96">
                <AddMovieImage rating={rating} title={title} year={new Date(releaseDate).getFullYear()} />
            </div>
            <div className="my-2 ">
            </div>
            <AddMovieForm onDatechange={setReleaseDate} onTitleChange={setTitle} onRatingChange={setRating}  />
        </div>
    )
};

export default AddMovie;