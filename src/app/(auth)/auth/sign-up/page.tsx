import Signin from "@/components/Auth/Signin";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return (
    <>

      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signin />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <h2 className="mb-10 text-primary text-[40px]">Madrasa<span className="font-bold">tech</span></h2>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
              Simplify Your School Operations with MadrasaTech
              </p>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
              Tired of juggling spreadsheets, papers, and disorganized systems?
              </p>

              {/* <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1> */}

              <p className="w-full mb-10 font-medium text-dark-4 dark:text-dark-6">
              MadrasaTech is here to bring order to your school management. With easy-to-use tools for tracking students, teachers, grades, and more, you can stay on top of everything effortlessly.
              </p>
              <p className="w-full font-medium text-dark-4 dark:text-dark-6">
              Create your account today and start managing your school with ease!
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
