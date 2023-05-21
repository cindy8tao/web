import React from 'react';
import { Card, Button } from 'antd';
import { FaGithub, FaSistrix } from 'react-icons/fa';
import proj1 from '../images/proj1.png';
import proj2 from '../images/proj2.png';
import ProjectsMobile from '../mobile/ProjectsMobile';
import { useState, useEffect } from 'react';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      name: 'Amazon SPARC Project',
      description: 'I collaborated with an Amazon mentor and three peers to develop an automation solution. The solution creates daily, aggregated, cross-account, multi-Region AWS Backup and Cost reports for resources with user-defined tags. To build this automation, we utilized various services in Amazon Web Services (AWS) and the AWS Software Development Kit (SDK). Additionally, we designed a comprehensive AWS architecture diagram with two stacks to effectively communicate the application\'s design, deployment, and topology.',
      image: proj1,
      demoLink: 'https://www.youtube.com/watch?v=d-c4Zk0G-mY&ab_channel=CindyTao',
      githubLink: 'https://github.com/cindy8tao/AWSQuicksightDashbboard',
    },
    {
      id: 2,
      name: 'Chef\'s Shelf Website',
      description: 'Our interactive food recipe website is inspired by popular platforms like Food.com. It features a grid-style layout and advanced search functionalities for users to explore recipes by keywords, ingredients, and nutrition. By integrating nine food recipe datasets, including recipe details, nutrition information, user ratings, and images, we provide a comprehensive recipe database. Users can create accounts, save their favorite recipes, and enjoy a seamless browsing experience. With optimized queries and a user-friendly interface, our website helps users find delicious recipes that meet their specific needs and preferences.',
      image: proj2,
      demoLink: 'https://www.youtube.com/watch?v=dNsTBXaz1tE&ab_channel=CindyTao',
      githubLink: 'https://github.com/cindy8tao/CIS550',
    },
    // Add more projects as needed
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1025);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsMobile(window.innerWidth <= 1025);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <ProjectsMobile />
    );
  }

  return (
    <div name='projects' className='w-full h-screen bg-[#d7f1ff] text-gray-600'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#E27D60]'>Projects</p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          {projects.map((project) => (
            <Card
              key={project.id}
              cover={<img alt={project.name} src={project.image} className='project-image' />}
              className='border border-gray-300 rounded-lg shadow-md'
              bodyStyle={{ height: '400px' }}
            >
              <div className='flex flex-col justify-between h-full p-4'>
                <div>
                  <h2 className='text-lg font-bold mb-4'>{project.name}</h2>
                  <p className='overflow-hidden text-ellipsis'>{project.description}</p>
                </div>
                <div className='flex justify-end'>
                  <Button
                    href={project.demoLink}
                    target='_blank'
                    className='mr-2 text-black group border-2 px-6 py-3 flex items-center justify-center w-[50%] rounded-full hover:bg-[#E27D60] hover:border-[#E27D60]'
                    type='primary'
                    icon={<FaSistrix size={30} color='black' />}
                  >
                    Demo
                  </Button>
                  <Button
                    href={project.githubLink}
                    target='_blank'
                    className='text-black group border-2 px-6 py-3 flex items-center justify-center w-[50%] rounded-full hover:bg-[#E27D60] hover:border-[#E27D60]'
                    type='primary'
                    icon={<FaGithub size={30} color='black' />}
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
