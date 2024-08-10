import CardMusic from "../components/cards/CardMusic";

const Cards = () => {
  return (
    <div className="w-5/6 mx-auto p-2">
      <p className="text-2xl"> Cards Components </p>

      <div className="mt-10">
        <div className="w-1/3 p-4 bg-gradient-to-b from-[#3e3e3e] to-[#121212]  rounded-lg ">
        <p className="text-white mb-3">Preview item</p>
        <p className="text-center text-[#1DB954] mb-3">Spotify Play</p>
          <div className="flex justify-center">
            <CardMusic
              artistImage="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848a09efcb8499ba32bee4acb4"
              artistName="Adele"
              description="Artist"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
