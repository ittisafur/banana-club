import { memo, useRef } from 'react';
import bindClassNames from 'classnames/bind';

import styles from '@/styles/header.module.scss';

const cx = bindClassNames.bind(styles);

const Header = memo(({ Arts, Roadmap, Team, Faq }: { Arts: any; Roadmap: any; Team: any; Faq: any }) => {
    const gotoSlider = () => {
        if (Arts.current) {
            Arts.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const gotoRoadmap = () => {
        if (Roadmap.current) {
            Roadmap.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const gotoTeam = () => {
        if (Team.current) {
            Team.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const gotoFaq = () => {
        if (Faq.current) {
            Faq.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (
        <header className={cx('header')}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a onClick={gotoSlider}>Arts</a>
                        </li>
                        <li>
                            <a onClick={gotoRoadmap}>Roadmap</a>
                        </li>
                        <li>
                            <a onClick={gotoTeam}>Teams</a>
                        </li>
                        <li>
                            <a onClick={gotoFaq}>FAQ</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <ul className={cx('icons')}>
                        <li>
                            <a
                                href="https://medium.com/@BBCNFT_/banana-boyz-club-75174aae041b"
                                target="_blank"
                                rel="noreferrer">
                                <img src="/assets/svg/medium.svg" alt="Medium Articles" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/BananaBoyzClub" target="_blank" rel="noreferrer">
                                <img src="/assets/svg/twitter.svg" alt="Twitter Link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
});

// Component Name Declaration
Header.displayName = 'Header';

export default Header;
