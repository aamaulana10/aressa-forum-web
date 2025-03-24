import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncUnsetAuthUser } from "../states/authUser/action";

const Layout = () => {
    const {
        authUser = null,
    } = useSelector((states) => states);
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

    function onLogout() {
        console.log('logout');
        dispatch(asyncUnsetAuthUser());
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideBar isOpen={isOpen} />

            {/* Main Content */}
            <div className={`flex-1 ${isOpen ? 'ml-64' : 'ml-0'}`}>
                {/* Header */}
                <Header isOpen={isOpen} setIsOpen={setIsOpen} onLogout={onLogout} userName={authUser.name} />

                {/* Content Scrollable */}
                <main className="p-4 mt-24 h-screen overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
