import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AppBar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <div className="w-full bg-white shadow-md">
            <div className="flex justify-between items-center py-4 px-4 md:px-8">
                <button className="flex items-center space-x-2" onClick={() => navigate("/")}>
                    <img
                        loading="lazy"
                        className="h-10"
                        src="https://testimonial.to/static/media/logo-dark.8447f219.svg"
                        alt="Logo"
                    />
                </button>

                <div className="hidden md:flex space-x-10 font-semibold text-slate-700 text-lg">
                    <button>Customers</button>
                    <button>Features</button>
                    <button>Integration</button>
                    <button>Pricing</button>
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button
                        className="font-medium text-slate-700"
                        onClick={() => navigate("/signin")}
                    >
                        Sign in
                    </button>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 rounded-lg w-20 h-12 text-white"
                        onClick={() => navigate("/signup")}
                    >
                        Sign up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        {/* {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4">
                    <div className="flex flex-col space-y-2 font-semibold text-slate-700 text-lg">
                        <button onClick={() => setIsMobileMenuOpen(false)}>Customers</button>
                        <button onClick={() => setIsMobileMenuOpen(false)}>Features</button>
                        <button onClick={() => setIsMobileMenuOpen(false)}>Integration</button>
                        <button onClick={() => setIsMobileMenuOpen(false)}>Pricing</button>
                    </div>
                    <div className="flex flex-col space-y-2 pt-2">
                        <button
                            className="font-medium text-slate-700"
                            onClick={() => {
                                navigate("/signin");
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Sign in
                        </button>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 rounded-lg h-12 text-white"
                            onClick={() => {
                                navigate("/signup");
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
