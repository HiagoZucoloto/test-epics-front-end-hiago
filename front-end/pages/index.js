import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="bg-slate-400 h-full w-full">
      <section className="bg-slate-100 mx-32 rounded-b-[1.75rem]">
        <div className="pt-12 text-center">
          <h3 className="font-medium text-3xl">Get started today</h3>
          <p className="pt-6 text-zinc-400 font-light">
            Choose the right plan and start creating projects
          </p>
        </div>

        {/* Planos */}
        <div>
          <div className="py-12 flex justify-center gap-8">
            <div className="p-8 bg-slate-100 rounded-2xl border-4 border-slate-200">
              <div className="pr-3">
                <div className="flex gap-4 -mt-3">
                  <div className="p-1 aspect-square bg-slate-300 rounded-3xl text-4xl border-[2.5px] border-slate-400">
                    *
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

              <div className="pt-6 -mb-3">
                <button className="relative group flex justify-between bg-gradient-to-bl from-blue-400 to-blue-600 text-white text-lg py-4 px-10 rounded-2xl">
                  <div>Choose Starter</div>
                  <div className="absolute opacity-0 group-hover:opacity-100 delay-75 duration-150 right-4 top-[1.35rem]">
                    <IoIosArrowForward />
                  </div>
                </button>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-bl from-blue-400 to-blue-600 rounded-2xl text-white">
              <div className="flex gap-4 -mt-3">
                <div className="p-1 aspect-square bg-slate-300 rounded-3xl text-4xl border-[2.5px] border-slate-400">
                  *
                </div>
                <div>
                  <div className="text-lg">Professional</div>
                  <div className="flex gap-1">
                    <div className="mt-1 text-md">€</div>
                    <div className="text-3xl font-semibold">24</div>
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

              <div className="pt-6 -mb-3">
                <button className="relative group flex justify-between bg-slate-50 text-blue-500 text-lg py-4 px-10 rounded-2xl">
                  <div>Choose Professional</div>
                  <div className="absolute opacity-0 group-hover:opacity-100 delay-75 duration-150 right-4 top-[1.35rem]">
                    <IoIosArrowForward />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-2 text-center pb-6">
            <p className="text-zinc-400 font-light">
              Do you need more information on plans?
            </p>

            <p className="text-blue-600">Contact-us</p>
          </div>
        </div>

        {/* Pagamentos */}
        {/* <div className="container mx-auto px-64 py-12">
          <div className="bg-gradient-to-l from-cyan-400 to-blue-500 rounded-[1.75rem] py-14">
            <div className="flex container mx-auto px-32 text-slate-50">
              <div className="w-1/2">
                <div className="flex gap-4">
                  <div className="p-1 aspect-square bg-slate-50 rounded-3xl text-4xl border-[2.5px] border-slate-400">
                    *
                  </div>
                  <div>
                    <div className="text-lg">Professional</div>
                    <div className="flex gap-2">
                      <div className="mt-1 text-md text-slate-100 opacity-60 font-light">
                        €
                      </div>

                      <div className="text-3xl font-semibold">24</div>
                      <div className="mt-2.5 text-slate-100 opacity-60 font-light">
                        / month
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
              <button className="w-full p-8 border-[3.5px] border-slate-300 rounded-3xl">
                Credit card
              </button>
              <button className="w-full p-8 border-[3.5px] border-slate-300 rounded-3xl">
                Internet banking
              </button>
            </div>
            <div className="flex gap-12">
              <button className="w-full p-8 border-[3.5px] border-slate-300 rounded-3xl">
                Paypal
              </button>
              <button className="w-full p-8 border-[3.5px] border-slate-300 rounded-3xl">
                Bitcoin wallet
              </button>
            </div>
          </div>
        </div> */}

        {/* Status */}
        {/* <div className="container mx-auto px-64 py-12">
          <div className="bg-gradient-to-l from-blue-400 to-blue-600 rounded-[1.75rem] py-14">
            <div className="flex container mx-auto px-32 text-slate-50">
              <div className="w-1/2">
                <div className="flex gap-4">
                  <div className="p-1 aspect-square bg-slate-50 rounded-3xl text-4xl border-[2.5px] border-slate-400">
                    *
                  </div>
                  <div>
                    <div className="text-lg">Professional</div>
                    <div className="flex gap-2">
                      <div className="mt-1 text-md text-slate-100 opacity-60 font-light">
                        €
                      </div>

                      <div className="text-3xl font-semibold">24</div>
                      <div className="mt-2.5 text-slate-100 opacity-60 font-light">
                        / month
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

          <div>
            <form class="w-full">
              <div class="text-xl pb-4 ml-1">Card details</div>

              <label class="w-full flex border-[3.5px] border-slate-300 rounded-2xl">
                <input
                  className="p-4 pl-8 w-full rounded-l-2xl text-xl"
                  type="text"
                  name="card_details"
                  placeholder="Card number"
                />
                <div className="bg-white pr-4 py-2 text-4xl font-thin text-slate-300">
                  {"|"}
                </div>
                <input
                  className="w-1/4 text-xl"
                  type="text"
                  name="expire_date"
                  placeholder="MM/YY"
                />
                <div className="bg-white pr-4 py-2 text-4xl font-thin text-slate-300">
                  {"|"}
                </div>
                <input
                  className="pr-8 w-1/4 rounded-r-2xl text-xl"
                  type="text"
                  name="card_cvc"
                  placeholder="CVC"
                />
              </label>

              <label className="py-12 flex gap-10">
                <div>
                  <div class="text-xl pb-4 ml-1">Full name</div>

                  <input
                    className="p-4 pl-8 w-[24.75vw] rounded-2xl text-xl border-[3.5px] border-slate-300"
                    type="text"
                    name="card_details"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <div class="text-xl pb-4 ml-1">Email</div>
                  <input
                    className="p-4 pl-8 w-[24.75vw] rounded-2xl text-xl border-[3.5px] border-slate-300"
                    type="text"
                    name="card_details"
                    placeholder="Jhon@email.com"
                  />
                </div>
              </label>
            </form>

            <div className="flex justify-end pr-1">
              <button className="bg-gradient-to-l from-blue-400 to-blue-600 text-white text-xl py-5 px-14 rounded-xl">
                Pay € 24
              </button>
            </div>
          </div>
        </div> */}
      </section>
      <section className="bg-slate-400 py-8"></section>
    </main>
  );
}
