import Maildata from "@/components/Maildata";
import Maillist from "@/components/Maillist";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  
    return (
      <>
        <Navbar/>
        <div className="flex flex-row items-start align-top overflow-hidden w-full h-full">
          <Sidebar/>
          <Maillist/>
          <Maildata/>
        </div>
      </>
    )
  }
  