import React from 'react'
import SavedShows from '../components/savedShows'
const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
        className=" h-[400px] w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/e21ad84f-f8ce-49c5-904c-869a79454747/MA-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
    </div>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold text-white'>My Shows</h1>

    </div>
    <SavedShows />
    </>
  )
}

export default Account