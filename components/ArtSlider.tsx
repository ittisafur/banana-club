import { memo } from 'react';
import Image from 'next/image';
import bindClassNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/css';

import styles from '@/styles/artslider.module.scss';

const cx = bindClassNames.bind(styles);

const ArtSlider = memo(({ Location }: { Location: any }) => {
    SwiperCore.use([Autoplay]);
    return (
        <div>
            <div className={cx('art-slider')} ref={Location}>
                <RightSlide />
                <LeftSlide />
                <LastRightSlide />
            </div>
        </div>
    );
});

const RightSlide = memo(() => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 800,
                disableOnInteraction: false,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }}>
            <SwiperSlide>
                <Image src="/assets/images/arts/art1.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art2.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art3.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art4.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art5.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/arts/art6.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/arts/art7.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
        </Swiper>
    );
});

const LeftSlide = memo(() => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 800,
                disableOnInteraction: false,
                reverseDirection: true,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }}>
            <SwiperSlide>
                <Image src="/assets/images/arts/art8.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art9.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art10.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art11.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art12.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/arts/art13.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/arts/art14.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
        </Swiper>
    );
});

const LastRightSlide = memo(() => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 800,
                disableOnInteraction: false,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }}>
            <SwiperSlide>
                <Image src="/assets/images/arts/art15.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art16.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art17.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art18.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/arts/art19.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/arts/art20.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/arts/art21.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/arts/art22.png" width={600} height={600} sizes="100vw" alt="Arts" />
            </SwiperSlide>
        </Swiper>
    );
});

// Component Name Declaration
RightSlide.displayName = 'RightSlide';
LeftSlide.displayName = 'LeftSlide';
LastRightSlide.displayName = 'LastRightSlide';
ArtSlider.displayName = 'ArtSlider';

export default ArtSlider;
