interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ setSearchTerm }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
    />
  );
}