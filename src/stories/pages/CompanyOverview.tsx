import { Header } from "../../layout/Header/Header"
import { SubHeader } from "../../layout/SubHeader/SubHeader"
import { Sidebar } from "../../layout/Sidebar/Sidebar"

export const CompanyOverview = () => (
  <section>
    <Header />
    <div className="flex pt-1 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-1 dark:bg-gray-900">
        <main>
          <SubHeader />
        </main>
        <span>hello footer</span>
      </div>
    </div>
  </section>
    // <section>
    //   <Header />
    //   
      
    //   <SubHeader />
    // </section>
)