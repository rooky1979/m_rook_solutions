export const project = [
  {
    id: '1',
    title: 'Movie discussion forum V1.0....',
    date: 'July 2021 - Sept 2021',
    excerpt: 'A movie forum with JWT authentication and more...',
    languages: 'MongoDB, Express.js, Node.js, React, Redux, Sass',
    body: 'After completing a MERN course, I wanted to cement the full-stack concepts and create a basic movie discussion forum.',
    body2:
      'The application uses JWT authentication when registering a new user and they can create a profile. When the user enters their favourite films, a request is made to the OMDB API and retrieves the movie poster, title, release year and director and displays it. The user can see the other members profiles and can post in the discussions page where each post can be commented on, liked/disliked and posts or comments deleted if the logged in user created the posts/comments.',
    body3:
      "The point of this project was not to create something that was full featured and secure, but to understand the concepts of how full-stack development works. However for version 2.0, I will add the ability to upload profile pictures, create email verification to confirm valid email addresses and display the user's favourite actors and directors by making a request to another API.",
    image: '/stalls.png',
    link: 'https://github.com/rooky1979/m_rook_solutions.git',
  },
  {
    id: '2',
    title: 'This site that you are reading; website V1.0....',
    date: 'June 2021 - July 2021',
    excerpt: "A 'visual resume'....",
    languages: 'Next.JS, CSS, React',
    body: "Once I had completed university, after a week of relaxing, I couldn't wait to start learning again. I decided to create a website that showcased who I am and my projects and experiences. I looked at many different frameworks to use. I was tempted to stick with what I had been taught in university with HTML and PHP, but decided to challenge myself and learn something new. As it was going to be a static site, I looked at Gatsby and Next.JS among others and decided to use Next.JS as it seemed to be a popular choice among developers.",
    body2:
      "After watching some tutorials and reading articles on Next.JS, building the pages hasn't been as issue, but the styling and placement of containers etc, has been. Design I have discovered, is a learning need that I have to improve on and gain more understanding of the CSS parameters.",
    body3:
      'I decided to try a styling framework and after doing some research on SASS, Tailwind and Bootstrap, I decided on learning Tailwind. I have found that with Tailwind after taking some time to understand it that it feels like it has a lot more control. I also added simple transistions to the banner and pages using Framer Motion',
    image: '/nextjslogo.png',
    link: 'https://github.com/rooky1979/m_rook_solutions',
  },
  {
    id: '3',
    title: 'Mobile application for the NZ Nutrition Foundation.....',
    date: 'July 2020 - June 2021',
    excerpt: 'A cooking application aimed at 14-17 year old people....',
    languages: 'Flutter, Dart, Google Firebase',
    body: 'This was for the R&D project of the final year at university. Our brief was to put forward a project proposal for a real-life client and develop the product proposed. We had to design and build a prototype application for the NZ Nutrition Foundation for a 14-17 year old demographic so that they could build on it with future iterations until ready for release.',
    body2:
      'Our team built a mobile application utilising Flutter and Dart as the language for the frontend, and Google Firebase for the backend to store user details, user comments and recipe information. The prototype allowed user registration, browsing for recipes and recipe submission. Flutter was chosen because the timeline permitted meant that we required a cross-platform technology and did not have the time to code native for both iOS and Android.',
    body3:
      'The team employed distributed scrum methodology and as a group, we endured many highs and lows. One of the many lessons learned was that something that has the potential to be big as a project like this could be, a full-stack web application could have been a better approach with mobile integration in a later iteration. Our structure of the Google Firebase collections meant that it was difficult to search through data and resulted in some features not to be fully functional.',
    body4:
      "The client was happy with what the team produced and it was fun using Dart and a great learning experience. As it is an object orientated language, it was quite easy to learn. Google Firebase I found was a great package and has potential for many applications, but it wasn't suitable for us.",
    image: '/YFM.png',
    link: 'https://github.com/rooky1979/yfm',
  },
  {
    id: '4',
    title: 'Taxi booking website....',
    date: 'April - May 2021',
    excerpt: 'A basic website to book and assign taxis....',
    languages: 'HTML5, CSS, PHP, Javascript, SQL',
    body: "The assignment brief for this project in the second semester of the final year at university for Web Development was to create a simple taxi booking website. It had to contain a booking page where a user could enter their details for pickup with certain fields requiring to be entered, saved to a database and sent a booking confirmation message. The admin page allowed for a search for bookings which displayed all the bookings for that search from the database. The user was able to click on a button to assign the status of the taxi booking from 'unassigned' to 'assigned'",
    body2:
      'The pages were built using HTML5 with some rudimental CSS styling, server side database queries with PHP and the server requests with Javascript.',
    body3:
      'Another fun project which was a great introduction into the fundamentals of web development. The hardest part for this assignment was the PHP and database queries. Missing a character in the query string proved difficult at times and problem solving it until I found an online query checker which was invaluable. This assignment recieved 90/100',

    image: '/taxiWebsite.png',
    link: 'https://github.com/rooky1979/simpleTaxiWebsite',
  },
  {
    id: '5',
    title: 'Virtual pet',
    date: 'May - June 2019',
    excerpt: "A 90's inspired virtual pet created from scratch....",
    languages: 'Java, Derby DB',
    body: 'The assignment brief for this project in the first semester of year 2 at university for Program Design and Construction was to create anything from a list of choices and it had to contain design patterns and incorporate the use of a database to load and save data. It also had to contain simple unit testing.',
    body2:
      "I decided to let nostalgia rule and design a virtual pet inspired by the Tamagotchi craze in the 1990's. The application utilised multi-threading to randomly reduce the pet's statistics (health, sickness, boredom, etc.,) and the statistics were saved to the DB when the user logged out and would load when they logged back in.",
    body3:
      'There were 3 different species that would randomly hatch at the start of the game so the user would not know what the pet would be. I could have used images from the internet to create this, but I wanted to not only create it all myself, but create something that looked like a child would have drawn. Hence the basic background and sprite designs. I also incorporated sounds and speech all recorded by myself. This project recieved 47/50',
    image: '/virtualPet.jpg',
    link: 'https://github.com/rooky1979/NetbeansProjects',
  },
  {
    id: '6',
    title: 'Cinema booking system',
    date: 'September - October 2018',
    excerpt: 'A booking system to book seats at a cinema....',
    languages: 'Java',
    body: 'This simple cinema booking system was the second assignment for the Programming 2 paper in semester 2 of the first year of university. Using object orientated programming with Java, the brief was to create a booking system where users could book cinema seats for a film and the booking price is displayed.',
    body2:
      "Caveats for children booking were that they could only book a 'G' certificate film or had to be accompanied by an adult when booking for a 'M' certificate film. They were not allowed to book for a 'R' certificate film. The elderly ticket price was always 30% of the adult ticket price.",
    body3:
      'A great fun assignment that proved to be tricky when navigating the 2D array for the seats and then assigning the event listeners. It was an interesting peek into the realm of GUI and I drew my own icons for the seats, each with different colours for the age group and empty seats. This assignment recieved full marks (50/50)',
    image: '/cinemaBooking.png',
    link: 'https://github.com/rooky1979/NetbeansProjects',
  },
];
