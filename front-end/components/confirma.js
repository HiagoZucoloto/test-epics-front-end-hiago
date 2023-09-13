/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import { BsCreditCard2Front } from "react-icons/bs";

export default function Confirma() {
  return (
    <section className="container mx-auto px-64 py-12">
      <div className="bg-gradient-to-l from-blue-400 to-blue-600 rounded-[1.75rem] py-14">
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

      <div className="pt-8">
        <form class="w-full">
          <div class="text-xl pb-4 ml-1">Card details</div>

          <label class="relative w-full bg-white flex border-[3.5px] border-slate-300 rounded-xl">
            <div className="absolute text-2xl top-[1.4rem] left-[0.85rem]">
              <BsCreditCard2Front />
            </div>
            <input
              className="p-5 pl-12 w-full rounded-l-xl text-xl"
              type="text"
              name="card_details"
              placeholder="Card number"
            />
            <div className="bg-white pr-4 py-3 text-4xl font-thin text-slate-300">
              {"|"}
            </div>
            <input
              className="w-1/4 text-xl"
              type="text"
              name="expire_date"
              placeholder="MM/YY"
            />
            <div className="bg-white pr-4 py-3 text-4xl font-thin text-slate-300">
              {"|"}
            </div>
            <input
              className="pr-8 w-1/4 rounded-r-xl text-xl"
              type="text"
              name="card_cvc"
              placeholder="CVC"
            />
          </label>

          <label className="py-12 flex gap-10">
            <div>
              <div class="text-xl pb-4 ml-1">Full name</div>

              <input
                className="p-5 pl-8 w-[21.75vw] rounded-xl text-xl border-[3.5px] border-slate-300"
                type="text"
                name="card_details"
                placeholder="John Doe"
              />
            </div>

            <div>
              <div class="text-xl pb-4 ml-1">Email</div>
              <input
                className="p-5 pl-8 w-[21.75vw] rounded-xl text-xl border-[3.5px] border-slate-300"
                type="text"
                name="card_details"
                placeholder="Jhon@email.com"
              />
            </div>
          </label>
        </form>

        <div className="flex justify-end pr-1">
          <button className="bg-gradient-to-l from-blue-400 to-blue-600 text-white text-xl py-5 px-16 rounded-xl hover:drop-shadow-xl delay-75 duration-150">
            Pay € 24
          </button>
        </div>
      </div>
    </section>
  );
}
