//page that shows the university transcript in tables
import { year_1 } from '../education1';
import { year_2 } from '../education2';
import { year_3 } from '../education3';
import { motion } from 'framer-motion';

const education = () => {
  return (
    <div className='bg-education bg-fixed pb-10'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <div className='flex justify-center from-white via-blue-600 to-white bg-gradient-to-b w-full h-40'>
          <span className=' mt-12 absolute text-white font-extralight font-sans text-center text-5xl'>
            Education
          </span>
        </div>
      </motion.div>
      {/* <div className='flex justify-center '>
        <div className='mt-10 flex p-3 w-1/2 items-center justify-evenly border-solid rounded border-black bg-gray-100 shadow-lg'>
          <div className=' rounded'>
            <img
              className='h-40 rounded shadow-lg  '
              src='/AUT.jpeg'
              alt='AUT'
            />
          </div>
          <div className='p-3 w-1/2 text-justify '>
            <p className='font-light font-sans'>
              <strong>School: </strong>Auckland University of Technology
            </p>
            <p className='font-light font-sans'>
              <strong>Course: </strong>Bachelor Computer and Information Science
            </p>
            <p className='font-light font-sans'>
              <strong>Major: </strong>Software Development
            </p>
            <p className='font-light font-sans'>
              <strong>Grade: </strong>GPA 7.2 (A-)
            </p>
            <p className='font-light font-sans'>
              <strong>Date: </strong>February 2018 - June 2021
            </p>
          </div>
        </div>
      </div> */}
      <div class='mt-10 w-full max-w-full md:flex justify-center'>
        <div class='h-48 lg:h-auto lg:w-48 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden '>
          <img
            className='h-48 w-auto rounded shadow-lg  '
            src='/AUT.jpeg'
            alt='AUT'
          />
        </div>
        <div class=' bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4  flex-col justify-center leading-normal'>
          <div>
            <div className='p-3 text-justify '>
              <p className='font-light font-sans'>
                <strong>School: </strong>Auckland University of Technology
              </p>
              <p className='font-light font-sans'>
                <strong>Course: </strong>Bachelor Computer and Information
                Science
              </p>
              <p className='font-light font-sans'>
                <strong>Major: </strong>Software Development
              </p>
              <p className='font-light font-sans'>
                <strong>Grade: </strong>GPA 7.2 (A-)
              </p>
              <p className='font-light font-sans'>
                <strong>Date: </strong>February 2018 - June 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='flex justify-center'>
        <table className='shadow-xl bg-white w-1/2'>
          <tr>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Year 1 Paper Name
            </th>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Level
            </th>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Grade
            </th>
          </tr>
          {year_1.map((course) => (
            <tr>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.paper}
              </td>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.level}
              </td>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.grade}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <div className='flex justify-center'>
        <table className='shadow-lg bg-white w-1/2'>
          <tr>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Year 2 Paper Name
            </th>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Level
            </th>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Grade
            </th>
          </tr>
          {year_2.map((course) => (
            <tr>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.paper}
              </td>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.level}
              </td>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.grade}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <div className='flex justify-center'>
        <table className='shadow-lg bg-white w-1/2'>
          <tr>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Year 3 Paper Name
            </th>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Level
            </th>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Grade
            </th>
          </tr>
          {year_3.map((course) => (
            <tr>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.paper}
              </td>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.level}
              </td>
              <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
                {course.grade}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <div className='flex justify-center'>
        <table className='shadow-lg bg-white w-1/2'>
          <tr>
            <th className='bg-blue-300  text-center px-8 py-4 font-semibold font-sans'>
              Further Learning
            </th>
          </tr>
          <tr>
            <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
              Flutter & Dart - The Complete Flutter App Development Course with
              Paulo Dichone
            </td>
          </tr>
          <tr>
            <td className=' px-8 py-4 text-center bg-gray-100 font-extralight font-sans'>
              MERN Stack Front To Back: Full Stack React, Redux & Node.js with
              Brad Traversy
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default education;
