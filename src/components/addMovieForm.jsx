import React, { useState } from 'react';
import ReactStars from 'react-stars';
const AddMovieForm = (props) => {
    const { onTitleChange, onDatechange,onRatingChange, onDescriptionChange ,onSubmit } = props;
    const [title, setTitle] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [description, setDescription] = useState();

    const handelFormSubmit = () => {
        if(!title || !releaseDate || !description) return;
        onSubmit();
    };


    return (
        <section className="body-font relative px-6  ">
            <div className="container  px-2 mx-auto">
                <div className="flex flex-col text-center w-full mb-1">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font ">Add New Movie</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base capitalize">You can add your favorite movie there.</p>
                </div>
                <div className=" mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                            <div className="relative">
                                <label htmlFor="title" className="leading-7 text-sm text-gray-200 capitalize">title</label>
                                <input
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                        onTitleChange(e.target.value);
                                    }}
                                    type="text" id="title" name="title" placeholder="Movie Title" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                            <div className="relative">
                                <label htmlFor="release-date" className="leading-7 text-sm text-gray-200 capitalize">release date</label>
                                <input
                                    onChange={(e) => {
                                        setReleaseDate(e.target.value);
                                        onDatechange(new Date(e.target.value).getFullYear())
                                    }}
                                    type="date" id="release-date" name="release-date" placeholder="Movie Title" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="description" className="leading-7 text-sm text-gray-200">description</label>
                                <textarea
                                    onChange={(e) => {setDescription(e.target.value);onDescriptionChange(e.target.value)}}
                                    id="description" name="description" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full flex justify-between items-center px-8">
                                     <ReactStars count={5} value={2}  size={39} onChange={onRatingChange} />
                            <button
                                onClick={handelFormSubmit}
                                className="flex mx text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
};

export default AddMovieForm;