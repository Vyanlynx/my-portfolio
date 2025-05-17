import React from 'react';
import myDetails from '../../CMS/data.json';
import style from './ProfileSummary.module.css';
import Link from 'next/link';
export default function ProfileSummary() {
  const {
    summary: { description, greetings, summary, contact },
    links: { linkedin },
  } = myDetails;

  return (
    <div className={style.container}>
      <div className={style.greetings}>{greetings}</div>
      <div className={style.description}>{description}</div>
      <div className={style.summary}>{summary}</div>
      <div className={style.contact}>
        <Link className={style.contactlink} href={linkedin}>
          {contact}
        </Link>
      </div>
    </div>
  );
}
