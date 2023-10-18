import Link from "next/link";

export default function Cabecalho() {
  return (
    <header>
        <nav>
        <ul>
          <li><Link href="/produtos/calca">CALÇA</Link></li>
          <li><Link href="/produtos/camisa">CAMISA</Link></li>
          <li><Link href="/produtos/tenis">TÊNIS</Link></li>
      </ul>
        </nav>
    </header>
  )
}
