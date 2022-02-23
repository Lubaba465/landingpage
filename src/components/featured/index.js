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
<div className="featured">
        < div className='container'>
            <div className="icon TTop"
                 data-aos="zoom-in" data-aos-duration="2100">
                <img
                    src="http://deskireact.ibthemespro.com/images/shape/100.svg" className="shapes shape-one"></img></div>

            < div className='featured_container'>


            <div className="text-wrapper">

                <h1 data-aos="fade-up" data-aos-duration="1200" className="aos-init aos-animate"><span>Event ticket</span> organiser &amp; seller.</h1>
                < p  className="sub-text aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">For hassale free event, we
                    are here to help you by creating online ticket.</p>
                <a aria-hidden="true" className="theme-btn-five aos-init aos-animate"data-aos="fade-up" data-aos-duration="1200"data-aos-delay="200" href="/login"> Let’s get
                    started</a></div>

                <div className="illustration-holder"  >

                    <div className="icon bshape"
                         data-aos="zoom-in" data-aos-duration="2100">

                    <img src="http://deskireact.ibthemespro.com/images/assets/ils_14.svg" alt="shape" className=""></img>
                    </div>

                    <div className="icon TTopRight"
                         data-aos="zoom-in" data-aos-duration="2100">
                        <img
                            src="http://deskireact.ibthemespro.com/images/shape/101.svg" className="shapes shape-one"></img></div>


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

                </div>


        </div>


            <div className='sContainer'>
                <div className=" "
                     data-aos="zoom-in" data-aos-duration="2100">

                    <img src="http://deskireact.ibthemespro.com/images/shape/102.svg" alt="shape" className="illustration"></img>
                </div>
                <div className='shareContainer'>
dgfdfh
                </div>
                <div className=" simage"
                     data-aos="zoom-in" data-aos-duration="2100">

                    <img src="http://deskireact.ibthemespro.com/images/shape/103.svg" alt="shape" className="illustration"></img>
                </div>
            </div>

    </div>
    <div className="image">

        <img src="http://deskireact.ibthemespro.com/static/media/99.63170ec6.svg" alt="shape" className="illustration"></img>
    </div>
    </div>
    )
}
export default Featured;