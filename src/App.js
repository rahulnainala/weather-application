import { useState } from "react";
import "./customstyle.css";
import "./App.css";
import Body from "./components/Body";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center ">
        <SearchBar onSearch={handleSearch} />
        <Body searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
