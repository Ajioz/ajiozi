import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Instec | Digital agency React Nextjs Template"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600;700;800&family=Teko:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead