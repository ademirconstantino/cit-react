// Blog posts: newest first. Each post's body is plain JSX styled by blog.css.
import type { ReactNode } from "react";

export type Post = {
    slug: string;
    title: string;
    summary: string;
    date: string; // ISO date
    readingMinutes: number;
    tags: string[];
    body: ReactNode;
};

const Code = ({ lang, children }: { lang: string; children: string }) => (
    <pre className="blog-code" data-lang={lang}><code>{children.trim()}</code></pre>
);

const BABEL_EXAMPLE = `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.26.4/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Contador() {
        const [n, setN] = React.useState(0);
        return <button onClick={() => setN(n + 1)}>Cliques: {n}</button>;
      }

      ReactDOM.createRoot(document.getElementById("root")).render(<Contador />);
    </script>
  </body>
</html>
`;

const VITE_CREATE = `
npm create vite@latest meu-app -- --template react
cd meu-app
npm install
npm run dev      # servidor local com hot reload
`;

const VITE_COMPONENT = `
// src/Contador.jsx
import { useState } from "react";

export default function Contador() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>Cliques: {n}</button>;
}
`;

const VITE_MAIN = `
// src/main.jsx
import { createRoot } from "react-dom/client";
import Contador from "./Contador";

createRoot(document.getElementById("root")).render(<Contador />);
`;

const VITE_BUILD = `
npm run build    # gera a pasta dist/ pronta para publicar
`;

export const POSTS: Post[] = [
    {
        slug: "programacao-usando-react",
        title: "Programação usando React",
        summary: "React com Vite e Node.js ou ReactDOM com Babel direto na página? Veja a diferença na prática e quando usar cada um.",
        date: "2026-10-25",
        readingMinutes: 4,
        tags: ["React", "Vite", "Babel", "JavaScript"],
        body: (
            <>
                <p>
                    Existem duas formas comuns de começar com React: carregar tudo <strong>direto na página</strong> com
                    ReactDOM e Babel, ou criar um <strong>projeto com Vite e Node.js</strong>. As duas usam o mesmo React —
                    o que muda é <em>onde</em> e <em>quando</em> o JSX é transformado em JavaScript.
                </p>

                <h3>1. React na página com ReactDOM + Babel</h3>
                <p>
                    Basta um arquivo HTML. Os scripts vêm de uma CDN e o Babel converte o JSX
                    <strong> no navegador</strong>, toda vez que a página abre.
                </p>
                <Code lang="html">{BABEL_EXAMPLE}</Code>
                <ul className="blog-pros-cons">
                    <li className="pro">Zero instalação: abra o arquivo e funciona.</li>
                    <li className="pro">Ótimo para protótipos, aulas e para "turbinar" uma página existente.</li>
                    <li className="con">Mais lento: o navegador baixa o Babel e compila o código a cada carregamento.</li>
                    <li className="con">Sem <code>import</code> de pacotes npm, sem divisão em arquivos e sem minificação.</li>
                </ul>
                <p className="blog-note">
                    O React 19 não publica mais os arquivos UMD usados acima; para testar a versão 19 dessa forma,
                    importe os módulos via <code>esm.sh</code>. Para produção, prefira o Vite.
                </p>

                <h3>2. React com Vite e Node.js</h3>
                <p>
                    O Node.js roda as ferramentas e o Vite compila o JSX <strong>antes</strong> de o código chegar ao
                    navegador. Você cria o projeto com um comando:
                </p>
                <Code lang="bash">{VITE_CREATE}</Code>
                <p>Cada componente vive no seu próprio arquivo e é importado normalmente:</p>
                <Code lang="jsx">{VITE_COMPONENT}</Code>
                <Code lang="jsx">{VITE_MAIN}</Code>
                <p>Na hora de publicar, o Vite gera arquivos otimizados e minificados:</p>
                <Code lang="bash">{VITE_BUILD}</Code>
                <ul className="blog-pros-cons">
                    <li className="pro">Rápido: o navegador recebe JavaScript pronto, sem compilar nada.</li>
                    <li className="pro">Hot reload, TypeScript, pacotes npm e organização em módulos.</li>
                    <li className="con">Exige Node.js instalado e um passo de build antes do deploy.</li>
                </ul>

                <h3>Resumo</h3>
                <div className="blog-table-wrap">
                    <table className="blog-table">
                        <thead>
                            <tr><th></th><th>ReactDOM + Babel</th><th>Vite + Node.js</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Instalação</td><td>Nenhuma</td><td>Node.js + npm</td></tr>
                            <tr><td>Compilação do JSX</td><td>No navegador, a cada acesso</td><td>No build, uma vez</td></tr>
                            <tr><td>Pacotes npm</td><td>Não</td><td>Sim</td></tr>
                            <tr><td>Desempenho</td><td>Baixo</td><td>Alto</td></tr>
                            <tr><td>Ideal para</td><td>Testes, aulas, protótipos</td><td>Aplicações reais</td></tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    <strong>Regra prática:</strong> use Babel na página para aprender ou experimentar em minutos; assim
                    que o projeto for para produção, migre para o Vite. Este próprio site, aliás, é feito com React e Vite.
                </p>
            </>
        ),
    },
];

export const findPost = (slug: string | undefined) => POSTS.find((p) => p.slug === slug);

// Site language code -> locale for date formatting
const DATE_LOCALES: Record<string, string> = { pt: "pt-BR", jp: "ja", ch: "zh", em: "ar" };

export const formatPostDate = (date: string, lang: string) =>
    new Date(date + "T12:00:00").toLocaleDateString(DATE_LOCALES[lang] ?? lang, { day: "numeric", month: "long", year: "numeric" });
