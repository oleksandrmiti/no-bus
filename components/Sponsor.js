import React from "react";

const SponsorOfTheWeek = ({ sponsor }) => {
  if (!sponsor) return null; // Hide if no sponsor is set

  return (
    <div className="sponsor-container">
      <p className="sponsor-title">Sponsor of the Week</p>
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-link"
      >
        {sponsor.name}
      </a>
      <p className="sponsor-description">{sponsor.description}</p>
    </div>
  );
};

export default SponsorOfTheWeek;
