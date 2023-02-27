export default function SearchBar() {
  
    return (
      <form className="w-9/12 font-DMsans">
        <div class="relative w-full">
          <input
            type="search"
            id="default-search"
            className="placeholder:text-black block w-full p-6 pl-10 text-sm text-black rounded-xl"
            placeholder="Search Your Favourite Book"
            required
          />
          <button
            type="submit"
            className="text-white absolute  right-2.5 bottom-2.5 bg-[#5F6DF8] px-20 py-2.5 rounded-md"
          >
            Search
          </button>
        </div>
      </form>
    );
  }