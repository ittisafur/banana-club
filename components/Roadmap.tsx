import { memo } from 'react';
import bindClassNames from 'classnames/bind';

import styles from '@/styles/roadmap.module.scss';

const cx = bindClassNames.bind(styles);

const roadmapContent = [
    {
        title: 'Phase 1: the farm',
        description:
            'Establishing the banana farm to bring immediate value to our holders! Use our in-house token to make purchases in our marketplace.',
    },

    {
        title: 'Phase 2: the steeze',
        description:
            'Establish our culture of “classy but comfortable” through clothing and physical product lines to ensure all club members have the steeze they deserve. Purchasable via our Banana Farm and in-house token!',
    },

    {
        title: 'Phase 3: the club',
        description:
            'Annual in person Club meeting for the Banana Boyz in Hawaii! Access to the venue will be purchasable with our in-house token and 100 lucky members will win free airfare!',
    },

    {
        title: 'Phase 4: the verse',
        description:
            'Continuing the Banana Boy collection with a free mint for the second collection for those with enough in-house tokens! Banana Boyz 2.0 will be a 3D asset ready for metaverse integration!',
    },
];

const RoadMap = memo(({ Location }: { Location: any }) => {
    return (
        <div className={cx('roadmap')}>
            <div className={cx('wrapper')} ref={Location}>
                <div className={cx('title')}>
                    <h2>Roadmap</h2>
                </div>

                <div className={cx('content')}>
                    {roadmapContent.map((item, index) => (
                        <Phase Title={item.title} Description={item.description} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
});

const Phase = memo(({ Title, Description }: { Title: string; Description: string }) => {
    return (
        <div className={cx('phase')}>
            <h2>{Title}</h2>
            <p>{Description}</p>
        </div>
    );
});

// Component Name Declaration
RoadMap.displayName = 'RoadMap';
Phase.displayName = 'Phase';

export default RoadMap;
