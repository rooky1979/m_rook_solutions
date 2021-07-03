import { project } from '../../../projects';

//page for each individual project. Data pulled from the projects.js JSON file
const projectPage = ({
  title,
  date,
  languages,
  body,
  body2,
  body3,
  body4,
  image,
  link,
}) => {
  return (
    <>
      <div className='flex mb-20 bg-education bg-fixed lg:align-middle'>
        <div className='hidden lg:block lg:w-1/2 lg:relative'>
          <img
            className='rounded absolute inset-0 px-10 lg:ml-5 lg:mr-10 lg:mt-5 h-auto w-full object-cover object-center'
            src={image}
            alt={image}
          />
        </div>
        <div className='px-8 py-12 lg:w-1/2'>
          <img className='rounded lg:hidden' src={image} alt={image} />
          <h1 className='sm:mt-5 font-sans text-lg font-semibold'>{title}</h1>
          <br />
          <h3>{date}</h3>
          <br />
          <div>
            <strong className='font-sans'>Technologies: </strong> {languages}
          </div>
          <br />
          <div className='font-sans'>{body}</div>
          <div className='mt-4 font-sans'>{body2}</div>
          <div className='mt-4 font-sans'>{body3}</div>
          <div className='mt-4 font-sans'>{body4}</div>

          <div className='mt-4'>
            <a
              className='text-blue-600 hover:text-gray-400 font-sans'
              href={link}
              target='_blank'
            >
              Link to GitHub code...
            </a>
          </div>
          <div className='mt-4'>
            <a
              className='font-sans hover:text-gray-400 text-gray-800'
              href='/projects'
            >
              Go back... &rarr;
            </a>
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
