import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>详情</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <button className="into">
       <Link href="/success"><a>打卡留念</a></Link>
      </button>
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

      .into{
        position: absolute;
        width: 50%;
        line-height: 2rem;
        border-radius: 0.2rem;
        left: 0;
        right: 0;
        bottom: 11%;
        background: #FFF7BD;
        text-align: center;
        color: white;
        font-size: 0.8rem;
        margin: auto;
        font-color: #FFF7BD;
        font-weight: 600;
        border: #FFF7BD;
      }

      a{
        color: #EF4C07 ;
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
