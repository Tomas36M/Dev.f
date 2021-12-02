import Head from "next/head";
import axios from "axios";
import Link from 'next/link'

// API: https://reqres.in

export async function getStaticProps(){
    const response = await axios.get('https://reqres.in/api/unknown')
    .catch(err => console.log(err))

    const {data} = response;
    return {
        props: {
            colors: data //prop con la data
        }
    }
}

const colors = (props) => {
    return (
        <div>
            <Head>
                <title>All Colors</title>
            </Head>
            <h2>The Colors</h2>
            {props.colors.data.map(element => <li key={element.id}><Link href={`/colors/${element.id}`}>{element.name}</Link></li>)}
        </div>
    )
}

export default colors

