import { Form } from "../components/Form/Form";
import { Tables } from "../components/Table/Tables";

export default function Home() {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Todo Form with Firebase</h1>
      <Form />
      <Tables />
    </>
  )
}
