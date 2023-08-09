import Header from "../LayoutComponents/Header"
function UploadLayout({children})
{
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    )
}
export default UploadLayout;