
const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800 fixed z-10 w-full top-0 mb-48">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a
          href="#heroContainer"
          className="hover:text-gray-800 dark:text-gray-200 border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Home
        </a>

        <a
          href="#services"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Services
        </a>

        <a
          href="#blogh1"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Blog
        </a>

        <a
          href="#form"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Conatct Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
