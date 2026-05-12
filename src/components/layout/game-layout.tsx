import "../../styles/game-layout-styles.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <main className="game-screen">{children}</main>;
}
