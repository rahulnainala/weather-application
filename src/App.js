import { useState } from "react";
import "./customstyle.css";
import "./App.css";
import Body from "./components/Body";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="lg:max-w-screen-sm sm:w-full">
        <SearchBar onSearch={handleSearch} />
        <Body searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
