/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";
import { BsCreditCard2Front } from "react-icons/bs";

export default function Pagamentos() {
  return (
    <section className="px-52 py-12">
      <div className="bg-gradient-to-l from-cyan-400 to-blue-500 rounded-[1.75rem] py-14">
        <div className="flex px-20 text-slate-50">
          <div className="w-1/2">
            <div className="flex gap-10">
              <div className="p-2 my-auto aspect-square bg-slate-200 rounded-xl border-[2.5px] border-slate-300">
                <Image src="/../public/images/Tux.png" width={75} height={75} />
              </div>

              <div>
                <div className="text-2xl">Professional</div>
                <div className="flex gap-2">
                  <div className="mt-1 text-xl text-slate-100 opacity-60 font-light">
                    €
                  </div>

                  <div className="flex gap-2 mt-2">
                    <div className="text-4xl font-semibold">24</div>
                    <div className="mt-2.5 text-slate-100 opacity-60 font-light">
                      / month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex justify-end">
              <button className="bg-transparent text-slate-50 border-4 border-slate-50 py-6 px-12 text-lg font-medium rounded-2xl">
                Change Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 py-10 text-xl align-middle items-center">
        <div className="flex gap-4">
          <input type="checkbox" />
          <div>Choose a payment method</div>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <div>Payment details</div>
        </div>
      </div>

      <div className="grid gap-10">
        <div className="flex gap-12">
          <button className="relative group w-full py-12 px-8 border-[3.5px] border-slate-300 rounded-2xl hover:bg-blue-100 hover:border-[3px] hover:border-blue-500 hover:drop-shadow-lg delay-75 duration-150">
            <div className="flex justify-center gap-14">
              <div className="p-2 rounded-2xl -m-2 -ml-20 text-4xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white delay-75 duration-300">
                <BsCreditCard2Front />
              </div>
              <div className="text-xl">Credit card</div>
              <div className="absolute text-blue-500 text-3xl opacity-0 group-hover:opacity-100 delay-75 duration-150 top-[3.25rem] right-16">
                <IoIosArrowForward />
              </div>
            </div>
          </button>
          <button className="relative group w-full py-12 px-8 border-[3.5px] border-slate-300 rounded-2xl hover:bg-blue-100 hover:border-[3px] hover:border-blue-500 hover:drop-shadow-lg delay-75 duration-150">
            <div className="flex justify-center gap-14">
              <div className="p-2 rounded-2xl -m-2 -ml-16 text-4xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white delay-75 duration-300">
                <BsCreditCard2Front />
              </div>
              <div className="text-xl">Internet Banking</div>
              <div className="absolute text-blue-500 text-3xl opacity-0 group-hover:opacity-100 delay-75 duration-150 top-[3.25rem] right-10">
                <IoIosArrowForward />
              </div>
            </div>
          </button>
        </div>
        <div className="flex gap-12">
          <button className="relative group w-full py-12 px-8 border-[3.5px] border-slate-300 rounded-2xl hover:bg-blue-100 hover:border-[3px] hover:border-blue-500 hover:drop-shadow-lg delay-75 duration-150">
            <div className="flex justify-center gap-14">
              <div className="p-2 rounded-2xl -m-2 -ml-28 text-4xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white delay-75 duration-300">
                <BsCreditCard2Front />
              </div>
              <div className="text-xl">Paypal</div>
              <div className="absolute text-blue-500 text-3xl opacity-0 group-hover:opacity-100 delay-75 duration-150 top-[3.25rem] right-16">
                <IoIosArrowForward />
              </div>
            </div>
          </button>
          <button className="relative group w-full py-12 px-8 border-[3.5px] border-slate-300 rounded-2xl hover:bg-blue-100 hover:border-[3px] hover:border-blue-500 hover:drop-shadow-lg delay-75 duration-150">
            <div className="flex justify-center gap-14">
              <div className="p-2 rounded-2xl -m-2 -ml-20 text-4xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white delay-75 duration-300">
                <BsCreditCard2Front />
              </div>
              <div className="text-xl">Bitcoin wallet</div>
              <div className="absolute text-blue-500 text-3xl opacity-0 group-hover:opacity-100 delay-75 duration-150 top-[3.25rem] right-10">
                <IoIosArrowForward />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
