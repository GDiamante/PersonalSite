import React from 'react'
import '../Styles/about.scss';
import { Button } from 'antd';

export default class About extends React.Component {

    render () {
        return (
            <>
                <div className='about'>
                    <div className='aboutHeading'>
                        <h3>About Me</h3>
                    </div>
                    <div className='aboutBody'>
                        <p>
                        <img src='PersonalPhoto.jpg' className='personalPhoto' alt="Me"/>
                            <span>Welcome to my website!  I am a Bachelor of Computing Co-op student in my final year at the University of Guelph.  I am completing a major in
                            Computer Science along with a minor in Mathematics and a certificate in Business.  I've completed five Co-op work terms with JOMAR Softcorp
                            and Tulip Retail.

                            When I'm not studying or writing code, I enjoy lifting weights, hiking, reading, and researching new topics!

                            Please feel free to contact me on any of the following platforms.
                            </span>

                        </p>
                        <div className='aboutContact'>
                            <Button href='https://www.linkedin.com/in/gdiamante/' target='_blank'>
                                Linkedin
                            </Button>
                            <Button href='https://github.com/GDiamante' target='_blank'>
                                Github
                            </Button>
                            <Button href='https://forms.gle/wNzLtX64URHfZgyM9' target='_blank'>
                                Email
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
