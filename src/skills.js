import React, { Component } from 'react';
import {filterer, items} from "./database";
import { Experiences } from './RightBody';
import BodyTitle, { Title } from './bodyTitle';


function skillClicked (skill){
    this.setState({
        skill : skill
    });
}

function getExperiencesFrom(skill){
    
}

function convertStar(length){

    let stars = '';
    for(var i = 0; i < length; i++){
        stars += '*';
    }
    return <p> {stars} </p>;
}

class SkillsSet extends Component {
    constructor(props){
        super(props);
        this.state = {
            experiences: filterer([]),
            skills: []
        }

        this.skillClicked = this.skillClicked.bind(this);
    }


    skillClicked(skill){

        var skills = this.state.skills;
        
        if(skills.indexOf(skill) != -1){
            skills = skills.filter(itemSkill => itemSkill!=skill);
        }else{
            skills.push(skill);
        }

        console.log("filterer", filterer);
        let data = filterer(skills);
        
        console.log("data", data);
        
        if(data == undefined || data == null) data = []
        this.setState({
            experiences : data,
            skills: skills
        })
    }

    render(){

        let {skillsSet, icon} = this.props;

        console.log("skills", skillsSet);

        return (
            <div className="SkillsSet">

            <div className="mid-body-header default-padding">

                    <div className="top-container">
                        <Title  class_name=""  icon={icon} title={this.props.title} /> 
                    </div>


                    <div className="skills">
                        {
                            skillsSet.skillsSet.map((skillHeader, index) => 
                            <div key={index} className="skillsSet">
                                {/* <BodyTitle title={skillHeader.category} />  */}
                                <BodyTitle class_name="small capital">
                                    {skillHeader.category}  
                                </BodyTitle>
                                <div className="skillsSet-body">
                                    {
                                        skillHeader.skills.map((skill, index) => 
                                            (
                                                <div key={index} className="skill" > 
                                                <input type="checkbox" onClick={e=>{this.skillClicked(skill.name)}} />  
                                                    <p className="skill-bottom" style={{
                                                        // width: `${skill.prof * 20}%`
                                                        
                                                    }}> {skill.name}  </p>
                                                    {/* {
                                                        convertStar(skill.prof)
                                                    }  */}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                            )
                        }
                    </div>

                </div>

                <Experiences experiences={this.state.experiences} />

            </div>
        );
    }
} 


export {SkillsSet};
