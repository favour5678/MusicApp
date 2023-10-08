import LeftSection from "../components/LeftSection";
import { useSongContext } from "../context/SongContext";

const Artists = () => {
  const { musicData } = useSongContext();

  return (
    <section className="bg-gradient-to-br from from-[#3B1D26] to-[#111111] w-full h-screen text-gray-200 font-body">
      <div className="container max-w-full flex">
        <LeftSection />
        <div className="w-[78%] h-screen overflow-y-auto">
          <div className="flex mx-auto text-[15px] border border-t-0 border-r-0 border-l-0 mb-4 mt-3 w-[95%]">
            Artists
          </div>
          {musicData.map((artist) => (
            <div key={artist.id} className="ml-5 flex mb-5 items-center">
              <img
                className="h-32 w-32 rounded-full object-cover object-center"
                src={artist.songImage}
                alt="songImage"
              />
              <p className="ml-10">{artist.artistName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
