import React from 'react';

import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory-menu.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [{
                id: 1,
                title: 'hats',
                image: `${process.env.PUBLIC_URL}/resources/static/images/hats.webp`,
                linkUrl: 'hats'
            },
            {
                id: 2,
                title: 'jackets',
                image: `${process.env.PUBLIC_URL}/resources/static/images/jackets.webp`,
                linkUrl: ''
            },
            {
                id: 3,
                title: 'sneakers',
                image: `${process.env.PUBLIC_URL}/resources/static/images/sneakers.jpg`,
                linkUrl: ''
            },
            {
                id: 4,
                title: 'women',
                size : 'large',
                image: `${process.env.PUBLIC_URL}/resources/static/images/women.png`,
                linkUrl: ''
            },
            {
                id: 5,
                title: 'men',
                size : 'large',
                image: `${process.env.PUBLIC_URL}/resources/static/images/men.jpg`,
                linkUrl: ''
            }
        ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;