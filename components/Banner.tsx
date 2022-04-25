import { Fragment, memo, useState } from 'react';
import Image from 'next/image';
import bindClassNames from 'classnames/bind';
import resolveConfig from 'tailwindcss/resolveConfig';
import twConfig from '../tailwind.config.js';
import { isMobile } from 'react-device-detect';

import styles from '@/styles/banner.module.scss';
import Link from 'next/link';

const cx = bindClassNames.bind(styles);

const Banner = memo(() => {
    const fullConfig = resolveConfig(twConfig);
    const [mobile, setMobile] = useState(isMobile);
    return (
        <Fragment>
            {/* @ts-ignore */}
            {mobile && fullConfig.theme.screens.sm ? (
                <div className={cx('banner', { isMobile: isMobile })}>
                    <div className={cx('image')}>
                        <Image
                            src="/assets/images/banner.jpg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            alt="Banana Banner"
                            loading="eager"
                            placeholder="blur"
                            blurDataURL={`/assets/images/banner.txt`}
                            priority={true}
                        />
                    </div>

                    <div className={cx('content')}>
                        <h1>Banana Boys Club</h1>
                        <Link href="/mint">Mint Now</Link>
                    </div>
                </div>
            ) : (
                <div className={cx('banner')}>
                    <div className={cx('image')}>
                        <Image
                            src="/assets/images/banner.jpg"
                            width={2500}
                            height={900}
                            alt="Banana Banner"
                            priority={true}
                            loading="eager"
                            placeholder="blur"
                            blurDataURL={`/assets/images/banner.txt`}
                        />
                    </div>

                    <div className={cx('content')}>
                        <h1>Banana Boys Club</h1>
                        <Link href="/mint">Mint Now</Link>
                    </div>
                </div>
            )}
        </Fragment>
    );
});

// Component Name Declaration
Banner.displayName = 'Banner';

export default Banner;
