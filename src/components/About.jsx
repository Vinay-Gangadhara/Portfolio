import { useState, useTransition, useRef, Suspense } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import Loading from "./Loading";

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const refHeading = useRef(null);
    const refContent = useRef(null);
    const inViewHeading = useInView(refHeading);
    const inViewContent = useInView(refContent, { once: true });

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }
    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className=" sm:px-8 py-[80px] overflow-hidden" id="about">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    About Me
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <motion.div
                    ref={refContent}
                    initial={{
                        opacity: 0,
                        x: -100,
                        scale: 0.8,
                        filter: "blur(6px)",
                    }}
                    animate={
                        inViewContent
                            ? {
                                  opacity: 1,
                                  x: 0,
                                  scale: 1,
                                  filter: "blur(0px)",
                              }
                            : { opacity: 1, x: -100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1 md:max-w-[40%] sm:mt-10 "
                >
                    <Suspense fallback={<Loading />}>
                        <img
                            src="/images/about.png"
                            alt="meme"
                            loading="lazy"
                            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] "
                        />
                    </Suspense>
                </motion.div>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, x: 0, scale: 1 }
                            : { opacity: 0, x: 100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-7">
                        I am a passionate FULL Stack Developer and a Problem
                        Solver, dedicated to creating impactful codes that
                        thrive on the internet.
                        <br />
                        I have experience working with Java, Spring Boot, Hibernate, JavaScript,
                        TypeScript, Python, HTML, CSS, React.js, Next.js,
                        Node.js, Express.js, MongoDB, Tailwind CSS, and Git.
                        <br />I am a quick learner and I am always looking to
                        expand my knowledge and skill set.
                    </p>

                    <div className="flex flex-row justify-start gap-6 pl-4">
                        <TabbedComponent
                            selectTab={() => selectTab("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabbedComponent>
                        <TabbedComponent
                            selectTab={() => selectTab("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabbedComponent>
                        <TabbedComponent
                            selectTab={() => selectTab("work")}
                            active={tab === "work"}
                        >
                            {" "}
                            Work Experience{" "}
                        </TabbedComponent>
                    </div>
                    <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
                        {tab === "skills" ? (
                            Skills?.map((skill, i) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        key={i}
                                        className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                    >
                                        <img
                                            src={skill.img}
                                            alt={skill.description}
                                        />
                                        <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                                            {skill.description}
                                        </span>
                                    </motion.div>
                                );
                            })
                        ) : tab === "education" ? (
                            <ul className="list-disc pl-2">
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Northeastern University, Boston USA
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Master's of Science in
                                                Computer Software Engineering
                                            </p>
                                        </span>
                                        <div className="ml-7 mt-2 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                            <span>2023-2025</span>
                                            </div>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Vellore Institute of Technology, Vellore India
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Bachelor of Technology in
                                                Computer Science & Engineering
                                            </p>
                                        </span>
                                        <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                            <span>2016-2020</span>
                                            </div>
                                    </div>
                                </motion.li>
                                
                            </ul>
                        ) : (
                            <ul className="list-disc pl-2 flex flex-col gap-4">
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Software Development Engineer{" "}
                                        <span className="text-base font-[500]">
                                            - Bank Of America
                                        </span>
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                            Modernized and migrated end-to-end Talend ETL to SSIS, owning the full ETL migration process, achieving a 60% boost
in data load efficiency with high-capacity handling of 50M records daily and software development lifecycle (SDLC).
                                            </p>
                                            
                                        </span>
                                    </div>

                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                        <p>
                                            Enhanced a wholesale loan application by developing 5 features with Spring Boot and React, and streamlined
deployment via Ansible, achieving a 40% reduction in processing time and 30% increase in user satisfaction
                                            </p>
                                            
                                        </span>
                                    </div>

                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                        <p>
                                            Leveraged J2EE design patterns, including Model-View-Controller (MVC), Plain Old Java Object (POJO), and Data
Access Object (DAO) achieving application scalability and enhancing modularity
                                            </p>
                                            
                                        </span>
                                    </div>

                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                        <p>
                                        Maintained ownership of 5 microservices, ensuring high-capacity data processing at an average of 5M users per day.
                                            </p>
                                            
                                        </span>
                                    </div>


                                 


                                    <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                        <span className="">
                                            Aug 2020 - Aug 2023
                                        </span>
                                        <span className="">Chennai, India</span>
                                    </div>
                                </motion.li>
                                
                            </ul>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
