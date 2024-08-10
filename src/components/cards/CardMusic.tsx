/*

      'neutral-400':'#afafa9',
      'black-1001':'#121212',
      'black-1002':'#1d1d1d',
      'black-1003':'#212121',
      'black-1004':'#3e3e3e',
      'green-500':'#1DB954',



*/

import play from "../../../public/icons/play.svg";

type PropsCardMusic = {
    artistImage :string,
    artistName :string
    description :string
}

const CardMusic = ({artistImage,artistName,description}:PropsCardMusic) => {
  return (
<div className="relative w-56 h-auto bg-[#121212] rounded-lg hover:bg-[#1d1d1d] group">
      <div className="flex justify-center">
        <button className="p-5 absolute top-2/3 right-4 transform -translate-y-2/3 rounded-full bg-green-500 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
          <img className="h-4 object-cover" src={play} alt="Play" />
        </button>
        <img
          className="p-4 rounded-full shadow-sm object-cover"
          src={artistImage}
          alt={artistName}
        />
      </div>
      <div className="text-gray-400 mx-auto px-2 mb-2 ">
        <p className="font-light text-2xl">{artistName}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardMusic;
