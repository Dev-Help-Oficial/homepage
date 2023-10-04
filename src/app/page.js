'use client'
import React from 'react';
import CustomCard from '../../components/navigation/card';
import Layout from '../../components/skeleton';
import Hero from '../../components/navigation/hero';
import Footer from '../../components/navigation/footer';

const contents = [
  {
    title: 'Obtenha ajuda em multiplas linguagens de programação',
    description: 'Seja em C, Java, C#, Javascript, C++ você conseguirá sanar suas dúvidas no Dev Help!',
    imageUrl: '/images/f1.png',
  },
  {
    title: 'Comunidade no Discord',
    description: 'Junte-se à nossa comunidade do Discord',
    link: 'https://discord.gg/vNpPh6XTE9',
    linkText: 'Entrar',
    imageUrl: '/images/f2.png',
  },
];

const Home = () => {
  return (
    <div className="root">
      <Layout />
      <Hero />
      <div className="p-4">
        <div className="block -mx-4 text-center">
        <h2 className='heading text-lg text-white'>Sobre</h2>
        <h1 className='text-2xl font-bold text-white mb-7'>Aprenda mais sobre nossa comunidade!</h1>
          {contents.map((content, index) => (
            <div key={index} className="w-full md:w-1/4 lg:w-1/3 px-4 mb-4 mx-auto">
              <CustomCard
                title={content.title}
                description={content.description}
                imageUrl={content.imageUrl}
                link={content.link}
                linkText={content.linkText}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
