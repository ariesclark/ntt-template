import type { AppProps } from 'next/app'

import React from "react";

import "../styles/globals.css";
import DefaultLayout from "../components/layout/default.layout";

export const defaults = {
    layout: DefaultLayout,
    layoutProps: {
        dark: false
    }
}

export default function App (props: AppProps) {
    let {Component: Page, pageProps} = props;

    pageProps = {...defaults, ...pageProps};
    const Layout = defaults.layout;

    return <Layout {...pageProps.layoutProps}>
        <Page {...pageProps} />
    </Layout>
}