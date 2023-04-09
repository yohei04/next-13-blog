import Link from 'next/link';

function AudienceNav() {
  return <nav>...</nav>;
}

function ViewsNav() {
  return <nav>...</nav>;
}

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children, audience, views }: any) {
  return (
    <>
      <h1>Tab Bar Layout</h1>
      {children}

      <h2>Audience</h2>
      <AudienceNav />
      {audience}
      <Link href={'/blog/dashboard/demographics'}>@audience/demographicsへ</Link>
      <br />
      <Link href={'/blog/dashboard/subscribers'}>@audience/subscribersへ</Link>

      <h2>Views</h2>
      <ViewsNav />
      {views}
      <Link href={'/blog/dashboard/impressions'}>@views/impressionsへ</Link>
      <br />
      <Link href={'/blog/dashboard/view-duration'}>@views/view-durationへ</Link>
    </>
  );
}
