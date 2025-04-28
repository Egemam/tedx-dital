import Image from "next/image"

export default function Home() {

    const speakers = [["",""],["",""],["",""],["",""],["",""],["",""]]
    const speakers_buttons = []
    speakers.forEach(speaker => {
        speakers_buttons.push(
            <div className="flex flex-col text-6xl">
                <Image src={`/${speaker[0]}.jpg`} alt={speaker[1]} width={100} height={100}></Image>
                <h1 className="absolute">{speaker[1]}</h1>
            </div>
        )
    })
    return (
        speakers_buttons
    );
}
