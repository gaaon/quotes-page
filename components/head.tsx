import React from 'react';
import NextHead from 'next/head';
import {NextFunctionComponent} from "next";

const defaultDescription = '';

interface Props {
  title: string;
  description?: string;
}

const Head: NextFunctionComponent<Props> = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
  </NextHead>
);

export default Head;
