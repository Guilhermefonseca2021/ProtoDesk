## 📱 Sistema de Protocolo Digital de Notas

Um sistema desenvolvido para digitalizar o processo de protocolo de notas em restaurantes de hotéis, substituindo o papel por uma solução web eficiente, segura e acessível — integrando com o sistema PDV Legal.

## 📌 Contexto

Atualmente, em muitos hotéis, o protocolo de notas assinadas é feito manualmente, em papel. Isso gera perdas frequentes de comprovantes, acarretando prejuízos aos garçons, mesmo após o serviço ser prestado corretamente.

Como funcionário e aluno de Análise e Desenvolvimento de Sistemas, identifiquei esse problema real e decidi desenvolver uma solução prática e escalável.

## 🚀 Funcionalidades

- 📄 Cadastro de notas com dados do cliente e quarto
- ✍️ Assinatura digital no dispositivo (tablet, celular ou PC)
- ⏱️ Registro de data, hora, IP e usuário
- 🔒 Armazenamento seguro em nuvem
- 📂 Histórico de protocolos filtrável por data, quarto, nome ou valor
- 🔗 Integração planejada com o sistema PDV Legal
- 🧑‍💼 Painel de acesso para recepção e gerência
- 📲 Interface responsiva para mobile e desktop


##  ⚙️ Tecnologias Utilizadas 

- [x] React.js
- [x] TailwindCSS
- [ ] Node.js  
- [ ] Express
- [ ] PostgreSQL


## ✅ Benefícios

Elimina perda de notas em papel
Traz segurança jurídica com assinaturas digitais
Evita prejuízo indevido para colaboradores
Garante organização e transparência
Facilita auditorias internas


## 📦 Como rodar localmente

Clone o repositório

```js
$   git clone https://github.com/seuusuario/protocolo-notas.git
```

 Instale as dependências

```js
cd backend
$   npm install

cd ../frontend
$   npm install
```

Rode o backend

```node
npm run dev
```

Rode o frontend

```node
npm run dev
```

## 👨‍💻 Desenvolvimento

Guilherme Fonseca dos Santos
Garçom 💼 | Estudante de ADS 👨‍🎓 | Desenvolvedor por propósito 💻
[linkedin]()


## ⚠️ Erro Resolvido: html2canvas e oklch

Durante o desenvolvimento, me deparei com o erro:
Error: Attempting to parse an unsupported color function "oklch"

🔍 A causa? O html2canvas não suporta cores no formato oklch(), que frameworks modernos como o TailwindCSS usam por padrão.

💡 Insight: Nem sempre o que há de mais novo é compatível com tudo. Ao integrar bibliotecas como o html2canvas, é importante garantir que o CSS use formatos tradicionais (rgb, hex, hsl), especialmente ao gerar imagens do DOM.