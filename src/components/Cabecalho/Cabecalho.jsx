"use client";
import Link from "next/link";
export default function Cabecalho() {


  const logout = () => {
    sessionStorage.removeItem("token-user");
    window.location.href = "/login";
  }

  if(window != undefined && window != null) {
  if(sessionStorage.getItem("token-user") != null && sessionStorage.getItem("token-user") != undefined) {
    return (
      
      <header className="bg-slate-800 text-white">

        <h1 className="text-center text-3xl font-extrabold">PRODUTOS</h1>
        <hr className="bg-red-600 border border-red-700" />
        <nav className="menu">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/login" onClick={logout}>LOGOUT</Link>
            </li>
            <li>
              <Link href="/produtos/calca">CALÇA</Link>
            </li>
            <li>
              <Link href="/produtos/camisa">CAMISA</Link>
            </li>
            <li>
              <Link href="/produtos/tenis">TÊNIS</Link>
            </li>
            <li>
              <Link href="/produtos/fazenda/loja/laticinios">QUEIJOS</Link>
            </li>
            <li>
              <Link href="/user-pages">GIT-USERS</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="bg-slate-800 text-white">
        <h1 className="text-center text-3xl font-extrabold">PRODUTOS</h1>
        <hr className="bg-red-600 border border-red-700" />
        <nav className="menu">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/login">LOGIN</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }}
}
