import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <button className="into">
       <Link href="/map"><a>立即进入</a></Link>
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
        background: #5F0004 url(/images/background.jpeg) no-repeat top;
        background-repeat: no-repeat;
        background-size: 100%;
      }

      main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .into{
        position: absolute;
        width: 50%;
        line-height: 2rem;
        border-radius: 0.2rem;
        left: 0;
        right: 0;
        bottom: 11%;
        background: rgba(245,211,174, .73);
        text-align: center;
        color: #8c232a;
        font-size: 0.8rem;
        margin: auto;
        font-weight: 600;
        border: #8c232a;
      }
      
      .into a{
        color: #8c232a;
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
