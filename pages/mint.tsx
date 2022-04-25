import { memo, useState } from 'react';

import bindClassNames from 'classnames/bind';

import styles from '@/styles/mint.module.scss';

const cx = bindClassNames.bind(styles);

const Mint = memo(() => {
    const [count, setCount] = useState(0);

    const handleClickOnMintButton = () => {
        alert('You clicked on the mint button with ' + count + ' times');
    };

    const handleIncrement = () => {
        if (count <= 9) {
            setCount(1 + count);
        } else {
            alert('You can not mint more than ' + count);
        }
        console.log('count: ', count);
    };

    const setMaximum = () => {
        setCount(10);
        setTimeout(() => {
            alert('Reached maximum times');
        }, 150);
    };
    return (
        <div className={cx('mint')}>
            <div className={cx('wrapper')}>
                <button onClick={handleClickOnMintButton} className={cx('mint-button')}>
                    Mint Now
                </button>

                <div className={cx('capping')}>
                    <div className={cx('content')}>
                        <button onClick={() => count && setCount(count - 1)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={cx('icons')}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                            </svg>
                        </button>
                        <div className={cx('counter')}>{count}</div>
                        <button onClick={() => handleIncrement()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={cx('icons')}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </button>
                    </div>
                    <button className={cx('max-value')} onClick={() => setMaximum()}>
                        Max
                    </button>
                </div>
            </div>
        </div>
    );
});

Mint.displayName = 'Mint Page';

export default Mint;
