import React from 'react';

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
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/HTML.png' } alt="HTML" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/CSS.png' } alt="CSS" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/JavaScript.png' } alt="JS" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/jQuery.png' } alt="jQuery" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/ajax.png' } alt="ajax" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/angular.png' } alt="Angular" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/python.png' } alt="Python" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/c-sharp.png' } alt="C#" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/bootstrap.png' } alt="Bootstrap" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/nodejs.png' } alt="nodejs" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/mongodb.png' } alt="mongodb" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/mysql.png' } alt="mysql" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/react.png' } alt="html" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/MEAN.png' } alt="MEAN" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/expressjs.png' } alt="Express" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/django.png' } alt="django" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/github.png' } alt="github" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/MERN.png' } alt="MERN" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/flask.png' } alt="flask" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/unity.png' } alt="unity" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
                <img loading='lazy' className="section__imgage section__image--technolgies" src={ 'https://chrisalee.github.io/PortfolioLee/assets/firebase.png' } alt="firebase" onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } />
            </section>
        </div>
    )
}

export default Technologies
