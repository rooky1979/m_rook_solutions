import Link from 'next/link';
import { project } from '../projects';
import layoutStyles from '../styles/Layout.module.css';
import projectStyles from '../styles/Projects.module.css';

const projects = () => {
  return (
    <div className={layoutStyles.container}>
      <h1 className={layoutStyles.h1}>Projects</h1>
      <div>
        {project.map((item) => (
          <div key={item.id}>
            <h2 className={projectStyles.h2}>
              <Link href={`/project/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </h2>
            <h3 className={projectStyles.h3}>{item.date}</h3>
            <div>{item.excerpt}</div>
            <div>{item.languages}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
