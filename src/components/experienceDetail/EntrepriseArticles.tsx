import { Container, Grid } from '@mui/material';
import ArticleCard from '../blog/ArticleCard';
import { articles } from '../../data/articles';
import '../../style/components/ArticleGridExp.css';
import '../../style/style_gen.css';

interface CompanyArticlesProps {
    companyName: string;
    id: number;
}

const EntrepriseArticleGrid: React.FC<CompanyArticlesProps> = ({ companyName, id }) => {

    const EntrepriseArticle = articles.filter(exp => exp.experienceId === id);
    const sortedArticles = [...EntrepriseArticle].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const Articles = sortedArticles.slice(0, 3);

    if (sortedArticles.length === 0) {
        return null;
    }

    return (
        <div className='entrepriseArticles'>
            <div className="title-line">
                <div className="line"></div>
                <p className="txt-title">Articles en lien avec {companyName}</p>
                <div className="line"></div>
            </div>
            <Container className='articlegrid-exp'>
                <Grid container spacing={5} justifyContent="center">
                    {Articles.map((article, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ArticleCard
                                author={article.author}
                                id={article.id}
                                image={article.background}
                                title={article.title}
                                date={new Date(article.date).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a href='/blog' className="btn">
                            <p className="txt-btn">Voir plus d'articles</p>
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default EntrepriseArticleGrid;
