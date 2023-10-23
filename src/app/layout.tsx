import "@/styles/globals.css";
import React, { ReactNode } from "react";

// Custom global components
import Topbar from "@/Global/Topbar";
import Sidebar from "@/Global/Sidebar";
import Provider from "@/Global/Provider";

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "Marketin Arm",
  description: "Software",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div id="root">
            <div className="app">
              <Sidebar />
              <main className="content">
                <Topbar />
                {children}
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
