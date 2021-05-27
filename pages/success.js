import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>详情</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
          打卡成功
      </h1>
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
        background:url(http://o.cztvcloud.com/231/8594158/vr/static/img/detail-bg.d82fb0f6.png) no-repeat top
      }

      main {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
      }

      h1{
        color: white;
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

export default Home
