import '../../style/components/Competences.css';
import '../../style/style_gen.css';
import dev from '../../assets/home/coding_green.png';
import elec from '../../assets/home/pcb_green.png';
import meca from '../../assets/home/gear_green.png';


const Competences = () => {

  return (
    <div className="sec-3" id="2">
            <div className="title-line competence">
                <div className="line"></div>
                <p className="txt-title">Compétences logiciel</p>
                <div className="line"></div>
            </div>
            <div className="card-zone">
                <div className="card" id="dev-contain">
                    <img className="pic-spe" src={dev} alt=""/>
                    <p className="spe-title">Développement</p>
                    <p className="logiciel-link">Python, C#, Javascript, Java...</p>
                </div>

            
                <div className="card" id="elec-contain">
                    <img className="pic-spe" src={elec} alt=""/>
                    <p className="spe-title">Conception électronique</p>
                    <p className="logiciel-link">Altium Designer, Kicad, Circuit Maker</p>
                </div>

                <div className="card" id="meca-contain">
                    <img className="pic-spe" src={meca} alt=""/>
                    <p className="spe-title">Conception mécanique</p>
                    <p className="logiciel-link">Fusion360</p>
                </div>
            </div>
        </div>
  )
}
export default Competences