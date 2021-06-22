import Link from 'next/link';
import { skills } from '../experience';
import layoutStyles from '../styles/Layout.module.css';
import projectStyles from '../styles/Projects.module.css';

const experience = () => {
  return (
    <div /* className={layoutStyles.container} */>
      <h1 /* className={layoutStyles.h1} */>Experience</h1>
      <div>
        {skills.map((item) => (
          <div key={item.id}>
            <h2 /* className={projectStyles.h2} */>{item.title}</h2>
            <div
              style={{
                fontSize: 16,
                fontFamily: 'Helvetica',
                fontWeight: 'lighter',
                lineHeight: 1.5,
              }}
            >
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default experience;
