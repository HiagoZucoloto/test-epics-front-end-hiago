import Confirma from "../components/confirma";
import Pagamentos from "../components/pagamentos";
import Planos from "../components/planos";
import StatusDone from "../components/statusDone";
import StatusLoad from "../components/statusLoad";

export default function Home() {
  return (
    <main className="bg-slate-400 h-full w-full">
      <section className="bg-slate-100 mx-32 rounded-b-[1.75rem] drop-shadow-2xl">
        <div className="pt-12 text-center">
          <h3 className="font-medium text-3xl">Get started today</h3>
          <p className="pt-6 text-zinc-400 font-light">
            Choose the right plan and start creating projects
          </p>
        </div>

        {/* RETIRAR OS COMENTARIOS DE CADA COMPONENTE PARA VER AS ETAPAS */}
        {/* ainda falta fazer o Mobile :) */}

        {/* Etapa 1 - Lista de planos */}
        {/* <Planos></Planos> */}

        {/* Etapa 2 - Métodos de pagamentos */}
        {/* <Pagamentos></Pagamentos> */}

        {/* Etapa 3 - Informações para confirmar o pagamento */}
        {/* <Confirma></Confirma> */}

        {/* Etapa 4 - Status da comprar sendo processado */}
        {/* <StatusLoad></StatusLoad> */}

        {/* Etapa 4 - Status indicando que a compra foi realizada! */}
        {/* <StatusDone></StatusDone> */}
      </section>
      <section className="bg-slate-400 py-16"></section>
    </main>
  );
}
