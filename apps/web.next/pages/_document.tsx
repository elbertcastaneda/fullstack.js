import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (context: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheet = new ServerStyleSheet();
  const originalRenderPage = context.renderPage;

  context.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/jsx-props-no-spreading
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    });

  const initialProperties = await Document.getInitialProps(context);

  return {
    ...initialProperties,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProperties.styles), sheet.getStyleElement()],
  };
};

// const getInitialProps = async (context: DocumentContext): GetInitialPropertiesType => {
//   const sheet = new ServerStyleSheet();
//   const originalRenderPage = context.renderPage;

//   try {
//     context.renderPage = () =>
//       originalRenderPage({
//         /* eslint-disable react/jsx-props-no-spreading */
//         enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
//       });

//     const { styles, ...restProperties } = await Document.getInitialProps(context);

//     return {
//       ...restProperties,
//       styles: [...React.Children.toArray(styles), sheet.getStyleElement()],
//     };
//   } finally {
//     sheet.seal();
//   }
// };
