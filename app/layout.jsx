import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pulse Property",
  keywords: "property, rental, realEstate",
  description: "Find the perfect rental property",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children} </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
