"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Korea Software HRD Center Trainee",
      company: "Korea Software HRD Center",
      location: "Khan Toul Kork, Phnom Penh",
      period: "Jan. 2023 - Present",
      courses: [
        {
          name: "Basic Course",
          date: "February 03rd - July 10th, 2025",
          technologies: [
            "JAVA: J2SE (Basic Java and OOP concepts), J2EE (Maven and MVC pattern)",
            "WEB: HTML, CSS, JavaScript, CSS Flexbox, Tailwind CSS, JSON, Next.js",
            "SPRING: Spring Boot, MyBatis Data Access, Spring RESTful Web Service, Spring Security, JSON Web Token",
            "Database: Data Modeling, PostgreSQL",
            "Additional Courses: Linux, Docker, Version Control (GitHub) and UI/UX",
          ],
        },
        {
          name: "Advance Course",
          date: "July 28th - December 11th, 2025",
          technologies: [
            "ANDROID: Android Application Development with Kotlin",
            "Jetpack Compose UI Kit along with Material3 design concepts",
            "Data storage, Server communication (RESTful client) with Retrofit2",
            "MVVM architecture design, Dependency injection with Hilt",
            "Firebase Authentication services (e.g., Facebook Login, Email Login, etc.)",
            "OneSignal push notifications",
          ],
        },
      ],
    },
  ];

  return (
    <div className="py-32" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-10"
      >
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Experience
        </h2>
        <p className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70">
          My professional journey and training experience in software development.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, expIndex) => (
          <motion.div
            key={expIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: expIndex * 0.1 }}
            className="relative"
          >
            <div className="pl-12 md:pl-16">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold dark:text-stone-200 mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-dark-200/70 dark:text-stone-200/70 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                {exp.location && (
                  <p className="text-sm text-dark-200/60 dark:text-stone-200/60 mb-4">
                    {exp.location}
                  </p>
                )}
              </div>

              {/* Timeline container for courses */}
              <div className="relative">
                {/* Timeline vertical line connecting courses */}
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                <div className="space-y-8">
                  {exp.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="relative pl-12 md:pl-16">
                      {/* Timeline node for each course */}
                      <div className="absolute left-2 md:left-4 top-0">
                        <div className="size-4 rounded-full bg-primary border-2 border-white dark:border-dark-100 z-10"></div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold dark:text-stone-200">
                            {course.name}
                          </h4>
                          <span className="text-sm text-dark-200/60 dark:text-stone-200/60">
                            {course.date}
                          </span>
                        </div>
                        <ul className="space-y-2 ml-4">
                          {course.technologies.map((tech, techIndex) => (
                            <li
                              key={techIndex}
                              className="text-sm text-dark-200/70 dark:text-stone-200/70 flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5">•</span>
                              <span>{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

