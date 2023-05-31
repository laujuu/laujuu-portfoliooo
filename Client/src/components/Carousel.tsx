import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './css/Carousel.module.css';
import raspaweb from '../components/webscrapingproject.gif';
import deliveryapp from '../components/deliveryappgif.gif';
import carshop from '../components/carshop.png';


const items = [
  {
    id: 1,
    name: 'Raspa Web',
    image: raspaweb,
    description: 'Os produtos são obtidos da raspagem do meli. e busca pé, utilizando filtros que o usuário desejar',
    stacks: 'React, Python e Flask',
    link: 'https://github.com/laujuu/RaspaWeb-WebScraping-Software'
  },
  {
    id: 2,
    name: 'Delivery APP ',
    image: deliveryapp,
    description: 'Aplicação Fullstack de aplicativo delivery. Desenvolvido em equipe durante o curso da Trybe',
    stacks: 'React, Node.js, Express, MySQL, Sass, Docker',
    link: 'https://github.com/laujuu/Delivery-App'

  },
  {
    id: 3,
    name: 'Car Shop API',
    image: carshop,
    description: 'Aplicado os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Feito utilizando o banco de dados MongoDB através do framework do Mongoose',
    stacks: 'Typescript, MongoDB, Mongoose',
    link: 'https://github.com/laujuu/Car-Shop'
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
        <img src={items[currentItem].image} alt="Imagem demostração do projeto" />
        <div className={styles.description}>
          <p>{items[currentItem].description}</p>
        </div>
        <div className={styles.icon}>
          <a href={items[currentItem].link} target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
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
