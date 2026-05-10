import ClientAppRouter from '../../src/ClientAppRouter';

const routes = ['', 'demo', 'community', 'partners', 'application', 'engine', 'blog'];

export function generateStaticParams() {
  return routes.map((route) => ({
    slug: route ? [route] : [],
  }));
}

export default function Page() {
  return <ClientAppRouter />;
}
