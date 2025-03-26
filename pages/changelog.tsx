import React from 'react';
import Navbar from '@/components/Navbar';
import styles from "../styles/Changelog.module.css";

const Changelog = () => {
  const changelogEntries = [
    {
      date: '2025-03-26',
      changes: [
        'Made "Location" field visible in the report.',
        'Added functionality to hide the report. (it doesn\'t delete report from the database)',
        'Added ChangeLog page.',
      ],
    },
    {
        date: '2025-03-21',
        changes: [
          'Privacy Policy added.',
          'Terms of Service added.',
        ],
    },
    {
        date: '2025-02-17',
        changes: [
          'Frontend form validation.',
        ],
    },
    {
        date: '2025-02-14',
        changes: [
          'Added pop up for valentines day.',
          'Changed date picket to the Radio Buttons.'
        ],
    },
    {
        date: '2025-02-13',
        changes: [
          'Validation for busRoute and Location fields.',
        ],
    },
    {
        date: '2025-02-12',
        changes: [
          'API information added, Readme updated.',
        ],
    },
    {
        date: '2025-02-10',
        changes: [
          'Added HCaptcha to the report form.',
        ],
    },
    {
      date: '2025-02-08',
      changes: [
        'Initial release of the No-Show Bus website.',
        'User reports for bus location issues.',
      ],
    },
  ];

  return (
    <>
        <Navbar />
        <div className={styles.container}>
        <h1>Changelog</h1>
        {changelogEntries.map((entry, index) => (
            <div key={index} className={styles.entry}>
            <h2>Date: {entry.date}</h2>
            <ul>
                {entry.changes.map((change, changeIndex) => (
                <li key={changeIndex}>{change}</li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    </>
  );
};

export default Changelog;
