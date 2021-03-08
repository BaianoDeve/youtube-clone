import { Button } from '@material-ui/core';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="YouTube">
      Clone do youtube com nextjs + material-UI
      <Button variant="outlined" color="secondary">
        Primary
      </Button>
    </Layout>
  );
}
