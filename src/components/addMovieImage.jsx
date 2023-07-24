import Card from './card';
import React, {useMemo, useState } from 'react';

const AddMovieImage = (props) => {
    const { title, rating, year, onImageChange } = props;
    const [image, setImage] = useState('');

    const handleDrop = (event) => {
        event.preventDefault();
        handleImageUpload(event.dataTransfer.files[0]);
    };

    const handleFileInputChange = (event) => {
        handleImageUpload(event.target.files[0]);
    };

    const handleImageUpload =  (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            
        };
        if (file) {
            reader.readAsDataURL(file);
            onImageChange(file);
            // console.log(file);
        }
    };
    const handleClick = () => {
        // Trigger the file input when the user clicks on the "drop-area" div
        const fileInput = document.querySelector('input[type="file"]');
        fileInput.click();

      };

    useMemo(() => {
    }, [title, rating, year]);


    return (
        <div className="container mx-auto h-full flex flex-col items-center justify-center  p-6 sm:p-2 border border-gray-300 rounded-lg shadow-lg">
            {!image ? (
            <>

                <h2 className="text-2xl font-bold mb-4">Image Uploader</h2>
                <div
                    className="drop-area border border-dashed border-gray-400 rounded-md p-4 flex justify-center items-center cursor-pointer"
                    onClick={handleClick}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        className="hidden"
                    />
                    <p className="text-gray-500">Drag and drop an image file here, or click to browse.</p>
                </div>
            </>):
             (
                <Card  image={image} rating={rating} year={isNaN(year) ? new Date().getFullYear() : year}  title={title} />
              
            )}
        </div>
    );
};

export default AddMovieImage;
