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
        <div id="allmap"></div>
    </main>
    <footer>
    </footer>
    <script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=SgP2iAzEAibHwy5wZj8lrQpG8BOt4QIW"></script>
    <script>
	    {
	    `             
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='//api.map.baidu.com/api?v=2.0&ak=SgP2iAzEAibHwy5wZj8lrQpG8BOt4QIW')];
	`
		}
	
	</script>
    <script>
	    {
	    `     
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    </script>
    `
}
</script>

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
