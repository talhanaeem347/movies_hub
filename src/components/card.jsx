
import ReactStars from 'react-stars';

const Card = (props) => {
    const { image, title, year, rating } = props;
    return (
        <div className="cursor-pointer rounded-md  w-full shadow-2xl hover:scale-95 duration-500 pb-1 bg-gray-700 ">
            <img src={image} alt="card" className="rounded-t-md h-72 w-full " />
            <div className='px-4 flex flex-col items-center'>
                <h1 className='text-center' >{title} || {year}</h1>
                <ReactStars count={5} value={rating} edit={false}  />
            </div>
        </div>
    )
};

export default Card;