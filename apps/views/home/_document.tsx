import { Document, Head, Main } from '@react-ssr/nestjs-express';
import React from 'react';

export default class extends Document {
  render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          <title>react-ssr-nestjs-starter</title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
}
