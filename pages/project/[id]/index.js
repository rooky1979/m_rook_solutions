import { project } from '../../../projects';

const projectPage = ({ title, date, languages, body, image, link }) => {
  return (
    <>
      <div className='bg-education bg-fixed'>
        <div className='flex'>
          <div className='w-1/3 p-7'>
            <img src={image} alt={image} className='w-full h-auto rounded' />
          </div>
          <div className='w-2/3 p-7'>
            <h1>{title}</h1>
            <br />
            <h3>{date}</h3>
            <br />
            <div>
              <strong>Technologies: </strong> {languages}
            </div>
            <br />
            <div>{body}</div>
            <br />
            <div>
              <a
                className='text-blue-600 hover:text-gray-400'
                href={link}
                target='_blank'
              >
                Link to GitHub code...
              </a>
            </div>
            <br />
            <div>
              <a href='/projects'>Go back... &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </>
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
