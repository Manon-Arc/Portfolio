import React from 'react';
import '../../style/components/A_propos.css';
import '../../style/style_gen.css';
import me from '../../assets/home/me.jpg';

const A_propos = () => {
  return (
    <div className="sec-2" id="1">
		<div className="sec-2g">
			<div className="border-pic">
				<img src={me} alt="" />
			</div>
		</div>
		<div className="sec-2d">
			<div className="sec-2da">
				<div className="title-line">
					<div className="line"></div>
					<p className="txt-title">A propos</p>
					<div className="line"></div>
				</div>
				<div className="propos-desc">
					<p className="txt">Bienvenue sur mon site portfolio !</p>
					<p className="txt">Je suis Manon Arcas, une passionnée de développement informatique et de systèmes embarqués, actuellement étudiante dans ces domaines fascinants. Ma passion pour les nouvelles technologies m'a guidée vers une carrière que je souhaite embrasser pleinement.</p>
					<p className="txt">Au fil de mon parcours, j'ai eu l'opportunité de réaliser plusieurs <a href="html/index_realisation.html" className="txt soulignement">projets</a> passionnants, combinant mes <a href="#2" className="txt soulignement">compétences</a> en programmation, mais également en conception mécanique et en électronique pour les projets orientés systèmes embarqués. Ces expériences m'ont permis de développer mes connaissances et mes compétences, mais surtout, elles ont renforcé ma détermination à poursuivre dans ces domaines dynamiques et innovants.</p>
					<p className="txt">Ce site portfolio est une vitrine de mon <a href="html/index_construction.html" className="txt soulignement">parcourt</a> et de mes <a href="html/index_realisation.html" className="txt soulignement">réalisations</a> jusqu'à présent. Explorez mes projets et expériences et voyez comment je pourrais contribuer à des projets innovants.</p>
					<p className="txt">Merci de votre visite ! N'hésitez pas à me <a href="html/index_contact.html" className="txt soulignement">contacter</a> pour toute opportunité de collaboration ou pour en savoir plus sur mon parcours professionnel.</p>
				</div>
			</div>
			<a href="../../src/assets/CV.pdf" target="_blank">
				<div className="btn cv">
					<p className="txt-btn">Télécharger mon CV</p>
				</div>
			</a>
		</div>
	</div>
  )
};

export default A_propos;
