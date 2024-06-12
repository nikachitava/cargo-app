import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Services } from "./pages/Services.tsx";
import { Faq } from "./pages/Faq.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Root } from "./pages/Root.tsx";
import { Authorization } from "./pages/Authorization.tsx";

import { AuthContextProvider } from "./context/authContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="faq" element={<Faq />} />
                        <Route path="contact" element={<Contact />} />
                        <Route
                            path="authorization"
                            element={<Authorization />}
                        />
                    </Route>
                </Routes>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);
