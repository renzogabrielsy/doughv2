import Accounts from "@/components/Dashboard/Accounts/Accounts";
import Statistics from "@/components/Dashboard/Statistics/Statistics";
import Tally from "@/components/Dashboard/Tally/Tally";
import { CRUDProvider } from "@/context/CRUDContext";

export default function Home() {
  return (
    <>
      <CRUDProvider>
        <div className="flex flex-col w-full h-full justify-start px-5">
          {/* <h1 className="text-4xl font-bold text-base-content mb-2">
            Dashboard.
          </h1> */}
          <div className="hidden 2xl:flex flex-row justify-start items-center w-full h-[35%] gap-8 p-5">
            <Accounts />
            <Statistics />
          </div>
          <div className="h-full 2xl:h-[60%] px-5 pt-2">
            <Tally />
          </div>
        </div>
      </CRUDProvider>
    </>
  );
}
