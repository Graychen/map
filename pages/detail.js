import Head from 'next/head'
import Link from 'next/link'

const Home = (props) => (
  <div className="container">
    <Head>
      <title>详情</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
      {props.show.name}
      </h1>
      <h2>
      地址：{props.show.address}
      </h2>
      <h2>
      联系电话：{props.show.phone}
      </h2>
      <p>
      {props.show.content}
      </p>
    </main>


    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      main {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      a{
        text-decoration: none;
      }
    `}</style>
  </div>
)

Home.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`http://map-graychen.vercel.app/api/detail/${id}`)
    const show = await res.json()
  
    console.log(`Fetched show: ${show.name}`)
  
    return { show }
  }

export default Home