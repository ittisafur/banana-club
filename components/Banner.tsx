import { memo } from 'react';
import bindClassNames from 'classnames/bind';

import styles from '@/styles/banner.module.scss';

const cx = bindClassNames.bind(styles);

const Banner = memo(() => {
    return (
        <div className={cx('banner')}>
            <h1>Banana Boys Club</h1>
            <button>Coming Soon</button>
        </div>
    );
});

// Component Name Declaration
Banner.displayName = 'Banner';

export default Banner;
