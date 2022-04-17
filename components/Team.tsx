import { memo } from 'react';
import Image from 'next/image';
import bindClassNames from 'classnames/bind';
import styles from '@/styles/team.module.scss';

const cx = bindClassNames.bind(styles);

const memberInfo = [
    {
        image: '/assets/images/team/team1.png',
        name: 'Jeremiah',
        position: 'Marketing Lead',
    },

    {
        image: '/assets/images/team/team2.png',
        name: 'Michael',
        position: 'Developer',
    },

    {
        image: '/assets/images/team/team3.png',
        name: 'Caleb',
        position: 'Lead Artist',
    },

    {
        image: '/assets/images/team/team4.png',
        name: 'Steven',
        position: 'Founder',
    },
];

const Team = memo(({ Location }: { Location: any }) => {
    return (
        <div className={cx('team')}>
            <div className={cx('wrapper')} ref={Location}>
                <div className={cx('title')}>
                    <h2>Meet the Team</h2>
                </div>
                <div className={cx('content')}>
                    {memberInfo.map((member, index) => (
                        <Members ImageSrc={member.image} Name={member.name} Position={member.position} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
});

const Members = memo(({ ImageSrc, Name, Position }: { ImageSrc: string; Name: string; Position: string }) => {
    return (
        <div className={cx('member')}>
            <div className={cx('image-wrapper')}>
                <Image src={ImageSrc} width={256} height={256} className={cx('image')} alt={Name} />
            </div>

            <h2>{Name}</h2>
            <p>{Position}</p>
        </div>
    );
});

// Component Name Declaration
Team.displayName = 'Team';
Members.displayName = 'Members';

export default Team;
