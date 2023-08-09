import Header from "../LayoutComponents/Header"
import Sidebar from "../LayoutComponents/Sidebar"

function MainLayout({children})
{
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default MainLayout;