import Head from 'next/head'

function Home(){
    return (<div>
        <Head>
            <meta charSet='utf-8'/>
            <meta name="robots" content='index, follow'/>
            <meta name="description" content="Site sobre ..." />
            <meta name="author" content="Claudio R Streppel"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>CRSITES</title>

        </Head>
        Menu <br/>
        Conteudo do topo do site

    </div>)
}

export default Home