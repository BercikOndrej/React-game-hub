import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current !== null) onSearch(searchRef.current.value);
      }}
      className="flex items-center w-full group focus:text-gray-50"
    >
      <FaSearch className="relative left-8 top-2 transform -translate-y-1/2 z-10 text-gray-400 group-hover:text-gray-50 group-hover:dark:text-gray-700 duration-500 ease-linear" />
      <Input
        id="search"
        type="text"
        ref={searchRef}
        placeholder="Search Games..."
        className="pl-10 h-10"
      />
    </form>
  );
};

export default SearchInput;
