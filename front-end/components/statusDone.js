import { BsCheckLg } from "react-icons/bs";

export default function StatusDone() {
  return (
    <section className="container mx-auto px-64 py-32 text-center">
      <div className="flex justify-center text-6xl text-green-500">
        <BsCheckLg />
      </div>
      <div className="py-12">
        <h3 className="font-medium text-3xl">Payment done</h3>

        <p className="pt-6 text-zinc-400 font-light">
          The transaction was successful
        </p>
      </div>

      <div class="w-full bg-blue-500 rounded-full h-2.5 mb-4"></div>
    </section>
  );
}
