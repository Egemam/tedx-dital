import {League_Gothic} from "next/font/google";

const leagueGothic = League_Gothic({
    variable: "--font-league-gothic",
    subsets: ["latin"],
})

export default function Home() {
  return (
     <div className="flex flex-col items-center justify-center">
        <header className="bg-[url(/background1.jpg)] h-120 w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className={`flex flex-col text-9xl ${leagueGothic.className} text-center drop-shadow-[0px_0px_15px_rgba(255,255,255,0.5)]`}><strong>
                <p>WELCOME TO TEDX</p>
                <p>DITAL YOUTH</p>
            </strong></h1>
            <span className="h-1 w-2/5 bg-white drop-shadow-[0px_0px_15px_rgba(255,255,255,0.9)]"/>
            <h2 className="text-2xl">Inspiring Ideas, Transforming Perspectives</h2>
            <p className="text-xl w-2/5 text-center">
                Join us for an unforgettable TEDx experience where brilliant minds share thought-provoking ideas, igniting conversations that shape the future.
            </p>
        </header>
     </div>
  );
}
