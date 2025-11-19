import React, { useRef, useEffect, useState } from "react";
import GridScan from "./components/GridScan/GridScan";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import Particles from "./components/Particles/Particles";
import python from "./assets/python.png";
import reactIcon from "./assets/react.png";
import reactNative from "./assets/react-native.png";
import kotlin from "./assets/kotlin.png";
import jetpackCompose from "./assets/jetpack-compose.png";
import javascript from "./assets/javascript.png";
import typescript from "./assets/typescript.png";
import mysql from "./assets/mysql.png";
import mongodb from "./assets/mongodb.png";
import nodejs from "./assets/nodejs.png";
import php from "./assets/php.png";
import aws from "./assets/aws.png";
import azure from "./assets/azure.png";
import trello from "./assets/trello.png";
import figma from "./assets/figma.png";
import canva from "./assets/canva.png";

import wordluxe from './assets/wordluxe.svg';
import anatomyDetective from './assets/anatomy_detective.png';
import dagudorms from './assets/dagudorms.svg';
import fokus from './assets/fokus.png';
import scholarzone from './assets/scholarzone-logo.png';
import evacudesk from './assets/evacudesk.png';
import './App.css'


function App() {
    const technologies = [
        { image: python, text: 'Python', type: 'Backend' },
        { image: reactIcon, text: 'React', type: 'Frontend' },
        { image: reactNative, text: 'React Native', type: 'Frontend' },
        { image: kotlin, text: 'Kotlin', type: 'Frontend' },
        { image: jetpackCompose, text: 'Jetpack Compose', type: 'Frontend' },
        { image: javascript, text: 'JavaScript', type: 'Frontend' },
        { image: typescript, text: 'TypeScript', type: 'Frontend' },
        { image: nodejs, text: 'Node.js', type: 'Backend' },
        { image: php, text: 'PHP', type: 'Backend' },
        { image: mysql, text: 'MySQL', type: 'Database' },
        { image: mongodb, text: 'MongoDB', type: 'Database' },
        { image: aws, text: 'AWS', type: 'Cloud' },
        { image: azure, text: 'Azure', type: 'Cloud' },
        { image: trello, text: 'Trello', type: 'Project Management' },
        { image: figma, text: 'Figma', type: 'UI/UX' },
        { image: canva, text: 'Canva', type: 'UI/UX' }
    ]

    const categories = ['All','Frontend','Backend','Database','UI/UX','Cloud'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredTechnologies = selectedCategory === 'All'
        ? technologies
        : technologies.filter(t => t.type === selectedCategory);

    
    const projects = [
        { image: wordluxe, width: '200px', height: '200px', name: 'Wordluxe', tags: ['Python'], info: 'A recreation of the popular game, Wordle, with fun and exciting twists. Built using Python and PyQT in 2023.', link: 'https://github.com/phosrei/wordluxe'},
        { image: anatomyDetective, width: '350px', height: '200px', name: 'Anatomy Detective', tags: ['Java'], info: 'A quiz game developed for aspiring medical students to allow them to study the human anatomy easier. Built using Java in 2024.', link: 'https://github.com/endevium/AnatomyDetective'},
        { image: dagudorms, width: '200px', height: '200px', name: 'DaguDorms', tags: ['HTML', 'CSS', 'JS'], info: 'A web application for students who are looking for dormitories in Dagupan City. Built using HTML, CSS, and JavaScript in 2024.', link: 'https://github.com/phosrei/dagudorms'},
        { image: fokus, width: '200px', height: '200px', name: 'Fokus', tags: ['Kotlin', 'PHP', 'MySQL'], info: 'A pomodoro study technique timer application built for students. Built using Kotlin, PHP and MySQL in 2024.', link: 'https://github.com/endevium/Fokus'},
        { image: scholarzone, width: '200px', height: '200px', name: 'ScholarZone', tags: ['Kotlin', 'Vue', 'MySQL'], info: 'A scholarship application and management system. Built using Kotlin, Vue, PHP, and MySQL in 2024.', link: 'https://github.com/endevium/ScholarZone'},
        { image: evacudesk, width: '200px', height: '200px', name: 'EvacuDesk', tags: ['React', 'Node.js', 'MongoDB'], info: 'An evacuation center management system for CDRRMO in the Philippines. Built using ReactJS, TypeScript, Node.js, MongoDB in 2025.', link: 'https://github.com/endevium/EvacuDesk'}
    ]

    return (
        <>  
            
            <div className="topnav">
                <a className="logo">JRCP</a>
                <div>
                    <a href="#about" className="home">About</a>
                    <a href="#technologies" className="about">Technologies</a>
                    <a href="#portfolio" className="portfolio">Portfolio</a>
                </div>
            </div>

            <div className="grid-scan" aria-hidden="true">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#161616"
                    gridScale={0.1}
                    scanColor="#ae9eff"
                    scanOpacity={0.2}
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>

            <div id="home" className="home-div">
                    <h3 className="hello">Hello, I'm</h3>
                    <h1 className="name">John Rasheed Paner</h1>
                    <p className="details">Full-stack Developer from the Philippines</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/captain.art2005" target='_blank'>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/endevium">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                    <br/>
            </div>

            <div style={{ width: '99%', height: '130vw', position: 'absolute' }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div id="about" className="about-div">
                <div className="title-container-1">
                    <h3 className="aboutMe">ABOUT</h3>
                </div>

                <div className="about-main-container">
                    <div className="who-container-2">
                        <p>I work with a modern tech stack that includes Frontend Development (React, React Native, Kotlin, Jetpack Compose, JavaScript, TypeScript), Backend Development (Node.js, PHP), and Databases (MySQL, MongoDB). I also use Trello for project management, AWS and Azure for cloud deployments, Git/GitHub for version control, and Figma/Canva for UI design.
                            <br/>
                            <br/>
                            I’ve worked on a variety of projects including a Wordle clone, an anatomy quiz app for medical students, a dorm reservation platform for Dagupan City, a premium Pomodoro timer app, a full Scholarship Application and Management System, and an Evacuation Center Management System.
                        </p>
                    </div>
                </div>
            </div>

            <div id="technologies" className="tech-div">
                <div className="title-container-1">
                    <h3 className="aboutMe">TECHNOLOGIES</h3>
                </div>

                <div className="tech-main-container">
                    <div className="tech-buttons">
                        {categories.map(cat => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={selectedCategory === cat ? 'selected-button' : ''}
                          >
                            {cat}
                          </button>
                        ))}
                    </div>

                    <div style={{ width: '100%', height: '500px', marginTop: '-20px' }}>
                        <CircularGallery 
                            items={filteredTechnologies}
                            bend={0} 
                            textColor="#ffffff" 
                            borderRadius={0.05} 
                            scrollEase={0.02}
                        />
                    </div>
                </div>


            </div>

            <div id="portfolio" className="portfolio-div">
            <div className="title-container-1">
                    <h3 className="aboutMe">PORTFOLIO</h3>
                </div>

                <div className="portfolio-main-container">
                    <div className="project-card-container">
                        {projects.map((project) => (
                            <div className="project-card">
                                <a href="#">
                                    <img src={project.image} style={{ width: project.width, height: project.height}} />
                                </a>
                                <div className="project-card-info">
                                    <a className="project-name" href={project.link} target="_blank">{project.name}</a>
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <div className="tag">
                                                <p>{tag}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="project-info">
                                        <p>{project.info}</p>
                                    </div>
                                    <a className="project-link" href={project.link} target="_blank">View Repository</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
