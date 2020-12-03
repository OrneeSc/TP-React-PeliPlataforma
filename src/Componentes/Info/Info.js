import React, {useState} from 'react';
import './Info.scss';

const Info = () => {

    const [informacion, setInformacion] = useState();
    const [creditos, setCreditos] = useState();

    return (
        <section className='section-container'>
            
            <header>
                <a href="#" className='btn-subNav' id='btn-info'>
                    INFORMACION
                </a>
                <a href="#" className='btn-subNav' id='btn-creditos'>
                    CREDITOS
                </a>
            </header>

            <div className='content'>
                <div className='content-img'></div>

                <div className='content-texto'>
                    <h1>Robert Pattinson</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sapien pretium sem, ad gravida curae purus sociis feugiat vulputate tincidunt mattis scelerisque, integer vivamus aptent dictum praesent vitae semper ut lobortis. Penatibus class molestie montes nascetur est tristique ut facilisi aptent, maecenas enim nostra felis platea tempor suscipit luctus dui habitant, fames primis fringilla vehicula euismod aliquet tellus viverra. Cursus turpis eu cum phasellus faucibus vestibulum platea felis, est magna porttitor interdum lectus posuere feugiat, sociosqu neque volutpat malesuada placerat tempor metus.
                    cula euismod aliquet tellus viverra. Cursus turpis eu cum phasellus faucibus vestibulum platea felis, est magna porttitor interdum lectus posuere feugiat, sociosqu neque volutpat malesuada placerat tempor metus.
                    </p>
                </div>

            </div>

            <div className='content-footer'>
                <a href='#' className='redes'>redes</a>
            </div>

        </section>
    )
}

export default Info;
