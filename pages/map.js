import Head from 'next/head'
import ReactDOM from 'react-dom';
import { Map, APILoader } from '@uiw/react-baidu-map';

const Maps = () => (
  <div className="container">
    <Head>
      <title>温州市党员红色地图</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
            <Map center="温州"/>
        </APILoader>
    </main>
    <footer>
    </footer>

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
        background-size: 200%;
        background-attachment: scroll;
      }

      main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

export default Maps
