import { Container, Grid } from '@mui/material';
import ArticleCard from './ArticleCard';
import '../../style/components/ArticleGrid.css';
import '../../style/style_gen.css';

const ArticleGrid = () => {
  const articles = [
    { image: 'https://via.placeholder.com/300', title: 'Article 1', date: 'August 5, 2024' },
    { image: 'https://via.placeholder.com/300', title: 'Article 2', date: 'August 6, 2024' },
    { image: 'https://via.placeholder.com/300', title: 'Article 3', date: 'August 7, 2024' },
    { image: 'https://via.placeholder.com/300', title: 'Article 4', date: 'August 8, 2024' },
    { image: 'https://via.placeholder.com/300', title: 'Article 5', date: 'August 9, 2024' },
    { image: 'https://via.placeholder.com/300', title: 'Article 6', date: 'August 10, 2024' },
  ];

  return (
    <Container className='articlegrid'>
      <Grid container spacing={4} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ArticleCard
              image={article.image}
              title={article.title}
              date={article.date}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticleGrid;
