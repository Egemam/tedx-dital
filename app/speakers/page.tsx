import Image from "next/image"
import Link from "next/link";
import type {ReactElement} from "react";

export default function Speakers() {

    const speakers = [["omer-ozkan","Ömer Özkan"],["mehmet-gurcan","Mehmet Gürcan"],["ilker-arslan","İlker Arslan"],["ugur-onur","Uğur Önür"],["boran-eser-kavaz","Boran Eser Kavaz"],["oltan-baran","Oltan Baran"]]
    const speakers_buttons:ReactElement[] = []
    speakers.forEach(speaker => {
        speakers_buttons.push(
            <Link href={`/speakers/${speaker[0]}`} key={speaker[0]} className="flex flex-col text-center drop-shadow-xl drop-shadow-white/10 hover:drop-shadow-white/20 hover:scale-105 hover:shadow-2xl duration-200 ">
                <Image src={`/speakers/${speaker[0]}.jpg`} alt={speaker[1]} className="border-4 border-y-8 border-white" width={300} height={300}></Image>
                <h1 className="text-2xl md:text-3xl self-center px-3 p-0.5 m-1 underline">{speaker[1]}</h1>
            </Link>
        )
    })
    return (
        <div className="p-20 flex flex-wrap gap-40 items-center justify-center w-full">
            {speakers_buttons}
        </div>
    );
}
