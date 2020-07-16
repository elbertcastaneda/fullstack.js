/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next';
import Link from 'next/link';
// import React from 'react';
import WebApp from './web';
import { IndexPage as IndexProperties } from '@app/my-library/dtos/pages';

// eslint-disable-next-line no-console
console.log(WebApp);

// eslint-disable-next-line react/prop-types
const IndexPage: NextPage<IndexProperties> = ({ message }) => (
  <div>
    <p>
      Hello {message}.
      <Link href="/about">
        <a href="/about">About us</a>
      </Link>
    </p>
    <WebApp message={message} />
  </div>
);

IndexPage.getInitialProps = (context) => {
  if (context.req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (context.query as unknown) as IndexProperties;
  }

  return { message: 'from client' };
};

export default IndexPage;
