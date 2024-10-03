export default function Usertag({ name }: { name: string }) {
  return (
    <>
      <div className="bg-white rounded-md w-full h-10 text-black">
        <h1>{name}</h1>
      </div>
    </>
  );
}
