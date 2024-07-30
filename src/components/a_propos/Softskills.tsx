import '../../style/components/Softskills.css';
import '../../style/style_gen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faClipboardCheck, faTasks, faUserClock, faSyncAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

const Softskills = () => {
    return (
        <div className="Softskills">
            <div className="title-line softskills-title">
                <div className="line"></div>
                <p className="txt-title">Softskills</p>
                <div className="line"></div>
            </div>
            <div className='softskills-zone'>
                <div className='tab-softskills'>
                    <div className='softskill-item'>
                        <FontAwesomeIcon icon={faLightbulb} className="softskill-icon" />
                        <p className='txt-hardsoft'>Curiosité</p>
                    </div>
                    <div className='softskill-item'>
                        <FontAwesomeIcon icon={faClipboardCheck} className="softskill-icon" />
                        <p className='txt-hardsoft'>Assiduité</p>
                    </div>
                    <div className='softskill-item'>
                        <FontAwesomeIcon icon={faTasks} className="softskill-icon" />
                        <p className='txt-hardsoft'>Organisation</p>
                    </div>
                    <div className='softskill-item'>
                        <FontAwesomeIcon icon={faUserClock} className="softskill-icon" />
                        <p className='txt-hardsoft'>Autonomie</p>
                    </div>
                    <div className='softskill-item'>
                        <FontAwesomeIcon icon={faSyncAlt} className="softskill-icon" />
                        <p className='txt-hardsoft'>Flexibilité et adaptabilité</p>
                    </div>
                    <div className='softskill-item'>
                        <FontAwesomeIcon icon={faUsers} className="softskill-icon" />
                        <p className='txt-hardsoft'>Travail en équipe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Softskills;
