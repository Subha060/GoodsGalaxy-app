import "/src/App.css";
import { useState } from "react";

export function SearchBox() {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const [search, close] = useState(false);

  const searchButton = () => {
    close(!search);
  };

  const searchBtn = "./search.svg";
  const closeBtn = "./close.svg";

  return (
    <div className="">
      <img
        src={`${search ? closeBtn : searchBtn}`}
        alt=""
        className= {`h-5 w-5 relative ${isShow? "z-30" : ""}`}
        onClick={() => {
          toggleShow();
          searchButton();
        }}
      />

      <SearchInput isShow={isShow} toggleShow={toggleShow} searchButton={searchButton} />
    </div>
  );
}

export default SearchBox;

const SearchInput = ({ isShow, toggleShow, searchButton }) => {
  return (
    <>
    <div className={`SearchInput ${isShow ? "show" : ""} rounded-xl z-30`}>
      <input
        type="text"
        placeholder="Search..."
        className="p-3 border w-full h-full rounded-xl"
      />
    </div>
    <div className= {`w-0 h-0 absolute top-0 left-0 z-20 blur-cutom ${isShow ? "show" : ""}`}
    onClick={() => {
      toggleShow();
      searchButton();
    }}
    >

    </div>
    </>
  );
};


