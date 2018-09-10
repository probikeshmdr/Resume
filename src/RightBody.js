import React, { Component } from 'react';
import { SkillsSet } from './skills';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import { items, icons } from './database';
import { Title } from './bodyTitle';


var formatter = {
    format : (type, content) => {
        if(type == 'bold'){
            return <p className="bold">{content} </p>
        }else {
            return <p className="unknown">{content} </p>
        }
    }
}

const Content = ({content}) => {
    return (
        <div className="Content">
            {formatter.format(content.type, content.text)}
        </div>
    );
}

const Responsibilities = ({responsibilities}) => {
    return (
        <div className="responsibilities">
            <p className="border-bottom"> Responsibilities </p>
            <ul>
                {responsibilities.map((responsibility, index) => <li key={index}> <p dangerouslySetInnerHTML={{__html : responsibility}}></p></li>)} 
            </ul>
        </div>
    );
}

const TechnologiesUsed = ({technologies}) => {
    return (
        <div className="TechnologiesUsed ">
            <p className="border-bottom">  Technology Used  </p>
            {
                technologies.map((techology, index) => <p key={index} className="inline-block " dangerouslySetInnerHTML={{__html : techology}}></p>)
            }
        </div>
    );
}


const Experience = ({experience}) => {
    return (
        <div className="experience">
            <div className="header header-bottom">
            <i class="material-icons">work_outline</i>
                <p className="inline title" dangerouslySetInnerHTML={{__html: experience.position}} /> <p className="italics inline">{experience.company == undefined ? undefined : `@ ${experience.company}`} </p>
            </div>
            <div className="experience-body">
                {/* <div className="left-side"> */}
                {/* </div> */}
                <Responsibilities  responsibilities={experience.responsibilities}/>

                {
                    experience.time == undefined? undefined : 
                    <div className="first date mat-icon">

                        <i class="material-icons">date_range</i>
                        <p className="border-bottom">{experience.time} </p>
                    </div>
                    
                }



                <TechnologiesUsed technologies={experience.technologies} />

                {
                    (experience.href == undefined) ? undefined : 
                    <div className="second">
                        <a className="inline-block capital link-site" href={experience.href}>
                            See the project.
                            <i class="material-icons">launch</i>
                        </a>
                    </div>
                }



            </div>
        </div>
    );
}

const Experiences = ({experiences, icon}) => {
    console.log("exp ", experiences);
    return (

        experiences.showingExperienceOf == "NONE" ? <div />: 

        <div className="experiences">
            <div className="header border-bottom">
                <Title title={experiences.header}
                        class_name=""
                        icon={icon} />

                {/* <span>{experiences.header} </span>
                <p class="experience-skill">{experiences.showingExperienceOf} </p> */}
            </div>

            <div className="experiences-body">
                {experiences.experiencesContent.map((experience, index) => <Experience key={index} experience={experience} />)}
            </div>
        </div>
    );
}

const OwnDS = ({body, icon})=> {
    console.log("body", body);

    return <div className="container"> 
            <div className="header">
                <Title class_name="" title={body.header} icon={icon} />
            </div>

            <div className="ownds-body">
                <p className="border-bottom"> {body.header} </p>
                {body.content.map((eachContent, index) => <Content key={index} content={eachContent} />)}
                </div> 
            </div>
};



const RightBody = ({menuItem, items}) =>{
    console.log("items", items);
    return (
        <div className="RightBody">
            <Switch>
                <Route path="/" exact render={()=> <SkillsSet icon={icons.code} title="SKILLS" skillsSet={items.skills} />} />
                <Route path="/Resume" exact render={()=> <SkillsSet icon={icons.code} title="SKILLS" skillsSet={items.skills} />} />
                <Route path="/skills" render={()=><SkillsSet icon={icons.code} title="SKILLS" skillsSet={items.skills} />} />
                <Route path="/about" render={()=><OwnDS  icon={icons.info} title="About" body={items.about}/>} />
                <Route path="/experiences" render={()=><Experiences icon={icons.experience} title="Experience"  experiences={items.experiences}/>} />
                <Route path="/projects" render={()=><Experiences icon={icons.project} title="Projects" experiences={items.projects}/>} />
            </Switch>
        </div>
    );
}


export {RightBody, Experiences};