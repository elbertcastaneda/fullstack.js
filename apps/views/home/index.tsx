/* eslint-disable react/react-in-jsx-scope */
import { Head } from '@react-ssr/nestjs-express';

import WebApp from '../../web/src';

interface IndexProps {
  message: string;
}

const Index = ({ message }: IndexProps): JSX.Element => (
  <>
    <Head>
      <title>An example of @react-ssr/nestjs-express</title>
    </Head>
    <WebApp message={message} />
  </>
);

export default Index;
