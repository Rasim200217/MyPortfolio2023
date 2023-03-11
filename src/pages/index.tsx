import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WhatIDo from "../../components/WhatIDo";
import Skills from "../../components/Skills";
import Work from "../../components/Work";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rasim Akhmedshin | Resume</title>
        <meta
          name="description"
          content="Маркетолог с опытом работы более 1.5 года в сфере digital-маркетинга, владеет навыками разработки и реализации маркетинговых стратегий, оптимизации рекламных кампаний и анализа результатов. Ключевые компетенции включают управление проектами, маркетинговый анализ и планирование, SEO и SEM, а также умение работать в команде и общаться с клиентами."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Work />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
