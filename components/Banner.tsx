import { memo } from 'react';
import Image from 'next/image';
import bindClassNames from 'classnames/bind';

import styles from '@/styles/banner.module.scss';

const cx = bindClassNames.bind(styles);

const Banner = memo(() => {
    return (
        <div className={cx('banner')}>
            <div className={cx('image')}>
                <Image
                    src="/assets/images/banner.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Banana Banner"
                />
            </div>
            <div className={cx('content')}>
                <h1>Banana Boys Club</h1>
                <button>Coming Soon</button>
            </div>
        </div>
    );
});

// Component Name Declaration
Banner.displayName = 'Banner';

export default Banner;
