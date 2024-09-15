import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-amber-600 shadow-lg">
      <div className='flex justify-between items-center max-w-7xl mx-auto p-4'>
        <h1 className="text-4xl font-extrabold text-white">
          <Link to="/">
            ServeNeedy
          </Link>
        </h1>
        <form
        className="bg-gray-800 p-2 rounded-full flex items-center shadow-inner w-full max-w-md mt-4 sm:mt-0 sm:max-w-xs lg:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full text-gray-300 px-3"
            
          />
          <button><FaSearch className="text-indigo-400 ml-2 hover:text-indigo-00 transition duration-300" /></button>
        </form>
        <ul className='flex gap-6 mt-4 sm:mt-0 items-center'>
            <Link to = '/'>
            <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">Home</li>
            </Link>
            <Link to= '/about'>
            <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">About</li>
            </Link>
            <Link to='/sign-in'>
            <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">Sign In</li>
            </Link>
        </ul>
      </div>
    </header>
  );
}
