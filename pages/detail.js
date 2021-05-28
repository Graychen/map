import Head from 'next/head'
import Image from 'next/image'


const Home = (props) => (
  <div className="container">
    <Head>
      <title>详情</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Image
        src="/images/1.jpg"
        alt="Picture of the author"
        width={500}
        height={420}
      />
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
        padding: 0rem;
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

      h1 {
        font-size: 18px;
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }

      h2 {
        font-weight: bold;
        margin:0em;
        color: #666;
        white-space: nowrap;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
        font-size: 0.6rem;
      }

      p{
        font-size:12px;
        font-weight:bold;
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
    //const res = await fetch(`http://localhost:3000/api/detail/${id}`)
    const show = await res.json()
  
    console.log(`Fetched show: ${show.name}`)
  
    return { show }
  }

export default Home
