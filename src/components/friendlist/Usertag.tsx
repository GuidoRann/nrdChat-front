export default function Usertag({ name }: { name: string } ) {

  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <button className="rounded-md w-full h-10 text-black outline-blue-300 outline-double outline-1 cursor-pointer" onClick={handleClick}>
        <h1>{name}</h1>
      </button>
    </>
  );
}
