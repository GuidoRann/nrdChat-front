export default function Main() {
  const img = "/images/userDef.webp";

  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center items-center">
      <div className="bg-gray-300 w-1/4 h-5/6 flex flex-col items-center pt-6 gap-4 rounded-lg">
        <div className="w-[90%] h-32 bg-white rounded-md flex items-center p-2">
          <div className="w-28 h-28 bg-blue-300 rounded-full">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col w-[70%] h-full gap-4">
            <div className="text-center h-4/5 flex flex-col justify-center">
              <p>El Enzo</p>
            </div>
            {/* TODO: darle utilidad y estilo a los botones */}
            <div className="h-1/5 flex flex-row gap-4 justify-center">
              <button className="">+</button>
              <button className="">-</button>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[75%] bg-white p-2 rounded-md flex flex-col gap-2">
          <label>
            <input
              type="text"
              placeholder="Buscar un contacto"
              className="bg-gray-100 w-full rounded-xl text-center p-1" // TODO: Cambiar el color del borde al hacer click
            />
          </label>
          <div className="bg-blue-500 h-[93%] rounded-md text-center text-white">
            Contactos
          </div>
        </div>
      </div>
    </div>
  );
}
