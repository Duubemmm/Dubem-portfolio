import { useState, useEffect } from 'react';
import Dubem from "../assets/Dubem.jpg"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative bg-white px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Image Side - Takes 2 columns */}
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="sticky top-24">
              <img 
                src={Dubem} 
                alt="Dubem - Web Developer" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Content Side - Takes 3 columns */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              About
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Driven by curiosity and a passion for creating seamless web experiences, 
                I build solutions that are accessible, functional, and delightful to use. 
                My journey into development started unconventionally — I began coding on 
                a phone. While frustrating at times, it taught me resilience and 
                problem-solving that continue to shape my approach today.
              </p>

              <p>
                The web fascinates me because of its universal reach. With just a phone 
                and internet connection, anyone can access it. That's why I'm dedicated 
                to building websites and applications that deliver optimal experiences 
                for every user, regardless of their device or connection speed.
              </p>

              <p>
                When I'm not working on client projects, you'll find me experimenting 
                with new technologies and building side projects that push my skills forward.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <a 
                  href="#contact"
                  className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-green-700 hover:shadow-md"
                >
                  Book a call
                </a>
                <a 
                  href="/path-to-your-cv.pdf" 
                  download
                  className="inline-flex items-center rounded-md border-2 border-green-600 bg-transparent px-6 py-3 text-base font-medium text-green-600 transition-all hover:bg-green-50"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Expertise
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {[
                  'JavaScript',
                  'React.js',
                  'TypeScript',
                  'Node.js',
                  'Tailwind CSS',
                  'Git/GitHub',
                  'REST APIs',
                  'Responsive Design',
                  'Firebase',
                  'Express.js',
                  'MongoDB',
                  'And more...'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="mb-8 text-2xl font-bold text-gray-900">
                Experience
              </h3>
              
              <div className="space-y-10">
                {/* Experience Item 1 */}
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-green-200">
                  <div className="absolute left-0 top-2 h-3 w-3 -translate-x-[5px] rounded-full bg-green-600"></div>
                  
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Company Name
                    </h4>
                    <p className="text-base font-medium text-green-600">
                      Frontend Developer
                    </p>
                    <p className="text-sm text-gray-500">
                      January 2023 - Present
                    </p>
                  </div>
                  
                  <p className="text-gray-700">
                    Building responsive web applications and optimizing user experiences 
                    for thousands of daily users. Collaborated with cross-functional teams 
                    to deliver features that improved conversion rates by 25%.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-green-200">
                  <div className="absolute left-0 top-2 h-3 w-3 -translate-x-[5px] rounded-full bg-green-600"></div>
                  
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Previous Company
                    </h4>
                    <p className="text-base font-medium text-green-600">
                      Junior Web Developer
                    </p>
                    <p className="text-sm text-gray-500">
                      June 2021 - December 2022
                    </p>
                  </div>
                  
                  <p className="text-gray-700">
                    Developed and maintained multiple client websites, implementing modern 
                    web standards and best practices. Gained experience in React, Node.js, 
                    and agile development methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;