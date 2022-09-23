import Header from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
