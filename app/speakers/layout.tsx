export default function SpeakerLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[url(/background3.jpg)] bg-cover bg-center bg-no-repeat min-h-screen bg-blend-multiply bg-black/70">
            {children}
        </div>
    );
}
