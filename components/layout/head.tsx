import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export const defaults = {
    type: "website",
    delimiter: "-"
}

export default function HeadComponent (props?: Record<any, string | string[]>) {
    props = Object.assign({}, defaults, props);
    const router = useRouter();

    //if (!props["url"]) props.url = window.location.href;
    if (!props["locale"]) props["locale"] = router.locale;
    if (!props["locale:alternate"]) props["locale:alternate"] = router.locales;

    if (props["title"]) props["site_title"] = `${props["title"]} ${props["delimiter"]} ${props["page_title"]}`;
    if (!props["page_title"]) props["page_title"] = props["page_title"];

    return (
        <Head>
            <title>{props.page_title}</title>
            {Object.keys(props).map((key) => {
                const value = props[key];

                return (<>
                    <meta key={key} property={key} content={value as string}/>
                    {(() => {
                        if (Array.isArray(value)) return (value as string[]).map((value, index) => {
                            return <meta key={`og:${key}_${index}`} property={`og:${key}`} content={value}/>
                        });

                        return <meta key={`og:${key}`} property={`og:${key}`} content={value}/>;
                    })()}
                </>);
            })}
        </Head>
    );
}