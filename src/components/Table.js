import React from "react"

export default function Table(){
  return(
  <table cellpadding="9">
      <thead>
        <tr>
          <th class="titulo" ><img className="tableImg" src="https://gamehall.com.br/wp-content/uploads/2015/08/ubisoft-videos-assassins-creed-serie.jpg" /></th>
          <th><img className="tableImg" src="https://bdjogos.com.br/capas/03022018142918-Assassins-Creed-capa-1.jpg" /></th>
          <th><img className="tableImg" src="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw5df235dd/images/large/56c4947f88a7e300458b4690.jpg?sw=341&sh=450&sm=fit" /></th>
          <th><img className="tableImg" src="https://upload.wikimedia.org/wikipedia/pt/2/2d/Assassins_Creed_Brotherhood_capa.png" /></th>
          <th><img className="tableImg" src="https://upload.wikimedia.org/wikipedia/pt/c/ca/Assassins_Creed_4_Black_Flag_capa.png" /></th>
          <th><img className="tableImg" src="https://assets.xtechcommerce.com/uploads/images/medium/26183feef82f502bce6eebf06a888a4c.jpg"/></th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="titulo"><b>Nome</b></td>
          <td>Assassins creed 1</td>
          <td>Assassins creed 2</td>
          <td>Assassins creed brotherhood</td>
          <td>Assassins creed black flag</td>
          <td>Assassins creed odyssey</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Desenvolvedora</b></td>
          <td> Ubisoft</td>
          <td> Ubisoft</td>
          <td> Ubisoft</td>
          <td> Ubisoft</td>
          <td> Ubisoft</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Gênero</b></td>
          <td>Ação-aventura</td>
          <td>Ação-aventura</td>
          <td>Ação-aventura</td>
          <td>Ação-aventura</td>
          <td>RPG de ação</td>
          
        </tr>
        <tr>
          <td class="titulo"><b>Metacritic Metascore</b></td>
          <td>
            <div class="metascore"><h6>81</h6></div>
          </td>
          <td>
            <div class="metascore"><h6>90</h6></div>
          </td>
          <td>
            <div class="metascore"><h6>88</h6></div>
          </td>
          <td>
            <div class="metascore"><h6>83</h6></div>
          </td>
          <td>
            <div class="metascore"><h6>83</h6></div>
          </td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Diretor</b></td>
          <td>Patrice Désilets</td>
          <td>Patrice Désilets</td>
          <td>Patrick Plourde</td>
          <td>Jean Guesdon,
              Ashraf Ismail,
              Damien Kieken</td>
          <td>Jonathan Dumont,
            Scott Phillips</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Plataforma</b></td>
          <td>XBOX 360/PS3/PC</td>
          <td>XBOX 360/PS3/PC/MAC OS X/PS4/XBOX ONE</td>
          <td>XBOX 360/PS3/PC/MAC OS X/PS4/XBOX ONE</td>
          <td>XBOX 360/PS3/PC/PS4/XBOX ONE/WII U/NINTENDO SWITCH</td>
          <td>PC/PS4/XBOX ONE</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Classificação Indicativa</b></td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
         
        </tr>
      </tbody>
    </table>
  );
}