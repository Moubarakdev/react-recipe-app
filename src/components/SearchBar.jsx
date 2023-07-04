export default function SearchBar({
  searchText,
  setSearchText,
  type,
  setType,
  OnFetch,
}) {
  console.log(type);
  return (
    <>
      <div className="flex my-5 justify-center items-center">
        {/* <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 outline-none cursor-pointer"
        >
          <option className="px-4 text-sm font-medium text-center">
            meals
          </option>
          <option className="px-4 text-sm font-medium text-center">
            drinks
          </option>
        </select> */}

        <div className="flex w-full justify-center items-center">
          <input
            type="search"
            className="block p-3 w-[50%] z-20 text-md text-gray-900 bg-gray-50 rounded-xl border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search what you want to cook or drink ..."
            onChange={(e) => {
              setSearchText(e.target.value);
              OnFetch(e.target.value);
            }}
            value={searchText}
          />
        </div>
      </div>
    </>
  );
}
