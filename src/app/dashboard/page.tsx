import Maildata from "@/components/Maildata";
import Maillist from "@/components/Maillist";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  
    return (
      <>
        <Navbar/>
        <div className="flex flex- w-full h-[92%]">
          <Sidebar/>
          <Maillist/>
          <Maildata/>
        </div>
      </>
    )
  }
  