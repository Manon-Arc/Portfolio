import { Container, Grid } from '@mui/material';
import ArticleCard from './ArticleCard';
import { articles } from '../../data/articles';
import '../../style/components/ArticleGrid.css';
import '../../style/style_gen.css';

const ArticleGrid = () => {
  const sortedArticles = [...articles].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <Container className='articlegrid'>
      <Grid container spacing={5} justifyContent="center">
        {sortedArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ArticleCard
              id={article.id}
              image={article.background}
              title={article.title}
              author={article.author}
              date={article.date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticleGrid;
