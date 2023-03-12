/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import HhLogo from "../HhLogo/HhLogo";
const Home = () => {
  return (
    <div className="mx-auto mt-20 flex max-h-screen w-fit flex-col items-center justify-between p-2 text-lg text-slate-50">
      <h3 className="text-2xl">Bienvenue à l'assistant de Crous</h3>
      <Link to="/services">
        <button className="btn mt-20 w-52 tracking-widest text-black shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:text-slate-200 hover:shadow-none">
          Démarrer
        </button>
      </Link>
      <div className="mt-80">
        <HhLogo />
      </div>
    </div>
  );
};

export default Home;
