import Authentication from "@/components/authentication/Authentication";
// EID MUBARAK
// EID MUBARAK2
export default function Home() {
  return (
    <div className="relative">
      <section className="absolute m-0 p-0 inset-0 w-full h-full flex justify-around items-center gap-0.5 flex-wrap overflow-hidden -z-0 ">
      
      {Array.from({ length: 350 }).map((_, i) => (
        <span key={i} className="relative block hover:bg-[#f00]/80 bg-zinc-900 transition hover:duration-75 duration-300 ease-in-out"></span>
      ))}
      
    </section>
      <main className="z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          
          <Authentication />
        </div>
      </main>
    </div>
  );
}
