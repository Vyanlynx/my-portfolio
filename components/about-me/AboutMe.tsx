'use client';
import React from 'react';
import myDetails from '../../CMS/data.json';
import style from './AboutMe.module.css';
import Image from 'next/image';
import ImagePic from '@/public/roronoa-zoro-one-piece.webp';
import { useWindowSize } from '@/hooks/useWindowSize';
export default function AboutMe() {
  const {
    description,
    outOfWork,
    techStacks: { heading, stacks },
  } = myDetails;
    const { deviceType } = useWindowSize();
    console.log(deviceType,'deviceType')
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <div className={style.description}>{description}</div>
          <div className={style.heading}>{heading}</div>
          <div className={style.skills}>
            {stacks.map((stack, index) => (
              <div key={index}>
                <div>{'-> ' + stack}</div>
              </div>
            ))}
          </div>
          <div className={style.outOfWork}>{outOfWork}</div>
        </div>
        {deviceType !== 'mobile' && (
          <div>
            <Image src={ImagePic} alt={'ImagePic'} height={300} width={300} />
          </div>
        )}
      </div>
    </div>
  );
}
