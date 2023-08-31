import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/contextAuth";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from 'react-icons/ai';
const SavedShows = () => {
  const [movies, setMovies] = useState(false);
  console.log(movies);

  const { user } = useAuth();

  useEffect(() => {
    console.log(user.email);
    if (user.email) {
      onSnapshot(
        doc(db, "users", `${user?.email}`), (doc) => {
          setMovies(doc.data().savedShows);
        }
      );
    }
  }, [user?.email]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
    console.log(slider.scrollRight);
  };

  const movieRef = doc(db, "users" , `${user?.email}`)

  const deleteMovie = async(passId) =>{
    try {
      const resultMovies = movies.filter((item)=> item.id !==  passId)
      await updateDoc(movieRef,{
        savedShows:resultMovies
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="relative  flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="h-full w-full overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth relative"
        >
          
          {movies ? movies.map((movie, id) => (
            <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie?.img}`}
                alt={movie?.title}
              />
              <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 text-white hover:opacity-100 transition-all">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <p onClick={()=>{deleteMovie(movie?.id)}} className="absolute text-gray-300 top-4 right-4 ">      <AiOutlineClose size={18} /></p>
              </div>
            </div>
          )) : null}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
      </div>
    </div>
  );
};

export default SavedShows;
