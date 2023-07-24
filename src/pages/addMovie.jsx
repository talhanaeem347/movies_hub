import AddMovieForm from "../components/addMovieForm";
import AddMovieImage from "../components/addMovieImage";
import React, { useState,useMemo, useEffect } from 'react';
import { addMovie, uploadImage } from '../utils/firebaseUtils';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [rating, setRating] = useState(2);
    const [image, setImage] = useState();
    const [description, setDescription] = useState('');

    
    const setMovie = async ()=>{
        if(!title || !releaseDate || !rating || !image || !description) return;
        const posterUrl = await uploadImage(image, title, releaseDate);
        const movie = {
            title,
            releaseDate,
            rating,
            description,
            posterUrl
        }

        addMovie(movie);
        
    }

    return (
        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col w-full px-4  pt-8 my-8 bg-gray-600">
            <div className="lg:w-2/5 md:w-2/5 sm:w-2/5 w-full h-96">
                <AddMovieImage rating={rating} title={title} year={releaseDate} onImageChange={setImage}  />
            </div>
            <div className="my-2 ">
            </div>
            <AddMovieForm onDatechange={setReleaseDate} onTitleChange={setTitle} onDescriptionChange={setDescription} onRatingChange={setRating} onSubmit = {setMovie}  />
        </div>
    )
};

export default AddMovie;