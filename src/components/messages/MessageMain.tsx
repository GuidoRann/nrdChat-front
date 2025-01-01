import ChatWindow from './components/ChatWindow';

export default function messageMain() {
  return (
    <div className="w-full h-screen bg-[#F5F5F5] flex flex-col justify-between text-center">
      <div className="h-full">
        <h1 className="text-2xl">Message Main</h1>
        <ChatWindow />
      </div>
      <div className="h-12 bg-slate-400 flex gap-2 px-2 py-1 text-xl">
        <div className=" bg-orange-400 rounded-lg p-2 cursor-pointer">Recibiste un mensaje de...</div>
        <div className=" bg-orange-400 rounded-lg p-2 cursor-pointer">Recibiste un mensaje de...</div>
        <div className=" bg-orange-400 rounded-lg p-2 cursor-pointer">Recibiste un mensaje de...</div>
        <div className=" bg-orange-400 rounded-lg p-2 cursor-pointer">Recibiste un mensaje de...</div>
      </div>
    </div>
  )
}
