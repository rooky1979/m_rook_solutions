import Image from 'next/image';
import layoutStyles from '../styles/Layout.module.css';
import aboutStyles from '../styles/About.module.css';

const about = () => {
  return (
    <div>
      <div>
        {/*         <Image
          className={aboutStyles.aboutImageContainer}
          src='/akroyd.jpeg'
          alt='me and akroyd'
          height={250}
          width={250}
          //layout='fixed'
        /> */}
        <h1 className={aboutStyles.title}>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            className={aboutStyles.aboutImageContainer}
            src='/akroyd.jpeg'
            alt='me and akroyd'
            height={250}
            width={250}
            //layout='fixed'
          />
          &nbsp;&nbsp;&nbsp;&nbsp;About me...
        </h1>
      </div>
      {/* <h1 className={aboutStyles.title}>About</h1> */}

      <p className={layoutStyles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus
        vel deserunt. Vel consequuntur, voluptas natus adipisci cumque maxime,
        quae sunt laborum similique debitis dignissimos iusto cupiditate nisi,
        voluptates quo!
      </p>
    </div>
  );
};

export default about;
