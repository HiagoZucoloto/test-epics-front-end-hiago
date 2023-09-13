/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";

export default function Planos() {
  return (
    <section>
      <div className="py-12 container px-28 flex justify-center gap-16">
        <div className="py-20 px-10 w-[33%] bg-slate-100 rounded-2xl border-4 border-slate-200">
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

              <div className="py-6">Features included are,</div>

              <div className="grid gap-4">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute top-1 left-1 text-blue-500">
                      <BsCheckLg />
                    </div>
                    <input
                      type="checkbox"
                      className="appearance-none h-6 w-6 border-[3px] border-slate-300 rounded-[0.2rem]"
                    ></input>
                  </div>

                  <div className="flex gap-2 -mt-1">
                    <div className="font-medium text-lg">1 TB</div>

                    <div className="text-slate-400 opacity-75 font-light text-lg">
                      Cloud store
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute top-1 left-1 text-blue-500">
                      <BsCheckLg />
                    </div>
                    <input
                      type="checkbox"
                      className="appearance-none h-6 w-6 border-[3px] border-slate-300 rounded-[0.2rem]"
                    ></input>
                  </div>

                  <div className="flex gap-2 -mt-1">
                    <div className="font-medium text-lg">2</div>

                    <div className="text-slate-400 opacity-75 font-light text-lg">
                      Active projects
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute top-1 left-1 text-blue-500">
                      <BsCheckLg />
                    </div>
                    <input
                      type="checkbox"
                      className="appearance-none h-6 w-6 border-[3px] border-slate-300 rounded-[0.2rem]"
                    ></input>
                  </div>

                  <div className="flex gap-2 -mt-1">
                    <div className="font-medium text-lg">3</div>

                    <div className="text-slate-400 opacity-75 font-light text-lg">
                      Team members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="pt-6 -mb-3">
              <button className="relative group flex justify-between bg-gradient-to-bl from-blue-400 to-blue-600 text-white text-lg py-4 px-10 rounded-2xl hover:drop-shadow-xl duration-150 delay-75">
                <div className="break-all">Choose Starter</div>
                <div className="absolute opacity-0 group-hover:opacity-100 delay-75 duration-150 right-4 top-[1.35rem]">
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="py-20 px-10 w-[33%] bg-gradient-to-bl from-blue-400 to-blue-600 text-white rounded-2xl">
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

              <div className="grid gap-4">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute top-1 left-1 text-blue-500">
                      <BsCheckLg />
                    </div>
                    <input
                      type="checkbox"
                      className="appearance-none h-6 w-6 border-[3px] bg-slate-50 border-slate-300 rounded-[0.2rem]"
                    ></input>
                  </div>

                  <div className="flex gap-2 -mt-1">
                    <div className="font-medium text-lg">Unlimited</div>

                    <div className="text-white opacity-75 font-light text-lg">
                      Cloud store
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute top-1 left-1 text-blue-500">
                      <BsCheckLg />
                    </div>
                    <input
                      type="checkbox"
                      className="appearance-none h-6 w-6 border-[3px] bg-slate-50 border-slate-300 rounded-[0.2rem]"
                    ></input>
                  </div>

                  <div className="flex gap-2 -mt-1">
                    <div className="font-medium text-lg">50</div>

                    <div className="text-white opacity-75 font-light text-lg">
                      Actives projects
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute top-1 left-1 text-blue-500">
                      <BsCheckLg />
                    </div>
                    <input
                      type="checkbox"
                      className="appearance-none h-6 w-6 border-[3px] bg-slate-50 border-slate-300 rounded-[0.2rem]"
                    ></input>
                  </div>

                  <div className="flex gap-2 -mt-1">
                    <div className="font-medium text-lg">88</div>

                    <div className="text-white opacity-75 font-light text-lg">
                      Team members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="pt-6 -mb-3">
              <button className="relative group flex justify-between bg-slate-50 text-blue-500 text-lg py-4 px-8 rounded-2xl hover:drop-shadow-xl duration-150 delay-75">
                <div className="break-all">Choose Professional</div>
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
    </section>
  );
}
