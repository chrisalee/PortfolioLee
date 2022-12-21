import React from 'react';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/JavaScript.png';
import jQuery from '../assets/jQuery.png';
import ajax from '../assets/ajax.png';
import Angular from '../assets/angular.png';
import Python from '../assets/python.png';
import CSharp from '../assets/c-sharp.png';
import Bootstrap from '../assets/bootstrap.png';
import nodeJS from '../assets/nodejs.png';
import MongoDB from '../assets/mongodb.png';
import MySQL from '../assets/mysql.png';
import ReactJS from '../assets/react.png';
import MEAN from '../assets/MEAN.png';
import Express from '../assets/expressjs.png';
import Django from '../assets/django.png';
import GitHub from '../assets/github.png';
import MERN from '../assets/MERN.png';
import Flask from '../assets/flask.png';
import Unity from '../assets/unity.png';
import Firebase from '../assets/firebase.png';

const Technologies = () => {

    const mouseEnter = (event) => {
        event.target.style.borderRadius = "50%";
        event.target.style.border = ".5em solid #303030";
        
    };
    const mouseLeave = (event) => {
        event.target.style.border = "none";
    }

    return (
        <div>
            <section className="technolgies" id='technologies'>
                <h2 className="section__title section__title--technolgies">Technologies</h2>
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ HTML } alt="HTML" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ CSS } alt="CSS" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ JavaScript } alt="JS" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ jQuery } alt="jQuery" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ ajax } alt="ajax" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Angular } alt="Angular" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Python } alt="Python" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ CSharp } alt="C#" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Bootstrap } alt="Bootstrap" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ nodeJS } alt="nodejs" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MongoDB } alt="mongodb" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MySQL } alt="mysql" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ ReactJS } alt="html" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MEAN } alt="MEAN" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Express } alt="Express" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Django } alt="django" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ GitHub } alt="github" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ MERN } alt="MERN" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Flask } alt="flask" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Unity } alt="unity" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ Firebase } alt="firebase" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
            </section>
        </div>
    )
}

export default Technologies
