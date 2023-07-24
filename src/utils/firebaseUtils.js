import { moviesRef,storage } from '../configration/firebaseConfig'

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc } from 'firebase/firestore';

export const addMovie = async (movie) => {
    return new Promise((resolve, reject) => {
        try {
            addDoc(moviesRef,movie)
            resolve('Movie added successfully')
        }
        catch (error) {
            reject(error)
        }
    })

}

export const uploadImage = async (image,title,year) => {
    return new Promise(async (resolve, reject) => {
        try {
        const imageRef = ref(storage, `posters/${title}-${year}.${image.name.split('.').pop()}}`)
            await uploadBytes(imageRef, image);
            const url = await getDownloadURL(imageRef);
            resolve(url);
        }
        catch (error) {
            reject(error)
        }
    })

}