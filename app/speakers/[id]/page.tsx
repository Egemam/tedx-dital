import { notFound } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import type { ReactElement } from "react";
import {Tenor_Sans, Biryani} from "next/font/google";

const tenorSans = Tenor_Sans({
    variable: "--font-tenor-sans",
    subsets: ["latin"],
    weight: "400",
})

const biryani = Biryani({
    variable: "--font-biryani",
    subsets: ["latin"],
    weight: "200",
})

export default function SpeakerPage({ params }: {params: Promise<{ id: string }>}) {
    const speakers = [
        "Prof.-Armağan-Günal",
        "Prof.-Dr.-Şükrü-Özen",
        "Mehmet-Yeşil-Yeşil",
        "Sümer-Ezgü",
        "İsmail-Balaban",
        "Tolga-Cömertoğlu",
        "Özgür-Yumakoğulları"
    ];

    const speaker_details: Record<typeof speakers[number], { name: string; title: string; description: ReactElement }> = {
        "Prof.-Armağan-Günal": {
            name: "Armağan Günal",
            title: "Profesör",
            description:
                <>
                    <p>Antalya-Korkuteli ilçesi, 1976 yılı doğumlu Armağan Günal;ilkokul, ortaokul ve lise eğitimini Antalya’da tamamladı. 1994 yılında girdiği 
                        Gülhane Askeri Tıp Fakültesinden 2000 yılında mezun oldu.
                        2001-2003 yılları arasında kıta askeri tabipliği hizmetini Isparta Piyade Alayı’nda yaptıktan sonra başladığı 
                        Gülhane Askeri  Tıp Fakültesi Patoloji Uzmanlığı eğitimini 2006 yılında tamamladı.
                        2008 yılında devlet bursu ile ABD Yale Üniversitesi Tıp Fakültesinde “gastrointestinal sistem patolojisi” alanında eğitim gördü.

                    </p>
                    <p>
                        2009 yılında Gülhane Askeri Tıp Fakültesi Tıbbi Patoloji Yardımcı Doçent Öğretim Üyesi kadrosuna atanan Günal, 2013 yılında Doçentlik
                        unvanı aldı. Daha sonra sırasıyla Erzurum Mareşal Çakmak Asker Hastanesi, Erzurum Bölge Eğitim Araştırma Hastanesi ve Kırıkkale Yüksek
                        İhtisas Hastanesi’nde görev yaptı. 2018 yılında Sağlık Bilimleri Üniversitesi Gülhane Eğitim Araştırma Hastanesi Tıbbi Patoloji Doçent
                        Öğretim Üyesi kadrosuna atandı. 2021 yılından itibaren Profesörlük kadrosuna yükseldi.
                    </p>
                    <p>
                        Akademik alanda 45 uluslararası olmak üzere 70’in üzerinde yayını bulunan Günal, çok sayıda bilimsel kongre, toplantı ve kursta davetli
                        konuşmacı ve eğitici olarak görev almıştır. Ayrıca, Gülhane Tıp Fakültesi başta olmak üzere yurt içi ve yurt dışı tıp fakülteleri, 
                        hemşirelik fakültesi ile sağlık meslek yüksekokullarında görevli öğretim üyesi olarak patoloji dersleri vermiştir.
                        Hâlâ Sağlık Bilimleri Üniversitesi Antalya Eğitim Araştırma Hastanesi Tıbbi Patoloji Bölümü’nde Öğretim Üyesi ve Birim İdari Sorumlusu 
                        olarak görevini sürdürmektedir.
                        Armağan Günal, evli ve iki çocuk babasıdır.

                    </p>
                </>
        },
        "Prof.-Dr.-Şükrü-Özen": {
            name: "Prof. Dr. Şükrü Özen",
            title: "Prof. Dr",
            description:
                <>
                    <p>
                    Karşımızda Türkiye’nin önde gelen akademik seslerinden, öğrenme aşkını asla yitirmemiş akademisyen Prof. Dr. Şükrü Özen. 1971 yılında doğan 
                    Özen, Yıldız Teknik Üniversitesinden Elektrik Elektronik Mühendisi olarak mezun olmuş ve çeşitli üniversitlerde yüksek lisans yapmıştır
                    </p>
                    <p>
                    Özen, akademik yolculuğunda Süleyman Demirel Üniversitesinde araştırma görevlisi olmaktan Akdeniz Üniversitesinde rektör yardımcısı
                    olmaya kadar birçok farklı görevde bulunmuştur. Öğretim görevlisi, öğretim üyesi ve bölüm başkanlığı bunlardan sadece bazılarıdır. 
                    Akdeniz Üniversitesine katıldığından beri bölgenin en güçlü Elektrik Elektronik Mühendisliği bölümlerinden birini şekillendirmiştir.
                    </p>
                    <p>
                    Elektromanyetik alan, elektrik güvenliği, enerji sistemleri gibi alanlarda 100 üzerinde bildirisi, 7 tane kitabı vardır
                    </p>
                    <p>
                    Özen, Akdeniz Üniversitesinde rektör yardımcısı olarak atandığı günden beri üniversitenin gelişimi için çabalamaktadır.
                    </p>
                </>
        },
        "Mehmet-Yeşil-Yeşil": {
            name: "Mehmet Yeşil Yeşil",
            title: "Başpehlivan",
            description:
                <>
                    Gücü, disiplini ve azmi ile geleneksel spor kültürünün sembollerinden biri olan gelen millî sporcumuz, Mehmet Yeşil Yeşil. 1986’da Antalya’nın Aksu ilçesine bağlı 
                    küçük bir köyde doğan Yeşil Yeşil; efsanevî güreşçilerin ve halk kahramanlarının hikayeleriyle büyüdü. Spora olan ilgisi küçük yaşlarda başladı. Yeşil Yeşil, Avrupa 
                    Gençler Güreşi Şampiyonası’nda birincilik, Dünya Gençler Şampiyonası’nda üçüncülük, Kırkpınar Yağlı Güreşleri’nde birincilik ve altın kemere sahip olmak gibi birçok 
                    başarıya imza atmıştır. 2009 ve 2010 yıllarında Kırkpınar Başpehlivanı oldu. Yeşil Yeşil’in yarışmalardaki yükselişi onu ülke çapında tanınan ve genç sporculara yol
                    gösteren örnek bir sporcu haline getirdi.
                </>
        },
        "Sümer-Ezgü": {
            name: "Sümer Ezgü",
            title: "Türk Halk Müziği Sanatçısı",
            description:
                <>
                    <p>
                    Her şey bir melodinin dokunuşuyla başlar. Karşımızda derlemeci, besteci, yorumcu, halk müziği sanatçımız Sümer Ezgü.1960 yılında Burdur’da dünyaya geldi. 
                    Müzikle her zaman içli dışlı olan Sümer Ezgü; henüz çok küçük yaşlardayken bağlama, melodika ve mandolin çalabiliyordu. Ezgü, sadece müziğe değil, dansa da ilgi
                    duymuştur. Bir yandan müzikle uğraşırken bir yandan da dans eğitmenliği yapmaktadır. 
                    </p>
                    <p>
                    16 yıl boyunca TRT Ankara Radyosu’nda çalışmıştır. Ezgü; dans, enstrüman ve resim gibi eğitimlerin verildiği bir sanat akademisine sahiptir. Gerek Burdur’a 
                    gerek başka yörelere ait müzikleri kendi duygu ve düşüncelerini harmanlayarak sanatını icra etmektedir. Sadece Türkiye’de değil, birçok ülkede sanatını icra 
                    etmiş ve insanların ruhuna dokunmuştur. Sanatçının şu ana kadar 7 albüm çalışması bulunmaktadır.
                    </p>
                </>
        },
        "İsmail-Balaban": {
            name: "İsmail Balaban",
            title: "Başpehlivan",
            description:
                <>
                    <p>
                    Karşımızda bitmek bilmeyen azmi ve emeği ile hedeflerine giden yolu adımlayan, millî sporcumuz İsmail Balaban var. Balaban, 1987’de köklü bir güreş mirasına sahip 
                    olan Elmalı’nın Akçay ilçesinde, halihazırda sporla iç içe olan bir ailede dünyaya gelmiştir. Balaban, genç yaşlarda antrenmana başlayarak kendisini Türkiye’nin
                    en büyük güreş arenalarına taşıyacak olan güç ve dayanıklılığı inşa etti. Balaban, Kırkpınar Yağlı Güreşleri’nde 2013 ve 2017 yıllarında birincilik ve 
                    başpehlivanlık, 2020 ve 2022 ağır sıklette Dünya Şalvar Güreşi Şampiyonluğu gibi başarılara imza atmıştır. Kendisi aynı zamanda Acun Ilıcalı’nın televizyon 
                    programı olan Survivor’da 2021 yılının şampiyonu olmuştur. Millî sporcumuz eğitimini Adnan Menderes Üniversitesinde Beden Eğitimi ve Spor Yüksekokulu mezunu 
                    olarak taçlandırmıştır. Kendisi genç sporculara ilham kaynağı olmaya devam ediyor, onlara disiplin ve sürekliliğin başarı için ne kadar önemli olduğunu hatırlatıyor.
                    </p>
                </>
        },
            "Tolga-Cömertoğlu": {
            name: "Tolga Cömertoğlu",
            title: "İş İnsanı",
            description:
                <>
                    <p>
                    İş dünyasındaki başarılı girişimleri ve yatırımlarıyla dikkat çeken Tolga Cömertoğlu, Türkiye’nin önde gelen iş insanlarından biri olarak tanınıyor. 
                    E-ticaret, dijital pazarlama, teknoloji ve turizm gibi farklı sektörlerde faaliyet gösteren Cömertoğlu, özellikle Delphin Otelleri ile turizm sektöründe 
                    büyük bir başarıya imza atmıştır. Tolga Cömertoğlu, 1980 yılında İstanbul’da dünyaya geldi. Eğitim hayatını İstanbul’da tamamlayan Cömertoğlu, İstanbul 
                    Teknik Üniversitesi İşletme Fakültesinden mezun oldu. Ardından Bilgi Üniversitesinde yüksek lisans yaparak akademik kariyerini ilerletti.
                    İş dünyasında ileri görüşlü yaklaşımı ve ilerlemenin cesur fikirlerle başladığı inancıyla bilinen Cömertoğlu, sadece girişimciliğiyle değil; aynı zamanda 
                    iyi niyeti ve yardımseverliğiyle de tanınmaktadır. Başarılı iş insanı Tolga Cömertoğlu, Manolya Cömertoğlu ile evlidir. Tolga ve Manolya Cömertoğlu, iş 
                    dünyasındaki başarılarının yanı sıra sosyal sorumluluk projeleriyle de öne çıkmaktadır. Eğitim ve sağlık alanında yaptıkları bağışlar, yardımlar ve destekler,
                    onların topluma olan duyarlılığını göstermektedir. Özellikle çocukların eğitimine destek veren Cömertoğlu, burs programları ve hayır projeleriyle birçok öğrenciye
                    yardımcı olmaktadır. Delphin Otelleri yönetim kurulu üyesi olan Cömertoğlu, 7 farklı otelin yönetim kurulunda yer almaktadır.
                    </p>
                </>
            },
            name: "Özgür-Yumakoğulları",
            title: "Uçak Sistem Mühendisi",
            description:
                <>
                    <p>
                    Gökyüzüne olan derin tutkusuyla tanınan Özgür Yumakoğulları,1976 yılında Antalya’nın Korkuteli ilçesinde dünyaya gelmiştir.Yumakoğulları, Türk Havayolları’nın 
                    teknik yöneticilerinden biridir. Yumakoğulları,bu konuma gelmek için yıllarca uğraşmış; mekanik teknisyenden vardiya şefliğine kadar birçok görevde bulunmuş, 
                    deneyimli biridir. Kendisi Anadolu Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi mezunudur. İlerleyen yıllarda İstanbul Teknik Üniversitesinde yüksek 
                    lisans yapmıştır.Yumakoğulları’nın havacılıkla ilgili yazdığı bir kitap bulunmaktadır.
                    </p>
                </>
    };

    console.log("Received params:", params); // Debugging
    const { id } = use(params);

    if (!speakers.includes(id)) {
        notFound();
    }

    //<a href="https://www.freepik.com/free-photo/color-smoke-abstract-wallpaper-aesthetic-background-design_17580806.htm">Image by rawpixel.com on Freepik</a>

    console.log(id);
    return (
        <main className="p-10 flex flex-col justify-center gap-10">
            <header className="flex flex-col gap-2">
                <h1 className="md:text-6xl text-4xl text-center">
                    <strong className={tenorSans.className}>{speaker_details[id].name}</strong>
                </h1>
                <h2 className={`md:text-4xl text-3xl text-center ${tenorSans.className}`}>
                    {speaker_details[id].title}
                </h2>
            </header>
            <main className="flex flex-wrap md:flex-nowrap py-6 p-3 gap-10 text-lg items-center bg-red-500/10 rounded-xl">
                <div className="flex flex-col items-center gap-5 min-w-2/5">
                    <Image src={`/speakers/${id}.jpg`} height={350} width={350} alt={id}/>
                </div>
                    <article className={`grow flex flex-col gap-3 md:px-7 bg-red-950/10 rounded-xl ${biryani.className}`}>
                        {speaker_details[id].description}
                    </article>
            </main>
        </main>
    );
}
