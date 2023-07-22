
const Header = () => {
    return (
        <header className="w-full border-b-2">
            <div className=" p-3 flex justify-between">
                <h1 className="text-2xl font-bold">
                    <span className="text-red-500">Movies</span>
                    Hub
                </h1>
                <button className="bg-green-500 px-4     border-2 border-white rounded-md hover:bg-green-600 focus:bg-green-400 ">add New</button>
            </div>
        </header>
    );
};

export default Header;