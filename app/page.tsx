import {Arsenal ,League_Gothic, Gilda_Display, Tenor_Sans, Biryani, Crimson_Pro} from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const leagueGothic = League_Gothic({
    variable: "--font-league-gothic",
    subsets: ["latin"],
})

const crimsonPro = Crimson_Pro({
    variable: "--font-crimson-pro",
    subsets: ["latin"],
    weight:"400",
})

const biryani = Biryani({
    variable: "--font-biryani",
    subsets: ["latin"],
    weight: "200",
})

const tenorSans = Tenor_Sans({
    variable: "--font-tenor-sans",
    subsets: ["latin"],
    weight: "400",
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
         <header className={`${gildaDisplay.className} bg-[url(/background1.jpg)] gap-4 py-20 md:py-30 w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center`}>
            <h1 className={`flex flex-col text-6xl md:text-9xl ${leagueGothic.className} text-center`}>
                <p><span className="text-red-600 drop-shadow-[0px_0px_15px_rgba(255,0,0,0.4)]">TEDX</span><span className="drop-shadow-[0px_0px_15px_rgba(255,255,255,0.5)]"> DITAL YOUTH&apos;A</span></p>
                <p><span className="drop-shadow-[0px_0px_15px_rgba(255,255,255,0.5)]">HOŞ GELDİNİZ</span></p>
            </h1>
            <span className="h-1 w-[calc(50%+7rem)] bg-white drop-shadow-[0px_0px_15px_rgba(255,255,255,0.9)]"/>
            <h2 className="text-2xl md:text-3xl text-center">İlham Veren Fikirler, Dönüştüren Bakış Açıları</h2>
            <p className="text-lg md:text-xl mx-[calc(40%-10rem)] text-center">
                Geleceği şekillendiren sohbetleri canlandıran, ufuk açıcı fikirlerin paylaşıldığı unutulmaz bir TEDx deneyimi için bize katılın.
            </p>
        </header>
         <span className="h-0.5 w-full bg-white/10"></span>
         <main className="flex flex-col gap-10 items-center w-full bg-[url(/background2.jpg)] bg-blend-multiply bg-black/70 bg-cover bg-no-repeat bg-center py-20">
             <div className="flex flex-col md:flex-row gap-4 gap-y-10 justify-center p-6">
                 <div className={`${arsenal.className} md:w-110 w-80`}>
                     <div>
                        <Image src="/tedx.jpg" className="rounded-xl" alt="TEDX" height={400} width={400}/>
                         <h3 className="absolute text-2xl translate-x-3 -translate-y-10">TEDx Nedir?</h3>
                     </div>
                     <p className="text-xl m-1">
                         TEDx, insanları ilham verici konuşmalar ve performanslar aracılığıyla güçlü fikirleri paylaşmak için bir araya getiren, yerel ve bağımsız olarak organize edilen etkinlikler programıdır. Bizim TEDx etkinliğimiz de, TED&apos;in &quot;Paylaşmaya Değer Fikirler&quot; misyonunu takip ederek, vizyonerlerin ve değişim öncülerinin hikâyelerini paylaşmaları için bir platform sunar.
                     </p>
                 </div>
                 <div className={`${arsenal.className} md:w-110 w-80`}>
                     <div>
                         <Image src="/dital.jpg" className="rounded-xl" alt="DITAL" height={400} width={400}/>
                         <h3 className="absolute text-2xl translate-x-3 -translate-y-10">Etkinlik Yeri</h3>
                     </div>
                     <p className="text-xl m-1">
                         Etkinliğimiz, Dr. İlhami Tankut Anadolu Lisesi&apos;nde gerçekleştirilecektir. Sizleri öğrenme ve yenilik dolu bir ortamda ağırlamayı sabırsızlıkla bekliyoruz.
                     </p>
                 </div>
                 <div className={`${arsenal.className} md:w-110 w-80`}>
                     <div>
                         <Image src="/calendar.jpg" alt="Calendar" className="rounded-xl" height={400} width={400}/>
                         <h3 className="absolute text-2xl translate-x-3 -translate-y-10">Tarih</h3>
                     </div>
                     <p className="text-xl m-1">
                         Etkinliğimiz 10 Mayıs 2025 tarihinde gerçekleşecektir. Düşündüren konuşmalar ve ilham verici fikirlerle dolu bir gün için bize katılın.
                     </p>
                 </div>
             </div>
             <div className="bg-red-950 flex flex-col md:gap-6 gap-3 m-10 p-6 my-20 md:p-10 text-center w-70 md:w-110">
                <h3 className={`text-xl md:text-4xl ${tenorSans.className}`}>KONUŞMACILARIMIZ</h3>
                 <p className={`md:text-lg ${biryani.className}`}>Konuk konuşmacılarımızın ilham verici yolculuğuna, başarılarına ve eşsiz bakış açılarına yakından bakın — hikâyelerinin TEDx sahnesinde dinlemeye değer olmasını sağlayan unsurları keşfedin!</p>
                 <Link href="/speakers" className={`${crimsonPro.className} underline p-1 md:p-3 border-2 border-white md:text-lg duration-300 hover:bg-black/20`}>KONUŞMACILARIMIZI GÖRMEK İÇİN TIKLAYIN</Link>
             </div>
             <div className="text-center flex flex-col items-center gap-4 p-6 md:p-10 md:w-1/2">
                <h3 className={`text-3xl md:text-5xl ${tenorSans.className}`}>KAYDOL VE BİLETİNİ AL</h3>
                 <p className={`text-xl md:text-2xl px-5 md:px-20 ${biryani.className}`}>TEDxDITAL Youth etkinliğinde yerini garantile! Aşağıdaki butona tıklayarak kayıt ve ödeme işlemini tamamlayabilirsin.</p>
                 <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdVGOWf-MWG1tXgZOJykViuKdFhtZTHxz-cENSaU-K2rK_PnA/viewform" className={`${gildaDisplay.className} text-3xl md:text-4xl underline hover:scale-105 duration-300`}>Hemen Kaydol!</Link>
             </div>
         </main>
     </div>
  );
}
