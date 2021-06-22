import Image from 'next/image';
import Link from 'next/link';
import { project } from '../../../projects';

const projectPage = ({ title, date, languages, body, image, link }) => {
  return (
    <div
      style={{
        /*         minHeight: 500,
        padding: [10 | 10],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 100, */
        marginLeft: 100,
        marginRight: 100,
        flex: [1 | 1 || auto],
      }}
    >
      <div>
        <div
          style={{
            /*  minHeight: 100,
            padding: [10 | 10], */
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginRight: 200,
          }}
        >
          <Image src={image} alt='homepage picture' height={220} width={350} />
        </div>
        <h1
          style={{
            fontSize: 25,
            fontFamily: 'Helvetica',
            fontWeight: 'lighter',
          }}
        >
          {title}
        </h1>
        <br />
        <h3
          style={{
            fontSize: 14,
            fontFamily: 'Helvetica',
            fontWeight: 'lighter',
          }}
        >
          {date}
        </h3>
        <br />
        <div
          style={{
            fontSize: 16,
            fontFamily: 'Helvetica',
            fontWeight: 'lighter',
          }}
        >
          <strong>Technologies: </strong> {languages}
        </div>
        <br />
        <div
          style={{
            fontSize: 16,
            fontFamily: 'Helvetica',
            fontWeight: 'lighter',
            lineHeight: 1.5,
          }}
        >
          {body}
        </div>
        <br />
        <div>
          <Link href={link}>
            <a
              style={{
                color: 'blue',
                fontSize: 16,
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                lineHeight: 1.5,
              }}
            >
              Link to GitHub code...
            </a>
          </Link>
        </div>
        <br />
        <div>
          <Link href='/projects'>
            <a
              style={{
                color: 'blue',
                fontSize: 16,
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                lineHeight: 1.5,
              }}
            >
              Go back... &rarr;
            </a>
          </Link>
        </div>
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
