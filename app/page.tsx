import GithubProfile from "@/componentes/github-profile";
import LoadingCompany from "@/componentes/loadingcompany";
import { Suspense } from "react";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve,500))

  return (
    <div>
      <h1>Home!</h1>
      <Suspense fallback={<p>carregando Loading company</p>}>
        <LoadingCompany />
      </Suspense>

      <Suspense fallback={<p>carregando github Profile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
