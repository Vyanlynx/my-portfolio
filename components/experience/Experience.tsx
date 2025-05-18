import React from 'react';
import styles from './Experience.module.css';
import myDetails from '../../CMS/data.json';

const ExperienceSectionHeader = ({ designation, companyName }) => (
  <div className={styles.expContainer}>
    <span>{designation}</span>
    <span> @ </span>
    <span className={styles.expCompanyName}>{companyName}</span>
  </div>
);

const ExperienceDetailsSection = ({ description }) => {
  return (
    <>
      {description.map((details: string) => {
        return (
          <ul className={styles.expDescription} key={details}>
            <span># </span>
            <span>{details}</span>
          </ul>
        );
      })}
    </>
  );
};

export default function Experience() {
  const {
    workExperience: { experience },
  } = myDetails;

  return (
    <div className={styles.container}>
      {experience.map((details) => {
        return (
          <div className={styles.experienceSection} key={details.companyName}>
            <div>
              <ExperienceSectionHeader
                designation={details.designation}
                companyName={details.companyName}
              />
              <div className={styles.period}>{details.period}</div>
              <ExperienceDetailsSection description={details.description} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
