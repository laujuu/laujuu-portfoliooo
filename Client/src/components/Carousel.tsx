import { useState } from 'react';
import styles from './css/Carousel.module.css';

const items = [
  {
    id: 1,
    name: 'projeto de tal',
    image: 'src/components/Screenshot.png',
    description: 'O projeto de tal, foi criado com ituito tal',
    stacks: 'react python flask'
  },
  {
    id: 2,
    name: 'api mt doida',
    image: 'src/components/Screenshot2.png',
    description: 'Pensa numa api doida, ela é uma api e doida',
    stacks: 'react node mongodb'

  },
  {
    id: 3,
    name: 'react de seila oq',
    image: 'src/components/Screenshot3.png',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    stacks: 'react node express'
  },
];

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const handlePrev = () => {
    setCurrentItem(currentItem === 0 ? items.length - 1 : currentItem - 1);
  };

  const handleNext = () => {
    setCurrentItem(currentItem === items.length - 1 ? 0 : currentItem + 1);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselItem}>
        <h3>{items[currentItem].name}</h3>
        <img src={items[currentItem].image} alt="Imagem do Item" />
        <div className={styles.description}>
          <p>{items[currentItem].description}</p>
        </div>
        <div className={styles.stacks}>
          <p>Feito com: {items[currentItem].stacks}</p>
        </div>
      </div>
      <div className={styles.carouselControls}>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </div>
    </div>
  );
};

export default Carousel;
