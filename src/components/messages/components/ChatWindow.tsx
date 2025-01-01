export default function ChatWindow() {
  return (
    <div className="p-10 h-full">
      <section className="bg-gray-300 h-[95%] flex flex-col items-center rounded-2xl">
        <h1 className="text-2xl font-bold h-10">Hola chat</h1>
        <div className="overflow-y-scroll text-xl p-2 scrollbar-none">
           <div>
            User
           </div>
           <div>
            Friend
           </div>
        </div>
      </section>
    </div>
  )
}
