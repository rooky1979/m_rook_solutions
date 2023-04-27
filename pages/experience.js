//page that shows experience and transferable skills
import { motion } from 'framer-motion';

const experience = () => {
  return (
    <div className=' mb-20 bg-education bg-fixed'>
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
          <span className='mt-12 absolute text-white font-extralight font-sans text-center text-5xl'>
            Experience and Transferable Skills
          </span>
        </div>
      </motion.div>
      <br />
      <div className='flex justify-center'>
        <div className='border-black rounded shadow-md bg-gray-100 w-4/6'>
          <ul className='ml-6 list-disc p-5'>
            <li className=' text-lg font-semibold font-sans'>
              Current Employment: Deloitte SAP/Fiori Developer. Nov 2021 - Current.
            </li>
            <li className='mt-3 font-sans font-light list-disc'>
              Responsible for creating/enhancing and modifying SAP products for clients in their build.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Competant with the fundamentals and concepts of ABAP programming language.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Competant with Fiori Elements and SAPUI5.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Responsible for generating Functional and Technical specifications.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Responsible for the finding and fixing of defects.
            </li>
          </ul>
        </div>
        <div className='border-black rounded shadow-md bg-gray-100 w-4/6'>
          <ul className='ml-6 list-disc p-5'>
            <li className=' text-lg font-semibold font-sans'>
              Project Management
            </li>
            <li className='mt-3 font-sans font-light list-disc'>
              Leadership; I don’t manage my teams, I lead them by example,
              putting the work in alongside.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Manager for multiple projects from simple to high profile spanning
              over 5 years.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Excellent ability to multi-task, using the time effectively in
              order to get the job done to meet the timelines agreed.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Quick and efficient, but never compromising the quality and
              accuracy of the project. Getting it right first time is important.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Thrives under pressure, doesn’t crumble and begs to be challenged.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Great rapport in dealing with customers, both internally and
              externally.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Great attention to detail.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Vast experience with writing business cases and proposals.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className='flex justify-center'>
        <div className='border-black rounded shadow-md bg-gray-100 w-4/6'>
          <ul className='ml-6 list-disc p-5'>
            <li className=' text-lg font-semibold font-sans'>
              Teamwork, Training & Decisions
            </li>
            <li className='mt-3 font-sans font-light list-disc'>
              A teachable individual that is always striving to learn more and
              be the best I can be.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Not above my station and understand my capabilities. There is no
              ego.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              A respected and reliable team member.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              A team player, but also competent to work alone using initiative,
              thinking “outside the box”.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Capable of decision making with respect to the quality of systems.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Analytical thinker and problem solver. 16 years in Analytical
              Chemistry teaches you that.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className='flex justify-center'>
        <div className='border-black rounded shadow-md bg-gray-100 w-4/6'>
          <ul className='ml-6 list-disc p-5'>
            <li className=' text-lg font-semibold font-sans'>
              Communication & Organisation
            </li>
            <li className='mt-3 font-sans font-light list-disc'>
              Communication with others is excellent.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Excellent organisational skills – workload is efficiently
              prioritized.
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              Builds relationships with other internal and external customers
              for smooth running and repeat business
            </li>
            <li className='mt-1 font-sans font-light list-disc'>
              People person and friendly persona.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className='flex justify-center'>
        <div className='border-black rounded shadow-md bg-gray-100 w-4/6'>
          <ul className='ml-6 list-disc p-5'>
            <li className=' text-lg font-semibold font-sans'>Documentation</li>
            <li className='mt-3 font-sans font-light list-disc'>
              Vast experience in writing reports, manuals, standard operating
              procedures, various plans, protocols and more.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default experience;
