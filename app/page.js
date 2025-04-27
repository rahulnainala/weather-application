import WeatherData from "@/components/custom/WeatherData";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Weatherly
        </h1>
      </header>
      <main className="lg:w-[60%]">
        <WeatherData />
      </main>
      <footer className="">Footer</footer>
    </div>
  );
}
