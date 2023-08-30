import React, { useState } from "react";
import {FaHeart ,FaRegHeart} from "react-icons/fa"
import { db } from "../firebase";
import { doc,arrayUnion ,updateDoc } from "firebase/firestore";
import { useAuth } from "../contexts/contextAuth";


const Movie = ({movie }) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
  const {user} = useAuth()
  const movieId = doc(db,"users" , `${user?.email}`)
  // console.log(movieId);
    const handleHeart = async ()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        
        await updateDoc(movieId,{
          savedShows: arrayUnion({
            id: movie.id,
            title :  movie.title,
            img :   movie.backdrop_path,

          })
          })
      }else{
            alert("please looogin")
        } 
    }
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 text-white hover:opacity-100 transition-all">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <p onClick={handleHeart}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
