import { Fragment, memo } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import bindClassNames from 'classnames/bind';

import styles from '@/styles/faq.module.scss';

const cx = bindClassNames.bind(styles);

interface Item {
    title: string;
    content: string;
}

interface Props {
    items: Item[];
    Location: any;
}

const Faq = memo(({ items, Location }: Props) => {
    return (
        <div className={cx('faq')}>
            <div className={cx('wrapper')} ref={Location}>
                <div className={cx('title')}>
                    <h2>FAQ</h2>
                </div>

                <div className={cx('accordion')}>
                    {items.map((item, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <Fragment>
                                    <Disclosure.Button className={cx('heading')}>
                                        <h2>{item.title}</h2>
                                        {open ? (
                                            <MinusIcon className={cx('icon')} />
                                        ) : (
                                            <PlusIcon className={cx('icon')} />
                                        )}
                                    </Disclosure.Button>
                                    <Disclosure.Panel className={cx('content')}>
                                        <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                    </Disclosure.Panel>
                                </Fragment>
                            )}
                        </Disclosure>
                    ))}
                </div>

                <footer className={cx('footer')}>
                    <p> &copy; Copyright 2022 Banana NFT. All Rights reserved.</p>
                    <a href="#">Terms and Conditions</a>
                </footer>
            </div>
        </div>
    );
});

Faq.displayName = 'Faq';

export default Faq;
