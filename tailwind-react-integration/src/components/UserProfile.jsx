function UserProfile() {
    return (
      <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-sm sm:max-w-sm md:max-w-sm max-w-xs mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-3 sm:my-4 text-center">
          John Doe
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center transition-colors duration-300 ease-in-out hover:text-blue-500">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  