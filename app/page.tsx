import {Arsenal ,League_Gothic, Gilda_Display} from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const leagueGothic = League_Gothic({
    variable: "--font-league-gothic",
    subsets: ["latin"],
})

const arsenal = Arsenal({
    variable: "--font-arsenal",
    subsets: ["latin"],
    weight: "400",
})

const gildaDisplay = Gilda_Display({
    variable: "--font-gilda-display",
    subsets: ["latin"],
    weight: "400",
})

export default function Home() {
  return (
     <div className="flex flex-col items-center justify-center">
         <header className={`${gildaDisplay.className} bg-[url(/background1.jpg)] gap-4 py-30 w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center`}>
            <h1 className={`flex flex-col text-9xl ${leagueGothic.className} text-center drop-shadow-[0px_0px_15px_rgba(255,255,255,0.5)]`}>
                <p>WELCOME TO TEDX</p>
                <p>DITAL YOUTH</p>
            </h1>
            <span className="h-1 w-2/5 bg-white drop-shadow-[0px_0px_15px_rgba(255,255,255,0.9)]"/>
            <h2 className="text-3xl">Inspiring Ideas, Transforming Perspectives</h2>
            <p className="text-xl w-2/5 text-center">
                Join us for an unforgettable TEDx experience where brilliant minds share <span className="text-nowrap">thought-provoking</span> ideas, igniting conversations that shape the future.
            </p>
        </header>
         <span className="h-0.5 w-full bg-white/10"></span>
         <main className="flex flex-col gap-5 items-center w-full bg-[url(/background2.jpg)] bg-blend-multiply bg-black/70 bg-cover bg-no-repeat bg-center py-20">
             <div className="flex gap-4 justify-center p-6">
                 <div className={`${arsenal.className} w-110`}>
                     <div>
                        <Image src="/tedx.jpg" className="rounded-xl" alt="TEDX" height={400} width={400}/>
                         <h3 className="absolute text-2xl translate-x-3 -translate-y-10">What is TEDX</h3>
                     </div>
                     <p className="text-xl m-1">
                         TEDx is a program of local, independently organized events that bring people together to share powerful ideas through inspiring talks and performances. Our TEDx event follows the TED mission of &quot;Ideas Worth Spreading,&quot; offering a platform for visionaries and changemakers to share their stories.
                     </p>
                 </div>
                 <div className={`${arsenal.className} w-110`}>
                     <div>
                         <Image src="/dital.jpg" className="rounded-xl" alt="DITAL" height={400} width={400}/>
                         <h3 className="absolute text-2xl translate-x-3 -translate-y-10">Location</h3>
                     </div>
                     <p className="text-xl m-1">
                         The event will be hosted at Dr. İlhami Tankut Anatolian High School.
                         We look forward to welcoming you to an environment of learning and innovation.
                     </p>
                 </div>
                 <div className={`${arsenal.className} w-110`}>
                     <div>
                         <Image src="/calendar.jpg" alt="Calendar" className="rounded-xl" height={400} width={400}/>
                         <h3 className="absolute text-2xl translate-x-3 -translate-y-10">The Date</h3>
                     </div>
                     <p className="text-xl m-1">
                         Our event will take place on May 10th, 2025.
                         Join us for a day of thought-provoking talks and inspiring ideas.
                     </p>
                 </div>
             </div>
             <div className="bg-red-950 flex flex-col gap-3 m-10 p-10 text-center w-110">
                <h3 className="text-5xl">OUR SPEAKERS</h3>
                 <p className="xl">Dive into the inspiring journey, achievements, and unique insights of our guest speaker—learn what makes their story worth hearing on the TEDx stage!</p>
                 <Link href="/speakers" className="p-3 border-2 border-white text-lg duration-300 hover:bg-black/20">CLICK TO SEE OUR SPEAKERS</Link>
             </div>
             <div>

             </div>
         </main>
     </div>
  );
}
