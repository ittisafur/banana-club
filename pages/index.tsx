import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { Fragment, useRef } from 'react';
import Head from 'next/head';

const DynamicHeader = dynamic(() => import('@/components/Header'), {
    ssr: false,
});
const DynamicBanner = dynamic(() => import('@/components/Banner'), {
    ssr: false,
});
const DynamicArtSlider = dynamic(() => import('@/components/ArtSlider'), {
    ssr: false,
});
const DynamicRoadMap = dynamic(() => import('@/components/Roadmap'), {
    ssr: true,
});
const DynamicTeam = dynamic(() => import('@/components/Team'), {
    ssr: true,
});
const DynamicFaq = dynamic(() => import('@/components/Faq'), {
    ssr: true,
});

const Home: NextPage = () => {
    const artSlider = useRef<HTMLDivElement>(null);
    const roadmap = useRef<HTMLDivElement>(null);
    const team = useRef<HTMLDivElement>(null);
    const faq = useRef<HTMLDivElement>(null);
    return (
        <Fragment>
            <Head>
                <title>Banana Boys Club</title>
                <meta name="author" content="MD Ittisafur Rahman" />
                <meta name="description" content="Banana Boys Club Arts" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicHeader Arts={artSlider} Roadmap={roadmap} Team={team} Faq={faq} />
            <DynamicBanner />
            <DynamicArtSlider Location={artSlider} />
            <DynamicRoadMap Location={roadmap} />
            <DynamicTeam Location={team} />
            <DynamicFaq
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
