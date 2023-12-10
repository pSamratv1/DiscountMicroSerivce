import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  return (
    // Set the min width of the uoter most div to 25rem
    <div className="auth-layout h-screen w-full md:w-full  grid grid-rows-12 grid-cols-12 text-xs ">
      <header className="col-span-12 w-full h-[52px] border-b-[1px] border-primary-100 px-4 flex justify-between items-center bg-gray-200 gap-2">
        <span className="text-lg font-bold">Header Area</span> (Layouts - Header
        and Sidebar - implemented in auth-module using Module Federation)
      </header>
      <div className="flex h-[calc(100vh-52px)] w-screen">
        <aside className="min-w-[14rem] hidden md:flex md:flex-col justify-center items-center border-r-[1px] border-primary-100 bg-gray-300">
          Sidebar Area
        </aside>
        <main className="flex-1 max-w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
