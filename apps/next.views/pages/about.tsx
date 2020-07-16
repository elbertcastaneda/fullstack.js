import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { AboutPage as AboutProperties } from '@app/my-library/dtos/pages';

// eslint-disable-next-line react/prop-types
const AboutPage: NextPage<AboutProperties> = ({ message }) => (
  <div>
    <p>
      This is about the {message} page.{' '}
      <Link href="/">
        <a href="/">Go back to the home page</a>
      </Link>
    </p>
  </div>
);

AboutPage.getInitialProps = (context) => {
  if (context.req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (context.query as unknown) as AboutProperties;
  }

  return { message: 'client' };
};

export default AboutPage;
