import React from 'react';
import TourCard from '../TourCard/TourCard';
import styles from './ToursSection.module.css';
import Image from '../../public/images/ararat.jpg'

const ToursSection: React.FC = () => {
  return (
    <section className={styles.toursSection}>
      <h2 className={styles.title}>Upcoming tours & Adventures</h2>
      <TourCard
        image={Image}
        title="Mt Ararat Summit Hike"
        location="Eastern Turkey"
        startDate="July"
        endDate="August"
        grade={5}
        price={1400}
        viewTripUrl=""
      />
    </section>
  );
};

export default ToursSection;