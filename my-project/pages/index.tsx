import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FirstSection } from "@/components/firstsection";
import { SecondSection } from "@/components/secondsection";
import { ThirdSection } from "@/components/thirdsection";
import { FourthSection } from "@/components/fourthsection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
