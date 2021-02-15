


let champion = document.getElementById("champion")
let description = document.getElementById("description")

function champ(){
    let campeao = document.getElementById("text").value;
    if(campeao == "draven" || campeao == "Draven"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg">`
        description.innerHTML = `<p>'''O melhor' é onde eu decido colocar os limites de cada dia.''</p>`
    } else if(campeao == "Seraphine" || campeao == "seraphine"){
        champion.innerHTML = `<img class="imgChampion2" src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6921c7fcf379895c/5f7e3beaf11ee70e9e14e7a2/ser450kb.jpg">`
        description.innerHTML = `<p>Nascida em Piltover e filha de zaunitas, Seraphine é capaz de ouvir
         a alma das pessoas. O mundo canta para ela, e ela canta em resposta.
          Embora esses sons a tenham atormentado na juventude,
         hoje eles a inspiram, fazendo com que ela transforme o caos em uma sinfonia</p>`
    }else if(campeao == "aatrox" || campeao == "Aatrox"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg">`
        description.innerHTML = `<p>Antes defensores honrados de Shurima contra o temido Vazio, 
        Aatrox e sua raça no fim se tornaram uma ameaça 
        ainda maior para Runeterra e a única coisa capaz de derrotá-los foi um tipo de feitiçaria 
        mortal e traiçoeira. Mas após séculos de encarceramento, Aatrox foi o primeiro a encontrar a liberdade novamente,
        corrompendo e transformando qualquer tolo que tentasse empunhar a arma mágica que continha sua essência.</p>`
    }else if(campeao == "ahri" || campeao == "Ahri"){
        champion.innerHTML = `<img class="imgChampion2" src="https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/07/25201017/Ahri_0.jpg">`
        description.innerHTML = `<p>Naturalmente ligada à magia do reino espiritual, Ahri é uma vastayesa misteriosa,
         com traços de raposa, que busca seu lugar no mundo. </p>`
    }else if(campeao == "akali" || campeao == "Akali"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg">`
        description.innerHTML = `<p>Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, 
        pronta para ser a arma mortal de que seu povo precisa.</p>`
    }else if(campeao == "alistar" || campeao == "Alistar"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg">`
        description.innerHTML = `<p>Um poderoso guerreiro com uma temível reputação, 
        Alistar busca vingança por seu clã, morto pelas mãos do império de Noxus.</p>`
    }else if(campeao == "amumu" || campeao == "Amumu"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg">`
        description.innerHTML = `<p>Reza a lenda que Amumu é uma alma solitária e melancólica da antiga
         Shurima que vaga sem rumo pelo mundo em busca de um amigo. Amaldiçoado por um feitiço ancestral
          para permanecer só pela eternidade, seu toque traz a morte e sua afeição, a ruína.</p>`
    }else if(campeao == "anivia" || campeao == "Anivia"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: Alta <br><br>Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, 
        morte e renascimento para proteger Freljord. Uma semideusa nascida de ventos impiedosos e frios brutais,
         ela carrega esses poderes elementais para perseguir qualquer um que ousar perturbar sua terra natal.<br><br>HABILIDADES<br><br>
        PASSIVA - RENASCIMENTO - Ao receber dano letal, Anivia volta à forma de ovo e renasce com a Vida completa.<br><iframe src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.webm"></iframe><br>
        Q - LAMPEJO GELADO - Anivia junta suas asas e invoca uma esfera de gelo que voa em direção ao oponente, congelando e causando dano a qualquer um em seu caminho. Ao explodir, ela causa dano moderado em um raio, atordoando qualquer um dentro da área.<br><iframe src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.webm"></iframe><br>
        W - CRISTALIZAR - Anivia condensa a umidade do ar, transformando-a num muro impenetrável de gelo que bloqueia todo o movimento. O muro dura um curto período antes de derreter.<br><iframe src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.webm"></iframe><br>
        E - CONGELAMENTO - Com um bater de asas, Anivia dispara uma rajada congelante de vento no alvo, causando dano. Se o alvo tiver sido atingido recentemente por Lampejo Gelado ou sofrido dano de uma Tempestade Glacial totalmente formada, o dano sofrido é dobrado.<br><iframe src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.webm"></iframe><br>
        R - TEMPESTADE GLACIAL - Anivia invoca uma chuva torrencial de gelo e granizo para causar dano aos inimigos e atrasar seu avanço.<iframe src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.webm" ></iframe></p>`
        //Uma deusa aqui!!
    }else if(campeao == "thays" || campeao == "Thays"){
        champion.innerHTML = `<img class="imgChampion2" src="thay.png"> `
        description.innerHTML = `<p> O amor da minha vida, linda demais, merece ate um beijo agora!! BORA CASAR MINHA MULHER!!! </p>`
        //Uma deusa aqui!!
    }else if(campeao == "annie" || campeao == "Annie"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: moderada <br><br>Perigosa, mas adoravelmente precoce, Annie é uma pequena maga com imenso poder piromaníaco.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PIROMANIA - Após conjurar 4 habilidades, a próxima habilidade de ataque de Annie atordoará o alvo.
        <br>Q - DESINTEGRAR - Annie arremessa uma bola de fogo infundida em Mana, causando dano e recuperando o custo de Mana caso o alvo seja destruído.
        <br>W - INCINERAR - Annie conjura um ardente cone de fogo, causando dano em todos os inimigos na área.
        <br>E - ESCUDO FUNDIDO -Annie concede um Escudo e um impulso de Velocidade de Movimento a si mesma ou a um aliado, causando dano a inimigos que atingirem o Escudo com ataques básicos.
        <br>R - INVOCAR TIBBERS - Annie dá vida ao urso Tibbers, causando dano a unidades na área. Tibbers pode atacar e também queimar inimigos que ficarem próximos a ele.</p>`
    } else if(campeao == "aphelius" || campeao == "Aphelius"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg">`
        description.innerHTML = `<p>Função: Atirador  |  Dificuldade: Alta <br><br>Emergindo da sombra do luar com suas armas em mãos, Aphelios abate os inimigos de sua fé em absoluto silêncio, comunicando-se apenas pela destreza de sua mira e pelo disparo de cada arma.
        <br><br>HABILIDADES<br><br>
        PASSIVA - O ASSASSINO E A PROFETISA - Aphelios empunha 5 Armas Lunari criadas por sua irmã, Alune. Ele tem acesso a duas ao mesmo tempo: uma principal e uma secundária. Cada arma tem um ataque básico único e uma habilidade ativada. Ataques e habilidades consomem uma munição da arma. Quando fica sem munição, Aphelios descarta a arma e Alune invoca a próxima.
        <br> Q - HABILIDADES DA ARMA - Aphelios tem 5 habilidades diferentes que são ativadas com base em sua arma principal: Calibrum (Rifle): Tiro de longo alcance que marca seu alvo para um disparo de longo alcance subsequente. Severum (Pistola-Foice): Corre rapidamente enquanto ataca inimigos próximos com ambas as armas. Gravitum (Canhão): Enraíza todos os inimigos afetados pela redução de velocidade desta arma. Infernum (Lança-chamas): Explode inimigos em área de cone e os ataca com sua arma secundária. Crescendum (Chakram): Posiciona uma atalaia que dispara com sua arma secundária.
        <br>W - FASE - Aphelios troca a arma principal por sua arma secundária, substituindo seu ataque básico e a habilidade ativada.
        <br> E - SISTEMA DE ORDENAÇÃO DE ARMAS - Aphelios não tem uma terceira habilidade. Este espaço mostra a próxima arma que Alune concederá a ele. A ordem das armas é fixa, mas pode variar ao longo da partida. Quando uma arma estiver sem munição, ela volta para o fim da sequência.
        <br> R - VIGÍLIA DO PLENILÚNIO - Dispara uma rajada concentrada de luar que explode ao atingir Campeões inimigos. Aplica o efeito único da arma principal de Aphelios.</p>`
    } else if(campeao == "ashe" || campeao == "Ashe"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg">`
        description.innerHTML = `<p>Função: Atirador  |  Dificuldade: Moderada <br><br>A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte.
        <br><br>HABILIDADES<br><br>
        <br>PASSIVA - TIRO CONGELADO - Os ataques de Ashe reduzem a velocidade do alvo e fazem com que ela cause mais dano a ele. Os Acertos Críticos de Ashe não causam dano adicional, mas reduzem ainda mais a velocidade do alvo.
        <br>Q - CONCENTRAÇÃO - Ashe acumula Foco ao atacar. Quando o Foco chega ao máximo, Ashe pode conjurar Concentração para consumir todos os acúmulos de Foco, aumentando temporariamente sua Velocidade de Ataque e transformando seu ataque básico em uma poderosa rajada de ataques pela duração do efeito.
        <br>W - RAJADA - Ashe dispara flechas em cone, causando dano aumentado. Também aplica Tiro Congelado.
        <br>E - OLHAR DO FALCÃO - Ashe envia seu Espírito do Falcão em uma missão de exploração em qualquer ponto do mapa.
        <br>R - FLECHA DE CRISTAL ENCANTADA - Ashe dispara um projétil de gelo em linha reta. Se a flecha colidir com um Campeão inimigo, ela causa dano e o atordoa. A duração do atordoamento depende da distância percorrida pela flecha. Além disso, unidades inimigas próximas recebem dano e lentidão.
        </p>`
    }else if(campeao == "aurelion sol" || campeao == "Aurelion sol"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: Moderada <br><br>Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CENTRO DO UNIVERSO - Estrelas orbitam Aurelion Sol, causando Dano Mágico quando atingem um inimigo.
        <br>Q - OSCILAÇÃO ESTELAR - Aurelion Sol cria um disco em expansão, que explode para causar dano e atordoamento a inimigos ao movimentar-se para muito longe dele.
        <br>W - EXPANSÃO CELESTIAL - Aurelion Sol empurra suas estrelas para mais longe, aumentando o dano e velocidade delas.
        <br>E - COMETA LENDÁRIO - Aurelion Sol levanta voo em um grande trajeto.  
        <br>R - VOZ DA LUZ - Aurelion Sol projeta uma explosão de puro fogo estelar, causando dano e reduzindo a velocidade de todos os inimigos apanhados nela, além de empurrar inimigos próximos para uma distância mais segura.        
        </p>`
    } else if(campeao == "azir" || campeao == "Azir"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: Alta <br><br>Azir foi um imperador mortal de Shurima em uma era muito antiga e um homem orgulhoso que esteve a um passo da imortalidade.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LEGADO DE SHURIMA - Azir pode invocar o Disco Solar das ruínas de uma torre aliada ou inimiga.
        <br>Q - AREIAS DA CONQUISTA - Azir comanda todos os Soldados de Areia na direção do local-alvo. Eles causam Dano Mágico aos inimigos que atravessam e aplicam redução de velocidade por 1 segundo.
        <br>W - SURJA! - Azir invoca um Soldado de Areia para atacar alvos próximos por ele, substituindo seu ataque básico contra alvos dentro do alcance do soldado. Seu ataque causa Dano Mágico a inimigos em linha reta. Surja! também concede Velocidade de Ataque passiva a Azir e seus Soldados de Areia.
        <br>E - AREIAS OSCILANTES - Azir se protege com um escudo por um momento e avança na direção de um de seus Soldados de Areia, causando dano aos inimigos atingidos. Se Azir acertar um Campeão inimigo, ele prepara instantaneamente um novo Soldado de Areia para mobilização e cessa seu avanço.
        <br>R - DECRETO DO IMPERADOR - Azir invoca uma parede de soldados que marcha em frente, causando dano e empurrando para trás os inimigos.
        </p>`
    }else if(campeao == "bardo" || campeao == "Bardo"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bardo_0.jpg">`
        description.innerHTML = `<pFunção: Suporte  |  Dificuldade: Alta <br><br>Viajante de galáxias distantes, Bardo é um agente do acaso que luta para manter um equilíbrio em que a vida possa suportar a indiferença do caos.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CHAMADO DO VIAJANTE - Mipes: Bardo atrai pequenos espíritos que ajudam em seus ataques básicos e causam Dano Mágico adicional. Quando Bardo coleta sinos o suficiente, os mipes também causam dano em uma área e reduzem a velocidade de inimigos atingidos. Sinos: Sinos ancestrais aparecem aleatoriamente para Bardo coletar. Eles concedem experiência, Mana máximo e acúmulos de Velocidade de Movimento quando fora de combate.
        <br>Q - PRISÃO CÓSMICA - Bardo dispara um projétil que causa Lentidão ao primeiro inimigo atingido, mantendo seu trajeto em seguida. Caso atinja uma parede, atordoará o alvo inicial; caso atinja outro inimigo, ambos serão atordoados.
        <br>W - SANTUÁRIO DO PROTETOR - Revela um santuário de cura que fica mais forte ao longo de um curto período e desaparece logo depois de curar e acelerar o primeiro aliado que o tocar.
        <br>E - JORNADA MÁGICA - Bardo abre um portal em terreno próximo. Tanto aliados quanto inimigos podem fazer uma viagem de ida através deste terreno ao entrar pelo portal.
        <br>R - TÊMPERA DO DESTINO - Bardo desfere um arco de energia espiritual em um local-alvo, colocando todos os Campeões, tropas, monstros e torres atingidos em estase por um curto período de tempo.
        </p>`
    } else if(campeao == "blitzcrank" || campeao == "Blitzcrank" || campeao =="blitz" || campeao=="Blitz"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg">`
        description.innerHTML = `<p>Função: Tanque  |  Dificuldade: Moderada <br><br>Blitzcrank é um autômato enorme e praticamente indestrutível de Zaun, construído originalmente para lidar com lixo tóxico.
        <br><br>HABILIDADES<br><br>
        PASSIVA - BARREIRA DE MANA - Blitzcrank recebe um escudo com base em sua Mana ao ficar com a Vida baixa.
        <br>Q - PUXÃO BIÔNICO - Blitzcrank dispara sua mão direita para pegar um inimigo em seu trajeto, causando dano e puxando-o em sua direção.
        <br>W - TURBO - Blitzcrank sobrecarrega a si mesmo para ter um drástico aumento na Velocidade de Ataque e de Movimento. Ele tem sua velocidade temporariamente reduzida após o fim do efeito.
        <br>E - PUNHO DO PODER - Blitzcrank carrega seu punho para fazer com que o próximo ataque cause o dobro de dano e arremesse o alvo ao ar.
        <br>R - CAMPO ESTÁTICO - Inimigos atacados por Blitzcrank são marcados e sofrem dano de eletricidade após 1s. Ele também pode ativar esta habilidade para remover escudos de inimigos próximos, causar dano e silenciá-los brevemente.  
        </p>`
    }else if(campeao == "brand" || campeao == "Brand"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: Moderada <br><br>A criatura conhecida como Brand já se chamou Kegan Rodhe, um membro da gélida Freljord, e é hoje uma lição do que a tentação por poderes maiores pode fazer.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LABAREDA - As habilidades de Brand deixam seus alvos incandescentes, causando dano ao longo de 4s, acumulando até 3 vezes. Se Brand abater um inimigo que estiver incandescente, ele recuperará Mana. Quando Labareda chegar ao máximo de acúmulos em um Campeão, tropa de cerco ou monstro grande, ela se tornará instável, detonando depois de 2s, aplicando efeitos de Habilidades e causando muito dano em uma área ao redor do alvo.
        <br>Q - CAUTERIZAR - Brand lança uma bola de fogo que causa Dano Mágico. Se o alvo estiver incandescente, Cauterizar o atordoará por 1,5s.
        <br>W - PILAR DE CHAMAS - Após um curto intervalo, Brand cria um Pilar de Chamas na área alvo, causando Dano Mágico a unidades inimigas na área. Unidades que estiverem incandescentes sofrem 25% de dano adicional.
        <br>E - CONFLAGRAÇÃO - Brand conjura uma poderosa explosão no alvo que se espalha para inimigos próximos, causando Dano Mágico. Se o alvo estiver incandescente, o alcance de Conflagração será dobrado.
        <br>R - PIROCLASMA - Brand desfere uma devastadora torrente de fogo que ressalta 5 vezes, indo de Brand aos inimigos próximos e causando Dano Mágico a cada vez que ressaltar. Os ressaltos priorizam acumular Labareda ao máximo em Campeões. Se o alvo estiver incandescente, Piroclasma causará breve Lentidão a ele.
        </p>`
    } else if(campeao == "braum" || campeao == "Braum"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg">`
        description.innerHTML = `<p>Função: Suporte  |  Dificuldade: Baixa <br><br>Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord.
        <br><br>HABILIDADES<br><br>
        PASSIVA - GOLPES CONCUSSIVOS - Os ataques básicos de Braum aplicam Golpes Concussivos. Uma vez que o primeiro acúmulo é aplicado, os ataques básicos de aliados também acumulam Golpes Concussivos. Ao atingir 4 acúmulos, o alvo é atordoado e sofre Dano Mágico. Pelos próximos segundos, ele não pode receber acúmulos, mas recebe Dano Mágico adicional dos ataques de Braum.
        <br>Q - MORDIDA DO INVERNO -  Braum dispara rajadas congelantes de seu escudo, causando Dano Mágico e redução de velocidade. Aplica um acúmulo de Golpes Concussivos.
        <br>W - EU TE PROTEJO - Braum salta à frente de um Campeão ou tropa aliada alvo. Ao aterrissar, ele e o aliado recebem Armadura e Resistência Mágica por alguns segundos.
        <br>E - INQUEBRÁVEL - Braum levanta seu escudo em uma direção por muitos segundos, interceptando todos os projéteis e fazendo com que o atinjam e sejam destruídos. Ele nega completamente o dano do primeiro ataque e reduz o dano de todos os ataques seguintes provenientes da mesma direção.
        <br>R - FISSURA GLACIAL - Braum golpeia o chão, arremessando ao ar inimigos próximos e em linha reta à sua frente. Uma fissura é deixada no caminho, causando redução de velocidade nos inimigos.
        </p>`
    }else if(campeao == "caitlyn" || campeao == "Caitlyn"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg">`
        description.innerHTML = `<p>Função: Atirador  |  Dificuldade: Moderada <br><br>Conhecida como sua melhor pacificadora, Caitlyn também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos.
        <br><br>HABILIDADES<br><br>
        PASSIVA - BEM NA MIRA - A cada poucos ataques básicos, ou contra um alvo preso em uma armadilha ou rede, Caitlyn fará um disparo Bem na Mira causando dano adicional que escala com sua Chance de Acerto Crítico. Em alvos presos por armadilhas ou pela rede, o alcance de Bem na Mira de Caitlyn é dobrado.
        <br>Q - PACIFICADORA DE PILTOVER - Caitlyn prepara seu rifle por 1s para fazer um disparo penetrante que causa Dano Físico (causa menos dano a alvos subsequentes).
        <br>W - ARMADILHA MECÂNICA YORDLE - Caitlyn coloca uma armadilha para encontrar yordles sorrateiros. Quando ativada, a armadilha revela e imobiliza o Campeão inimigo por 1,5s e concede a Caitlyn um Bem na Mira fortalecido.
        <br>E - REDE CALIBRE 90 - Caitlyn atira uma rede pesada para reduzir a velocidade do seu alvo. O recuo projeta Caitlyn para trás.
        <br>R - ÁS NA MANGA - Caitlyn se concentra para fazer o disparo perfeito, causando dano drástico em um único alvo a uma longa distância. Campeões inimigos podem interceptar o projétil e tomar dano no lugar de seu aliado.
        </p>`
    }else if(campeao == "camille" || campeao == "Camille"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Moderada <br><br>Munida para agir além dos limites da lei, Camille é a chefe de inteligência do Clã Ferros e uma elegante agente de elite, responsável pelo bom funcionamento da máquina de Piltover e de Zaun, seu submundo.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DEFESA ADAPTATIVA - Ataques básicos contra Campeões concedem um Escudo equivalente a uma porcentagem da Vida máxima de Camille contra o tipo de dano deles (Físico ou Mágico) por um breve período.
        <br>Q - PROTOCOLO DE PRECISÃO - O próximo ataque de Camille causa dano adicional e concede Velocidade de Movimento adicional. Esta habilidade pode ser conjurada novamente por um curto período de tempo, causando dano adicional consideravelmente aumentado se Camille criar um intervalo entre os dois ataques.
        <br>W - VARREDURA TÁTICA - Camille faz um disparo em área de cone após um intervalo, causando dano. Inimigos na metade exterior têm sua velocidade reduzida e recebem dano adicional, ao mesmo tempo em que curam Camille.
        <br>E - DISPARO DE GANCHO - Camille puxa a si mesma na direção de uma parede, saltando e arremessando ao ar Campeões inimigos ao aterrissar.
        <br>R - ULTIMATO HEXTEC - Camille avança em direção ao Campeão alvo, ancorando-o à área. Ela também causa Dano Mágico adicional ao alvo com seus ataques básicos.
        </p>`
    }else if(campeao == "cassiopeia" || campeao == "Cassiopeia"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: Alta <br><br>Cassiopeia é uma criatura mortal dedicada a manipular os outros para fazer suas vontades sinistras.
        <br><br>HABILIDADES<br><br>
        PASSIVA - GRAÇA SERPENTINA - Cassiopeia recebe Velocidade de Movimento por nível, mas não pode comprar Botas.
        <br>Q - EXPLOSÃO VENENOSA - Cassiopeia atinge uma área com veneno após um breve intervalo, recebendo Velocidade de Movimento caso atinja um Campeão inimigo.
        <br>W - MIASMA - Cassiopeia lança diversas nuvens de veneno que reduzem a velocidade, prendem ao chão e causam dano leve aos inimigos que as atravessarem. Inimigos presos ao chão não podem usar habilidades de movimentação.
        <br>E - PRESAS DUPLAS - Cassiopeia desfere um ataque que causa dano adicional a alvos envenenados, curando a si mesma com um percentual do dano causado. Se o alvo morrer com este ataque, Cassiopeia recupera Mana.
        <br>R - OLHAR PETRIFICADOR - Cassiopeia lança uma espiral de energia mágica de seus olhos, atordoando quaisquer inimigos à sua frente que estiverem de frente para ela e reduzindo a velocidade de quaisquer outros que estiverem de costas.
        </p>`
    }else if(campeao == "cho gath" || campeao == "Cho gath" || campeao=="Cho" || campeao =="cho" || campeao =="chogath" || campeao=="Chogath"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg">`
        description.innerHTML = `<p>Função: Tanque  |  Dificuldade: Moderada <br><br> A partir do momento em que Cho'Gath emergiu da terra para a luz do sol ofuscante de Runeterra, a besta foi motivada por pura fome insaciável.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CARNÍVORO - Sempre que Cho'Gath abate uma unidade, ele recupera Vida e Mana. Os valores restaurados aumentam com o nível de Cho'Gath.
        <br>Q - RUPTURA - Rompe o chão num local-alvo, lançando unidades inimigas ao ar e causando dano e redução de velocidade.
        <br>W - GRITO SELVAGEM - Cho'Gath solta um terrível urro em inimigos em área de cone, causando Dano Mágico e Silenciamento a eles por alguns segundos.
        <br>E - ESPINHOS VORPAIS - Os ataques de Cho'Gath lançam espinhos letais, causando dano e reduzindo a velocidade de unidades inimigas à sua frente.
        <br>R - BANQUETE - Devora uma unidade inimiga, causando uma grande quantidade de Dano Verdadeiro. Se o alvo for abatido, Cho'Gath cresce, recebendo Vida máxima.
        </p>`
    }else if(campeao == "corki" || campeao == "Corki"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg">`
        description.innerHTML = `<p>Função: Atirador  |  Dificuldade: Moderada <br><br> Corki, o piloto yordle, ama duas coisas acima de qualquer outra: voar e seu glamoroso bigode... não necessariamente nessa ordem.
        <br><br>HABILIDADES<br><br>
        PASSIVA - MUNIÇÃO HEXTEC - Uma porcentagem do Dano de Ataque Básico de Corki é convertida em Dano Mágico. Corki pode buscar O Pacote na base, concedendo a ele Velocidade de Movimento e fortalecendo a conjuração de Valquíria.
        <br>Q - BOMBA DE FÓSFORO - Corki dispara uma bomba luminosa em um local alvo, causando Dano Mágico a inimigos na área. Este ataque também revela unidades na área por uma curta duração.
        <br>W - VALQUÍRIA - Corki sobrevoa uma curta distância, soltando bombas que criam um rastro de fogo, causando dano a oponentes que nele permanecerem.
        <br>E - METRALHADORA - A metralhadora de Corki dispara rapidamente em área de cone à sua frente, causando dano, reduzindo a Armadura e a Resistência Mágica do inimigo.
        <br> R - BARRAGEM DE MÍSSEIS -  Corki dispara um míssil em direção ao local alvo, que explode com o impacto, causando dano aos inimigos na área. Corki armazena mísseis ao longo do tempo, com um limite máximo. O 3º míssil armazenado será um Grandão, que causa dano adicional.
        </p>`
    }else if(campeao == "darius" || campeao == "Darius"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Baixa <br><br>Não há símbolo maior do poder de Noxus do que Darius, o mais temido e experiente comandante da nação.
        <br><br>HABILIDADES<br><br>
        PASSIVA - HEMORRAGIA - Os ataques e habilidades de dano de Darius fazem com que os inimigos sangrem, causando Dano Físico ao longo de 5s, acumulando-se até 5 vezes.
        <br>Q - DIZIMAR - Darius pega impulso e golpeia com seu machado em um movimento circular. Os inimigos atingidos pela lâmina recebem mais dano do que aqueles atingidos pelo cabo. Darius cura a si mesmo com base nos Campeões inimigos e monstros grandes atingidos pela lâmina.
        <br>W - ATAQUE MUTILADOR - O próximo ataque de Darius acerta uma artéria importante do inimigo. Enquanto ele sangra, sua Velocidade de Movimento é reduzida.
        <br>E - APREENDER - Darius afia seu machado, fazendo com que seu Dano Físico ignore passivamente um percentual da Armadura do alvo. Quando ativado, Darius ataca seus inimigos com o gancho do seu machado e os puxa em sua direção.
        <br>R - GUILHOTINA DE NOXUS - Darius salta na direção de um Campeão inimigo e o atinge com um golpe letal, causando Dano Verdadeiro. Este dano aumenta a cada acúmulo de Hemorragia no alvo. Se Guilhotina de Noxus causar o golpe final, seu Tempo de Recarga é zerado por um breve momento.
        </p>`
    }else if(campeao == "diana" || campeao == "Diana"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Moderada <br><br>Empunhando sua espada lunar crescente, Diana luta como uma guerreira dos Lunari, um credo quase extinto nas terras ao redor do Monte Targon.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ESPADA DE PRATA LUNAR - Cada terceiro ataque atinge os oponentes próximos, causando Dano Mágico adicional. Depois de conjurar uma habilidade, Diana recebe Velocidade de Ataque em seus próximos 3 ataques.
        <br>Q - GOLPE CRESCENTE -  Faz um disparo de energia lunar em forma de arco, causando Dano Mágico. Afeta os inimigos atingidos com Plenilúnio, revelando-os por 3s se não estiverem furtivos.
        <br>W - CASCATA LÍVIDA - Diana cria três esferas orbitantes que detonam ao contato com inimigos, causando dano em área. Ela também ganha um escudo temporário que absorve dano. Se a terceira esfera detonar, o escudo recebe resistência adicional.
        <br>E - ZÊNITE LUNAR - Torna-se a encarnação viva da lua vingativa, avançando contra um inimigo e causando Dano Mágico. Zênite Lunar não tem Tempo de Recarga ao avançar em um inimigo afetado por Plenilúnio. Todos os outros inimigos terão o efeito de Plenilúnio removido independentemente de terem sido o alvo de Zênite Lunar.
        <br>R - COLAPSO MINGUANTE  Diana revela e atrai todos os inimigos próximos e reduz a velocidade deles. Se Diana atrair um ou mais Campeões inimigos, o Plenilúnio cai sobre ela depois de um breve intervalo, causando Dano Mágico em uma área ao seu redor, aumentado a cada alvo atraído além do primeiro.
        </p>`
    }else if(campeao == "mundo" || campeao == "Dr.Mundo" || campeao=="Mundo"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Moderada <br><br>Um homicida implacável, louco e terrivelmente roxo, Dr. Mundo é a figura responsável por manter muitos cidadãos de Zaun dentro de casa em noites mais escuras.
        <br><br>HABILIDADES<br><br>
        PASSIVA - INJETAR ADRENALINA - Dr. Mundo regenera 0,3% de sua Vida máxima a cada segundo.
        <br>Q - CUTELO INFECTADO - Dr. Mundo arremessa seu cutelo, causando dano igual a uma parte da Vida atual de seu alvo e reduzindo sua velocidade por um curto período de tempo. Dr. Mundo adora ver o sofrimento dos outros e recupera metade do custo de Vida quando acerta um cutelo em alguém (dobrado se abater).
        <br>W - AGONIA ARDENTE - Dr. Mundo drena a própria Vida para reduzir a duração de desarmes e causar dano contínuo a inimigos próximos.
        <br>E - MASOQUISMO - Dr. Mundo recebe Dano de Ataque adicional com base em sua Vida perdida e seu próximo ataque básico dá uma cabeçada no alvo, causando dano adicional. Sua Resistência Mágica é aumentada passivamente sempre que ele sofrer Dano Mágico ou pagar um custo em Vida.
        <br> R - SADISMO - Dr. Mundo sacrifica parte de sua Vida para aumentar a Velocidade de Movimento e aumentar drasticamente a Regeneração de Vida.
        </p>`
    }else if(campeao == "ekko" || campeao == "Ekko"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg">`
        description.innerHTML = `<p>Função: Assassino  |  Dificuldade: Alta <br><br>Um prodígio das ruas violentas de Zaun, Ekko manipula o tempo para reverter qualquer situação a seu favor. Usando sua própria invenção, o Revo-Z, ele explora as possíveis bifurcações da realidade para criar o momento perfeito.
        <br><br>HABILIDADES<br><br>
        PASSIVA - RESSONÂNCIA REVO-Z - Cada terceiro ataque ou habilidade de dano no mesmo alvo causa Dano Mágico adicional e concede a Ekko um impulso de velocidade se o alvo for um Campeão.
        <br>Q - GIRATEMPO - Ekko arremessa uma granada que se expande em um campo de distorção temporal ao atingir um Campeão inimigo, causando dano e reduzindo a velocidade de todos dentro de sua área de ação. Após um intervalo, a granada retorna em direção a Ekko, causando dano no trajeto de volta.
        <br>W - CONVERGÊNCIA PARALELA - Os ataques básicos de Ekko causam Dano Mágico adicional aos inimigos com Vida baixa. Ekko pode conjurar Convergência Paralela para separar a linha do tempo, causando uma anomalia após alguns segundos e reduzindo a velocidade de inimigos pegos por ela. Se Ekko adentrar a anomalia, ele receberá um escudo e acionará uma detonação que atordoa os inimigos, colocando-os em estase temporal.
        <br>E - MERGULHO FÁSICO - Ekko faz um rolamento evasivo enquanto carrega seu Revo-Z. Seu próximo ataque causa dano adicional e distorce a realidade, teleportando-o a seu alvo.
        <br>R - CRONOQUEBRA - Ekko estilhaça sua linha do tempo, tornando-se inalvejável e rebobinando para um ponto mais favorável no tempo. Ele retorna para qualquer ponto que esteve nos últimos segundos e se cura em um percentual do dano recebido nesta duração. Inimigos próximos a sua área de chegada recebem dano massivo.
        </p>`
    }else if(campeao == "elise" || campeao == "Elise"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: Alta <br><br>Elise é uma predadora mortal que vive em um palácio escuro e reservado nas profundezas da cidade mais antiga de Noxus.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ARANHA RAINHA - Forma Humana: Quando as habilidades de Elise atingem um inimigo, ela recebe uma Cria dormente. Forma de Aranha: Ataques básicos causam Dano Mágico adicional e restauram a Vida de Elise.
        <br>Q - NEUROTOXINA / MORDIDA VENENOSA - Forma Humana: Causa dano com base em quão alta está a Vida do alvo. Forma de Aranha: Avança até um inimigo e causa dano com base em quão baixa está a Vida do alvo.
        <br>W - CRIA VOLÁTIL / FRENESI ARACNÍDEO - Forma Humana: Elise lança uma cria banhada em veneno que explode ao se aproximar de um alvo. Forma de Aranha: Elise e suas Crias recebem Velocidade de Ataque.
        <br>E - CASULO / RAPEL - Forma Humana: atordoa a primeira unidade inimiga atingida e a revela se não estiver em furtividade. Forma de Aranha: Elise e suas crias se lançam ao ar, depois descem sobre um alvo inimigo. Após descer sobre o alvo, o dano adicional de Elise e a cura de Aranha Rainha são aumentados.
        <br>R - FORMA DE ARANHA - Transforma-se em uma ameaçadora aranha, reduzindo seu alcance de ataque em troca de Velocidade de Movimento, novas habilidades e um aglomerado de Crias que atacarão seus inimigos.
        </p>`
    }else if(campeao == "evelynn" || campeao == "Evelynn"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg">`
        description.innerHTML = `<p>Função: Assassino  |  Dificuldade: Alta <br><br>Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua voluptuosa aparência de fêmea humana, mas assim que a vítima sucumbe ao seu charme, a verdadeira forma de Evelynn é revelada.
        <br><br>HABILIDADES<br><br>
        PASSIVA - SOMBRA DEMONÍACA - Quando está fora de combate, Evelynn entra em Sombra Demoníaca. A Sombra Demoníaca cura Evelynn quando ela está com pouca Vida e concede Camuflagem após o nível 6.
        <br>Q - ESPINHO DE ÓDIO - Evelynn ataca com seu Chicote, causando dano ao primeiro inimigo atingido. Depois, Evelynn dispara uma linha de espinhos até 3 vezes contra inimigos próximos.
        <br>W - FASCINAÇÃO - Evelynn amaldiçoa seu alvo, fazendo com que o próximo ataque ou habilidade dela o encante e reduza sua Resistência Mágica depois um intervalo.
        <br>E - CHICOTADA - Evelynn açoita seu alvo com seu Chicote, causando dano. Depois, ela ganha Velocidade de Movimento por um breve período.
        <br>R - ÚLTIMA CARÍCIA - Evelynn fica inalvejável por um breve período e dizima a área à sua frente antes de se mover uma longa distância para trás.
        </p>`
    }else if(campeao == "ezreal" || campeao == "Ezreal"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg">`
        description.innerHTML = `<p>Função: Atirador  |  Dificuldade: Moderada <br><br> Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FEITIÇO DO PODER CRESCENTE - Ezreal recebe Velocidade de Ataque crescente a cada vez que acerta uma habilidade, acumulando-se até 5 vezes.
        <br>Q - DISPARO MÍSTICO - Ezreal faz um disparo de energia que reduz um pouco o Tempo de Recarga de todas as suas habilidades caso atinja uma unidade inimiga.
        <br>W - FLUXO ESSENCIAL - Ezreal dispara um orbe que prende-se ao primeiro Campeão ou objetivo atingido. Caso atinja um inimigo preso com o orbe, ele detonará e causará dano.
        <br>E - TRANSLOCAÇÃO ARCANA - Ezreal teleporta-se para um local-alvo próximo e faz um disparo teleguiado na unidade inimiga mais próxima. Prioriza inimigos atingidos com Fluxo Essencial.
        <br>R - BARRAGEM INCENDIÁRIA - Ezreal carrega antes de disparar uma poderosa barragem de energia que causa dano massivo em cada unidade que atravessar (o dano é reduzido contra tropas e monstros não épicos).
        </p>`
    }else if(campeao == "fiddlesticks" || campeao == "Fiddlesticks"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg">`
        description.innerHTML = `<p>Função: Mago  |  Dificuldade: Alta <br><br>Algo despertou em Runeterra. Algo ancestral. Algo terrível. O eterno terror conhecido como Fiddlesticks vaga pelos confins do mundo mortal, atraído por áreas dominadas por uma paranoia palpável, onde se alimenta de vítimas apavoradas.
        <br><br>HABILIDADES<br><br>
        PASSIVA - UM ESPANTALHO INOFENSIVO - O amuleto de Fiddlesticks é substituído por efígies do espantalho.
        <br>Q - ATERRORIZAR - Ao causar dano a inimigos com habilidades enquanto não estiver sendo visto ou alvejar um inimigo com Aterrorizar, Fiddlesticks inflige medo em uma unidade-alvo inimiga, fazendo com que fuja aterrorizada por um curto período.
        <br>W - COLHEITA FARTA - Fiddlesticks drena a Vida dos inimigos próximos, causando dano de execução adicional no fim da duração.
        <br>E - CEIFAR - Fiddlesticks ceifa uma área com sua foice, reduzindo a velocidade de movimento de todos os inimigos atingidos e silenciando os atingidos no centro do corte.
        <br>R - TEMPESTADE DE CORVOS - Uma revoada de corvos assassinos voa em volta de Fiddlesticks, causando dano por segundo a todas as unidades inimigas próximas.
        </p>`
    }else if(campeao == "fiora" || campeao == "Fiora"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Baixa <br><br>A duelista mais temida de toda Valoran, Fiora é renomada tanto por suas maneiras bruscas e perspicácia quanto pela velocidade de sua rapieira de aço.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DANÇA DA DUELISTA - Fiora desafia Campeões inimigos próximos para que desviem dela e indica a direção pela qual tentará atingi-los. Caso consiga completar o próprio desafio, receberá um pequeno adicional e indicará uma nova direção.
        <br>Q - ESTOCADA - Fiora avança em uma direção e golpeia um inimigo próximo, causando Dano Físico e aplicando efeitos de contato.
        <br>W - RIPOSTAR - Fiora apara todo o dano e desarmes recebidos por um curto período de tempo, golpeando na direção alvo em seguida. Este golpe reduz a velocidade do primeiro campeão inimigo atingido. O golpe pode atordoar caso Fiora tenha bloqueado um efeito imobilizante com esta habilidade.
        <br>E - ESGRIMA - Fiora ganha aumento na Velocidade de Ataque pelos próximos dois ataques. O primeiro ataque reduz a velocidade do alvo e o segundo ataque causará acerto crítico.
        <br>R - DESAFIO GRANDIOSO - Fiora revela todos os quatro Pontos Vitais de um Campeão inimigo e recebe Velocidade de Movimento enquanto se aproxima dele. Se Fiora atingir os 4 Pontos Vitais ou se o alvo morrer depois que ela atingir pelo menos um deles, Fiora e os aliados que estiverem na área são curados pelos próximos segundos.
        </p>`
    }else if(campeao == "fizz" || campeao == "Fizz"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg">`
        description.innerHTML = `<p>Função: Assassino  |  Dificuldade: Moderado <br><br>Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LUTADOR LIGEIRO - Fizz pode se mover através de unidades e sofre uma quantidade fixa de dano reduzido de todas as origens.
        <br>Q - ATAQUE DO OURIÇO - Fizz avança em direção ao alvo, causando Dano Mágico e aplicando efeitos de contato.
        <br>W - TRIDENTE DA PEDRA DO MAR - Os ataques de Fizz fazem seus inimigos sangrarem, causando Dano Mágico por vários segundos. Fizz pode fortalecer seu próximo ataque para causar dano adicional e fortalecer os seguintes por um curto período.
        <br>E - BRINCALHÃO / TRAPACEIRO - Fizz faz acrobacias no ar, aterrissando graciosamente sobre seu tridente e ficando inalvejável. Desta posição, ele pode tanto golpear o chão quanto pular novamente antes de cair de vez.
        <br>R - LANÇAR ISCA - Fizz arremessa um peixe em determinada direção, que se prende a qualquer Campeão que tocar, reduzindo a velocidade do alvo. Após um curto intervalo, um tubarão emerge do chão, lançando o alvo ao ar e empurrando outros inimigos para trás. Todos os inimigos atingidos recebem Dano Mágico e têm sua velocidade reduzida.
        </p>`
    }else if(campeao == "galio" || campeao == "Galio"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg">`
        description.innerHTML = `<p>Função: Tanque  |  Dificuldade: Moderado <br><br>Do lado de fora da reluzente cidade de Demacia, Galio, o colosso de pedra, vigia com zelo. Construído como bastião contra magos inimigos, ele geralmente permanece imóvel por décadas até que a presença de uma magia poderosa o desperte.
        <br><br>HABILIDADES<br><br>
        PASSIVA -  ESMAGADA COLOSSAL - A cada poucos segundos, o próximo ataque básico de Galio causa Dano Mágico adicional em área.
        <br>Q - VENTOS DE GUERRA - Galio dispara duas rajadas de vento que convergem em um grande tornado e causam dano ao longo do tempo.
        <br>W - ESCUDO DE DURAND - Galio carrega em postura defensiva, movendo-se lentamente. Ao soltar o carregamento, ele provocará e causará dano a inimigos próximos.
        <br>E - SOCO JUSTICEIRO - Galio dá um passo para trás e avança, arremessando ao ar o primeiro Campeão com que colidir.
        <br>R - ENTRADA HEROICA - Galio marca a posição de um aliado como ponto de aterrissagem e concede um escudo mágico a todos os aliados na área. Após um intervalo, ele aterrissa no local, arremessando os inimigos próximos ao ar.      
        </p>`
    }else if(campeao == "gangplank" || campeao == "Gangplank"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Alta <br><br>Tão inesperado quanto brutal, o autointitulado Rei dos Ladrões conhecido como Gangplank é temido por todos os mares.
        <br><br>HABILIDADES<br><br>
        PASSIVA - JULGAMENTO DE FOGO - Periodicamente, o ataque corpo a corpo de Gangplank deixará seu inimigo em chamas.
        <br>Q - NEGOCIARRR - Dispara no alvo, saqueando ouro para cada abate de unidade.
        <br>W - REMOVER ESCORBUTO - Come fruta cítrica para curar efeitos de controle de grupo e restaurar Vida.
        <br>E - BARRIL DE PÓLVORA - Gangplank posiciona um Barril de Pólvora no local-alvo. Ele explodirá caso seja atacado, causando dano aos inimigos na área e reduzindo a Velocidade de Movimento deles.
        <br>R - BARRAGEM DE CANHÃO - Gangplank sinaliza para que seu navio bombardeie uma área, causando dano e lentidão aos inimigos.
        </p>`
    }else if(campeao == "garen" || campeao == "Garen"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Moderado <br><br>Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PERSEVERANÇA - Se Garen não tiver sido atingido recentemente por dano ou habilidades inimigas, ele regenera um percentual de sua Vida total a cada segundo.
        <br>Q - ACERTO DECISIVO - Garen recebe Velocidade de Movimento adicional, libertando-se de todos os efeitos de redução de velocidade. Seu próximo ataque atinge uma área vital do inimigo, causando dano adicional e silenciando-o.
        <br>W - CORAGEM - Garen aumenta sua Armadura e Resistência Mágica passivamente ao abater inimigos. Ele também pode ativar essa habilidade para receber um escudo e Tenacidade por um breve período, seguido de uma quantidade menor de redução de dano com maior duração.
        <br> E - JULGAMENTO - Garen gira rapidamente a espada ao redor do corpo dele, causando Dano Físico a inimigos próximos.
        <br>R - JUSTIÇA DEMACIANA - Garen evoca o Poder de Demacia para tentar executar um Campeão inimigo.
        </p>`
    }else if(campeao == "gnar" || campeao == "Gnar"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Alta <br><br>Gnar é um yordle primitivo cujas artimanhas brincalhonas podem irromper em uma raiva infantil em um instante, transformando-o em uma besta gigantesca determinada a destruir.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FÚRIA GENÉTICA - Enquanto está em combate, Gnar gera Fúria. Quando atinge o máximo de Fúria, sua próxima habilidade o transformará em Mega-Gnar, concedendo mais condições de sobrevivência e acesso a novas habilidades.
        <br>Q - BUMERANGUE / PEDREGULHO - Gnar lança um bumerangue que causa dano e Lentidão a inimigos que atinge antes de retornar a ele. Caso apanhe o bumerangue, seu Tempo de Recarga é reduzido. Mega Gnar arremessa um pedregulho que para na primeira unidade atingida, causando dano e Lentidão a tudo o que estiver próximo. Em seguida, ele pode ser apanhado para reduzir o Tempo de Recarga.
        <br>W - HIPERATIVO / SAFANÃO - Os ataques e habilidades de Gnar o animam, causando dano adicional e concedendo Velocidade de Movimento. Mega Gnar fica enfurecido demais para ficar hiperativo. Em vez disso, ele pode subir em duas patas e atingir a área à sua frente, atordoando inimigos em área.
        <br>E - SALTO / ENCONTRÃO - Gnar salta em um local e atinge a cabeça de qualquer unidade em que aterrissar, deslocando-se ainda mais. Mega Gnar é grande demais para saltar e, em vez disso, aterrissa com força para quebrar o chão, causando dano em área ao seu redor.
        <br>R - GNAR! - Mega Gnar joga tudo o que estiver próximo de si em uma direção escolhida, causando dano e Lentidão. Qualquer inimigo que atingir uma parede fica atordoado e recebe dano adicional.
        </p>`
    }
}
