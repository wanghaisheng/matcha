import { AuthLayout } from "@/components/Layout/AuthLayout";
import DragZone from "@/components/__atoms__/DragZone";
import SignUpBio from "@/components/__templates__/Authentification/SignUp/SignUpBio";
import SignUpUserImg from "@/components/__templates__/Authentification/SignUp/SignUpUserImg";
import Head from "next/head";

const OnBoarding = () => {
  return (
    <>
      <Head>
        <title>super cool</title>
        <meta name="description" content="bonjour au revoir" />
      </Head>
      <AuthLayout>
        <SignUpUserImg />
      </AuthLayout>
    </>
  );
};

export default OnBoarding;
