"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Calca() {

  useEffect(() => {
      if(sessionStorage.getItem("token-user") != null && sessionStorage.getItem("token-user") != undefined) {
        // console.log("token-user: " + sessionStorage.getItem("token-user"));
      } else {
        window.location.href = "/login";
      }
    }
  );
  
  return (
    <div>
        <h1>Calça</h1>
        <p><strong>Descrição: </strong></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta ipsa neque deserunt pariatur? Impedit porro necessitatibus, quia consequatur expedita itaque est facere omnis quod in numquam, ullam illo odit!</p>
        <p><Link href="/">Voltar...</Link></p>
    </div>
  )
}
