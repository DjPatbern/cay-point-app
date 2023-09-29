import React, { useRef, ChangeEvent, FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  placeholder: string;
  onSearch: (searchTerm: string | undefined) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const searchHandler = (event: FormEvent) => {
    event.preventDefault();
    const searchTerm = searchRef?.current?.value;
    onSearch(searchTerm);
  };

  return (
    <form
      className="w-full  bg-[#ECEEF0] border border-custom-dark-blue focus:border-slate-600 rounded-full flex justify-center items-center"
      onSubmit={searchHandler}
    >
      <AiOutlineSearch className="px-2 mr-4 w-8 h-8 fill-custom-dark-blue" />
      <input
        className="text-sm text-custom-dark-blue basis-[90%] font-normal bg-[#ECEEF0] focus:outline-none placeholder-gray-700 placeholder:text-md tracking-wider"
        type="text"
        placeholder={placeholder}
        ref={searchRef}
        onChange={searchHandler}
      />
    </form>
  );
};

export default Search;
