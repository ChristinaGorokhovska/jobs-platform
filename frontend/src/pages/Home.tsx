import Header from "../components/Header";
import Search from "../components/Search";

import { useAuthContext } from "../context/AuthProvider";

export default function Home() {
  return (
    <>
      <Header />
      <Search />
    </>
  );
}
