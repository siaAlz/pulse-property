import "@/assets/styles/globals.css";

export const metadata = {
  title: "Pulse Property",
  keywords: "property, rental, realEstate",
  description: "Find the perfect rental property",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children} </main>
      </body>
    </html>
  );
};

export default MainLayout;
