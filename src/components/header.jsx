import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
const Header = () => {
    return (
        <header className="w-full border-b-2">
            <div className=" p-3 flex justify-between">
                <h1 className="text-2xl font-bold">
                    <span className="text-red-500">Movies</span>
                    Hub
                </h1>
                {/* <button className="bg-green-500 px-2  border-2 border-white rounded-md hover:bg-green-600 focus:bg-green-400 "><AddIcon/> add New</button> */}
                <Button variant="contained" color='success' className=" border-2 border-white rounded-md hover:bg-green-600 focus:bg-green-400 " ><AddIcon/> add New</Button>
            </div>
        </header>
    );
};

export default Header;