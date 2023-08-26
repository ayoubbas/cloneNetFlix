import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Row = ({ title, fetchUrl , rowIndex}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  });
  const slideLeft = () => {
    var slider = document.getElementById("slider"+rowIndex);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider"+rowIndex);
    slider.scrollLeft = slider.scrollLeft + 500;
    console.log(slider.scrollRight );
  };
  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative  flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"+rowIndex}
          className="h-full w-full overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth relative"
        >
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
        onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
      </div>
    </>
  );
};

export default Row;
