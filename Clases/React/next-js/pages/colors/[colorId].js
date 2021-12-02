import Head from "next/head";
import axios from "axios";
import Link from 'next/link'


export async function getServerSideProps(context){

    const { colorId } = context.query;

    const response = await axios.get(`https://reqres.in/api/unknown/${colorId}`)
        .catch(err => console.log(err))

    const {data} = response;

    return{
        props: {
            colors: data
        }
    }

}

const color = (props) => {
    return (
        <div>
            <Head>
                <title>{props.colors.data.name}</title>
            </Head>
            <h2>{props.colors.data.name}</h2>
            <p>Year: {props.colors.data.year}</p>
            <p>Color: {props.colors.data.color}</p>
            <p>Pantone: {props.colors.data.pantone_value}</p>
            <br />
            <Link href="/colors">Regresar</Link>
        </div>
    )
}

export default color
