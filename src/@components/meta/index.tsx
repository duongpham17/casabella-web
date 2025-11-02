import Head from 'next/head';

const defaultDescription = "Nail salon, beauty services and products";
const defaultKeywords = "beauty, footcare, pedicure, massage, eyelashes, london, tint, ombre, fullset, infills, sns, care, facial";
const defaultOgTitle = "london, nails, footcare, pedicure, massage, eyelashes, facial"

interface Props {
    title?: any,
    ogTitle?: string,
    description?: string,
    keywords?: string,
}

export const Layout = ({title, ogTitle = defaultOgTitle, description = defaultDescription, keywords = defaultKeywords }: Props) => 
(        
    <Head>
        <title>{title ? `Casa Bella London | ${title}` : "Casa Bella London"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="og:title" content={ogTitle} key="og:title" />
        <meta property="og:url" content="https://www.casabellalondon.co.uk" key="og:url"/>
        <meta property="og:type" content="website" key="og:type"/>
        <meta property="og:image" content={"/logo.png"} key="ogimage"/>
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keywords} />
    </Head>
)

export default Layout;