import '../../style/components/Presentation.css';
import '../../style/style_gen.css';
import perso from '../../assets/home/portfolioP.svg';

const A_propos = () => {
  return (
    <div className="sec-2" id="1">
		<div className="sec-2g">
			<div className="border-pic-pres">
				<img src={perso} alt="" />
			</div>
		</div>
		<div className="sec-2d">
			<div className="sec-2da">
				<div className="title-line">
					<div className="line"></div>
					<p className="txt-title">Bienvenue sur mon portfolio !</p>
					<div className="line"></div>
				</div>
				<div className="propos-desc">
					<p className="txt">Je suis Manon Arcas, passionnée de développement informatique et de systèmes embarqués, et actuellement étudiante dans ces domaines captivants. Mon intérêt pour les nouvelles technologies m'a conduite à choisir une carrière que je souhaite développer et enrichir pleinement.</p>
					<p className="txt">Tout au long de mon parcours, j'ai eu l'opportunité de travailler sur plusieurs projets passionnants. Ces expériences m'ont permis de combiner mes compétences en programmation avec la conception mécanique et électronique, notamment pour des projets orientés vers les systèmes embarqués. Elles ont enrichi mes connaissances et renforcé ma détermination à poursuivre dans ces domaines dynamiques et innovants.</p>
					<p className="txt">Ce site portfolio est une vitrine de mon parcours et de mes réalisations jusqu'à présent. Je vous invite à explorer mes projets et expériences, et à découvrir comment je pourrais contribuer à des projets innovantes.</p>
					<p className="txt">Merci de votre visite ! N'hésitez pas à me contacter pour toute opportunité de collaboration ou pour en savoir plus sur mon parcours professionnel.</p>
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
