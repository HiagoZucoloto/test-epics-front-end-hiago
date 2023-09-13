/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";
import { BsCreditCard2Front } from "react-icons/bs";

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

        {/* Planos */}
        {/* <div>
          <div className="py-12 container px-28 flex justify-center gap-16">
            <div className="p-10 w-[33%] bg-slate-100 rounded-2xl border-4 border-slate-200">
              <div className="flex justify-center">
                <div>
                  <div className="flex gap-4 -mt-3">
                    <div className="p-2 my-auto aspect-square bg-slate-200 rounded-xl border-[2.5px] border-slate-300">
                      <Image
                        src="/../public/images/Tux.png"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <div className="text-lg">Starter</div>
                      <div className="flex gap-1">
                        <div className="mt-1 text-md">€</div>
                        <div className="text-3xl font-semibold">0</div>
                        <div className="mt-2.5">/ month</div>
                      </div>
                    </div>
                  </div>

                  <div className="py-5">Features included are,</div>

                  <div className="grid gap-3">
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox"></input>
                      </div>

                      <div className="font-bold text-md">1TB</div>

                      <div>Cloud store</div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox"></input>
                      </div>

                      <div className="font-bold text-md">1TB</div>

                      <div>Cloud store</div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox"></input>
                      </div>

                      <div className="font-bold text-md">1TB</div>

                      <div>Cloud store</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="pt-6 -mb-3">
                  <button className="relative group flex justify-between bg-gradient-to-bl from-blue-400 to-blue-600 text-white text-lg py-4 px-10 rounded-2xl hover:drop-shadow-xl duration-150 delay-75">
                    <div>Choose Starter</div>
                    <div className="absolute opacity-0 group-hover:opacity-100 delay-75 duration-150 right-4 top-[1.35rem]">
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-10 w-[33%] bg-gradient-to-bl from-blue-400 to-blue-600 text-white rounded-2xl">
              <div className="flex justify-center">
                <div>
                  <div className="flex gap-4 -mt-3">
                    <div className="p-2 my-auto aspect-square bg-slate-200 rounded-xl border-[2.5px] border-slate-300">
                      <Image
                        src="/../public/images/Tux.png"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <div className="text-lg">Starter</div>
                      <div className="flex gap-1">
                        <div className="mt-1 text-md">€</div>
                        <div className="text-3xl font-semibold">0</div>
                        <div className="mt-2.5">/ month</div>
                      </div>
                    </div>
                  </div>

                  <div className="py-5">Features included are,</div>

                  <div className="grid gap-3">
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox"></input>
                      </div>

                      <div className="font-bold text-md">1TB</div>

                      <div>Cloud store</div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox"></input>
                      </div>

                      <div className="font-bold text-md">1TB</div>

                      <div>Cloud store</div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox"></input>
                      </div>

                      <div className="font-bold text-md">1TB</div>

                      <div>Cloud store</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="pt-6 -mb-3">
                  <button className="relative group flex justify-between bg-slate-50 text-blue-500 text-lg py-4 px-8 rounded-2xl hover:drop-shadow-xl duration-150 delay-75">
                    <div>Choose Professional</div>
                    <div className="absolute opacity-0 group-hover:opacity-100 delay-75 duration-150 right-2 top-[1.35rem]">
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-2 text-center pb-6">
            <p className="text-zinc-400 font-light">
              Do you need more information on plans?
            </p>

            <p className="text-blue-600">Contact-us</p>
          </div>
        </div> */}

        {/* Pagamentos */}
        {/* <div className="px-52 py-12">
          <div className="bg-gradient-to-l from-cyan-400 to-blue-500 rounded-[1.75rem] py-14">
            <div className="flex px-20 text-slate-50">
              <div className="w-1/2">
                <div className="flex gap-10">
                  <div className="p-2 my-auto aspect-square bg-slate-200 rounded-xl border-[2.5px] border-slate-300">
                    <Image
                      src="/../public/images/Tux.png"
                      width={75}
                      height={75}
                    />
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
        </div> */}

        {/* Confirma */}
        {/* <div className="container mx-auto px-64 py-12">
          <div className="bg-gradient-to-l from-blue-400 to-blue-600 rounded-[1.75rem] py-14">
            <div className="flex px-20 text-slate-50">
              <div className="w-1/2">
                <div className="flex gap-10">
                  <div className="p-2 my-auto aspect-square bg-slate-200 rounded-xl border-[2.5px] border-slate-300">
                    <Image
                      src="/../public/images/Tux.png"
                      width={75}
                      height={75}
                    />
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
        </div> */}

        {/* Status */}
      </section>
      <section className="bg-slate-400 py-16"></section>
    </main>
  );
}
