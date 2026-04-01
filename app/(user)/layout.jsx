import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function UserLayout ({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar type="user" />
            <main className="flex-1">{children}</main>
            <Footer type="user" />
        </div>
    )
}