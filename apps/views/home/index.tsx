/* eslint-disable react/react-in-jsx-scope */
import { Head } from '@react-ssr/nestjs-express';

import WebApp from '../../web/src';

interface IndexProps {
  defaultCounter: number;
  message: string;
}

const Index = ({ defaultCounter, message }: IndexProps): JSX.Element => (
  <>
    <Head>
      <title>An example of @react-ssr/nestjs-express</title>
    </Head>
    <WebApp defaultCounter={defaultCounter} message={message} />
  </>
);

export default Index;
