export default async function LoadingCompany() {



  await new Promise(resolve => setTimeout(resolve,5000))
  
  return (
    <h1>carregado!!!! OK</h1>
  );
}