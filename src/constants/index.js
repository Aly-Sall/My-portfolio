export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'MyF1 - Formula one website',
    desc: 'MyF1 is a website that allows you to learn more about the world of Formula 1 racing. Here, you can find all the information on all the drivers, their personal achievements, the teams, race dates, and also the circuits..',
    subdesc:
      'It was developed using React, typescript, framer motion and tailwind css. The website is fully responsive and can be accessed on any device.',
    href: 'https://my-f1.vercel.app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/f1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Cars, A Simple OpenGL Animation of Cars Moving',
    desc: 'Cars is a simple OpenGL-based project that demonstrates animated cars moving on a road with a smooth and realistic simulation.',
    subdesc:
      'It was developed using C++ and OpenGL, incorporating graphical elements like vehicles, motion, lane boundaries, and scenery to enhance visual appeal.',
    href: 'https://github.com/Aly-Sall/cars/tree/main',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/cars.jpeg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/C++.png',
      },
      {
        id: 2,
        name: 'OpenGL',
        path: '/assets/Opengl.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freelance',
    pos: 'Mobile Developer',
    duration: 'July 2024 - August 2024',
    title: [
      'Developed a cross-platform mobile application for a client, enabling users to discover and save recipes with a user-friendly interface and smooth navigation.',
      'Created reusable components and screens using React Native and TypeScript, ensuring scalability and main- tainability of the codebase.',
      'Implemented user authentication using Firebase Authentication, allowing users to securely sign in with Google and manage their profiles.',
      'Added advanced features such as recipe search, cuisine-based filters, and step-by-step cooking instructions with images to enhance user experience.',
    ].join(' '),
    icon: '/assets/freelance.webp',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'SNIM — National Industrial and Mining Company — Nouadhibou, Mauritania',
    pos: 'FullStack Developer Intern',
    duration: 'july 2023 - sep 2023',
    title: [
      'Developed a train ticket booking website, providing users with an intuitive and efficient platform to search, select, and purchase tickets.',
      'Optimized the reservation system, reducing the booking process time by 30 percent, making it simpler and faster for users.',
      'Integrated an SQL database to manage train, reservation, and user data, effectively handling over 3000 bookings per month.',
      'Implemented advanced search functionalities and custom filters to enhance user experience.',
    ].join(' '), // Optional: Combine the sentences back into a single string if needed
    icon: '/assets/snim.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Freelance',
    pos: 'FrontEnd Developer',
    duration: 'April 2024 - June 2024',
    title: [
      'Designed and implemented a scalable back-end architecture for an e-commerce website specializing in clothes sales, ensuring performance, security, and maintainability',
      'Developed RESTful APIs using .NET Core to manage product listings, user authentication, orders, and payments.',
      'Integrated SQL Server for database management, optimizing queries for fast access to product and user data.',
      'Implemented user authentication and authorization with JWT tokens and ASP.NET Identity, securing sensitive user and transaction data..',
    ].join(' '),
    icon: '/assets/freelance.webp',
    animation: 'salute',
  },
];
