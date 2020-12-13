import React from "react";

import Head from "./head";

interface LayoutProps {
    children: React.ReactNode
}

export default function DefaultLayout (props: LayoutProps) {
    return (
        <div>
            <Head {...{
                title: "",
                site_name: "uwu"
            }}/>

            {props.children}
        </div>
    );
}