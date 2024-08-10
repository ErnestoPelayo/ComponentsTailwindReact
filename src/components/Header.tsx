import io from '../../public/tailwindcss.svg'
const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 h-16 bg-blue-600 w-full mx-auto">
      <img src={io}  className='w-10 h-10' />
      <div className="flex gap-6 text-white font-light">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">About</button>
        <button className="hover:underline">Doc</button>
      </div>
    </div>
  );
};

export default Header;
