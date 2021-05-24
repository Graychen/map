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
      “瓯江红”南白象街道党群服务中心
      </h1>
      <h2>
      地址：
      </h2>
      <h2>
      联系电话：
      </h2>
      <p>
      “瓯江红”南白象街道党群服务中心距街道办事处约100米，总面积约4000平方米，是集党务政务服务、基层治理、全科网格、四个平台等功能于一体的党建综合体。中心以“党建+基层治理”为核心，深化“红色领航”基层治理，实施“红领善治”工程，用专业化、社会化和项目化的运营模式，搭建党建资源共建共享互补共用平台，把各项工作融入到服务基层治理和群众生产生活的需求中去,打造向党员、群众开放的共享空间。
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

export default Home
