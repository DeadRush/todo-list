import Done from "./assets/components/done";
import Input from "./assets/components/input";
import Layout from "./assets/components/layout";
import Task from "./assets/components/task";
import "./assets/styles/style.scss";

const App = () => {
  return (
    <>
      <Layout>
        <Done />
        <Input />
        <Task />
        <Task />
      </Layout>
    </>
  );
};

export default App;
