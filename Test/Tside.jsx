<>
  <div
    id="sidebar"
    className="bg-white h-full md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-y-hidden transition-transform duration-300 ease-in-out"
  >
    <div className="space-y-6 md:space-y-10 mt-10">
      <h1 className="font-bold text-4xl text-center md:hidden">
        D<span className="text-teal-600">.</span>
      </h1>
      <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
        Dashwind<span className="text-teal-600">.</span>
      </h1>
      <div id="profile" className="space-y-3">
        <img
          src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Avatar user"
          className="w-10 md:w-16 rounded-full mx-auto"
        />
        <div>
          <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
            Eduard Pantazi
          </h2>
          <p className="text-xs text-gray-500 text-center">Administrator</p>
        </div>
      </div>
      <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
        <input
          type="search"
          onChange={handleInputChange}
          value={query}
          placeholder="Search Provider, Name..."
          required
        />
        <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
          <svg
            className="w-4 h-4 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</>;
