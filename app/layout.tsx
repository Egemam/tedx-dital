import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEDxDITAL Youth",
  description: "TEDxYouth, TED’in bağımsız olarak düzenlenen TEDx\n" +
      "etkinliklerinin gençlere yönelik versiyonudur.\n" +
      "Bu etkinlikler, lise ve üniversite öğrencileri tarafından\n" +
      "organize edilir veya gençler için özel olarak düzenlenir.\n" +
      "TEDxYouth etkinliklerinde, genç konuşmacılar ve alanında\n" +
      "uzman kişiler; yenilikçi fikirlerini, ilham verici hikayelerini ve\n" +
      "deneyimlerini geniş bir kitleyle paylaşır.\n" +
      "Etkinliklerde eğitim, bilim, teknoloji , sanat, çevre, sosyal\n" +
      "girişimcilik gibi birçok farklı konu ele alınır. TED’in “Ideas\n" +
      "Worth Spreading” (Yayılmaya Değer Fikirler) mottosuna\n" +
      "uygun olarak, gençlerin yaratıcı düşüncelerini ifade etmeleri\n" +
      "ve topluma katkı sağlayabilecek projelerini duyurmaları\n" +
      "teşvik edilir.\n" +
      "TEDxYouth etkinlikleri, gençleri cesaretlendiren, onları yeni\n" +
      "bakış açılarıyla buluşturan ve topluluk bilinci\n" +
      "oluşturmalarına yardımcı olan ilham verici bir platform sunar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
