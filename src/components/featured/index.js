import React, { useEffect } from 'react';
import '../../resources/styles.css'

import { customAos } from '../utils/customAos';

const Featured=()=>{


        useEffect(() => {

                customAos('pushRightIcons', '.bLeft', -30)
                customAos('pushLeftIcons', '.tLeft', -30)
                customAos('pushLeftIcons', '.bRight', -70)
                customAos('pushRightIcons', '.tRight', -70)

        }, [])
    return(
        < div className='featured_container'>


            <div className="artist_name">

                <div className="illustration-holder" style={{position: 'relativ', marginTop: '150px'}} >
                    <img style={{position: 'absolute', right: '100px'}}src="http://deskireact.ibthemespro.com/images/assets/ils_14.svg" alt="shape" className="illustration"></img>
                    <div className="icon tLeft"
                         data-aos="zoom-in" data-aos-duration="2100"
                    >
                    <img
                         src="http://deskireact.ibthemespro.com/images/assets/ils_14.1.svg" alt="shape" className="shapes shape-one"></img></div>

                    <div className="icon bLeft"
                         data-aos="zoom-in" data-aos-duration="2100"
                    >
                    <img  src="http://deskireact.ibthemespro.com/images/assets/ils_14.2.svg" alt="shape" className="shapes shape-two"></img>
                    </div>
                    <div className="icon bRight"
                         data-aos="zoom-in" data-aos-duration="2100"
                    >
                    <img src="http://deskireact.ibthemespro.com/images/assets/ils_14.3.svg" alt="shape" className="shapes shape-three"></img>
                </div>

                </div></div>

        </div>
    )
}
export default Featured;