import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import WebApp from '@app/web';
import { IndexPage as IndexProperties } from '@app/common/dtos/pages';

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

IndexPage.getInitialProps = () => {
  return { message: 'from client' };
};

export default IndexPage;
