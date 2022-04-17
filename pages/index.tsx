import ArtSlider from '@/components/ArtSlider';
import Banner from '@/components/Banner';
import RoadMap from '@/components/Roadmap';
import Team from '@/components/Team';
import Faq from '@/components/Faq';
import type { NextPage } from 'next';
import { Fragment, useRef } from 'react';
import Header from '../components/Header';

const Home: NextPage = () => {
    const artSlider = useRef<HTMLDivElement>(null);
    const roadmap = useRef<HTMLDivElement>(null);
    const team = useRef<HTMLDivElement>(null);
    const faq = useRef<HTMLDivElement>(null);
    return (
        <Fragment>
            <Header Arts={artSlider} Roadmap={roadmap} Team={team} Faq={faq} />
            <Banner />
            <ArtSlider Location={artSlider} />
            <RoadMap Location={roadmap} />
            <Team Location={team} />
            <Faq
                Location={faq}
                items={[
                    {
                        title: 'What is Banana Boyz Club ?',
                        content:
                            'Banana Boyz Club is a collection of 7777 unique NFTs. Each NFT is unique and resides on the Ethereum blockchain.',
                    },
                    {
                        title: 'How to get WL/OG? What are the conditions for this ?',
                        content: `<ul>
                      <li>WL can be earned by communication, engagement, helping others, being kind, etc. </li>
                      <li>Make fan-art and memes.</li>
                      <li>Also feel free to join giveaways.</li>
                    </ul>
                    <br>
                    
                    <p>Spamming will not help!</p>
                    `,
                    },
                    {
                        title: 'How many mints per wallet ?',
                        content: `<p>TBA</p>`,
                    },
                    {
                        title: "What's mint price ?",
                        content: `<p>TBA</p> `,
                    },
                    {
                        title: 'When/Where mint?',
                        content: `<p>On the Ethereum Blockchain more info TBA.</p> `,
                    },

                    {
                        title: 'What will the supply be ?',
                        content: `<p>Supply is 7777</p> `,
                    },

                    {
                        title: 'Will there be public sale, or just pre sale?',
                        content: `<p>TBA</p> `,
                    },
                ]}
            />
        </Fragment>
    );
};

export default Home;
