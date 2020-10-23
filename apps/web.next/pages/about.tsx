import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { AboutPage as AboutProperties } from '@app/common/dtos/pages';

// eslint-disable-next-line react/prop-types
const AboutPage: NextPage<AboutProperties> = ({ message }) => (
  <div>
    <p>
      This is about the {message} page.
      <Link href="/">
        <a href="/">Go back to the home page</a>
      </Link>
    </p>
  </div>
);

AboutPage.getInitialProps = () => {
  return { message: 'client' };
};

export default AboutPage;
