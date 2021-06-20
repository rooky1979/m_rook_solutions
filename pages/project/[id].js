/* import layoutStyles from '../../styles/Layout.Module.css';
import projectStyles from '../../styles/Projects.Module.css'; */
import Link from 'next/link';
import { project } from '../../projects';

const projectPage = ({ title, date, languages, body }) => {
  return (
    <div>
      <h1
        style={{ fontSize: 25, fontFamily: 'Helvetica', fontWeight: 'lighter' }}
      >
        {title}
      </h1>
      <br />
      <h3
        style={{ fontSize: 14, fontFamily: 'Helvetica', fontWeight: 'lighter' }}
      >
        {date}
      </h3>
      <br />
      <div>
        {' '}
        <strong>Technologies: </strong> {languages}
      </div>
      <br />
      <div>{body}</div>
      <br />
      <div>
        <Link href='/projects' style={on}>
          <a>Go back...</a>
        </Link>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  console.log('hello');
  const { params } = context;

  return {
    props: project.find((item) => item.id === params.id),
  };
}

export async function getStaticPaths() {
  return {
    paths: project.map((item) => ({
      params: {
        id: item.id,
      },
    })),
    fallback: false,
  };
}

export default projectPage; //maybe get rid of
