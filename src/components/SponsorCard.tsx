'use client';
import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface Props {
    cardWidth: string;
    cardHeight: string;
    img: StaticImageData;
    imgWidth: number;
    imgHeight?: number;
    imgAlt: string;
    color: string;
    title?: string;
    backgroundMt: string;
    backgroundMl: string;
}

const SponsorCard = ({ cardWidth, cardHeight, img, imgWidth, imgHeight, imgAlt, color, title, backgroundMt, backgroundMl }: Props) => {

    return (
        <div>

            <div className={` bg-[#E0E0E0]  rounded-lg z-10 flex gap-4 justify-center items-center relative`} style={{ width: cardWidth, height: cardHeight }}>
                <Image
                    src={img}
                    alt={imgAlt}
                    width={imgWidth}
                    height={imgHeight}
                />
                {title && (
                    <span className={`font-spaceGrotesk text-[35px] font-bold leading-normal relative z-10`} style={{ color: color }}>{title}</span>

                )}
            </div>
            <div className={`rounded-lg z-9 translate-x-3 translate-y-3 flex gap-4 justify-center items-center border-8  border-[#E0E0E0] absolute`} style={{ width: cardWidth, height: cardHeight, marginTop: backgroundMt, marginLeft: backgroundMl }} ></div>
        </div>

    )
}

export default SponsorCard
