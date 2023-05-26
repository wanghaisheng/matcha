import { ReactElement } from "react";
import Layout from "../components/Layout";
import Button from "@/components/__atoms__/Button";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Input from "@/components/__atoms__/Input";
import Signin from "@/components/__molecules__/Signin";
import InputPassword from "@/components/__atoms__/InputPassword";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Bouton</h2>
        <Button size={SIZE.MEDIUM} color={BUTTON_TYPE.PRIMARY}>
          TEST
        </Button>
        <Button size={SIZE.LARGE} color={BUTTON_TYPE.SECONDARY}>
          TEST
        </Button>
        <Button size={SIZE.LARGE} reverse color={BUTTON_TYPE.PRIMARY}>
          TEST
        </Button>
        <Button size={SIZE.LARGE} reverse color={BUTTON_TYPE.SECONDARY}>
          TEST
        </Button>
      </div>
      <div className="bg-primary">
        <h2>Input</h2>
        <Input type="text" placeholder="TEST" label="TEST" />
        <InputPassword />
      </div>
      <div>
        <Signin />
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
