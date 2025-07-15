import { Layout } from "antd"
import { Sider } from "./views/sider"

function App() {

  return (
    <>
      <Layout className="h-screen">
          <Layout.Content className="bg-blue-100">

          </Layout.Content>
          <Layout.Sider width={420} theme={'light'}>
            <Sider />
          </Layout.Sider>
      </Layout>
    </>
  )
}

export default App
