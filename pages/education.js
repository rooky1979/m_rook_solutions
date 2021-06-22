import Link from 'next/link';
import { school } from '../education';
import layoutStyles from '../styles/Layout.module.css';
import projectStyles from '../styles/Projects.module.css';

const education = () => {
  return (
    <div className={layoutStyles.container}>
      <h1 className={layoutStyles.h1}>Projects</h1>
      <div>
        {school.map((item) => (
          <div key={item.id}>
            <h2 className={projectStyles.h2}>{item.title}</h2>
            <h3 className={projectStyles.h3}>{item.date}</h3>
            <div>{item.course}</div>
            <div>{item.grade}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default education;
