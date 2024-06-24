import Form from "@/components/Form";
import ListMassage from "@/components/ListMassage";

export default function Home() {
  return (
    <main className="container flex flex-col lg:grid lg:grid-cols-[400px_auto] gap-4">
      <section className="p-6 shadow-md lg:w-[400px] mt-4 bg-white rounded-md h-fit">
        <h1 className="mb-3 text-2xl font-bold">Form Guest Book</h1>
        <Form/>
      </section>
      <section className="p-6 shadow-md max-w-full mt-4 bg-white rounded-md">
        <h1 className="mb-3 text-2xl font-bold">List Guest Book</h1>
        <ListMassage/>
      </section>
    </main>
  );
}
