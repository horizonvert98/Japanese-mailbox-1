import React from 'react';
import { useRouter } from 'next/router';

import Container from '../components/Container';
import HeroHeader from '../components/header/HeroHeader';
import FAQ from '../features/sections/FAQ';

// view all blog posts
const Mission = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Container wrapperClass="header-wrapper">
        <HeroHeader title={'The Environment is in trouble'} />
      </Container>
      <Container
        wrapperClass="d-flex align-items-center  bg-2"
        pretitle="The Environment Is In Trouble"
        title="How so?"
      >
        <p>
          Surveys have shown that most flyers are thrown away without being
          read. Apart from the annoyance of finding a lot of unsolicited flyers
          mixed with important mail, how are flyers bad for the environment?
          Below you can see the impact of paper manufacturing.{' '}
        </p>
        <p>[New Statistics cards will go here]</p>
        <p>
          As no official data is available on flyers, please note that the above
          only covers the paper manufacturing side of the operations. Printing
          requires further electricity and chemicals. Also, if thrown in the
          general bin as burnable trash, flyers will not be recycled. Recycling
          or burning also requires additional energy.
        </p>
      </Container>
      <Container
        wrapperClass="d-flex align-items-center"
        pretitle="Environmental Footprint"
        title="The Lifecycle of Flyers"
      >
        <p>
          The overall environmental footprint of a flyer can be decomposed as:
          <ul>
            <li>Mining and extraction of raw materials</li>
            <li>
              Transport from the extraction place to the paper processing
              factory
            </li>
            <li>Paper manufacturing</li>
            <li>Transport of that paper to printers</li>
            <li>Printing</li>
            <li>
              Transport of the flyer from the printer to the distribution center
            </li>
            <li>Transport from the distributor to your mailbox</li>
            <li>Recycling or incinerating the flyers which requires energy</li>
          </ul>
        </p>
        [Diagram will go here]
      </Container>

      <Container
        wrapperClass="d-flex align-items-center bg-2 text-center"
        pretitle="ecotowari in Numbers"
        title="Our Impact"
      >
        <p>
          A single ecotowari sticker helps reduce waste generated by brochures
          by 85 grammes per week on average (tests done in the Tokyo region). It
          might not seem like much in itself but imagine the impact that all the
          ecotowari stickers together are having... No need to imagine it! We
          have laid it out below in our real-time impact generator ↓
        </p>
        <p>[new statistic cards will go here]</p>
      </Container>
      <Container
        wrapperClass="d-flex align-items-center bg-3 header-wrapper"
        pretitle="You Can Help"
        title="Get a Sticker Now"
      >
        <p>
          If you feel like your mailbox is being flooded with unwanted flyers
          and want to do yourself and the planet a favor, look no further. Be an
          actor of change, adopt an ecotowari sticker and join a growing
          movement for climate action!{' '}
        </p>
        <p>
          We will soon launch a crowdfunding campaign where you will be able to
          get your hands on the stickers so stay tuned for more information.
          Leave your email here and you will be the first to know when it
          launches this summer 2022.
        </p>
        <div className="bg-overlay"></div>
      </Container>
      <Container
        wrapperClass="d-flex align-items-center bg-2 text-center"
        pretitle="FAQ"
        title="Common Questions"
      >
        <FAQ />
      </Container>
    </>
  );
};

export default Mission;
