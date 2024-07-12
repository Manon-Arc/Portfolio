import '../../style/components/A_propos.css';
import '../../style/style_gen.css';
import me from '../../assets/a_propos/me.jpg';

const A_propos = () => {
  return (
    <div className="sec-2-a-propos" id="1">
		<div className="sec-2g">
			<div className="border-pic">
				<img src={me} alt="" />
			</div>
		</div>
		<div className="sec-2d">
			<div className="sec-2da">
				<div className="title-line">
					<div className="line"></div>
					<p className="txt-title">Qui suis-je</p>
					<div className="line"></div>
				</div>
				<div className="propos-desc">
					<p className="txt">Passionnée par les avancées technologiques, je suis déterminée à faire de ma passion mon métier. Mon parcours académique m'a orientée vers le développement informatique, avec une spécialisation en développement logiciel, mobile et IoT que je compte approfondir dès la troisième année de bachelor jusqu'à l'obtention de mon mastère.</p>
					<p className="txt">Tout au long de mon cursus, j'ai été impliquée dans divers projets enrichissants qui m'ont permis de développer une expertise variée en informatique. En explorant des domaines tels que le développement web, logiciel et d'applications, ainsi que la gestion de données et l'administration de réseaux, j'ai acquis des compétences solides et polyvalentes. De plus, mon intérêt pour la robotique m'a conduit à me former en programmation, conception électronique et mécanique, ainsi qu'en modélisation 3D, me permettant de naviguer efficacement dans ces domaines.</p>
					<p className="txt">En dehors de mes études, je m'investis dans ma passion pour l'escalade, une activité qui m'a enseigné la persévérance et la gestion du stress, des qualités cruciales dans le domaine du développement informatique. En tant que responsable des ressources humaines au sein d'une association, j'ai également développé des compétences en gestion de projets et en communication, renforçant ainsi ma capacité à travailler en équipe et à mener des initiatives à bien.</p>
					<p className="txt">Toujours curieuse et avide de nouvelles connaissances, je cherche constamment à élargir mes compétences et à m'impliquer dans des projets innovants. Mon objectif professionnel est de continuer à évoluer dans le secteur technologique, en relevant de nouveaux défis et en apportant des solutions créatives et efficaces.</p>
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
