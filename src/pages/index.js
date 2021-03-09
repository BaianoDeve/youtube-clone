import { Box, Grid} from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard'

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
      <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'Next.Js: Rotas estáticas e dinâmicas [Parte 1]',
      authorId: 1,
      authorName: 'Renan Alves',
      authorAvatar: '/thumbs/profile-2.jpeg',
      views: 10,
      thumb: '/thumbs/profile-2.jpeg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Next.Js: Rotas estáticas e dinâmicas [Parte 2]',
      authorId: 1,
      authorName: 'Renan Alves',
      authorAvatar: '/thumbs/profile-3.jpeg',
      views: 10,
      thumb: '/thumbs/profile-3.jpeg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Next.Js: Rotas estáticas e dinâmicas [Parte 3]',
      authorId: 1,
      authorName: 'Renan Alves',
      authorAvatar: '/thumbs/profile-4.jpeg',
      views: 10,
      thumb: '/thumbs/profile-4.jpeg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'Next.Js: Rotas estáticas e dinâmicas [Parte 4]',
      authorId: 1,
      authorName: 'Renan Alves',
      authorAvatar: '/thumbs/profile-2.jpeg',
      views: 10,
      thumb: '/thumbs/profile-4.jpeg',
      videoUrl: 'url',
      updatedAt: new Date(),
    }
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, 
  }
}

export default Home;