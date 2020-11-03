import React from "react";
import Product from "./components/Product";
import Tabela from "./components/Table"


import "./App.css";



function App() {


  return (
    <>
    <div className="Home">
      <h1>Meus assassins creed favoritos</h1>
     
      <Product href = "https://steamcdn-a.akamaihd.net/steam/apps/15100/0000003840.1920x1080.jpg?t=1602600542">
        <p> Assassins creed 1 é ambientado em uma história fictícia com eventos do mundo real, seguindo a luta secular entre a Ordem dos Assassinos, que lutam pela paz com o livre arbítrio, e a Ordem dos Templários, que desejam a paz através do controle. O jogo ocorre durante a Terceira Cruzada na Terra Santa em 1191, com o história girando em torno da Ordem Secreta dos Assassinos. O jogador está na realidade controlando um homem contemporâneo chamado Desmond Miles, que, através do uso de uma máquina chamada "Animus", visualiza e controla as memórias genéticas de seus ancestrais, neste caso, as de Altaïr,um membro dos Assassinos.</p>
      </Product >

      <Product href = "https://images.adsttc.com/media/images/5ea4/0454/b357/658e/3900/003d/slideshow/AC2S039FlorenceSpearImpale_34122300177_6344.jpg?1587807311">
        <p> Assassins creed 2 recebeu aclamação da crítica, com elogios feitos principalmente ao seu enredo, sua ambientação na Itália renascentista, melhorias feitas em relação ao primeiro jogo e ao carismático personagem principal, Ezio Auditore da Firenze. Assassin's Creed II vendeu cerca de 9 milhões de cópias, e foi o responsável por popularizar a franquia Assassin's Creed. O jogo é citado como sendo um dos melhores videogames de todos os tempos.</p>
      </Product >

      <Product href = "https://store-images.s-microsoft.com/image/apps.63335.70474947053159227.caed85d2-bd42-4280-bbcb-40b9aec414dc.e2c75e74-176b-4e45-9301-80d370eed815?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg">
        <p> Em Assassins creed brotherhood o jogador novamente controla o assassino Ezio Auditore da Firenze através de memórias genéticas de Desmond Miles utilizando o Animus 2.0. Mais missões dos tempos modernos serão introduzidas ao jogador ao longo da progressão da história principal. Como um mestre assassino, Ezio terá que reorganizar sua irmandade em Roma para lutar contra os templários. Haverá um modo de controle dos assassinos que lhe permitirá enviar novos recrutas assassinos ao redor do mundo para lutar pelos seus ideais ou simplesmente utilizá-los como ajudantes em suas missões em Roma. </p>
         </Product >

      <Product href = "https://i.ytimg.com/vi/uHHSF7tpIFY/maxresdefault.jpg">
        <p>Assassin's Creed IV: Black Flag segue as aventuras de Edward James Kenway, um notável pirata e corsário que viveu nas Caraíbas durante a Época Dourada da Pirataria no inicio do séc. XVIII,que hoje é mais conhecida como América Central, pai de Haytham Kenway e avô de Ratonhnhaké:ton (Connor Kenway), os personagens jogáveis ​​de Assassin's Creed III. A história de Edward começa quando este se vê acidentalmente no meio do eterno conflito entre Assassinos e Templários. Enquanto isso os piratas mais famosos se juntaram em Nassau, Bahamas, na tentativa de estabelecer uma das primeiras sociedades democráticas. </p>
      </Product >

      <Product href = "https://www.atribuna.com.br/image/contentid/policy:1.6959:1544733153/Assassin-s-Creed-Odyssey.jpg?f=2x1&$p$f=073d7da&q=0.8&w=1500&$w=f075b93">
        <p>Assassins creed Odyssey se passa em 431 a.C, quatrocentos anos antes dos eventos Assassin's Creed Origins. Conta a história da Guerra do Peloponeso, que foi travada entre as cidades-estados da Grécia antiga. O jogador assume o papel de uma criança exilada (mercenário(a) quando adulto) chamada Alexios ou Kassandra (dependendo do sexo escolhido para a experiência do jogo, no entanto, o personagem canônico é o que você escolhe) que luta para defender as pessoas, e é um descendente do rei espartano Leônidas I; e capaz de lutar por Atenas e da Liga de Delos ou Liga do Peloponeso liderada por Esparta.</p>
      </Product >



    </div>

    <div>
      <Tabela/>
    </div>
    </>
    );
}

export default App;