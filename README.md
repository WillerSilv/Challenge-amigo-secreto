# Sorteador de Amigo Secreto 🎁

Cansado de cortar papéis e ter que refazer o sorteio porque alguém tirou o próprio nome? Seus problemas acabaram! 🎉

Este projeto é uma ferramenta simples e charmosa para organizar o amigo secreto da sua família, amigos ou equipe de trabalho. Chega de papelzinhos amassados e sorteios complicados. Com alguns cliques, está tudo resolvido!


## ✨ O que ele faz?

Aqui estão os superpoderes da nossa aplicação:

-   ✅ **Adicione quantos amigos quiser**: Basta digitar o nome e clicar em "Adicionar".
-   ✅ **Chega de confusão**: O app não deixa você adicionar nomes em branco ou repetidos. Assim, ninguém fica de fora!
-   ✅ **Sorteio justo e 100% aleatório**: Com um clique no botão "Sortear", a mágica acontece! O sistema garante que ninguém vai tirar a si mesmo.
-   ✅ **Para a brincadeira ser boa**: É preciso ter pelo menos 4 pessoas na lista para o sorteio começar.
-   ✅ **Memória de elefante**: A ferramenta guarda um histórico com todos os nomes que já participaram, mesmo que você reinicie o sorteio.
-   ✅ **Começar de novo? Fácil!**: O botão "Reiniciar" limpa a rodada atual para você começar outra, sem apagar seu histórico.
-   ✅ **Limpeza total**: Quer apagar tudo e começar do zero? O botão "Limpar Tudo" faz um reset completo.

## 🛠️ Feito com...

Nenhuma mágica complicada aqui, apenas o trio clássico e poderoso da web:

-   **HTML5**: O esqueleto da nossa página, dando estrutura a tudo.
-   **CSS3**: Onde a mágica do design acontece. Cores, fontes e tudo que deixa o site bonito.
-   **JavaScript (puro e simples!)**: O cérebro por trás de tudo! É ele quem guarda os nomes, faz o sorteio e atualiza a tela.

## 🗺️ Onde fica cada coisa?

Se você quiser bisbilhotar o código, aqui está o mapa do tesouro:

.
├── 📁 assets/
│   ├── amigo-secreto.png     
│   └── play_circle_outline.png  
├── 📜 index.html               
├── 📜 style.css                
├── 📜 app.js                  
└── 📜 README.md                


## 🚀 Como começar

1.  **Baixe os arquivos**: Faça o download ou clone este projeto para o seu computador.
2.  **Abra no navegador**: Encontre o arquivo `index.html` e dê um duplo clique nele. Ele vai abrir diretamente no seu navegador preferido.
3.  **Divirta-se!**
    -   Digite os nomes dos participantes um por um.
    -   Quando estiver tudo pronto, clique em **Sortear**.
    -   Se precisar, use os botões **Reiniciar** ou **Limpar Tudo**.

É simples assim!

## 🧠 Um Olhar no Cérebro da Aplicação (`app.js`)

Curioso para saber como a mágica acontece? Nosso arquivo `app.js` é bem organizado e fácil de entender. Ele funciona assim:

-   **Dois "cadernos" de anotações**: Ele usa dois *arrays* (listas) para guardar as informações:
    -   `listaDeAmigos`: Anota os nomes que estão no sorteio *atual*.
    -   `historicoDeNomes`: Guarda *todos* os nomes que já foram digitados, para sempre (ou até você clicar em "Limpar Tudo").

-   **As Ações (Funções)**:
    -   `adicionarAmigo()`: Pega o nome que você digitou, verifica se ele não está em branco ou repetido, e o anota nos "cadernos".
    -   `sortearAmigo()`: A estrela do show! Ela embaralha os nomes de forma aleatória (usando um método chamado *Fisher-Yates*) e mostra quem tirou quem.
    -   `reiniciarSorteio()` e `limparTudo()`: Nossos ajudantes da limpeza. Um faz uma limpeza leve, e o outro, uma limpeza pesada!