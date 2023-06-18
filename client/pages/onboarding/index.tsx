import { AuthLayout } from "@/components/Layout/AuthLayout";
import Authentification from "@/components/__templates__/Authentification/Authentification";
import SignIn from "@/components/__templates__/Authentification/SignIn";
import SignUpCheckMail from "@/components/__templates__/Authentification/SignUp/SignUpCheckMail";
import SignUpInscription from "@/components/__templates__/Authentification/SignUp/SignUpInscription";
import Head from "next/head";

const OnBoarding = () => {
  return (
    <>
      <Head>
        <title>Authentification</title>
        <meta name="description" content="bonjour au revoir" />
      </Head>
      <AuthLayout>
        <Authentification />
      </AuthLayout>
    </>
  );
};

export default OnBoarding;
