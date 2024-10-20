import Image from "next/image";
import localFont from "next/font/local";
import clinic from "@/public/Screenshot 2023-10-18 173328.png"
import next0 from "@/public/Screenshot 2024-10-17 190514.png"
import jpeg from "@/public/jpeg.png"
import png from "@/public/png.png"
import jpeg2 from "@/public/jpeg2.png"
import jpeg3 from "@/public/jpeg3.png"
import jpeg6 from "@/public/jpeg6.png"
import pr from "@/public/pr.png"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src={clinic}
          alt="Next.js logo"
          width={800}
          height={500}
        />

<Image
          className="dark:invert"
          src={next0}
          alt="Next.js logo"
         
        />
        <Image
          className="dark:invert"
          src={png}
          alt="Next.js logo"
         
        />
         <Image
          className="dark:invert"
          src={jpeg}
          alt="Next.js logo"
         
        />
           <Image
          className="dark:invert"
          src={jpeg2}
          alt="Next.js logo"
         
        />

<Image
          className="dark:invert"
          src={jpeg3}
          alt="Next.js logo"
         
        />
           <Image
          className="dark:invert"
          src={jpeg6}
          alt="Next.js logo"
         
        />

<Image
          className="dark:invert"
          src={pr}
          alt="Next.js logo"
         
        />
      
      </main>
    
    </div>
  );
}
