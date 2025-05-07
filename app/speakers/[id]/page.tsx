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
        "omer-ozkan",
        "mehmet-gurcan",
        "ugur-onur",
        "boran-eser-kavaz",
        "oltan-baran",
    ];

    const speaker_details: Record<typeof speakers[number], { name: string; title: string; description: ReactElement }> = {
        "omer-ozkan": {
            name: "Ömer Özkan",
            title: "Profesör Doktor",
            description:
                <>
                    <p>Ömer Özkan, 1971&apos;de Ankara’da doğdu. Dünyadaki ilk rahim nakli ve
                        Türkiye&apos;deki ilk çift kol nakli gibi ulusal ve uluslararası düzeyde
                        birçok başarıya ve ilke imza atmış bir isimdir.
                    </p>
                    <p>
                        Öğrenim hayatına Ankara&apos;da başlamış, Ankara Cumhuriyet
                        Lisesinden 1988 yılında mezun olduktan sonra Hacettepe Üniversite
                        Tıp Fakül tesini okudu. 1995&apos;te tıp doktoru ünvanı alan Özkan,
                        uzmanlık eğitimini yine Hacettepe Üniversitesi Tıp Fakül tesinde
                        Plastik, Rekonstrüktif ve Estetik
                    </p>
                    <p>
                        Cerrahi alanında almıştır. 2001 yılından itibaren Akdeniz Üniversitesi Tıp Fakül tesinde görev
                        yapmaya başlayan Özkan, bu sürede dünyanın sayılı merkezlerinde mikrocerrahinin farklı
                        alanlarında çalışmaya devam etmiştir. Japonya&apos;da Perforator Flepler ve Supermikrocerrahi
                        alanında, Tayvan Shou Üniversitesi, E-Da Hastanesi&apos;nde Plastik Cerrahi ve El Cerrahisi
                        alanında, Almanya Münih&apos;te Bogenhausen Technical Universityde EURAPS Young Plastic
                        Surgeons bursu ile genel mikrocerrahi alanında klinik fellowluk yapmıştır. 2004 yılında
                        yardımcı doçent olan Özkan, 2006 yılında doçent ünvanı almaya hak kazanmıştır. 2007
                        yılında Akdeniz Üniversitesi Teşvik Ödülü, 2010 yılında ATSO Yılın Bilim Adamı Ödülü, 2011
                        yılında Sağlık Bakanlığı Yılın Doktoru Ödülü Ömer Özkan&apos;ın aldığı ödüllerden bazılarıdır.
                    </p>
                </>
        },
        "mehmet-gurcan": {
            name: "Mehmet Gürcan",
            title: "Konyaaltı İlçe Milli Eğitim Müdürü",
            description:
                <>
                    <p>
                        1977 yılında Burdur ilinin Bucak ilçesinde doğdu. Or taokul ve lise
                        öğrenimini Bucak İmam Hatip Lisesinde, üniversiteyi Manisa Celal
                        Bayar Üniversitesi Demirci Eğitim Fakül tesi Türkçe Öğretmenliği
                        bölümünde tamamladı. Mersin Toros Üniversitesinde İşletme
                        alanında tezsiz yüksek lisans ve Akdeniz Üniversitesi Eğitim
                        Bilimleri Enstitüsü Eğitim Bilimleri Anabilim Dalında Eğitim
                        Yönetimi Denetimi ve Planlaması alanında tezli yüksek lisans yaptı.
                        Tez çalışması olarak “Devlet Okullarındaki Norm Fazlası Sınıf
                        Öğretmenlerinin Norm Fazlası Öğretmen Olmaya İlişkin
                        Görüşlerini” araştırdı.
                    </p>
                    <p>
                        1999 yılında Batman İmam Hatip Lisesinde öğretmen olarak göreve başladıktan sonra
                        Antalya ve Burdur illerinde öğretmen, okul müdür yardımcısı ve kurum müdürü
                        olarak görev yaptı. 2014 yılından itibaren Ispar ta’nın Uluborlu ilçesinde Şube
                        Müdürlüğü, Antalya’nın Gündoğmuş ilçesinde İlçe Millî Eğitim Müdürlüğü, Antalya İl
                        Millî Eğitim Müdürlüğünde Şube Müdürlüğü ve İl Millî Eğitim Müdür Yardımcısı
                        görevlerini yürüttü.
                    </p>
                    <p>
                        07 Şubat 2024 tarihinden itibaren Antalya Konyaal tı İlçe Millî Eğitim Müdürü olarak
                        görev yapmaktadır.
                    </p>
                    <p>
                        Evli ve iki çocuk babasıdır.
                    </p>
                </>
        },
        "ugur-onur": {
            name: "Uğur Önür",
            title: "Sanatçı",
            description:
                <>
                    Uğur Önür, 1987 yılında Burdur ’un Çel tikçi ilçesine bağlı
                    Kuzköy&apos;de dünyaya geldi. Küçük yaşlarda amcasından etkilenmiş
                    ve müziğe ilgi duymaya başlamıştır. Önür, aynı zamanda TRT
                    Ankara Radyosu sanatçısıdır. Sanatçının YouTube hesabında
                    toplamda 164 tane videosu bulunmaktadır. Önür hem Burdur
                    yöresine ait türküleri seslendirmekte hem de Anadolu’nun birçok
                    yöresine ait eserleri icra etmektedir. Sanatçı Ispar ta Anadolu
                    Güzel Sanatlar Lisesinde keman ve müzik eğitimi gördü. Daha
                    sonra İstanbul Teknik Üniversitesi Türk Musikisi Devlet
                    Konservatuvarı Temel Bilimler Bölümü’nde müzik eğitimi aldı.
                    Sanatçının şu ana kadar 8 adet albüm çalışması bulunmaktadır.
                </>
        },
        "boran-eser-kavaz": {
            name: "Boran Eser Kavaz",
            title: "Yazar-Turist Rehberi",
            description:
                <>
                    <p>
                        Boran Eser Kavaz, 1978’de Ankara’da doğdu. Eğitimini Ankara’da
                        tamamladı, 13 yıl bankacılık sektöründe müfettiş ve idareci olarak
                        çalıştı. 2009 yılında Antalya’ya taşınan Kavaz, kızına yaşadığı kenti
                        anlatmak için Antalya’nın çok bilinmeyen hikayelerinin peşine
                        düştü.
                    </p>
                    <p>
                        Antalya Meraki adıyla da bilinen Kavaz, turist rehberi olarak
                        Kaleiçi ve Antalya gezileri düzenliyor. Kavaz, aynı zamanda
                        çalışmalarını sosyal medyada @antalyameraki sayfasında
                        paylaşırken aynı isimli kitabı da var. Kavaz, kitabında Antalya
                        piyazının nereden çıktığı, Kaleiçi’nin gizli kaçış tünelleri,
                        Döşemeal tı, Hurma, Boğaçayı gibi yer adlarının kökeni gibi
                        Antalya’ya dair merak edilen birçok konuyu kendine has üslubuyla
                        anlatıyor.
                    </p>
                </>
        },
        "oltan-baran": {
            name: "Oltan Baran",
            title: "Senarist",
            description:
                <>
                    <p>
                        Ol tan Baran, 1999 yılında Malatya’da doğdu, çocukluk ve ilk
                        gençlik yılları Antalya’da geçti. 2024 yılında Boğaziçi Üniversitesi
                        Türk Dili ve Edebiyatı ve Tarih bölümlerinden onur derecesiyle
                        mezun oldu. Şu anda Boğaziçi Üniversitesinde Yeni Türk
                        Edebiyatı alanında yüksek lisans eğitimine devam ediyor.
                        Akademik çalışmalarının yanı sıra bir yapım şirketinde senarist
                        olarak çalışan Ol tan, yazıya ve anlatıya duyduğu tutkuyla
                        edebiyat , tiyatro ve sinema alanlarında üretmeyi sürdürüyor ve
                        bu alanlar arasında geçişken bir dil kurmaya önem veriyor.
                    </p>
                </>
        },
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
