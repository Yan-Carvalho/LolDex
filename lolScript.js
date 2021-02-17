

let champion = document.getElementById("champion")
let description = document.getElementById("description")

function champ(){
    let campeao = document.getElementById("text").value;
    if(campeao == "aatrox" || campeao == "Aatrox"){
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
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Alta <br><br>Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, 
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
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: moderada <br><br>Perigosa, mas adoravelmente precoce, Annie é uma pequena maga com imenso poder piromaníaco.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PIROMANIA - Após conjurar 4 habilidades, a próxima habilidade de ataque de Annie atordoará o alvo.
        <br>Q - DESINTEGRAR - Annie arremessa uma bola de fogo infundida em Mana, causando dano e recuperando o custo de Mana caso o alvo seja destruído.
        <br>W - INCINERAR - Annie conjura um ardente cone de fogo, causando dano em todos os inimigos na área.
        <br>E - ESCUDO FUNDIDO -Annie concede um Escudo e um impulso de Velocidade de Movimento a si mesma ou a um aliado, causando dano a inimigos que atingirem o Escudo com ataques básicos.
        <br>R - INVOCAR TIBBERS - Annie dá vida ao urso Tibbers, causando dano a unidades na área. Tibbers pode atacar e também queimar inimigos que ficarem próximos a ele.</p>`
    } else if(campeao == "aphelius" || campeao == "Aphelius"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Alta <br><br>Emergindo da sombra do luar com suas armas em mãos, Aphelios abate os inimigos de sua fé em absoluto silêncio, comunicando-se apenas pela destreza de sua mira e pelo disparo de cada arma.
        <br><br>HABILIDADES<br><br>
        PASSIVA - O ASSASSINO E A PROFETISA - Aphelios empunha 5 Armas Lunari criadas por sua irmã, Alune. Ele tem acesso a duas ao mesmo tempo: uma principal e uma secundária. Cada arma tem um ataque básico único e uma habilidade ativada. Ataques e habilidades consomem uma munição da arma. Quando fica sem munição, Aphelios descarta a arma e Alune invoca a próxima.
        <br> Q - HABILIDADES DA ARMA - Aphelios tem 5 habilidades diferentes que são ativadas com base em sua arma principal: Calibrum (Rifle): Tiro de longo alcance que marca seu alvo para um disparo de longo alcance subsequente. Severum (Pistola-Foice): Corre rapidamente enquanto ataca inimigos próximos com ambas as armas. Gravitum (Canhão): Enraíza todos os inimigos afetados pela redução de velocidade desta arma. Infernum (Lança-chamas): Explode inimigos em área de cone e os ataca com sua arma secundária. Crescendum (Chakram): Posiciona uma atalaia que dispara com sua arma secundária.
        <br>W - FASE - Aphelios troca a arma principal por sua arma secundária, substituindo seu ataque básico e a habilidade ativada.
        <br> E - SISTEMA DE ORDENAÇÃO DE ARMAS - Aphelios não tem uma terceira habilidade. Este espaço mostra a próxima arma que Alune concederá a ele. A ordem das armas é fixa, mas pode variar ao longo da partida. Quando uma arma estiver sem munição, ela volta para o fim da sequência.
        <br> R - VIGÍLIA DO PLENILÚNIO - Dispara uma rajada concentrada de luar que explode ao atingir Campeões inimigos. Aplica o efeito único da arma principal de Aphelios.</p>`
    } else if(campeao == "ashe" || campeao == "Ashe"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte.
        <br><br>HABILIDADES<br><br>
        <br>PASSIVA - TIRO CONGELADO - Os ataques de Ashe reduzem a velocidade do alvo e fazem com que ela cause mais dano a ele. Os Acertos Críticos de Ashe não causam dano adicional, mas reduzem ainda mais a velocidade do alvo.
        <br>Q - CONCENTRAÇÃO - Ashe acumula Foco ao atacar. Quando o Foco chega ao máximo, Ashe pode conjurar Concentração para consumir todos os acúmulos de Foco, aumentando temporariamente sua Velocidade de Ataque e transformando seu ataque básico em uma poderosa rajada de ataques pela duração do efeito.
        <br>W - RAJADA - Ashe dispara flechas em cone, causando dano aumentado. Também aplica Tiro Congelado.
        <br>E - OLHAR DO FALCÃO - Ashe envia seu Espírito do Falcão em uma missão de exploração em qualquer ponto do mapa.
        <br>R - FLECHA DE CRISTAL ENCANTADA - Ashe dispara um projétil de gelo em linha reta. Se a flecha colidir com um Campeão inimigo, ela causa dano e o atordoa. A duração do atordoamento depende da distância percorrida pela flecha. Além disso, unidades inimigas próximas recebem dano e lentidão.
        </p>`
    }else if(campeao == "aurelion sol" || campeao == "Aurelion sol"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CENTRO DO UNIVERSO - Estrelas orbitam Aurelion Sol, causando Dano Mágico quando atingem um inimigo.
        <br>Q - OSCILAÇÃO ESTELAR - Aurelion Sol cria um disco em expansão, que explode para causar dano e atordoamento a inimigos ao movimentar-se para muito longe dele.
        <br>W - EXPANSÃO CELESTIAL - Aurelion Sol empurra suas estrelas para mais longe, aumentando o dano e velocidade delas.
        <br>E - COMETA LENDÁRIO - Aurelion Sol levanta voo em um grande trajeto.  
        <br>R - VOZ DA LUZ - Aurelion Sol projeta uma explosão de puro fogo estelar, causando dano e reduzindo a velocidade de todos os inimigos apanhados nela, além de empurrar inimigos próximos para uma distância mais segura.        
        </p>`
    } else if(campeao == "azir" || campeao == "Azir"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Alta <br><br>Azir foi um imperador mortal de Shurima em uma era muito antiga e um homem orgulhoso que esteve a um passo da imortalidade.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LEGADO DE SHURIMA - Azir pode invocar o Disco Solar das ruínas de uma torre aliada ou inimiga.
        <br>Q - AREIAS DA CONQUISTA - Azir comanda todos os Soldados de Areia na direção do local-alvo. Eles causam Dano Mágico aos inimigos que atravessam e aplicam redução de velocidade por 1 segundo.
        <br>W - SURJA! - Azir invoca um Soldado de Areia para atacar alvos próximos por ele, substituindo seu ataque básico contra alvos dentro do alcance do soldado. Seu ataque causa Dano Mágico a inimigos em linha reta. Surja! também concede Velocidade de Ataque passiva a Azir e seus Soldados de Areia.
        <br>E - AREIAS OSCILANTES - Azir se protege com um escudo por um momento e avança na direção de um de seus Soldados de Areia, causando dano aos inimigos atingidos. Se Azir acertar um Campeão inimigo, ele prepara instantaneamente um novo Soldado de Areia para mobilização e cessa seu avanço.
        <br>R - DECRETO DO IMPERADOR - Azir invoca uma parede de soldados que marcha em frente, causando dano e empurrando para trás os inimigos.
        </p>`
    }else if(campeao == "bardo" || campeao == "Bardo"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg">`
        description.innerHTML = `<pFunção: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Alta <br><br>Viajante de galáxias distantes, Bardo é um agente do acaso que luta para manter um equilíbrio em que a vida possa suportar a indiferença do caos.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CHAMADO DO VIAJANTE - Mipes: Bardo atrai pequenos espíritos que ajudam em seus ataques básicos e causam Dano Mágico adicional. Quando Bardo coleta sinos o suficiente, os mipes também causam dano em uma área e reduzem a velocidade de inimigos atingidos. Sinos: Sinos ancestrais aparecem aleatoriamente para Bardo coletar. Eles concedem experiência, Mana máximo e acúmulos de Velocidade de Movimento quando fora de combate.
        <br>Q - PRISÃO CÓSMICA - Bardo dispara um projétil que causa Lentidão ao primeiro inimigo atingido, mantendo seu trajeto em seguida. Caso atinja uma parede, atordoará o alvo inicial; caso atinja outro inimigo, ambos serão atordoados.
        <br>W - SANTUÁRIO DO PROTETOR - Revela um santuário de cura que fica mais forte ao longo de um curto período e desaparece logo depois de curar e acelerar o primeiro aliado que o tocar.
        <br>E - JORNADA MÁGICA - Bardo abre um portal em terreno próximo. Tanto aliados quanto inimigos podem fazer uma viagem de ida através deste terreno ao entrar pelo portal.
        <br>R - TÊMPERA DO DESTINO - Bardo desfere um arco de energia espiritual em um local-alvo, colocando todos os Campeões, tropas, monstros e torres atingidos em estase por um curto período de tempo.
        </p>`
    } else if(campeao == "blitzcrank" || campeao == "Blitzcrank" || campeao =="blitz" || campeao=="Blitz"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>Blitzcrank é um autômato enorme e praticamente indestrutível de Zaun, construído originalmente para lidar com lixo tóxico.
        <br><br>HABILIDADES<br><br>
        PASSIVA - BARREIRA DE MANA - Blitzcrank recebe um escudo com base em sua Mana ao ficar com a Vida baixa.
        <br>Q - PUXÃO BIÔNICO - Blitzcrank dispara sua mão direita para pegar um inimigo em seu trajeto, causando dano e puxando-o em sua direção.
        <br>W - TURBO - Blitzcrank sobrecarrega a si mesmo para ter um drástico aumento na Velocidade de Ataque e de Movimento. Ele tem sua velocidade temporariamente reduzida após o fim do efeito.
        <br>E - PUNHO DO PODER - Blitzcrank carrega seu punho para fazer com que o próximo ataque cause o dobro de dano e arremesse o alvo ao ar.
        <br>R - CAMPO ESTÁTICO - Inimigos atacados por Blitzcrank são marcados e sofrem dano de eletricidade após 1s. Ele também pode ativar esta habilidade para remover escudos de inimigos próximos, causar dano e silenciá-los brevemente.  
        </p>`
    }else if(campeao == "brand" || campeao == "Brand"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>A criatura conhecida como Brand já se chamou Kegan Rodhe, um membro da gélida Freljord, e é hoje uma lição do que a tentação por poderes maiores pode fazer.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LABAREDA - As habilidades de Brand deixam seus alvos incandescentes, causando dano ao longo de 4s, acumulando até 3 vezes. Se Brand abater um inimigo que estiver incandescente, ele recuperará Mana. Quando Labareda chegar ao máximo de acúmulos em um Campeão, tropa de cerco ou monstro grande, ela se tornará instável, detonando depois de 2s, aplicando efeitos de Habilidades e causando muito dano em uma área ao redor do alvo.
        <br>Q - CAUTERIZAR - Brand lança uma bola de fogo que causa Dano Mágico. Se o alvo estiver incandescente, Cauterizar o atordoará por 1,5s.
        <br>W - PILAR DE CHAMAS - Após um curto intervalo, Brand cria um Pilar de Chamas na área alvo, causando Dano Mágico a unidades inimigas na área. Unidades que estiverem incandescentes sofrem 25% de dano adicional.
        <br>E - CONFLAGRAÇÃO - Brand conjura uma poderosa explosão no alvo que se espalha para inimigos próximos, causando Dano Mágico. Se o alvo estiver incandescente, o alcance de Conflagração será dobrado.
        <br>R - PIROCLASMA - Brand desfere uma devastadora torrente de fogo que ressalta 5 vezes, indo de Brand aos inimigos próximos e causando Dano Mágico a cada vez que ressaltar. Os ressaltos priorizam acumular Labareda ao máximo em Campeões. Se o alvo estiver incandescente, Piroclasma causará breve Lentidão a ele.
        </p>`
    } else if(campeao == "braum" || campeao == "Braum"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Baixa <br><br>Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord.
        <br><br>HABILIDADES<br><br>
        PASSIVA - GOLPES CONCUSSIVOS - Os ataques básicos de Braum aplicam Golpes Concussivos. Uma vez que o primeiro acúmulo é aplicado, os ataques básicos de aliados também acumulam Golpes Concussivos. Ao atingir 4 acúmulos, o alvo é atordoado e sofre Dano Mágico. Pelos próximos segundos, ele não pode receber acúmulos, mas recebe Dano Mágico adicional dos ataques de Braum.
        <br>Q - MORDIDA DO INVERNO -  Braum dispara rajadas congelantes de seu escudo, causando Dano Mágico e redução de velocidade. Aplica um acúmulo de Golpes Concussivos.
        <br>W - EU TE PROTEJO - Braum salta à frente de um Campeão ou tropa aliada alvo. Ao aterrissar, ele e o aliado recebem Armadura e Resistência Mágica por alguns segundos.
        <br>E - INQUEBRÁVEL - Braum levanta seu escudo em uma direção por muitos segundos, interceptando todos os projéteis e fazendo com que o atinjam e sejam destruídos. Ele nega completamente o dano do primeiro ataque e reduz o dano de todos os ataques seguintes provenientes da mesma direção.
        <br>R - FISSURA GLACIAL - Braum golpeia o chão, arremessando ao ar inimigos próximos e em linha reta à sua frente. Uma fissura é deixada no caminho, causando redução de velocidade nos inimigos.
        </p>`
    }else if(campeao == "caitlyn" || campeao == "Caitlyn"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Conhecida como sua melhor pacificadora, Caitlyn também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos.
        <br><br>HABILIDADES<br><br>
        PASSIVA - BEM NA MIRA - A cada poucos ataques básicos, ou contra um alvo preso em uma armadilha ou rede, Caitlyn fará um disparo Bem na Mira causando dano adicional que escala com sua Chance de Acerto Crítico. Em alvos presos por armadilhas ou pela rede, o alcance de Bem na Mira de Caitlyn é dobrado.
        <br>Q - PACIFICADORA DE PILTOVER - Caitlyn prepara seu rifle por 1s para fazer um disparo penetrante que causa Dano Físico (causa menos dano a alvos subsequentes).
        <br>W - ARMADILHA MECÂNICA YORDLE - Caitlyn coloca uma armadilha para encontrar yordles sorrateiros. Quando ativada, a armadilha revela e imobiliza o Campeão inimigo por 1,5s e concede a Caitlyn um Bem na Mira fortalecido.
        <br>E - REDE CALIBRE 90 - Caitlyn atira uma rede pesada para reduzir a velocidade do seu alvo. O recuo projeta Caitlyn para trás.
        <br>R - ÁS NA MANGA - Caitlyn se concentra para fazer o disparo perfeito, causando dano drástico em um único alvo a uma longa distância. Campeões inimigos podem interceptar o projétil e tomar dano no lugar de seu aliado.
        </p>`
    }else if(campeao == "camille" || campeao == "Camille"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Munida para agir além dos limites da lei, Camille é a chefe de inteligência do Clã Ferros e uma elegante agente de elite, responsável pelo bom funcionamento da máquina de Piltover e de Zaun, seu submundo.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DEFESA ADAPTATIVA - Ataques básicos contra Campeões concedem um Escudo equivalente a uma porcentagem da Vida máxima de Camille contra o tipo de dano deles (Físico ou Mágico) por um breve período.
        <br>Q - PROTOCOLO DE PRECISÃO - O próximo ataque de Camille causa dano adicional e concede Velocidade de Movimento adicional. Esta habilidade pode ser conjurada novamente por um curto período de tempo, causando dano adicional consideravelmente aumentado se Camille criar um intervalo entre os dois ataques.
        <br>W - VARREDURA TÁTICA - Camille faz um disparo em área de cone após um intervalo, causando dano. Inimigos na metade exterior têm sua velocidade reduzida e recebem dano adicional, ao mesmo tempo em que curam Camille.
        <br>E - DISPARO DE GANCHO - Camille puxa a si mesma na direção de uma parede, saltando e arremessando ao ar Campeões inimigos ao aterrissar.
        <br>R - ULTIMATO HEXTEC - Camille avança em direção ao Campeão alvo, ancorando-o à área. Ela também causa Dano Mágico adicional ao alvo com seus ataques básicos.
        </p>`
    }else if(campeao == "cassiopeia" || campeao == "Cassiopeia"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Alta <br><br>Cassiopeia é uma criatura mortal dedicada a manipular os outros para fazer suas vontades sinistras.
        <br><br>HABILIDADES<br><br>
        PASSIVA - GRAÇA SERPENTINA - Cassiopeia recebe Velocidade de Movimento por nível, mas não pode comprar Botas.
        <br>Q - EXPLOSÃO VENENOSA - Cassiopeia atinge uma área com veneno após um breve intervalo, recebendo Velocidade de Movimento caso atinja um Campeão inimigo.
        <br>W - MIASMA - Cassiopeia lança diversas nuvens de veneno que reduzem a velocidade, prendem ao chão e causam dano leve aos inimigos que as atravessarem. Inimigos presos ao chão não podem usar habilidades de movimentação.
        <br>E - PRESAS DUPLAS - Cassiopeia desfere um ataque que causa dano adicional a alvos envenenados, curando a si mesma com um percentual do dano causado. Se o alvo morrer com este ataque, Cassiopeia recupera Mana.
        <br>R - OLHAR PETRIFICADOR - Cassiopeia lança uma espiral de energia mágica de seus olhos, atordoando quaisquer inimigos à sua frente que estiverem de frente para ela e reduzindo a velocidade de quaisquer outros que estiverem de costas.
        </p>`
    }else if(campeao == "cho gath" || campeao == "Cho gath" || campeao=="Cho" || campeao =="cho" || campeao =="chogath" || campeao=="Chogath"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br> A partir do momento em que Cho'Gath emergiu da terra para a luz do sol ofuscante de Runeterra, a besta foi motivada por pura fome insaciável.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CARNÍVORO - Sempre que Cho'Gath abate uma unidade, ele recupera Vida e Mana. Os valores restaurados aumentam com o nível de Cho'Gath.
        <br>Q - RUPTURA - Rompe o chão num local-alvo, lançando unidades inimigas ao ar e causando dano e redução de velocidade.
        <br>W - GRITO SELVAGEM - Cho'Gath solta um terrível urro em inimigos em área de cone, causando Dano Mágico e Silenciamento a eles por alguns segundos.
        <br>E - ESPINHOS VORPAIS - Os ataques de Cho'Gath lançam espinhos letais, causando dano e reduzindo a velocidade de unidades inimigas à sua frente.
        <br>R - BANQUETE - Devora uma unidade inimiga, causando uma grande quantidade de Dano Verdadeiro. Se o alvo for abatido, Cho'Gath cresce, recebendo Vida máxima.
        </p>`
    }else if(campeao == "corki" || campeao == "Corki"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br> Corki, o piloto yordle, ama duas coisas acima de qualquer outra: voar e seu glamoroso bigode... não necessariamente nessa ordem.
        <br><br>HABILIDADES<br><br>
        PASSIVA - MUNIÇÃO HEXTEC - Uma porcentagem do Dano de Ataque Básico de Corki é convertida em Dano Mágico. Corki pode buscar O Pacote na base, concedendo a ele Velocidade de Movimento e fortalecendo a conjuração de Valquíria.
        <br>Q - BOMBA DE FÓSFORO - Corki dispara uma bomba luminosa em um local alvo, causando Dano Mágico a inimigos na área. Este ataque também revela unidades na área por uma curta duração.
        <br>W - VALQUÍRIA - Corki sobrevoa uma curta distância, soltando bombas que criam um rastro de fogo, causando dano a oponentes que nele permanecerem.
        <br>E - METRALHADORA - A metralhadora de Corki dispara rapidamente em área de cone à sua frente, causando dano, reduzindo a Armadura e a Resistência Mágica do inimigo.
        <br> R - BARRAGEM DE MÍSSEIS -  Corki dispara um míssil em direção ao local alvo, que explode com o impacto, causando dano aos inimigos na área. Corki armazena mísseis ao longo do tempo, com um limite máximo. O 3º míssil armazenado será um Grandão, que causa dano adicional.
        </p>`
    }else if(campeao == "darius" || campeao == "Darius"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Baixa <br><br>Não há símbolo maior do poder de Noxus do que Darius, o mais temido e experiente comandante da nação.
        <br><br>HABILIDADES<br><br>
        PASSIVA - HEMORRAGIA - Os ataques e habilidades de dano de Darius fazem com que os inimigos sangrem, causando Dano Físico ao longo de 5s, acumulando-se até 5 vezes.
        <br>Q - DIZIMAR - Darius pega impulso e golpeia com seu machado em um movimento circular. Os inimigos atingidos pela lâmina recebem mais dano do que aqueles atingidos pelo cabo. Darius cura a si mesmo com base nos Campeões inimigos e monstros grandes atingidos pela lâmina.
        <br>W - ATAQUE MUTILADOR - O próximo ataque de Darius acerta uma artéria importante do inimigo. Enquanto ele sangra, sua Velocidade de Movimento é reduzida.
        <br>E - APREENDER - Darius afia seu machado, fazendo com que seu Dano Físico ignore passivamente um percentual da Armadura do alvo. Quando ativado, Darius ataca seus inimigos com o gancho do seu machado e os puxa em sua direção.
        <br>R - GUILHOTINA DE NOXUS - Darius salta na direção de um Campeão inimigo e o atinge com um golpe letal, causando Dano Verdadeiro. Este dano aumenta a cada acúmulo de Hemorragia no alvo. Se Guilhotina de Noxus causar o golpe final, seu Tempo de Recarga é zerado por um breve momento.
        </p>`
    }else if(campeao == "diana" || campeao == "Diana"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Empunhando sua espada lunar crescente, Diana luta como uma guerreira dos Lunari, um credo quase extinto nas terras ao redor do Monte Targon.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ESPADA DE PRATA LUNAR - Cada terceiro ataque atinge os oponentes próximos, causando Dano Mágico adicional. Depois de conjurar uma habilidade, Diana recebe Velocidade de Ataque em seus próximos 3 ataques.
        <br>Q - GOLPE CRESCENTE -  Faz um disparo de energia lunar em forma de arco, causando Dano Mágico. Afeta os inimigos atingidos com Plenilúnio, revelando-os por 3s se não estiverem furtivos.
        <br>W - CASCATA LÍVIDA - Diana cria três esferas orbitantes que detonam ao contato com inimigos, causando dano em área. Ela também ganha um escudo temporário que absorve dano. Se a terceira esfera detonar, o escudo recebe resistência adicional.
        <br>E - ZÊNITE LUNAR - Torna-se a encarnação viva da lua vingativa, avançando contra um inimigo e causando Dano Mágico. Zênite Lunar não tem Tempo de Recarga ao avançar em um inimigo afetado por Plenilúnio. Todos os outros inimigos terão o efeito de Plenilúnio removido independentemente de terem sido o alvo de Zênite Lunar.
        <br>R - COLAPSO MINGUANTE  Diana revela e atrai todos os inimigos próximos e reduz a velocidade deles. Se Diana atrair um ou mais Campeões inimigos, o Plenilúnio cai sobre ela depois de um breve intervalo, causando Dano Mágico em uma área ao seu redor, aumentado a cada alvo atraído além do primeiro.
        </p>`
    }else if(campeao == "mundo" || campeao == "Dr.Mundo" || campeao=="Mundo"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Um homicida implacável, louco e terrivelmente roxo, Dr. Mundo é a figura responsável por manter muitos cidadãos de Zaun dentro de casa em noites mais escuras.
        <br><br>HABILIDADES<br><br>
        PASSIVA - INJETAR ADRENALINA - Dr. Mundo regenera 0,3% de sua Vida máxima a cada segundo.
        <br>Q - CUTELO INFECTADO - Dr. Mundo arremessa seu cutelo, causando dano igual a uma parte da Vida atual de seu alvo e reduzindo sua velocidade por um curto período de tempo. Dr. Mundo adora ver o sofrimento dos outros e recupera metade do custo de Vida quando acerta um cutelo em alguém (dobrado se abater).
        <br>W - AGONIA ARDENTE - Dr. Mundo drena a própria Vida para reduzir a duração de desarmes e causar dano contínuo a inimigos próximos.
        <br>E - MASOQUISMO - Dr. Mundo recebe Dano de Ataque adicional com base em sua Vida perdida e seu próximo ataque básico dá uma cabeçada no alvo, causando dano adicional. Sua Resistência Mágica é aumentada passivamente sempre que ele sofrer Dano Mágico ou pagar um custo em Vida.
        <br> R - SADISMO - Dr. Mundo sacrifica parte de sua Vida para aumentar a Velocidade de Movimento e aumentar drasticamente a Regeneração de Vida.
        </p>`
    }else if(campeao == "draven" || campeao == "Draven"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Alta <br><br>Em Noxus, guerreiros conhecidos como Desafiadores lutam um contra o outro em uma arena onde sangue é derramado e a força é testada, mas nenhum foi tão celebrado como Draven
        <br><br>HABILIDADES<br><br>
        PASSIVA - LEAGUE OF DRAVEN - Draven ganha Adoração de seus fãs quando apanha uma Revolução do Machado ou abate uma tropa, monstro ou torre. Abater Campeões inimigos concede ouro adicional a Draven, com base em quanta Adoração ele tem.
        <br>Q - REVOLUÇÃO DO MACHADO - O próximo ataque de Draven causará Dano Físico adicional. O machado ricocheteará do alvo em direção ao ar. Se Draven o apanhar, ele automaticamente irá preparar outra Revolução do Machado. Draven pode ter duas Revoluções do Machado simultaneamente em ação.
        <br>W - ADRENALINA - Draven ganha um aumento de Velocidade de Movimento e de Ataque. O aumento na Velocidade de Movimento decai rapidamente ao longo da duração. Apanhar uma Revolução do Machado fará com que o Tempo de Recarga de Adrenalina seja zerado.
        <br>E - SAI DA FRENTE - Draven arremessa seus machados, causando Dano Físico aos alvos atingidos e empurrando-os para o lado. Os alvos atingidos sofrem redução de velocidade.
        <br>R - RETA DA MORTE - Draven arremessa dois machados gigantes para causar Dano Físico a cada unidade atingida. Reta da Morte lentamente muda de direção e retorna a Draven após atingir um Campeão inimigo. Draven também pode ativar essa habilidade enquanto seus machados estiverem em percurso para fazer com que voltem antecipadamente. Causa menos dano para cada unidade atingida e zera quando os machados mudam de direção.
        </p>`
    }else if(campeao == "ekko" || campeao == "Ekko"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Um prodígio das ruas violentas de Zaun, Ekko manipula o tempo para reverter qualquer situação a seu favor. Usando sua própria invenção, o Revo-Z, ele explora as possíveis bifurcações da realidade para criar o momento perfeito.
        <br><br>HABILIDADES<br><br>
        PASSIVA - RESSONÂNCIA REVO-Z - Cada terceiro ataque ou habilidade de dano no mesmo alvo causa Dano Mágico adicional e concede a Ekko um impulso de velocidade se o alvo for um Campeão.
        <br>Q - GIRATEMPO - Ekko arremessa uma granada que se expande em um campo de distorção temporal ao atingir um Campeão inimigo, causando dano e reduzindo a velocidade de todos dentro de sua área de ação. Após um intervalo, a granada retorna em direção a Ekko, causando dano no trajeto de volta.
        <br>W - CONVERGÊNCIA PARALELA - Os ataques básicos de Ekko causam Dano Mágico adicional aos inimigos com Vida baixa. Ekko pode conjurar Convergência Paralela para separar a linha do tempo, causando uma anomalia após alguns segundos e reduzindo a velocidade de inimigos pegos por ela. Se Ekko adentrar a anomalia, ele receberá um escudo e acionará uma detonação que atordoa os inimigos, colocando-os em estase temporal.
        <br>E - MERGULHO FÁSICO - Ekko faz um rolamento evasivo enquanto carrega seu Revo-Z. Seu próximo ataque causa dano adicional e distorce a realidade, teleportando-o a seu alvo.
        <br>R - CRONOQUEBRA - Ekko estilhaça sua linha do tempo, tornando-se inalvejável e rebobinando para um ponto mais favorável no tempo. Ele retorna para qualquer ponto que esteve nos últimos segundos e se cura em um percentual do dano recebido nesta duração. Inimigos próximos a sua área de chegada recebem dano massivo.
        </p>`
    }else if(campeao == "elise" || campeao == "Elise"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Alta <br><br>Elise é uma predadora mortal que vive em um palácio escuro e reservado nas profundezas da cidade mais antiga de Noxus.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ARANHA RAINHA - Forma Humana: Quando as habilidades de Elise atingem um inimigo, ela recebe uma Cria dormente. Forma de Aranha: Ataques básicos causam Dano Mágico adicional e restauram a Vida de Elise.
        <br>Q - NEUROTOXINA / MORDIDA VENENOSA - Forma Humana: Causa dano com base em quão alta está a Vida do alvo. Forma de Aranha: Avança até um inimigo e causa dano com base em quão baixa está a Vida do alvo.
        <br>W - CRIA VOLÁTIL / FRENESI ARACNÍDEO - Forma Humana: Elise lança uma cria banhada em veneno que explode ao se aproximar de um alvo. Forma de Aranha: Elise e suas Crias recebem Velocidade de Ataque.
        <br>E - CASULO / RAPEL - Forma Humana: atordoa a primeira unidade inimiga atingida e a revela se não estiver em furtividade. Forma de Aranha: Elise e suas crias se lançam ao ar, depois descem sobre um alvo inimigo. Após descer sobre o alvo, o dano adicional de Elise e a cura de Aranha Rainha são aumentados.
        <br>R - FORMA DE ARANHA - Transforma-se em uma ameaçadora aranha, reduzindo seu alcance de ataque em troca de Velocidade de Movimento, novas habilidades e um aglomerado de Crias que atacarão seus inimigos.
        </p>`
    }else if(campeao == "evelynn" || campeao == "Evelynn"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua voluptuosa aparência de fêmea humana, mas assim que a vítima sucumbe ao seu charme, a verdadeira forma de Evelynn é revelada.
        <br><br>HABILIDADES<br><br>
        PASSIVA - SOMBRA DEMONÍACA - Quando está fora de combate, Evelynn entra em Sombra Demoníaca. A Sombra Demoníaca cura Evelynn quando ela está com pouca Vida e concede Camuflagem após o nível 6.
        <br>Q - ESPINHO DE ÓDIO - Evelynn ataca com seu Chicote, causando dano ao primeiro inimigo atingido. Depois, Evelynn dispara uma linha de espinhos até 3 vezes contra inimigos próximos.
        <br>W - FASCINAÇÃO - Evelynn amaldiçoa seu alvo, fazendo com que o próximo ataque ou habilidade dela o encante e reduza sua Resistência Mágica depois um intervalo.
        <br>E - CHICOTADA - Evelynn açoita seu alvo com seu Chicote, causando dano. Depois, ela ganha Velocidade de Movimento por um breve período.
        <br>R - ÚLTIMA CARÍCIA - Evelynn fica inalvejável por um breve período e dizima a área à sua frente antes de se mover uma longa distância para trás.
        </p>`
    }else if(campeao == "ezreal" || campeao == "Ezreal"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br> Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FEITIÇO DO PODER CRESCENTE - Ezreal recebe Velocidade de Ataque crescente a cada vez que acerta uma habilidade, acumulando-se até 5 vezes.
        <br>Q - DISPARO MÍSTICO - Ezreal faz um disparo de energia que reduz um pouco o Tempo de Recarga de todas as suas habilidades caso atinja uma unidade inimiga.
        <br>W - FLUXO ESSENCIAL - Ezreal dispara um orbe que prende-se ao primeiro Campeão ou objetivo atingido. Caso atinja um inimigo preso com o orbe, ele detonará e causará dano.
        <br>E - TRANSLOCAÇÃO ARCANA - Ezreal teleporta-se para um local-alvo próximo e faz um disparo teleguiado na unidade inimiga mais próxima. Prioriza inimigos atingidos com Fluxo Essencial.
        <br>R - BARRAGEM INCENDIÁRIA - Ezreal carrega antes de disparar uma poderosa barragem de energia que causa dano massivo em cada unidade que atravessar (o dano é reduzido contra tropas e monstros não épicos).
        </p>`
    }else if(campeao == "fiddlesticks" || campeao == "Fiddlesticks"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Alta <br><br>Algo despertou em Runeterra. Algo ancestral. Algo terrível. O eterno terror conhecido como Fiddlesticks vaga pelos confins do mundo mortal, atraído por áreas dominadas por uma paranoia palpável, onde se alimenta de vítimas apavoradas.
        <br><br>HABILIDADES<br><br>
        PASSIVA - UM ESPANTALHO INOFENSIVO - O amuleto de Fiddlesticks é substituído por efígies do espantalho.
        <br>Q - ATERRORIZAR - Ao causar dano a inimigos com habilidades enquanto não estiver sendo visto ou alvejar um inimigo com Aterrorizar, Fiddlesticks inflige medo em uma unidade-alvo inimiga, fazendo com que fuja aterrorizada por um curto período.
        <br>W - COLHEITA FARTA - Fiddlesticks drena a Vida dos inimigos próximos, causando dano de execução adicional no fim da duração.
        <br>E - CEIFAR - Fiddlesticks ceifa uma área com sua foice, reduzindo a velocidade de movimento de todos os inimigos atingidos e silenciando os atingidos no centro do corte.
        <br>R - TEMPESTADE DE CORVOS - Uma revoada de corvos assassinos voa em volta de Fiddlesticks, causando dano por segundo a todas as unidades inimigas próximas.
        </p>`
    }else if(campeao == "fiora" || campeao == "Fiora"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Baixa <br><br>A duelista mais temida de toda Valoran, Fiora é renomada tanto por suas maneiras bruscas e perspicácia quanto pela velocidade de sua rapieira de aço.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DANÇA DA DUELISTA - Fiora desafia Campeões inimigos próximos para que desviem dela e indica a direção pela qual tentará atingi-los. Caso consiga completar o próprio desafio, receberá um pequeno adicional e indicará uma nova direção.
        <br>Q - ESTOCADA - Fiora avança em uma direção e golpeia um inimigo próximo, causando Dano Físico e aplicando efeitos de contato.
        <br>W - RIPOSTAR - Fiora apara todo o dano e desarmes recebidos por um curto período de tempo, golpeando na direção alvo em seguida. Este golpe reduz a velocidade do primeiro campeão inimigo atingido. O golpe pode atordoar caso Fiora tenha bloqueado um efeito imobilizante com esta habilidade.
        <br>E - ESGRIMA - Fiora ganha aumento na Velocidade de Ataque pelos próximos dois ataques. O primeiro ataque reduz a velocidade do alvo e o segundo ataque causará acerto crítico.
        <br>R - DESAFIO GRANDIOSO - Fiora revela todos os quatro Pontos Vitais de um Campeão inimigo e recebe Velocidade de Movimento enquanto se aproxima dele. Se Fiora atingir os 4 Pontos Vitais ou se o alvo morrer depois que ela atingir pelo menos um deles, Fiora e os aliados que estiverem na área são curados pelos próximos segundos.
        </p>`
    }else if(campeao == "fizz" || campeao == "Fizz"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Moderado <br><br>Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LUTADOR LIGEIRO - Fizz pode se mover através de unidades e sofre uma quantidade fixa de dano reduzido de todas as origens.
        <br>Q - ATAQUE DO OURIÇO - Fizz avança em direção ao alvo, causando Dano Mágico e aplicando efeitos de contato.
        <br>W - TRIDENTE DA PEDRA DO MAR - Os ataques de Fizz fazem seus inimigos sangrarem, causando Dano Mágico por vários segundos. Fizz pode fortalecer seu próximo ataque para causar dano adicional e fortalecer os seguintes por um curto período.
        <br>E - BRINCALHÃO / TRAPACEIRO - Fizz faz acrobacias no ar, aterrissando graciosamente sobre seu tridente e ficando inalvejável. Desta posição, ele pode tanto golpear o chão quanto pular novamente antes de cair de vez.
        <br>R - LANÇAR ISCA - Fizz arremessa um peixe em determinada direção, que se prende a qualquer Campeão que tocar, reduzindo a velocidade do alvo. Após um curto intervalo, um tubarão emerge do chão, lançando o alvo ao ar e empurrando outros inimigos para trás. Todos os inimigos atingidos recebem Dano Mágico e têm sua velocidade reduzida.
        </p>`
    }else if(campeao == "galio" || campeao == "Galio"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderado <br><br>Do lado de fora da reluzente cidade de Demacia, Galio, o colosso de pedra, vigia com zelo. Construído como bastião contra magos inimigos, ele geralmente permanece imóvel por décadas até que a presença de uma magia poderosa o desperte.
        <br><br>HABILIDADES<br><br>
        PASSIVA -  ESMAGADA COLOSSAL - A cada poucos segundos, o próximo ataque básico de Galio causa Dano Mágico adicional em área.
        <br>Q - VENTOS DE GUERRA - Galio dispara duas rajadas de vento que convergem em um grande tornado e causam dano ao longo do tempo.
        <br>W - ESCUDO DE DURAND - Galio carrega em postura defensiva, movendo-se lentamente. Ao soltar o carregamento, ele provocará e causará dano a inimigos próximos.
        <br>E - SOCO JUSTICEIRO - Galio dá um passo para trás e avança, arremessando ao ar o primeiro Campeão com que colidir.
        <br>R - ENTRADA HEROICA - Galio marca a posição de um aliado como ponto de aterrissagem e concede um escudo mágico a todos os aliados na área. Após um intervalo, ele aterrissa no local, arremessando os inimigos próximos ao ar.      
        </p>`
    }else if(campeao == "gangplank" || campeao == "Gangplank"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Alta <br><br>Tão inesperado quanto brutal, o autointitulado Rei dos Ladrões conhecido como Gangplank é temido por todos os mares.
        <br><br>HABILIDADES<br><br>
        PASSIVA - JULGAMENTO DE FOGO - Periodicamente, o ataque corpo a corpo de Gangplank deixará seu inimigo em chamas.
        <br>Q - NEGOCIARRR - Dispara no alvo, saqueando ouro para cada abate de unidade.
        <br>W - REMOVER ESCORBUTO - Come fruta cítrica para curar efeitos de controle de grupo e restaurar Vida.
        <br>E - BARRIL DE PÓLVORA - Gangplank posiciona um Barril de Pólvora no local-alvo. Ele explodirá caso seja atacado, causando dano aos inimigos na área e reduzindo a Velocidade de Movimento deles.
        <br>R - BARRAGEM DE CANHÃO - Gangplank sinaliza para que seu navio bombardeie uma área, causando dano e lentidão aos inimigos.
        </p>`
    }else if(campeao == "garen" || campeao == "Garen"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderado <br><br>Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PERSEVERANÇA - Se Garen não tiver sido atingido recentemente por dano ou habilidades inimigas, ele regenera um percentual de sua Vida total a cada segundo.
        <br>Q - ACERTO DECISIVO - Garen recebe Velocidade de Movimento adicional, libertando-se de todos os efeitos de redução de velocidade. Seu próximo ataque atinge uma área vital do inimigo, causando dano adicional e silenciando-o.
        <br>W - CORAGEM - Garen aumenta sua Armadura e Resistência Mágica passivamente ao abater inimigos. Ele também pode ativar essa habilidade para receber um escudo e Tenacidade por um breve período, seguido de uma quantidade menor de redução de dano com maior duração.
        <br> E - JULGAMENTO - Garen gira rapidamente a espada ao redor do corpo dele, causando Dano Físico a inimigos próximos.
        <br>R - JUSTIÇA DEMACIANA - Garen evoca o Poder de Demacia para tentar executar um Campeão inimigo.
        </p>`
    }else if(campeao == "gnar" || campeao == "Gnar"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Alta <br><br>Gnar é um yordle primitivo cujas artimanhas brincalhonas podem irromper em uma raiva infantil em um instante, transformando-o em uma besta gigantesca determinada a destruir.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FÚRIA GENÉTICA - Enquanto está em combate, Gnar gera Fúria. Quando atinge o máximo de Fúria, sua próxima habilidade o transformará em Mega-Gnar, concedendo mais condições de sobrevivência e acesso a novas habilidades.
        <br>Q - BUMERANGUE / PEDREGULHO - Gnar lança um bumerangue que causa dano e Lentidão a inimigos que atinge antes de retornar a ele. Caso apanhe o bumerangue, seu Tempo de Recarga é reduzido. Mega Gnar arremessa um pedregulho que para na primeira unidade atingida, causando dano e Lentidão a tudo o que estiver próximo. Em seguida, ele pode ser apanhado para reduzir o Tempo de Recarga.
        <br>W - HIPERATIVO / SAFANÃO - Os ataques e habilidades de Gnar o animam, causando dano adicional e concedendo Velocidade de Movimento. Mega Gnar fica enfurecido demais para ficar hiperativo. Em vez disso, ele pode subir em duas patas e atingir a área à sua frente, atordoando inimigos em área.
        <br>E - SALTO / ENCONTRÃO - Gnar salta em um local e atinge a cabeça de qualquer unidade em que aterrissar, deslocando-se ainda mais. Mega Gnar é grande demais para saltar e, em vez disso, aterrissa com força para quebrar o chão, causando dano em área ao seu redor.
        <br>R - GNAR! - Mega Gnar joga tudo o que estiver próximo de si em uma direção escolhida, causando dano e Lentidão. Qualquer inimigo que atingir uma parede fica atordoado e recebe dano adicional.
        </p>`
    }else if(campeao == "gragas" || campeao == "Gragas"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Igualmente alegre e imponente, Gragas é um gigante e arruaceiro mestre-cervejeiro em uma busca pessoal pelo mais perfeito caneco de cerveja.
        <br><br>HABILIDADES<br><br>
        PASSIVA - HAPPY HOUR - Gragas cura a si mesmo periodicamente após utilizar uma habilidade.
        <br>Q - JOGAR O BARRIL - Gragas rola seu barril até um local, que pode ser ativado novamente para explodir ou explodirá sozinho após 4 segundos. Inimigos atingidos pela explosão têm sua Velocidade de Movimento reduzida.
        <br>W - FÚRIA DA BEBEDEIRA - Gragas entorna a bebida de seu barril garganta abaixo, canalizando por 1 segundo. Ao terminar, ele fica torpecidamente poderoso, causando mais dano em seu próximo ataque básico e reduzindo o dano recebido.
        <br>E - BARRIGADA - Gragas avança em direção a um local e colide com a primeira unidade inimiga que encontrar, causando dano a todas as unidades inimigas próximas e atordoando-as.
        <br>R - BARRIL EXPLOSIVO - Gragas arremessa seu barril em um local, causando dano e afastando os inimigos pegos no raio da explosão.
        </p>`
    }else if(campeao == "graves" || campeao == "Graves"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Baixa <br><br>Malcolm Graves, mercenário, apostador e bandido de renome, é um homem procurado em cada uma das cidades e impérios que visitou.
        <br><br>HABILIDADES<br><br>
        PASSIVA - NOVA DESTINO - A escopeta de Graves tem algumas propriedades únicas. Ele precisa recarregar quando sua munição acaba. Ataques disparam 4 projéteis que não podem atravessar unidades. Não Campeões atingidos por mais de um projétil são empurrados para trás.
        <br>Q - FIM DA LINHA - Graves dispara um projétil explosivo que detona após 2s, ou 0,2s caso atinja terreno.
        <br>W - CORTINA DE FUMAÇA - Graves atira uma bomba de fumaça na área-alvo, criando uma nuvem de fumaça que reduz o alcance de visão. Inimigos atingidos no impacto inicial sofrem Dano Mágico e têm sua Velocidade de Movimento reduzida por um curto período de tempo.
        <br>E - SAQUE RÁPIDO - Graves avança em linha reta, recebendo Armadura adicional por muitos segundos. Se Graves avançar em direção a um Campeão inimigo, ele recebe dois acúmulos de Bravura Indômita. Atingir inimigos com ataques básicos reduz o Tempo de Recarga dessa habilidade e redefine o efeito de resistência.
        <br>R - EFEITO COLATERAL - Graves atira um projétil explosivo que causa muito dano ao primeiro campeão que acertar. Após atingir um campeão ou chegar ao seu alcance máximo, o projétil explode, causando dano em uma área em cone.
        </p>`
    }else if(campeao == "hecarim" || campeao == "Hecarim"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Hecarim é a fusão espectral de homem e animal, amaldiçoado a cavalgar entre as almas dos vivos por toda a eternidade.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CAMINHO DA GUERRA - Hecarim recebe Dano de Ataque equivalente a um percentual de sua Velocidade de Movimento adicional.
        <br>Q - ENFURECIDO - Hecarim golpeia inimigos próximos, causando Dano Físico. Caso ele cause dano a ao menos um inimigo, os usos subsequentes da habilidade causam mais dano e têm menor Tempo de Recarga.
        <br>W - ESPÍRITO DO PAVOR - Hecarim causa Dano Mágico a inimigos próximos por um curto período de tempo. Hecarim recebe Vida igual a um percentual de qualquer dano que esses inimigos receberem.
        <br>E - ATAQUE DEVASTADOR - Hecarim recebe Velocidade de Movimento crescente e ignora colisão com unidades por um curto período de tempo. Seu próximo ataque empurra o alvo para trás e causa Dano Físico adicional com base na distância percorrida desde a ativação da habilidade.
        <br>R - MASSACRE DAS SOMBRAS - Hecarim invoca cavaleiros espectrais e avança, causando Dano Mágico em linha reta. Hecarim desfere uma onda de choque ao terminar o ataque, fazendo com que inimigos próximos se afastem aterrorizados.   
        </p>`
    }else if(campeao == "heimerdinger" || campeao == "Heimerdinger"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Alta <br><br>Um cientista brilhante, mesmo que excêntrico, o Professor Cecil B. Heimerdinger é um dos inventores mais inovadores e estimados que Piltover já conheceu
        <br><br>HABILIDADES<br><br>
        PASSIVA - AFINIDADE HEXTEC - Recebe Velocidade de Movimento enquanto próxima a torres aliadas e torres posicionadas por Heimerdinger.
        <br>Q - TORRE EVOLUTIVA H-28G - Heimerdinger posiciona um canhão-torre automático equipado com um ataque secundário de feixes perfurantes (canhões causam metade do dano a torres).
        <br>W - MICRO-MÍSSEIS HEXTEC - Heimerdinger dispara mísseis de longo alcance que convergem na direção do cursor.
        <br>E - GRANADA DE TEMPESTADE DE ELÉTRONS CH-2 - Heimerdinger lança uma granada em um local, causando dano a unidades inimigas, atordoando todos que forem diretamente atingidos e deixando as unidades próximas lentas.
        <br>R - MELHORIA!!! - Heimerdinger inventa um aprimoramento, fazendo com que sua próxima habilidade tenha efeitos adicionais.
        </p>`
    }else if(campeao == "illaoi" || campeao == "Illaoi"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>O poderoso porte físico de Illaoi só perde para sua fé indomável. Como profetisa do Grande Cráquem, ela usa um gigantesco totem dourado para arrancar o espírito de seus inimigos de seus corpos e estilhaçar a sua percepção da realidade.
        <br><br>HABILIDADES<br><br>
        PASSIVA - - PROFETISA DE UM DEUS ANCIÃO - Illaoi e os Recipientes que ela cria fazem surgir Tentáculos em terreno intransponível próximo. Tentáculos golpeiam espíritos, Recipientes e vítimas da Lição Dura de Illaoi. Tentáculos causam Dano Físico a inimigos atingidos e curarão Illaoi caso atinjam um Campeão.
        <br>Q - GOLPE DE TENTÁCULO - Aumenta o dano causado por Tentáculos. Quando ativada, Illaoi golpeia com um Tentáculo que causa Dano Físico.
        <br>W - LIÇÃO DURA - Illaoi salta em direção a seu alvo, causando Dano Físico e fazendo com que Tentáculos próximos também golpeiem o alvo.
        <br>E - TESTE DE ESPÍRITO - Illaoi arranca o espírito do corpo de um inimigo, forçando-o a permanecer perante ela. Espíritos ecoam um percentual do dano que recebem ao alvo original. Se abatido, ou caso se afaste muito do espírito, o alvo se transforma em um Recipiente e inicia o surgimento de Tentáculos.
        <br>R - SALTO DE FÉ - Illaoi golpeia o chão com seu ídolo, causando Dano Físico a inimigos próximos. Um Tentáculo surge para cada campeão atingido.
        </p>`
    }else if(campeao == "irelia" || campeao == "Irelia"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>A ocupação noxiana de Ionia produziu muitos heróis, mas nenhum era mais improvável do que a jovem Irelia de Navori.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FERVOR IONIANO - Quando Irelia acerta inimigos com suas habilidades, ela ganha acúmulo de Velocidade de Ataque adicional. Ao atingir o máximo de acúmulos, Irelia também ganha dano adicional ao contato.
        <br>Q - SURTO DA LÂMINA - Irelia avança para atingir o seu alvo e cura a si mesma. Se ele estiver marcado ou for abatido com Surto da Lâmina, o Tempo de Recarga será restaurado.
        <br>W - DANÇA DESAFIADORA - Irelia carrega um golpe que causa mais dano conforme o carregamento. Ela também recebe Dano Físico reduzido durante esse carregamento.
        <br>E - DUETO IMPECÁVEL - Irelia lança duas lâminas que convergem uma em direção à outra. Inimigos no fogo cruzado sofrem dano, ficam atordoados e são marcados.
        <br>R - LÂMINA DA VANGUARDA - Irelia lança uma série de lâminas que explodem ao atingir um Campeão inimigo. Inimigos atingidos pelas lâminas sofrem dano e são marcados. Depois, as lâminas formam uma parede que causa dano e reduz a velocidade dos inimigos que a atravessarem.
        </p>`
    }else if(campeao == "ivern" || campeao == "Ivern"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Moderada <br><br>Ivern Bramblefoot, conhecido por muitos como o Protetor Verde, é um peculiar meio-homem, meio-árvore que vagueia pelas florestas de Runeterra, cultivando vida por onde ele passa.
        <br><br>HABILIDADES<br><br>
        PASSIVA - AMIGO DA FLORESTA - Ivern não pode atacar ou ser atacado por monstros não épicos, mas pode criar bosques mágicos que crescem ao longo do tempo em acampamentos da selva. Quando o crescimento do bosque terminar, Ivern pode libertar os monstros para receber ouro e experiência. Depois do nível 5, Ivern também pode compartilhar efeitos da selva com seus aliados.
        <br>Q - ENCANTADOR DE RAÍZES - Ivern conjura uma vinha, causando dano e enraizando os alvos inimigos atingidos. Os aliados de Ivern podem avançar rapidamente em direção ao alvo enraizado.
        <br>W - FORMAÇÃO DE ARBUSTOS - Dentro de arbustos, os ataques de Ivern causam Dano Mágico adicional. Ivern pode ativar esta habilidade para criar um pedaço de arbusto.
        <br>E - SEMENTE ENGATILHADA - Ivern posiciona um escudo em um aliado, que explode após um curto período de tempo, causando dano a inimigos.
        <br>R - MARGARIDA! - Ivern invoca sua amiga Margarida para lutar com ele. Ela lança ondas de choque, caso ataque o mesmo Campeão três vezes seguidas.
        </p>`
    }else if(campeao == "janna" || campeao == "Janna"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Moderada <br><br>Armada com o poder das ventanias de Runeterra, Janna é um misterioso e elemental espírito de vento que protege os desfavorecidos de Zaun.
        <br><br>HABILIDADES<br><br>
        PASSIVA - BRISA DE IMPULSO - Janna recebe Velocidade de Movimento adicional passivamente, e os Campeões aliados próximos recebem esse efeito quando se movem em direção a ela. Além disso, os ataques básicos de Janna causam Dano Mágico adicional com base em sua Velocidade de Movimento adicional.
        <br>Q - VENTANIA UIVANTE - Através de uma alteração pontual de temperatura e pressão, Janna consegue criar uma pequena tempestade que cresce em tamanho ao longo do tempo. Ela pode ativar a habilidade novamente para desferir a tempestade. Ao ser desferida, a tempestade se desloca em linha reta na direção em que foi conjurada, causando dano e arremessando ao ar quaisquer inimigos em seu caminho.
        <br>W - ZÉFIRO - Janna invoca um elemental do ar que aumenta passivamente sua Velocidade de Movimento e permite que ela ignore colisão com unidades. Ela também pode ativar essa habilidade para causar dano e redução de Velocidade de Movimento a um inimigo. O efeito passivo é perdido enquanto a habilidade estiver em Tempo de Recarga.
        <br>E - OLHO DA TEMPESTADE - Janna conjura uma ventania defensiva que protege um Campeão ou torre aliada do dano recebido e aumenta seu Dano de Ataque.
        <br>R - MONÇÃO - Janna se cerca de uma tempestade mágica, empurrando inimigos para trás. Assim que a tempestade se estabelece, ventos suaves curam os aliados próximos enquanto a habilidade estiver ativa.
        </p>`
    }else if(campeao == "jarvan" || campeao == "Jarvan"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>O Príncipe Jarvan, descendente da Dinastia Lumescudo, é o atual herdeiro do trono de Demacia.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CADÊNCIA MARCIAL - O primeiro ataque básico de Jarvan a um inimigo causa Dano Físico adicional com base na Vida atual dele. Este efeito não ocorrerá no mesmo inimigo novamente por alguns segundos.
        <br>Q - ATAQUE DO DRAGÃO - Jarvan IV estende sua lança, causando Dano Físico e reduzindo a Armadura de inimigos atingidos. Além disto, ela puxará Jarvan na direção de seu Estandarte Demaciano, arremessando inimigos em seu trajeto ao ar.
        <br>W - ÉGIDE DE OURO - Jarvan IV invoca os antigos reis de Demacia para protegê-lo do perigo e atrasar os inimigos próximos.
        <br>E - ESTANDARTE DEMACIANO - Jarvan IV carrega o orgulho de Demacia, recebendo passivamente Velocidade de Ataque adicional. Ativar o Estandarte Demaciano permite a Jarvan IV posicionar uma bandeira demaciana que causa Dano Mágico e concede Velocidade de Ataque a campeões aliados próximos.
        <br>R - CATACLISMA - Jarvan IV heroicamente salta em direção ao alvo com força o suficiente para deformar o terreno, criando uma arena ao seu redor. Os inimigos próximos recebem dano no momento do impacto.
        </p>`
    }else if(campeao == "jax" || campeao == "Jax"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Incomparável tanto por suas habilidades com armamentos incomuns quanto pelo seu sarcasmo mordaz, Jax é o último mestre de armas de Icathia conhecido.
        <br><br>HABILIDADES<br><br>
        PASSIVA - INVESTIDA IMPLACÁVEL - Os ataques básicos consecutivos de Jax continuamente aumentam sua Velocidade de Ataque.
        <br>Q - SALTO ATACANTE - Jax salta em direção a uma unidade. Caso seja um inimigo, ele o atingirá com sua arma.
        <br>W - ENERGIZAR - Jax acumula energia em sua arma, fazendo com que seu próximo ataque básico ou Salto Atacante cause dano adicional.
        <br>E - CONTRA-ATAQUE - A proeza combatente de Jax lhe permite desviar de todos os ataques recebidos por um curto período de tempo, contra-atacando logo em seguida e atordoando os inimigos ao seu redor.
        <br>R - PODER DO GRÃO-MESTRE - Cada terceiro ataque consecutivo causa Dano Mágico adicional. Além disso, Jax pode ativar essa habilidade para fortalecer sua determinação, aumentando sua Armadura e Resistência Mágica por um curto período de tempo.  
        </p>`
    }else if(campeao == "jayce" || campeao == "Jayce"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Jayce é um brilhante inventor que dedicou sua vida a defender Piltover e sua implacável busca pelo progresso. Com seu martelo hextech transformador em mãos, Jayce usa sua força, coragem e considerável inteligência para proteger sua cidade natal.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CAPACITOR HEXTEC - Quando Jayce troca de arma, ele recebe Velocidade de Movimento por um curto período.
        <br>Q - AOS CÉUS! / DISPARO CHOCANTE - Empunhadura de Martelo: Salta na direção de um inimigo, causando Dano Físico e Lentidão. Empunhadura de Canhão: Dispara um orbe de eletricidade que detona ao atingir um inimigo (ou ao alcançar o fim de seu trajeto), causando Dano Físico a todos os inimigos atingidos.
        <br>W - CAMPO ESTÁTICO / HIPERCARGA - Empunhadura de Martelo: Passivo: Restaura Mana a cada acerto. Ativo: Cria um campo elétrico que causa dano a inimigos próximos por muitos segundos. Empunhadura de Canhão: Recebe um impulso de energia, aumentando a Velocidade de Ataque para seu máximo por diversos ataques.
        <br>E - GOLPE TROVEJANTE / PORTÃO ACELERADOR - Empunhadura de Martelo: Causa Dano Mágico a um inimigo e o joga para trás em uma curta distância. Empunhadura de Canhão: Posiciona um Portão Acelerador que aumenta a Velocidade de Movimento de campeões aliados que o atravessarem. Se Disparo Chocante for usado através do portão, a velocidade do projétil, seu alcance e seu dano aumentarão.
        <br>R - CANHÃO DE MERCÚRIO / MARTELO DE MERCÚRIO - Empunhadura de Martelo: Transforma o Martelo de Mercúrio em Canhão de Mercúrio, recebendo novas habilidades e ataques à distância. O primeiro ataque desta forma reduzirá a Armadura e a Resistência Mágica do alvo. Empunhadura de Canhão: Transforma o Canhão de Mercúrio em Martelo de Mercúrio, recebendo novas habilidades, aumentando a Resistência Mágica e a Armadura. O primeiro ataque desta forma causará Dano Mágico adicional. 
        </p>`
    }
    else if(campeao == "jhin" || campeao == "Jhin"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte.
        <br><br>HABILIDADES<br><br>
        PASSIVA - SUSSURRO - O canhão de Jhin, Sussurro, é um instrumento preciso criado para causar muito dano. Ele dispara com frequência fixa e carrega apenas quatro projéteis. Jhin encanta o projétil final com magia das trevas para causar acerto crítico e dano adicional de execução. Sempre que a Sussurro causa acerto crítico, ela inspira Jhin com Velocidade de Movimento.
        <br>Q - GRANADA DANÇANTE - Jhin lança um cartucho mágico em um inimigo. Ele pode atingir até quatro alvos e acumula dano a cada vez que causa um abate.
        <br>W - FLORESCER MORTAL - Jhin brande sua bengala, fazendo um disparo único com incrível alcance. Ele atravessa tropas e monstros, mas para no primeiro Campeão atingido. Se o alvo foi recentemente atingido por aliados de Jhin, por Armadilhas de Lótus ou recebeu dano de Jhin, ele será enraizado.
        <br>E - AUDIÊNCIA CATIVA - Jhin posiciona uma armadilha de lótus invisível que floresce ao ser pisada. Ela reduz a velocidade de inimigos próximos antes de causar dano com uma explosão de pétalas serrilhadas. Beleza em Morte - Quando Jhin abate um Campeão inimigo, uma armadilha de lótus florescerá próximo a seu cadáver.
        <br>R - ACLAMAÇÃO - Jhin canaliza, transformando a Sussurro em um mega-canhão de ombro. Ela é capaz de fazer 4 super disparos com extremo alcance que atravessam tropas e monstros, mas que param no primeiro campeão atingido. A Sussurro mutila os inimigos atingidos, o que reduz sua velocidade e aumenta o dano de execução. O 4º disparo é feito com perfeição, de poder épico e garante um acerto crítico.
        </p>`
    }
    else if(campeao == "jinx" || campeao == "Jinx"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ANIME-SE! - Jinx recebe um aumento drástico de Velocidade de Movimento e de Velocidade de Ataque sempre que ajuda a destruir uma estrutura ou a abater um Campeão inimigo ou monstro épico da selva.
        <br>Q - TROCANDO! - Jinx modifica seus ataques básicos ao trocar entre Pow-Pow, sua metralhadora, e Fishbones, seu lança-mísseis. Ataques com Pow-Pow concedem Velocidade de Ataque, enquanto ataques com Fishbones causam dano em área de ação e recebem aumento de alcance, mas drenam Mana e reduzem a Velocidade de Ataque.
        <br>W - ZAP! - Jinx usa Zapper, sua pistola de choques, para disparar um projétil que causa dano ao primeiro inimigo atingido, reduzindo sua velocidade e revelando-o.
        <br>E - MORDIDINHA FLAMEJANTE! - Jinx arremessa uma fileira de granadas-armadilha que explodem após 5 segundos, deixando os inimigos em chamas. As Mordidinhas Flamejantes morderão campeões inimigos que caminharem sobre elas, enraizando-os no local.
        <br>R - SUPER MEGA MÍSSIL DA MORTE! - Jinx dispara um super-míssil no mapa, que acumula dano ao longo de seu trajeto. O míssil explodirá ao colidir com um campeão inimigo, causando dano a ele e a inimigos ao seu redor, com base em sua Vida removida.
        </p>`
    }
    else if(campeao == "kaisa" || campeao == "Kaisa" || campeao == "Kai'sa" || campeao == "kai'sa"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Capturada pelo Vazio quando era apenas uma criança, Kai'Sa conseguiu sobreviver por pura persistência e força de vontade.
        <br><br>HABILIDADES<br><br>
        PASSIVA - SEGUNDA PELE - Os ataques básicos de Kai'Sa acumulam Plasma, causando Dano Mágico adicional crescente. Efeitos imobilizadores de aliados ajudam a acumular Plasma. Além disso, as aquisições de itens de Kai'Sa aprimoram suas habilidades básicas, deixando-as mais poderosas.
        <br>Q - CHUVA ICATHIANA - Kai'Sa dispara uma chuva de projéteis que correm atrás de alvos próximos. Arma Viva: Chuva Icathiana é aprimorada e lança mais mísseis.
        <br>W - EXPLORADORA DO VAZIO - Kai'Sa lança um projétil de longo alcance, marcando inimigos com sua passiva. Arma Viva: Exploradora do Vazio é aprimorada e aplica mais marcas passivas e tem o Tempo de Recarga reduzido ao acertar um Campeão.
        <br>E - SOBRECARGA - Kai'Sa aumenta brevemente sua Velocidade de Movimento, depois aumenta sua Velocidade de Ataque. Arma Viva: Sobrecarga é aprimorada e concede Invisibilidade por um breve período.
        <br>R - INSTINTO ASSASSINO - Kai'Sa avança para perto de um Campeão inimigo.
        </p>`
    }
    else if(campeao == "kalista" || campeao == "Kalista"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Um espectro de ira e retaliação, Kalista é o espírito imortal da vingança, um pesadelo blindado invocado da Ilhas das Sombras para caçar desertores e traidores
        <br><br>HABILIDADES<br><br>
        PASSIVA - APRUMO MARCIAL -Realize um comando de movimentação enquanto Kalista carrega seu ataque básico ou Perfurar para saltar em uma curta distância quando ela lançar o ataque.
        <br>Q - PERFURAR - Arremessa uma lança de movimento rápido que atravessa os inimigos que abate.
        <br>W - VIGIA - Ganha dano adicional quando Kalista e seu aliado Em Juramento atingem o mesmo alvo. Ative para enviar uma alma para patrulhar um caminho, revelando a área à sua frente.
        <br>E - LACERAR - Os ataques empalam seus alvos com lanças. Ative para arrancar as lanças, causando Lentidão e dano crescente.
        <br>R - CHAMADO DO DESTINO - Kalista teleporta o aliado em Juramento para si mesma. Eles recebem a capacidade de avançar em uma direção, empurrando para trás os inimigos atingidos.
        </p>`
    }else if(campeao == "karma" || campeao == "Karma"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Nenhum mortal representa melhor as tradições espirituais de Ionia do que Karma.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ÍMPETO ARDENTE - Reduz o Tempo de Recarga de Mantra a cada vez que Karma causar dano a um Campeão inimigo com uma de suas habilidades ou ataques básicos.
        <br>Q - CHAMA INTERIOR - Karma dispara uma esfera de energia espiritual que explode e causa dano ao atingir uma unidade inimiga. Efeito de Mantra: Além da explosão, Mantra aumenta o poder destrutivo de sua Chama Interior, criando um cataclisma que causa dano depois de um breve intervalo.
        <br>W - DECISÃO ABSORTA - Karma cria um vínculo entre ela e o inimigo-alvo, causando dano e revelando-o. Se o vínculo não for quebrado, o inimigo será enraizado e sofrerá dano novamente. Efeito de Mantra: Karma fortalece o vínculo, se curando e prolongando a duração do enraizamento.
        <br>E - INSPIRAÇÃO - Karma invoca um escudo protetor que absorve o dano sofrido e aumenta a Velocidade de Movimento do aliado protegido. Efeito de Mantra: O alvo irradia energia, fortalecendo o escudo inicial e aplicando Inspiração a Campeões aliados próximos.
        <br>R - MANTRA - Karma fortalece sua próxima habilidade para dar um efeito adicional. Mantra está disponível no nível 1 e não exige um ponto de habilidade.
        </p>`
    }else if(campeao == "karthus" || campeao == "Karthus"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Sendo o presságio do fim, Karthus é um espírito imortal cujas canções assombradoras são um prelúdio para o terror de sua aparição horripilante.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DESAFIO DA MORTE - Ao morrer, Karthus entra em forma de espírito e pode continuar conjurando habilidades.
        <br>Q - DEVASTAR - Karthus desfere uma explosão em um local após um intervalo, causando dano a inimigos próximos. Causa mais dano a inimigos isolados.
        <br>W - BARREIRA DA DOR - Karthus cria uma barreira transponível de energia parasita. Qualquer unidade inimiga que atravessá-la tem sua Velocidade de Movimento e Resistência Mágica reduzidas por um período de tempo.
        <br>E - PERVERTER - Karthus passivamente rouba energia de suas vítimas, recebendo Mana a cada abate. Ele também pode se cercar das almas de suas presas, causando dano a inimigos próximos, mas drenando rapidamente a própria Mana.
        <br>R - RÉQUIEM - Após canalizar por 3 segundos, Karthus causa dano a todos os Campeões inimigos.
        </p>`
    }else if(campeao == "kassadin" || campeao == "Kassadin"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Cortando uma trilha de fogo pelos lugares mais sombrios do mundo, Kassadin sabe que seus dias estão contados.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PEDRA DO VAZIO - Kassadin sofre Dano Mágico reduzido e ignora colisão com unidades.
        <br>Q - ESFERA NULA - Kassadin dispara um orbe de energia do Vazio em um alvo, causando dano e interrompendo canalizações. A energia excedente toma forma ao seu redor, concedendo um escudo temporário que absorve Dano Mágico.
        <br>W - LÂMINA ÍNFERA - Passivo: Os ataques básicos de Kassadin causam Dano Mágico adicional. Ativo: O próximo ataque básico de Kassadin causa Dano Mágico adicional significativo e restaura Mana.
        <br>E - FORÇA DE PULSO - Kassadin drena energia de habilidades conjuradas nas proximidades. Ao estar carregado, Kassadin pode usar Força de Pulso para causar dano e reduzir a velocidade de inimigos em uma área em cone à sua frente.
        <br>R - CAMINHAR NA FENDA - Kassadin se teleporta para um local próximo, causando dano a unidades inimigas próximas. Múltiplas conjurações de Caminhar na Fenda em um curto período custam Mana adicional e também causam dano adicional.
        </p>`
    }else if(campeao == "katarina" || campeao == "Katarina"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Decisiva em seus julgamentos e letal em combate, Katarina é a assassina de maior calibre de Noxus.
        <br><br>HABILIDADES<br><br>
        PASSIVA - VORACIDADE - Os Tempos de Recarga de Katarina são reduzidos dramaticamente sempre que um Campeão que ela havia causado dano recentemente morrer. Se apanhar uma Adaga, Katarina a usa para cortar todos os inimigos próximos, causando Dano Mágico.
        <br>Q - LÂMINA SALTITANTE - Katarina arremessa uma Adaga no alvo. Ela salta em inimigos próximos antes de ricochetear e cair no chão.
        <br>W - PREPARAÇÃO - Katarina recebe Velocidade de Movimento, arremessando uma Adaga no ar diretamente acima de si mesma.
        <br>E - SHUNPO - Katarina desloca-se em direção ao alvo, golpeando-o caso seja inimigo ou golpeando o inimigo mais próximo caso não seja.
        <br>R - LÓTUS DA MORTE - Katarina gira em torno de si mesma, disparando adagas muito rapidamente e causando muito Dano Mágico nos 3 Campeões inimigos mais próximos.
        </p>`
    }else if(campeao == "kayle" || campeao == "Kayle"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Nascida de um Aspecto targonense no auge das Guerras Rúnicas, Kayle honrava o legado de sua mãe lutando por justiça com asas de chamas divinas.
        <br><br>HABILIDADES<br><br>
        PASSIVA - - ASCENSÃO DIVINA - Os ataques de Kayle são fortalecidos pelos céus conforme ela aumenta de nível de Campeão e de habilidades. Suas asas ficam flamejantes conforme ela progressivamente ganha Velocidade de Ataque, Velocidade de Movimento, Alcance de Ataque e ondas de fogo em seus ataques.
        <br>Q - EXPLOSÃO RADIANTE - Kayle conjura um portal, invocando uma espada celestial que atravessa os inimigos, causando dano e reduzindo a velocidade e as resistências de tudo que atingir.
        <br>W - BÊNÇÃO CELESTIAL - Abençoada pelas divindades, Kayle cura e concede Velocidade de Movimento a si mesma e ao aliado mais próximo.
        <br>E - LÂMINA DE FOGO ESTELAR  Passivo: a espada celestial de Kayle, Virtude, causa Dano Mágico adicional aos inimigos que ela ataca. Ativo: o próximo ataque de Kayle atinge seu alvo com fogo celestial, causando dano adicional proporcional à Vida perdida do alvo.
        <br>R - SENTENÇA DIVINA - Kayle torna um aliado invulnerável e evoca os antigos Aspectos da Justiça para purificarem a área ao redor do seu alvo com uma chuva de espadas sagradas.
        </p>`
    }else if(campeao == "kayn" || campeao == "Kayn"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Alta <br><br>Inigualável praticante da letal magia sombria, Shieda Kayn luta para alcançar seu verdadeiro destino: um dia comandar a Ordem das Sombras rumo a uma nova era de supremacia ioniana.
        <br><br>HABILIDADES<br><br>
        PASSIVA - A FOICE DARKIN - Kayn empunha uma arma ancestral, lutando contra Rhaast, o darkin que vive dentro dela, pelo controle. Ou o Darkin triunfará ou Kayn dominará Rhaast para se tornar o Assassino das Sombras. Darkin: Cura uma porcentagem do dano de habilidades causado a Campeões. Assassino das Sombras: Causa dano adicional nos primeiros segundos em combate com Campeões inimigos.
        <br>Q - CORTE CEIFADO - Kayn avança, depois ataca. Ambos dão dano.
        <br>W - ALCANCE DA LÂMINA - Kayn causa dano e reduz a velocidade dos alvos na linha de fogo.
        <br>E - PASSO DAS SOMBRAS - Kayn pode atravessar terrenos.
        <br>R - TRANSGRESSÃO DO UMBRAL - Kayn se esconde no corpo de um inimigo e causa bastante dano quando rasga sua saída.
        </p>`
    }else if(campeao == "kennen" || campeao == "Kennen"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Mais do que um protetor rápido como um raio do equilíbrio ioniano, Kennen é o único yordle membro da Kinkou.
        <br><br>HABILIDADES<br><br>
        PASSIVA - MARCA DA TORMENTA - Kennen atordoa os inimigos que atingir 3 vezes com suas habilidades.
        <br>Q - SHURIKEN TROVEJANTE - Kennen arremessa um shuriken de alta velocidade em um local, causando dano e adicionando uma Marca da Tormenta a qualquer oponente atingido.
        <br>W - SURTO ELÉTRICO - Kennen passivamente causa dano adicional e adiciona uma Marca da Tormenta a seu alvo a cada certo número de ataques. Ele pode ativar essa habilidade para causar dano e adicionar outra Marca da Tormenta a alvos que já estão marcados.
        <br>E - INVESTIDA RELÂMPAGO - Kennen assume uma forma de relâmpago, permitindo que passe por unidades e aplique a Marca da Tormenta. Ele também ganha Velocidade de Movimento ao assumir essa forma e Velocidade de Ataque ao sair dela.
        <br>R - TURBILHÃO CORTANTE - Kennen invoca uma tempestade que atinge campeões inimigos próximos com Dano Mágico.
        </p>`
    }else if(campeao == "kahzix" || campeao == "Kahzix" || campeao == "Kah'zix" || campeao == "kah'zix"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Moderada <br><br>O Vazio cresce e o Vazio se adapta, e nenhuma de suas outras criaturas incorpora isso tão bem quanto Kha'Zix.
        <br><br>HABILIDADES<br><br>
        PASSIVA - AMEAÇA INVISÍVEL - Inimigos próximos que estiverem isolados de seus aliados são marcados. As habilidades de Kha'Zix possuem interações com alvos isolados. Quando Kha'Zix não estiver visível para a equipe inimiga, ele recebe Ameaça Invisível, fazendo com que seu próximo ataque básico contra um Campeão inimigo cause Dano Mágico adicional e reduza a velocidade do alvo por alguns segundos.
        <br>Q - SABOR DE MEDO - Causa Dano Físico ao alvo. Dano aumentado em alvos Isolados. Caso ele escolha Evoluir Garras Aumentadas, recupera um percentual de seu Tempo de Recarga contra alvos Isolados. Kha'Zix também recebe aumento de alcance em seus ataques básicos e em Sabor de Medo.
        <br>W - ESPINHO DO VAZIO - Kha'Zix dispara espinhos explosivos que causam Dano Físico aos inimigos atingidos. Kha'Zix é curado caso esteja no raio da explosão. Caso escolha Evoluir Fileiras de Espinhos, Espinho do Vazio passa a disparar três espinhos em área de cone, reduz a velocidade dos inimigos atingidos e revela Campeões inimigos atingidos por 2 segundos. Alvos Isolados têm redução adicional de velocidade.
        <br>E - SALTO - Kha'Zix salta em uma área, causando Dano Físico ao aterrissar. Caso ele escolha Evoluir Asas, o alcance do Salto é aumentado em 200 e o Tempo de Recarga é zerado com o abate ou assistência de Campeões.
        <br>R - MASSACRE DO VAZIO - Cada nível permite que Kha'Zix evolua uma de suas habilidades, dando a elas um efeito único adicional. Quando ativada, Kha'Zix fica Invisível, acionando Ameaça Invisível e aumentando sua Velocidade de Movimento. Caso ele escolha Evoluir Camuflagem Adaptativa, Massacre do Vazio ganha maior duração de Invisibilidade e um uso adicional.
        </p>`
    }else if(campeao == "kindred" || campeao == "Kindred"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg">`
        description.innerHTML = `<p>Função <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span>: Atirador  |  Dificuldade: Moderada <br><br>Distintos, mas nunca separados, os Kindred representam as essências gêmeas da morte.
        <br><br>HABILIDADES<br><br>
        PASSIVA - - MARCA FAMILIAR - Os Kindred marcam alvos para Caçar. Concluir uma Caçada fortalece permanentemente as habilidades básicas deles. A cada 4 caçadas concluídas, o Alcance de Ataque também aumenta.
        <br>Q - DANÇA DE FLECHAS - Os Kindred rolam e disparam até três flechas em alvos próximos.
        <br>W - FRENESI DO LOBO - O Lobo se enraivece e ataca inimigos à sua volta. A Ovelha ganha acúmulos passivamente ao se mover e atacar. Quando totalmente carregado, o próximo ataque da Ovelha recupera Vida.
        <br>E - PESAR CRESCENTE - A Ovelha faz um disparo cuidadoso, reduzindo a velocidade de seu alvo. Se a Ovelha atacar o alvo mais duas vezes, seu próximo ataque fará com que o Lobo salte no inimigo, golpeando-o e causando muito dano.
        <br>R - REFÚGIO DA OVELHA - A Ovelha concede refúgio contra a morte para todos os seres vivos em uma área. Até que seu efeito acabe, nada pode morrer. No fim de sua duração, as unidades são curadas.
        </p>`
    }else if(campeao == "kled" || campeao == "Kled"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Um guerreiro tão destemido quanto irascível, o yordle Kled representa a bravata furiosa de Noxus. Ele é um ícone amado pelos soldados do império, rejeitado por seus oficiais e abominado pela nobreza.
        <br><br>HABILIDADES<br><br>
        PASSIVA - SKAARL, A LAGARTO COVARDE - Kled fica em sua possante montaria, Skaarl, que toma dano por ele. Quando a Vida dela acaba, Kled desmonta. Enquanto desmontado, as habilidades de Kled mudam e ele causa menos dano a Campeões. Kled pode restaurar a coragem de Skaarl ao enfrentar inimigos. Quando a coragem chega ao máximo, Kled volta a montar em Skaarl com uma parte de sua Vida.
        <br>Q - ARMADILHA NA CORDA - Kled arremessa uma armadilha de urso que causa dano e se prende a um Campeão inimigo. Caso fique preso por um curto período, o alvo recebe Dano Físico adicional e é puxado em direção a Kled. Quando desmontado, esta habilidade é substituída por Pistola de Bolso, um disparo a distância que empurra Kled para trás e restaura coragem.
        <br>W - TENDÊNCIAS VIOLENTAS - Kled recebe muita Velocidade de Ataque por quatro ataques. O quarto ataque causa mais dano.
        <br>E - JUSTAR - Kled avança, causando Dano Físico e recebendo um breve surto de velocidade. Ele pode conjurar esta habilidade novamente para recuar através do alvo inicial, causando a mesma quantidade de dano.
        <br>R - AVANÇAAAAAAAR!!! - Kled e Skaarl avançam em direção a um local, deixando um rastro que concede velocidade e criando um escudo. Skaarl marca e vai de encontro ao primeiro Campeão inimigo encontrado.
        </p>`
    }else if(campeao == "kogmaw" || campeao == "Kogmaw" || campeao == "Kog'maw" || campeao == "kog'maw"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Vomitado para fora de uma aparição podre do Vazio nas profundezas das terras desertas de Icathia, Kog'Maw é uma criatura inquisitiva e pútrida com uma boca cáustica gigantesca.
        <br><br>HABILIDADES<br><br>
        PASSIVA - SURPRESA ICATHIANA - Ao morrer, Kog'Maw explode depois de 4s, causando Dano Verdadeiro a inimigos próximos.
        <br>Q - CUSPARADA CÁUSTICA - Kog'Maw dispara um projétil corrosivo que causa Dano Mágico, corroendo a Armadura e Resistência Mágica do alvo por um curto período de tempo. Kog'Maw também recebe Velocidade de Ataque adicional.
        <br>W -BARRAGEM BIO-ARCANA - Os ataques de Kog'Maw recebem alcance estendido e causam um percentual da Vida máxima do alvo como Dano Mágico.
        <br>E - GOSMA DO VAZIO - Kog'Maw lança uma gosma que causa dano em todos os inimigos pelos quais ela passa, deixando um rastro que reduz a velocidade de inimigos que ficarem sobre ela.
        <br>R - ARTILHARIA VIVA - Kog'Maw dispara uma cápsula de artilharia a uma grande distância, causando Dano Mágico (aumentado drasticamente em inimigos com pouca Vida) e revelando alvos não invisíveis. Além disso, mais de uma Artilharia Viva em um curto período de tempo faz com que custem Mana adicional.
        </p>`
    }else if(campeao == "leblanc" || campeao == "Leblanc"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Misteriosa mesmo para os outros membros da Rosa Negra, LeBlanc é somente um dos muitos nomes de uma mulher pálida que tem manipulado pessoas e eventos desde os primeiros dias de Noxus.
        <br><br>HABILIDADES<br><br>
        PASSIVA - IMAGEM-ESPELHO - Quando a Vida de LeBlanc for inferior a 40%, ela fica invisível por 1s e cria uma Imagem-Espelho que não causa dano e dura até 8s.
        <br>Q - SIGILO DE MALÍCIA - LeBlanc projeta um Sigilo, causando dano e marcando o alvo por 3,5s. Causar dano ao alvo marcado com qualquer habilidade detona o Sigilo, causando dano adicional.
        <br>W - DISTORÇÃO - LeBlanc avança até um local, causando dano aos inimigos próximos de seu destino. Pelos próximos 4s, ativar Distorção novamente faz com que LeBlanc retorne até sua posição inicial.
        <br>E - CORRENTES ETÉREAS - LeBlanc lança uma corrente que prende a primeira unidade atingida. Se o alvo permanecer preso por 1,5s, ele é enraizado e sofre dano adicional.
        <br>R - MÍMICA - Leblanc conjura uma versão copiada de uma de suas habilidades.
        </p>`
    }else if(campeao == "lee sin" || campeao == "Lee sin" || campeao == "Lee" || campeao == "lee"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Um mestre das artes marciais ancestrais de Ionia, Lee Sin é um lutador de princípios fortes que canaliza a essência do espírito do dragão para enfrentar qualquer desafio.
        <br><br>HABILIDADES<br><br>
        PASSIVA - AGITAÇÃO - Após Lee Sin usar uma habilidade, seus próximos 2 ataques básicos recebem Velocidade de Ataque e recuperam Energia.
        <br>Q - ONDA SÔNICA / ATAQUE RESSONANTE - Onda Sônica: Lee Sin projeta uma onda sonora para localizar seus inimigos, causando Dano Físico ao primeiro que encontrar. Se Onda Sônica atingir um inimigo, Lee Sin pode conjurar Ataque Ressonante nos próximos 3 segundos. Ataque Ressonante: Lee Sin avança no inimigo atingido por Onda Sônica, causando Dano Físico baseado na Vida perdida do alvo.
        <br>W - PROTEGER / VONTADE DE FERRO - Proteger: Lee Sin avança até um alvo aliado, protegendo a si mesmo do dano. Se o aliado for um Campeão, ele também é protegido. Após usar Proteger, Lee Sin pode conjurar Vontade de Ferro dentre os próximos 3 segundos. Vontade de Ferro: O treinamento intenso de Lee Sin permite que ele fique mais resistente em combate. Por 4 segundos, ele recebe Roubo de Vida e Vampirismo Mágico.
        <br>E - TEMPESTADE / MUTILAR - Tempestade: Lee Sin golpeia o chão, enviando uma onda de choque que causa Dano Mágico e revela unidades inimigas atingidas. Se Tempestade atingir um inimigo, Lee Sin pode conjurar Mutilar nos próximos 3 segundos. Mutilar: Lee Sin mutila inimigos próximos revelados por Tempestade, reduzindo a Velocidade de Movimento deles por 4 segundos. A Velocidade de Movimento é recuperada gradualmente ao longo da duração.
        <br>R - FÚRIA DO DRAGÃO - Lee Sin executa um poderoso chute giratório, arremessando seu alvo para trás e causando Dano Físico ao alvo e a qualquer inimigo com quem ele colidir. Esses inimigos são lançados ao ar durante um curto período. Essa técnica foi ensinada a ele por Jesse Perring, mas Lee Sin não chuta os jogadores para fora do mapa.   
        </p>`
    }else if(campeao == "leona" || campeao == "Leona"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>Impregnada pelas chamas do sol, Leona é uma guerreira sagrada de Solari que defende o Monte Targon com sua Lâmina Zênite e a Proteção da Aurora.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LUZ DO SOL - Habilidades que causam dano atingem os inimigos com Luz do Sol por 1,5s. Quando Campeões aliados causam dano a esses alvos, a Luz do Sol é consumida para causar Dano Mágico adicional.
        <br>Q - PROTEÇÃO DA AURORA - Leona usa seu escudo para fazer seu próximo ataque básico, causando Dano Mágico adicional e atordoando o alvo.
        <br>W - ECLIPSE - Leona ergue seu escudo para receber redução de dano, Armadura e Resistência Mágica. Quando a duração chegar ao fim, caso haja inimigos próximos, ela causará Dano Mágico a eles e prolongará a duração do efeito.
        <br>E - LÂMINA ZÊNITE - Leona projeta uma imagem solar da sua espada, causando Dano Mágico a todos os inimigos em uma fila. Quando a imagem some, o último campeão inimigo a ser acertado fica imobilizado por um curto periodo e Leona o ataca.
        <br>R - LABAREDA SOLAR - Leona invoca um raio de energia solar do céu, causando dano aos inimigos em uma área. Inimigos no centro da área são atordoados, enquanto inimigos próximos à extremidade sofrem redução de velocidade.
        </p>`
    }else if(campeao == "lillia" || campeao == "Lillia"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Alta <br><br>Extremamente tímida, Lillia, a faunesa feérica, percorre saltitante as florestas de Ionia.
        <br><br>HABILIDADES<br><br>
        PASSIVA - RAMO ONÍRICO - Atingir um Campeão ou monstro com uma habilidade causa dano adicional com base na Vida máxima do alvo ao longo do tempo.
        <br>Q - GOLPES FLORESCENTES - Lillia ganha acúmulos de Velocidade de Movimento passivamente ao atingir inimigos com habilidades. Ela pode ativar esta habilidade para causar Dano Mágico aos inimigos próximos e Dano Verdadeiro adicional na porção externa do círculo.
        <br>W - CUIDADO! IIIP! - Lillia causa dano em uma área próxima, com dano amplificado no centro.
        <br>E - SEMENTE ESPIRAL - Lillia lança uma semente que causa dano e reduz a velocidade dos inimigos atingidos. Caso não atinja nada, Semente Espiral continuará avançando até colidir com uma parede ou alvo.
        <br>R - CADÊNCIA DE NINAR - Todos os inimigos com Pó dos Sonhos são afetados por Sonolência e adormecem em seguida. Esses inimigos sofrem dano adicional se forem acordados de forma abrupta por dano.
        </p>`
    }else if(campeao == "lissandra" || campeao == "Lissandra"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>A magia de Lissandra transforma o poder bruto do gelo em algo sombrio e terrível.
        <br><br>HABILIDADES<br><br>
        PASSIVA - SUBMISSÃO GLACINATA - Quando um Campeão inimigo morre próximo a Lissandra, ele vira um Servo Congelado. Servos Congelados reduzem a velocidade de inimigos próximos e, depois de um intervalo, estilhaçam devido ao frio intenso, causando Dano Mágico a alvos próximos.
        <br>Q - ESTILHAÇO DE GELO - Arremessa uma lança de gelo que se estilhaça ao atingir um inimigo, causando Dano Mágico e reduzindo sua Velocidade de Movimento. Os estilhaços atravessam o alvo, causando o mesmo dano a outros inimigos atingidos.
        <br>W - CÍRCULO ÁRTICO - Prende inimigos próximos em gelo, causando-lhes Dano Mágico e enraizando-os.
        <br>E - CAMINHO GLACIAL - Lissandra cria uma garra de gelo que causa Dano Mágico. Reativar essa habilidade transporta Lissandra ao local atual da garra.
        <br>R - TÚMULO CONGELADO - Se conjurada em um Campeão inimigo, o alvo será congelado e atordoado. Se conjurada em Lissandra, ela se protege em um bloco de gelo sombrio, curando a si mesma enquanto fica inalvejável e invulnerável. Em seguida, o gelo sombrio emana a partir do alvo, causando Dano Mágico e reduzindo a Velocidade de Movimento de inimigos.
        </p>`
    }else if(campeao == "lucian" || campeao == "Lucian"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Lucian, um Sentinela da Luz, é um caçador de espíritos imortais que usa suas pistolas relicárias para persegui-los implacavelmente e, por fim, aniquilá-los.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DISPARO ILUMINADO - Sempre que Lucian usa uma habilidade, seu próximo ataque terá disparo duplo.
        <br>Q - LUZ PERFURANTE - Lucian faz um disparo de luz perfurante através de um alvo.
        <br>W - CHAMA ARDENTE - Lucian dispara um projétil que explode em formato de estrela, marcando e revelando brevemente os inimigos. Ele recebe Velocidade de Movimento por atacar inimigos marcados.
        <br>E - PERSEGUIÇÃO IMPLACÁVEL - Lucian avança rapidamente uma curta distância. Disparo Iluminado reduz o Tempo de Recarga de Perseguição Implacável.
        <br>R - O EXPURGO - Lucian desfere uma torrente de disparos de suas armas.   
        </p>`
    }else if(campeao == "lulu" || campeao == "Lulu"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Moderada <br><br>A maga yordle Lulu é conhecida por conjurar ilusões de sonhos e criaturas fantasiosas enquanto vaga por Runeterra com seu silfo companheiro, Pix.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PIX, O SILFO COMPANHEIRO - Pix faz disparos de energia mágica sempre que o Campeão que estiver seguindo atacar outra unidade inimiga. Os disparos seguem o inimigo, mas podem ser interceptados por outras unidades.
        <br>Q - LANÇA-PURPURINA - Pix e Lulu disparam um raio de energia mágica que causa dano e muita Lentidão aos inimigos atingidos.
        <br>W - CAPRICHOS - Se conjurada sobre um aliado, ela lhe concede Velocidade de Movimento por um curto período de tempo. Se lançado sobre um inimigo, ele é transformado em um adorável bichinho que não pode atacar nem lançar feitiços.
        <br>E - SOCORRO, PIX! - Se conjurada em um aliado, ordena para que Pix pule nele e o proteja. Ela em seguida o segue e ajuda com seus ataques. Se conjurada em um inimigo, ordena para que Pix pule nele e o atinja. Ela o segue e lhe concede visão do inimigo.
        <br>R - CRESCIMENTO VIRENTE - Lulu aumenta o tamanho de um aliado, arremessando ao ar inimigos próximos e concedendo ao aliado uma grande quantidade de Vida adicional. Pelos próximos segundos, tal aliado recebe uma aura que reduz a velocidade de inimigos próximos.
        </p>`
    }else if(campeao == "lux" || campeao == "Lux"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ILUMINAÇÃO - As habilidades de dano de Lux carregam o alvo com energia por 6s. O próximo ataque de Lux incendeia a energia, causando Dano Mágico adicional (com base no nível de Lux) ao alvo.
        <br>Q - LIGAÇÃO DA LUZ - Lux atira uma esfera de luz que se prende e causa dano em até duas unidades inimigas.
        <br>W - BARREIRA PRISMÁTICA - Lux lança sua varinha e uma luz envolve todos os aliados atingidos, protegendo-os contra dano inimigo.
        <br>E - SINGULARIDADE LUCENTE - Dispara uma luz irregular em uma área, reduzindo a velocidade de inimigos próximos. Lux pode detoná-la para causar dano aos inimigos na área de ação.
        <br>R - CENTELHA FINAL - Após acumular energia, Lux dispara um feixe de luz que causa dano a todos os inimigos na área. Além disso, ativa a habilidade passiva de Lux e reinicia a duração do efeito de Iluminação.
        </p>`
    }else if(campeao == "malphite" || campeao == "Malphite"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Baixa <br><br>Uma criatura gigantesca de pedra viva, Malphite pena para impor ordem abençoada em um mundo caótico.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ESCUDO DE GRANITO - Malphite está protegido por uma camada de rocha que absorve dano equivalente a até 10% de sua Vida máxima. Se Malphite não for atingido por alguns segundos, o efeito é recarregado.
        <br>Q - FRAGMENTO SÍSMICO - Malphite arremessa um fragmento de terra no inimigo através do chão, causando dano ao impacto e roubando Velocidade de Movimento por 3s.
        <br>W - TROVOADA - Malphite ataca com tamanha força que cria uma onda sônica. Pelos próximos segundos, seus ataques criam ondas de choque em sua frente.
        <br>E - ESTRONDAR TERRENO - Malphite golpeia o chão, enviando uma onda de choque que causa Dano Mágico com base em sua Armadura e reduz a Velocidade de Ataque dos inimigos por um curto período.
        <br>R - FORÇA INCONTROLÁVEL - Malphite se arremessa em alta velocidade até um local, causando dano aos inimigos e Arremessando-os ao ar.
        </p>`
    }else if(campeao == "malzahar" || campeao == "Malzahar"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Um vidente fanático dedicado à unificação de toda a vida, Malzahar realmente acredita que o Vazio que recém surgiu é o caminho para a salvação de Runeterra.
        <br><br>HABILIDADES<br><br>
        PASSIVA - OSCILAÇÃO DO VAZIO - Caso não tenha sofrido dano ou efeitos de Controle de Grupo recentemente, Malzahar recebe uma enorme redução de dano e imunidade a Controles de Grupo, que duram um curto período após sofrer dano.
        <br>Q - CHAMADO DO VAZIO - Malzahar abre dois portais para o Vazio. Depois de um breve intervalo, eles disparam projéteis que causam Dano Mágico e silenciam Campeões inimigos.
        <br>W - ENXAME DO VAZIO - Malzahar invoca Voidlings para atacar inimigos próximos.
        <br>E - VISÕES MALÉFICAS - Malzahar infecta a mente de seu alvo com visões cruéis de sua própria morte, causando dano ao longo do tempo. Usar as outras habilidades de Malzahar no alvo reiniciará o efeito. Se o alvo for abatido enquanto afligido pelas visões, elas são transmitidas para uma unidade inimiga próxima e Malzahar recebe Mana. Os Voidlings de Malzahar são atraídos para as unidades afetadas.
        <br>R - APERTO ÍNFERO - Malzahar canaliza a essência do Vazio para suprimir o Campeão-alvo sobre uma área de energia negativa.
        </p>`
    }else if(campeao == "maokai" || campeao == "Maokai"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Baixa <br><br>Maokai é um grande ente enfurecido que luta contra os terrores sobrenaturais da Ilhas das Sombras.
        <br><br>HABILIDADES<br><br>
        PASSIVA - - SEIVA MÁGICA - O ataque básico de Maokai também concede cura a ele com um Tempo de Recarga moderado. Sempre que ele conjurar uma habilidade ou for atingido por uma habilidade inimiga, o Tempo de Recarga da cura é reduzido.
        <br>Q - ESMAGAMENTO ESPINHOSO - Maokai empurra inimigos próximos para trás com uma onda de choque, causando Dano Mágico e redução de velocidade.
        <br>W - AVANÇO RETORCIDO - Maokai se transforma em uma massa de raízes ambulante, ficando inalvejável e avançando até o alvo. Ao chegar, ele enraíza o alvo.
        <br>E - ATIRAR MUDAS - Maokai arremessa uma muda na área-alvo para ficar de guarda, sendo mais eficiente em arbustos.
        <br>R - GARRAS DA NATUREZA - Maokai invoca uma parede colossal de espinhos que avança lentamente, causando dano e enraizando inimigos no caminho.
        </p>`
    }else if(campeao == "master yi" || campeao == "Master yi" || campeao == "Master" || campeao == "master"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Moderada <br><br>Master Yi treinou seu corpo e afiou sua mente para que pensamento e ação se tornassem quase um só. Embora ele prefira recorrer à violência como último recurso, a leveza e a velocidade de sua espada garantem uma resolução sempre veloz.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ATAQUE DUPLO - A cada alguns ataques básicos consecutivos, Master Yi ataca duas vezes.
        <br>Q - ATAQUE ALPHA - Master Yi se teleporta pelo campo de batalha tão rápido que não pode ser visto, causando Dano Físico a várias unidades pelo caminho enquanto fica inalvejável. O Ataque Alpha pode causar Acerto Crítico e Dano Físico adicional contra monstros. Ataques básicos reduzem o Tempo de Recarga de Ataque Alpha.
        <br>W - MEDITAR - Master Yi rejuvenesce seu corpo com a força da mente, restaurando Vida e recebendo dano reduzido por um curto período. Além disso, ele recebe acúmulos de Ataque Duplo e pausa a duração restante de Estilo Wuju e de Highlander para cada segundo de canalização.
        <br>E - ESTILO WUJU - Concede Dano Verdadeiro adicional em ataques básicos.
        <br>R - HIGHLANDER - Master Yi se movimenta com extrema agilidade, aumentando temporariamente sua Velocidade de Ataque e de Movimento, e tornando-se imune a todos os efeitos de redução de velocidade. Abates ou assistências de Campeões estendem a duração de Highlander enquanto a habilidade estiver ativa. Reduz passivamente o Tempo de Recarga das outras habilidades a cada abate ou assistência.        
        </p>`
    }else if(campeao == "miss fortune" || campeao == "Miss fortune" || campeao == "Miss Fortune" || campeao == "Miss" || campeao == "miss "){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Baixa <br><br>Uma capitã de Águas de Sentina famosa por sua aparência e impiedade, Sarah Fortune chama atenção entre os criminosos calejados da cidade portuária.
        <br><br>HABILIDADES<br><br>
        PASSIVA - BATIDA DO AMOR - Miss Fortune causa Dano Físico adicional sempre que usar um ataque básico em um novo alvo.
        <br>Q - DOIS POR UM - Miss Fortune dispara contra um inimigo, causando dano a ele e a um alvo atrás dele. Ambos os acertos também podem aplicar Batida do Amor.
        <br>W - DESFILANDO - Miss Fortune ganha Velocidade de Movimento passivamente quando não está sendo atacada. Esta habilidade pode ser ativada para conceder Velocidade de Ataque adicional por um curto período. Enquanto está em Tempo de Recarga, Batida do Amor reduz o Tempo de Recarga restante de Desfilando.
        <br>E - CHUVA DE DISPAROS - Miss Fortune revela uma área com uma saraivada de balas, causando ondas de dano e reduzindo a velocidade dos oponentes.
        <br>R - METENDO BALA - Miss Fortune canaliza uma saraivada de balas em formato de cone à sua frente, causando muito dano aos inimigos. Cada remessa de Metendo Bala pode causar Acerto Crítico.     
        </p>`
    }else if(campeao == "mordekaiser" || campeao == "Mordekaiser"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Morto e renascido duas vezes, Mordekaiser é um cruel comandante de uma época perdida. Ele usa a arte da necromancia para aprisionar almas e torná-las submissas pela eternidade.
        <br><br>HABILIDADES<br><br>
        PASSIVA - - ASCENSÃO DAS TREVAS - Mordekaiser recebe uma poderosa aura de dano e Velocidade de Movimento depois de acertar 3 ataques ou habilidades contra Campeões inimigos.
        <br>Q - OBLITERAR - Mordekaiser golpeia o chão com sua maça, causando dano a cada inimigo atingido. O dano é aumentado quando atingir um único inimigo.
        <br>W - INDESTRUTÍVEL - Mordekaiser armazena o dano que ele causa e recebe para criar um escudo. Ele pode consumir o escudo para se curar.
        <br>E - APERTO MORTAL - Mordekaiser puxa todos os inimigos em uma área.
        <br>R - REINO DA MORTE - Mordekaiser arrasta sua vítima com ele para uma dimensão diferente e rouba uma porção de seus atributos. Se abater sua vítima, ele mantém os atributos até que ela ressurja.
        </p>`
    }else if(campeao == "morgana" || campeao == "Morgana"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Baixa <br><br>Dividida entre sua natureza mortal e celestial, Morgana prendeu suas asas para preservar sua humanidade e inflige sua dor e amargura nos desonestos e corruptos.
        <br><br>HABILIDADES<br><br>
        PASSIVA - - SIFÃO DA ALMA - Morgana drena o espírito dos seus inimigos, curando-se conforme causa dano a Campeões, tropas grandes e monstros grandes.
        <br>Q - LIGAÇÃO DAS TREVAS - Morgana prende um inimigo no lugar com magia sombria, forçando-o a sentir a dor que provocou e causando Dano Mágico.
        <br>W - SOMBRA ATORMENTADA - Morgana conjura uma sombra amaldiçoada em uma área, causando dano aos inimigos que ousarem permanecer em seu círculo sombrio. Eles sofrem Dano Mágico ao longo do tempo, que aumenta quanto mais suas Vidas estiverem baixas.
        <br>E - ESCUDO NEGRO - Morgana abençoa um aliado com uma barreira protetora de fogo estelar que absorve Dano Mágico e efeitos de desarme até que quebre.
        <br>R - GRILHÕES DA ALMA -  Morgana libera a força total de seu poder celestial conforme desprende suas asas e flutua acima do chão. Ela lança correntes de dor sombria nos Campeões inimigos próximos, ganhando Velocidade de Movimento em direção a eles. As correntes causam redução de velocidade e um dano inicial e, depois de um intervalo, atordoarão aqueles que não conseguirem quebrá-las.
        </p>`
    }else if(campeao == "nami" || campeao == "Nami"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Moderada <br><br>Uma jovem e obstinada vastaya dos mares, Nami é uma das primeiras integrantes da tribo Marai a sair das ondas e se aventurar na terra seca, onde seus antigos acordos com os targonianos foram quebrados.
        <br><br>HABILIDADES<br><br>
        PASSIVA - MARÉ OSCILANTE - Quando as Habilidades de Nami atingem Campeões aliados, eles recebem Velocidade de Movimento por um curto período.
        <br>Q - PRISÃO AQUÁTICA - Lança uma bolha na área-alvo, causando dano e atordoando todos os inimigos ao impacto.
        <br>W - VAZANTE E FLUXO - Desfere um jato de água que salta entre Campeões aliados e inimigos, curando os aliados e causando dano aos inimigos.
        <br>E - BÊNÇÃO DA CONJURADORA - Fortalece um Campeão aliado por uma curta duração. Os ataques básicos e habilidades do aliado causam Dano Mágico adicional e reduzem a velocidade do alvo.
        <br>R - MARÉ VIOLENTA - Invoca uma grande Maré Violenta que arremessa ao ar, reduz a velocidade e causa dano aos inimigos atingidos. Aliados atingidos recebem o efeito dobrado de Maré Oscilante.
        </p>`
    }else if(campeao == "nasus" || campeao == "Nasus"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Nasus é um majestoso Ascendente com cabeça de chacal da antiga Shurima; uma figura heroica considerada semideus pelo povo do deserto.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DEVORADOR DE ALMAS - Nasus drena a energia espiritual de seu inimigo, acumulando Roubo de Vida adicional.
        <br>Q - ATAQUE SIFÃO - Nasus ataca seu inimigo, causando dano e aumentando o poder do próximo Ataque Sifão se o alvo for abatido.
        <br>W - MURCHAR - Nasus envelhece um campeão inimigo, reduzindo sua Velocidade de Movimento e de Ataque ao longo do tempo.
        <br>E - FOGO ESPIRITUAL - Nasus libera uma chama espiritual em um local, causando dano e reduzindo a Armadura dos inimigos que pisarem nela.
        <br>R - FÚRIA DAS AREIAS - Nasus libera uma poderosa tempestade de areia que atinge inimigos próximos. Enquanto a tempestade estiver ativa, ele recebe Vida e Alcance de Ataque adicionais, causa dano a inimigos próximos, reduz o Tempo de Recarga de Ataque Sifão e recebe Armadura e Resistência Mágica adicionais.      
        </p>`
    }else if(campeao == "nautilus" || campeao == "Nautilus"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>O golias armadurado conhecido como Nautilus, uma lenda solitária, tão velha quantos as primeiras docas que afundaram em Águas de Sentina, vaga pelas águas escuras da costa das Ilhas da Chama Azul.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ÂNCORA IMPACTANTE - O primeiro Ataque de Nautilus a um alvo causa Dano Físico aumentado e Enraíza-o brevemente.
        <br>Q - LANÇAR ÂNCORA - Nautilus arremessa sua âncora à frente. Se acertar um inimigo, ele puxa a si mesmo e ao alvo para perto um do outro, causando Dano Mágico. Se acertar um terreno, Nautilus avança em direção a ele.
        <br>W - IRA DO TITÃ - Nautilus recebe um Escudo temporário. Enquanto o Escudo persistir, seus Ataques causam dano ao longo do tempo ao alvo e a inimigos próximos.
        <br>E - CORRENTEZA - Nautilus cria três ondas explosivas ao redor de si. Cada explosão causa dano e Lentidão aos inimigos.
        <br>R - CARGA DE PROFUNDIDADE - Nautilus lança uma onda de choque na terra que persegue o oponente. Essa onda rasga a terra em cima dela, arremessando os inimigos ao ar. Quando ela alcança o oponente, a onda de choque explode, arremessando o alvo ao ar e atordoando ele.           
        </p>`
    }else if(campeao == "neeko" || campeao == "Neeko"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Nativa de uma tribo vastaya há muito esquecida, Neeko consegue se misturar em qualquer multidão, assumindo a aparência dos outros e até mesmo absorvendo parte de seu estado emocional para identificar de imediato quem é amigo ou inimigo.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ENCANTO INERENTE - Neeko pode se parecer com um Campeão aliado. Sofrer dano de Campeões inimigos ou conjurar habilidades de dano quebram o disfarce.
        <br>Q - EXPLOSÃO FLORESCENTE - Neeko arremessa uma semente, causando Dano Mágico. A semente floresce novamente ao atingir Campeões ou abater unidades.
        <br>W - METAMORFA - Neeko passivamente causa Dano Mágico adicional a cada terceiro ataque e pode ativar a habilidade para enviar um clone em uma direção.
        <br>E - FARPAS EMARANHADAS - Neeko arremessa um emaranhado que causa dano e enraíza tudo o que atravessa. Se o emaranhado abater um inimigo ou atravessar um Campeão, ele aumentará de tamanho, terá mais velocidade e enraizará por mais tempo.
        <br>R - FLORESCER REPENTINO - Após uma curta preparação, Neeko salta no ar e recebe um escudo. Ao aterrissar, inimigos próximos sofrem dano e atordoamento. A preparação fica oculta se Neeko estiver disfarçada.
        </p>`
    }else if(campeao == "nidalee" || campeao == "Nidalee"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Criada na mais profunda das selvas, Nidalee é uma rastreadora especialista que pode se transformar em um puma à sua vontade.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ESPREITAR - Mover-se pelos arbustos aumenta a Velocidade de Movimento de Nidalee em 10% por 2 segundos, aumentando para 30% em direção a campeões inimigos visíveis dentre 1400 de alcance. Atingir Campeões ou monstros com Arremessar Lança ou Arapuca aciona uma Caçada, que concede Visão Mágica deles por 4 segundos. Durante esse tempo, Nidalee recebe 10% de Velocidade de Movimento (aumentando para 30% em direção ao alvo Caçado) e o uso de Bote ou Investida contra o alvo é aprimorado.
        <br>Q - ARREMESSAR LANÇA / BOTE - Na forma humana, Nidalee arremessa uma lança perfurante em seu alvo, que acumula dano enquanto está no ar. Como puma, seu próximo ataque irá tentar ferir o inimigo de maneira letal, causando dano inversamente proporcional à Vida do alvo.
        <br>W - ARAPUCA / INVESTIDA - Na forma humana, Nidalee posiciona uma armadilha para seus oponentes descuidados que, quando ativada, causa dano e os revela. Em forma de puma, ela salta em uma direção, causando dano na área em que aterrissar.
        <br>E - ÍMPETO SELVAGEM / PATADA - Na forma humana, Nidalee canaliza o espírito do puma para curar seus aliados e lhes concede Velocidade de Ataque por um curto período de tempo. Em forma de puma, ela golpeia em uma direção, causando dano aos inimigos à sua frente.
        <br>R - ASPECTO DO PUMA - Nidalee transforma-se em um puma, recebendo novas habilidades.
        </p>`
    }else if(campeao == "nocturne" || campeao == "Nocturne"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Moderada <br><br>Uma fusão demoníaca provinda dos pesadelos que assombram todas as mentes sencientes, a coisa conhecida como Nocturne se tornou uma força primordial de puro terror.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LÂMINAS SOMBRIAS - A cada poucos segundos, o próximo ataque de Nocturne atinge os inimigos ao seu redor para causar Dano Físico adicional e curá-lo. Os ataques básicos de Nocturne reduzem esse Tempo de Recarga.
        <br>Q - PORTADOR DO ANOITECER - Nocturne lança uma lâmina de sombras que causa dano, deixa um Rastro do Crepúsculo e faz com que os Campeões deixem um Rastro do Crepúsculo. Enquanto estiver no rastro, Nocturne ignora colisões com unidades e ganha aumento de Velocidade de Movimento e de Dano de Ataque.
        <br>W - PROTEÇÃO DAS TREVAS - Nocturne fortalece suas lâminas, ganhando Velocidade de Ataque passivamente. Ativar Proteção das Trevas permite que Nocturne desapareça em meio às sombras, criando uma barreira mágica que bloqueia uma única habilidade inimiga e dobra a Velocidade de Ataque passiva dele caso bem-sucedida.
        <br>E - HORROR INDESCRITÍVEL - Nocturne coloca um pesadelo na mente de seu alvo, causando dano a cada segundo e aterrorizando-o caso ele não saia de seu alcance enquanto durar a habilidade.
        <br>R - PARANOIA - Nocturne reduz o raio de visão de todos os Campeões inimigos e ainda remove a visão que eles têm dos aliados. Depois ele pode se arremessar contra um Campeão inimigo que estiver próximo.
        </p>`
    }else if(campeao == "nunu" || campeao == "Nunu"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>Era uma vez um garoto que queria provar a todos que poderia ser um herói indo matar um terrível monstro... mas que no fim descobriu que esse monstro era um solitário yeti mágico que só queria um amigo.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CHAMADO DE FRELJORD - Nunu aumenta as Velocidades de Ataque e de Movimento de Willump e de um aliado próximo, além de fazer com que os ataques básicos de Willump causem dano a inimigos ao redor do alvo.
        <br>Q - CONSUMIR - Willump dá uma mordida em uma tropa, monstro ou Campeão inimigo, causando dano e se curando.
        <br>W - A MAIOR BOLA DE NEVE DE TODAS! - Willump cria uma bola de neve que aumenta em velocidade e tamanho conforme ele a rola. Ela causa dano a inimigos e os arremessa ao ar.
        <br>E - RAJADA DE BOLAS DE NEVE - Nunu arremessa múltiplas bolas de neve que causam dano a inimigos. Ao terminar, Willump enraíza quaisquer Campeões ou monstros grandes que foram atingidos por uma delas.
        <br>R - ZERO ABSOLUTO - Nunu e Willump criam uma poderosa nevasca em uma área, causando lentidão aos inimigos e um dano massivo quando se encerrar.
        </p>`
    }else if(campeao == "olaf" || campeao == "Olaf"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Baixa <br><br>Uma força desenfreada de destruição, Olaf e seus machados não querem nada além de morrer em um combate glorioso.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FÚRIA BERSERKER - Olaf recebe Velocidade de Ataque com base na Vida perdida dele.
        <br>Q - RESSACA - Olaf arremessa um machado no local-alvo, causando dano e Lentidão aos inimigos que atravessar. Se Olaf apanhar o machado, o Tempo de Recarga da habilidade será reduzido em 4,5s.
        <br>W - GOLPES NEFASTOS - Olaf recebe aumento na Velocidade de Ataque, Roubo de Vida e cura proveniente de todas as origens dependendo de quanta Vida removida tiver.
        <br>E - BALANÇO TEMERÁRIO - Olaf ataca com tal força que causa Dano Verdadeiro a seu alvo e a si mesmo, recuperando o custo de Vida caso destrua o alvo.
        <br>R - RAGNAROK - Olaf fica temporariamente imune a desarmes.
        </p>`
    }else if(campeao == "oriana" || campeao == "Oriana" || campeao == "orianna" || campeao == "Orianna"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Orianna já foi uma menina curiosa de carne e osso, mas agora é uma maravilha tecnológica composta inteiramente de engrenagens.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DANDO CORDA - Os Ataques de Orianna causam Dano Mágico adicional. O dano aumenta a cada vez que ela Ataca o mesmo alvo.
        <br>Q - COMANDO: ATACAR - Orianna comanda sua Esfera para avançar no local-alvo, causando Dano Mágico ao longo do caminho (causa menos dano a alvos subsequentes). A Esfera permanece no mesmo lugar após o comando.
        <br>W - COMANDO: DISSONÂNCIA - Orianna comanda que sua Esfera desfira um pulso de energia, causando Dano Mágico ao seu redor. Isso deixa para trás um campo que aumenta a Velocidade de Movimento de aliados e causa Lentidão aos inimigos.
        <br>E - COMANDO: PROTEGER - Orianna comanda que sua Esfera se prenda a um Campeão aliado, concedendo a ele um Escudo e causando Dano Mágico a qualquer inimigo que ela atravessar em seu trajeto. Além disso, a Esfera concede Armadura e Resistência Mágica adicionais ao Campeão ao qual estiver presa.
        <br>R - COMANDO: ONDA DE CHOQUE - Orianna comanda sua Esfera para desferir uma onda de choque, causando Dano Mágico e deslocando inimigos próximos em direção à Esfera após um curto intervalo.
        </p>`
    }else if(campeao == "ornn" || campeao == "Ornn"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>Ornn é o espírito Freljordano da forja e da artesania. Ele trabalha na solidão de uma enorme fornalha, construída a marteladas por entre as cavernas de lava do vulcão Pedra-Lar.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FORJA VIVA - Ornn recebe Armadura e Resistência Mágica adicionais de todas as origens. Ele pode gastar ouro para forjar itens não consumíveis em qualquer lugar. Além disso, ele pode criar itens magistrais para si mesmo e para seus aliados.
        <br>Q - RUPTURA VULCÂNICA - Ornn bate no chão, dispersando uma fissura que causa dano e reduz a velocidade dos inimigos atingidos. Após um breve intervalo, um pilar de magma se forma no ponto final.
        <br>W - FÔLEGO DO FOLE - Ornn avança cuspindo fogo. Inimigos atingidos pelo último sopro de fogo tornam-se Frágeis.
        <br>E - INVESTIDA CALCINANTE - Ornn se lança em investida, causando dano aos inimigos sobre os quais passar. Se Ornn colidir com o terreno enquanto estiver em investida, o impacto criará uma onda de choque que causará dano e arremessará os inimigos ao ar.
        <br>R - CHAMADO DO DEUS DA FORJA - Ornn invoca um elemental gigante em um ponto, que viaja até ele cada vez mais rápido. Inimigos atropelados pelo elemental sofrem dano, têm a velocidade reduzida e ficam Frágeis. Ornn pode reconjurar a habilidade para dar uma investida no elemental para redirecioná-lo na direção em que ele o acertar, fazendo com que o elemental arremesse ao ar todos os inimigos que ele atingir, causando o mesmo dano e reaplicando Frágil.
        </p>`
    }else if(campeao == "pantheon" || campeao == "Pantheon"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Moderada <br><br>Antes um relutante portador do Aspecto da Guerra, Atreus conseguiu sobreviver quando o poder celestial dentro dele foi morto, recusando-se a sucumbir a um golpe que arrancou estrelas do céu.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DETERMINAÇÃO MORTAL - Após algumas habilidades ou ataques, a próxima habilidade de Pantheon será fortalecida.
        <br>Q - LANÇA METEÓRICA - Pantheon pode fazer uma investida com sua lança ou arremessá-la na direção escolhida.
        <br>W - ESCUDO-COMETA - Pantheon avança em um alvo, causando dano e atordoando-o.
        <br>E - ÉGIDE IMPETUOSA - Pantheon posiciona seu escudo, ficando invulnerável a dano vindo de sua frente e atacando rapidamente com sua lança.
        <br>R - CONSTELAÇÃO CADENTE - Pantheon se prepara, salta para o ar e aterrissa como um cometa no local escolhido.     
        </p>`
    }else if(campeao == "poppy" || campeao == "Poppy"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>Runeterra não está em falta de campeões valentes, mas poucos são tão tenazes quanto Poppy
        <br><br>HABILIDADES<br><br>
        PASSIVA - EMBAIXADORA DE FERRO - Poppy arremessa seu broquel, que bate no alvo e cai no chão. Ela pode apanhá-lo para receber um escudo temporário.
        <br>Q - CHOQUE DO MARTELO - Poppy golpeia com o martelo, causando dano e criando uma área que reduz a velocidade de inimigos e explode após um intervalo.
        <br>W - PRESENÇA INABALÁVEL - Poppy recebe Armadura e Resistência Mágica passivamente, que aumentam quando ela estiver com Vida baixa. Ela pode ativar Presença Inabalável para receber Velocidade de Movimento e impedir avanços inimigos ao seu redor, fazendo com que o inimigo impedido sofra redução de velocidade e fique preso ao chão.
        <br>E - INVESTIDA HEROICA - Poppy avança até o alvo e o empurra para trás. Se o alvo colidir com uma parede, ele será atordoado.
        <br>R - VEREDITO DA GUARDIÃ - Poppy canaliza um golpe com o martelo que empurra inimigos para muito longe.
        </p>`
    }else if(campeao == "pyke" || campeao == "Pyke"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Moderada <br><br>Um arpoador renomado vindo das Docas da Matança nas Águas de Sentina, Pyke deveria ter encontrado sua morte na barriga de um gigante Peixe-Jaula... mas, ainda assim, ele retornou.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DÁDIVA DOS AFOGADOS - Quando Pyke está escondido dos inimigos, ele regenera o dano recebido recentemente de Campeões. Pyke também não ganha Vida máxima adicional de nenhuma fonte, mas ganha DdA adicional.
        <br>Q - ESPETO DE OSSO - Pyke esfaqueia um inimigo à sua frente ou puxa um inimigo em direção a si mesmo.
        <br>W - MERGULHO FANTASMA - Pyke entra em camuflagem e ganha Velocidade de Movimento significativa que decai ao longo do tempo.
        <br>E - RESSACA ESPECTRAL - Pyke avança e deixa para trás um fantasma, que avança até ele e atordoa os Campeões inimigos pelo caminho.
        <br>R - MORTE DAS PROFUNDEZAS - Pyke teleporta até inimigos com Vida baixa e os executa, permitindo que ele conjure a habilidade novamente e concedendo ouro adicional ao aliado que der assistência.
        </p>`
    }else if(campeao == "qiyana" || campeao == "Qiyana"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Na cidade-selva de Ixaocan, Qiyana planeja seu próprio e implacável caminho até o trono de Yun Tal.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PRIVILÉGIO DA REALEZA - O primeiro ataque básico ou habilidade de Qiyana contra cada inimigo causa dano adicional.
        <br>Q - CÓLERA ELEMENTAL / LÂMINA DE IXTAL - Qiyana brande sua arma, causando dano com um efeito adicional baseado no seu elemento.
        <br>W - TERRAFORME - Qiyana avança para um local e encanta sua arma com um elemento. Ataques e habilidades causam dano adicional enquanto sua arma estiver encantada.
        <br>E - AUDÁCIA - Qiyana avança em um inimigo e causa dano.
        <br>R - SUPREMA DEMONSTRAÇÃO DE TALENTO - Qiyana lança uma onda de choque que detona quaisquer elementos que ela acertar, atordoando e causando dano a inimigos próximos.       
        </p>`
    }else if(campeao == "quinn" || campeao == "Quinn"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Quinn é uma cavaleira patrulheira de elite de Demacia que cumpre missões perigosas no coração do território inimigo.
        <br><br>HABILIDADES<br><br>
        PASSIVA - RAPINA - Valor, a águia demaciana de Quinn, periodicamente marca inimigos como Vulneráveis. O primeiro ataque básico de Quinn contra alvos Vulneráveis causará Dano Físico adicional.
        <br>Q - INVESTIDA ANUVIANTE - Quinn chama Valor para marcar um inimigo e prejudicar sua visão antes de causar dano a todos os inimigos na área.
        <br>W - SENTIDOS APURADOS - Passivamente concede Velocidade de Ataque e de Movimento a Quinn após ela atacar um alvo Vulnerável. Ative para fazer com que Valor revele uma grande área próxima.
        <br>E - SALTO - Quinn avança em direção a um inimigo, causando Dano Físico e reduzindo a Velocidade de Movimento do alvo. Ao alcançar seu alvo, ela salta dele, interrompendo-o brevemente, e aterrissa a uma distância próxima de seu alcance máximo de ataque.
        <br>R - RETAGUARDA DO INIMIGO - Quinn e Valor se juntam para voar em alta velocidade. Encerrar a habilidade conjura Bombardeio, que causa dano a inimigos próximos e marca Campeões como Vulnerável.
        </p>`
    }else if(campeao == "rakan" || campeao == "Rakan"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="carbon:manage-protection" data-inline="false"></span> Suporte  |  Dificuldade: Moderada <br><br>Inconsistente e charmoso, Rakan é um conhecido encrenqueiro vastaya e o melhor dançarino de batalha da história da tribo Lhotlan.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PLUMAS MÁGICAS - Rakan recebe um escudo periodicamente.
        <br>Q - PENA RELUZENTE - Lança uma pluma mágica que causa Dano Mágico. Ao atingir um Campeão ou um monstro épico, Rakan pode curar seus aliados.
        <br>W - ENTRADA TRIUNFAL - Avança para um local e, ao chegar, arremessa os inimigos próximos ao ar.
        <br>E - DANÇA DA BATALHA - Voa até um aliado e concede um escudo a ele. Pode ser conjurada novamente sem custo por um breve período.
        <br>R - RAPIDEZ - Recebe Velocidade de Movimento, encantando e causando Dano Mágico ao tocar nos inimigos.     
        </p>`
    }else if(campeao == "rammus" || campeao == "Rammus"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>Idolatrado por muitos, dispensado por alguns e misterioso para todos, Rammus é um ser curioso e enigmático.
        <br><br>HABILIDADES<br><br>
        PASSIVA - CASCO ESPETADO - Os ataques básicos de Rammus causam Dano Mágico adicional, escalando com sua Armadura.
        <br>Q - BOLA DO PODER - Rammus acelera em forma de bola na direção de seus inimigos, causando dano e lentidão nos alvos afetados pelo impacto.
        <br>W - BOLA CURVA DEFENSIVA - Rammus entra em formação de defesa, aumentando drasticamente sua Armadura e Resistência Mágica, amplificando o dano de Casco Espetado e devolvendo o dano a inimigos que causarem ataques básicos a ele. Contudo, sua velocidade também é reduzida neste período.
        <br>E - PROVOCAÇÃO ENLOUQUECEDORA - Rammus provoca um Campeão inimigo ou monstro para um ataque imprudente contra si mesmo. Além disto, ele recebe Velocidade de Ataque adicional por um curto período, embora este efeito seja estendido ao ter qualquer outra habilidade ativa.
        <br>R - TREMORES - Rammus cria ondas de destruição que pulsam do chão, causando dano a inimigos próximos e reduzindo a velocidade deles. As torres recebem o dobro de dano dos Tremores.
        </p>`
    }else if(campeao == "rek'sai" || campeao == "Rek'sai" || campeao == "Reksai" || campeao == "reksai"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Baixa <br><br>A predadora perfeita, Rek'Sai é uma criatura do Vazio sem piedade que anda por túneis no subsolo para emboscar e devorar vítimas desavisadas.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FÚRIA DOS XER'SAI - Rek'Sai gera Fúria ao Atacar e atingir inimigos com habilidades básicas. Enquanto estiver Escavada, ela consome a Fúria para restaurar Vida.
        <br>Q - IRA DA RAINHA / SONDAR PRESAS - Os próximos 3 ataques básicos de Rek'Sai causam Dano Físico adicional a inimigos próximos. Enquanto está enterrada, Rek'Sai lança uma rajada de terra carregada com o poder do Vazio que causa Dano Físico e revela os inimigos atingidos.
        <br>W - ESCAVAR / EMERGIR - Rek'Sai se enterra no chão, recebendo novas habilidades e Velocidade de Movimento aumentada. O alcance de sua visão é reduzido e ela não pode usar ataques básicos. Enquanto enterrada, Rek'Sai pode conjurar Emergir para causar dano e arremessar ao ar os inimigos próximos.
        <br>E - MORDIDA FEROZ / TÚNEL - Rek'Sai morde seu alvo, causando Dano Verdadeiro dobrado se tiver o máximo de Fúria. Enquanto escavada, Rek'Sai cria um Túnel longo, duradouro e reutilizável. Inimigos podem destruí-lo ficando sobre uma das entradas.
        <br>R - INVESTIDA DO VAZIO - Rek'Sai marca seus alvos passivamente ao causar dano. Ela pode ativar essa habilidade para se tornar brevemente inalvejável e saltar até o alvo marcado, causando dano pesado com base na Vida perdida dele.
        </p>`
    }else if(campeao == "rell" || campeao == "Rell"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Baixa <br><br>Produto de um experimento brutal nas mãos da Rosa Negra, Rell é uma arma humana rebelde que está determinada a destruir Noxus.
        <br><br>HABILIDADES<br><br>
        PASSIVA - A FERRO E FOGO - Rell ataca devagar, mas rouba Armadura e Resistência Mágica do alvo ao contato, causando dano adicional com base no valor roubado.
        <br>Q - GOLPE ESTILHAÇADOR - Rell estoca com a lança, causando Dano Mágico às unidades em linha reta e destruindo o Escudo delas. A primeira unidade atingida sofre o roubo de defesa de A Ferro e Fogo. Se Rell estiver vinculada a um aliado com Atrair e Repelir, ambos recuperarão Vida para cada Campeão inimigo atingido por essa Habilidade.
        <br>W - FERROMANTE: QUEDA ESMAGADORA - Passivo: enquanto estiver na montaria, Rell recebe Velocidade de Movimento adicional; já enquanto estiver blindada, ela recebe Armadura e Resistência Mágica adicionais. Ativo: Rell alterna de forma, conjurando uma Habilidade diferente com base na forma. Montaria: Rell veste a armadura e cai sobre os inimigos, Arremessando-os ao ar e recebendo um grande escudo. Blindada: Rell forja a montaria, recebendo um impulso de velocidade e arremessando para trás dela o próximo inimigo que Atacar.
        <br>E - ATRAIR E REPELIR - Rell vincula um pedaço de sua Armadura a outro Campeão aliado, concedendo a ele Armadura e Resistência Mágica enquanto estiverem próximos. Com um vínculo formado, Rell pode conjurar a Habilidade sem alvejar um Campeão aliado para romper a ligação e Atordoar os inimigos que estiverem em sua extensão.
        <br>R - TEMPESTADE MAGNÉTICA - Rell explode em uma fúria magnética, Arrastando violentamente os inimigos próximos em sua direção. Ela então Arrasta os inimigos próximos em direção a si por um curto período, causando Dano Mágico ao longo do tempo.
        </p>`
    }else if(campeao == "renekton" || campeao == "Renekton"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Baixa <br><br>Renekton é um aterrorizante e furioso ser Ascendente dos desertos escaldantes de Shurima. Ele já foi o guerreiro mais estimado de todo o seu império, levando os exércitos da nação a inúmeras vitórias.
        <br><br>HABILIDADES<br><br>
        PASSIVA - DOMÍNIO DA IRA - Os ataques de Renekton geram Fúria, que aumenta quando ele estiver com a Vida baixa. Essa Fúria pode fortalecer suas habilidades com efeitos adicionais.
        <br>Q - ABATER OS INDEFESOS - Renekton brande sua lâmina, causando Dano Físico moderado em todos os alvos ao seu redor e curando-o em uma pequena quantia do dano causado. Caso tenha mais que 50 pontos de Fúria, seu dano e cura aumentam.
        <br>W - PREDADOR DESUMANO - Renekton corta seu alvo duas vezes, causado Dano Físico moderado e atordoamento por 0,75s. Se Renekton tiver mais de 50 de Fúria, ele corta o inimigo três vezes, destruindo escudos de dano no alvo, causando Dano Físico alto e atordoando por 1,5s.
        <br>E - FATIAR E PICAR - Renekton avança, causando dano a unidades em seu caminho. Fortalecido, Renekton causa dano adicional e reduz a Armadura das unidades atingidas.
        <br>R - DOMINUS - Renekton transforma-se em sua forma Tirana, recebendo Vida adicional e causando dano a inimigos ao seu redor. Enquanto estiver nessa forma, ele recebe Fúria periodicamente. 
        </p>`
    }else if(campeao == "rengar" || campeao == "Rengar"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="mdi:sword-cross" data-inline="false"></span> Assassino  |  Dificuldade: Alta <br><br>Rengar é um feroz caçador de troféus vastaya que gosta da emoção proporcionada pela caça e pelo abate de criaturas perigosas.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PREDADOR OCULTO - Enquanto estiver em um arbusto, Rengar salta em seu alvo ao usar um ataque básico. Saltar sem Ferocidade gera Ferocidade. Ao atingir Ferocidade máxima, sua próxima habilidade é fortalecida. Conjurar uma habilidade fortalecida aumenta a Velocidade de Movimento de Rengar por alguns segundos. Abater Campeões inimigos acrescenta troféus ao Colar de Presas de Rengar, concedendo Dano de Ataque adicional.
        <br>Q - SELVAGERIA - O próximo ataque de Rengar desfere uma punhalada brutal que causa dano adicional. Efeito de Ferocidade: causa dano aumentado e concede Velocidade de Ataque.
        <br>W - RUGIDO DE BATALHA - Rengar solta um rugido de batalha, causando dano aos inimigos e curando parte do dano que ele tenha recebido recentemente. Efeito de Ferocidade: quebra efeitos de Controle de Grupo.
        <br>E - BOLEADEIRAS - Rengar arremessa sua boleadeira, reduzindo a velocidade do primeiro alvo atingido por um curto período. Efeito de Ferocidade: enraíza o alvo.
        <br>R - FUROR DA CAÇADA - Rengar ativa seus instintos predatórios, ficando Camuflado e revelando o campeão inimigo mais próximo a ele em um amplo raio ao seu redor. Durante o Furor da Caçada, Rengar recebe Velocidade de Movimento e pode saltar no inimigo perseguido para reduzir sua armadura, mesmo sem estar no arbusto.
        </p>`
    }else if(campeao == "riven" || campeao == "Riven"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Alta <br><br>Outrora mestra das espadas nos esquadrões de Noxus, agora Riven é uma expatriada em uma terra que um dia já tentou conquistar.
        <br><br>HABILIDADES<br><br>
        PASSIVA - LÂMINA RÚNICA - As habilidades de Riven carregam sua lâmina, e seus ataques básicos consomem cargas para causar dano adicional.
        <br>Q - ASAS QUEBRADAS - Riven faz uma série rápida de acertos. Esta habilidade pode ser reativada três vezes em um curto período de tempo. O terceiro golpe empurra para trás os inimigos próximos.
        <br>W - EXPLOSÃO DE KI - Riven emite uma Explosão de Ki, causando dano e atordoamento a inimigos próximos.
        <br>E - VALENTIA - Riven avança uma curta distância e bloqueia o dano recebido.
        <br>R - LÂMINA DO EXÍLIO - Riven fortalece sua arma de recordação com energia, recebendo Dano de Ataque e alcance. Durante este período, ela também pode usar Golpe de Vento, um poderoso ataque à distância, uma vez.      
        </p>`
    }else if(campeao == "rumble" || campeao == "Rumble"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Alta <br><br>Rumble é um jovem inventor irritadiço. Usando nada além de suas próprias mãos e uma pilha de sucata, o yordle briguento construiu um mecha colossal montado com um arsenal de arpões eletrificados e foguetes incendiários.
        <br><br>HABILIDADES<br><br>
        PASSIVA - TITÃ DO FERRO-VELHO - Cada habilidade que Rumble conjura lhe concede Aquecimento. Ao chegar em 50% de Aquecimento, ele entra na Zona de Perigo, concedendo efeitos adicionais a todas as suas habilidades. Ao chegar em 100% de Aquecimento, ele começa a Superaquecer, concedendo dano adicional a seus ataques básicos, mas tornando-o incapaz de conjurar habilidades por alguns segundos.
        <br>Q - COSPE-FOGO - Rumble incinera os inimigos à sua frente, causando Dano Mágico em área de cone por 3 segundos. O dano aumenta enquanto ele estiver na Zona de Perigo.
        <br>W - ESCUDO DE SUCATA - Rumble puxa um escudo que o protege de dano e lhe concede um rápido aumento de velocidade. Enquanto estiver na Zona de Perigo, a resistência do escudo e a velocidade adicional aumentam.
        <br>E - ARPÃO ELÉTRICO - Rumble lança um arpão, eletrocutando seu alvo com Dano Mágico e redução de Velocidade de Movimento. Ele pode carregar 2 arpões por vez. O dano e o percentual de redução de velocidade aumentam enquanto estiver na Zona de Perigo.
        <br>R - O EQUALIZADOR - Rumble dispara um grupo de mísseis, criando uma parede de fogo que causa dano e Lentidão a inimigos.
        </p>`
    }else if(campeao == "ryze" || campeao == "Ryze"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Moderada <br><br>Considerado pela grande maioria como o mago mais habilidoso de Runeterra, Ryze é um arquimago ancião e amargo que carrega um enorme peso.
        <br><br>HABILIDADES<br><br>
        PASSIVA - MAESTRIA ARCANA - As habilidades de Ryze causam dano adicional com base em sua Mana adicional. Ele recebe um percentual de aumento de Mana máxima com base em seu Poder de Habilidade.
        <br>Q - SOBRECARREGAR - Passivamente, as outras habilidades básicas de Ryze redefinem o Tempo de Recarga de Sobrecarregar e carregam uma runa. Quando Ryze conjura Sobrecarregar com 2 runas carregadas, ele recebe um breve surto de Velocidade de Movimento. Ao conjurar, Ryze arremessa uma carga de energia pura em linha reta, causando dano ao primeiro inimigo atingido. Se o alvo estiver afetado por Fluxo, Sobrecarregar causa dano adicional e rebate para inimigos próximos atingidos por Fluxo.
        <br>W - PRISÃO DE RUNA - Ryze prende um alvo em uma prisão de runas, causando dano e reduzindo sua Velocidade de Movimento. Se o alvo estiver afetado por Fluxo, ele é enraizado.
        <br>E - FLUXO DE FEITIÇO - Ryze lança um orbe de puro poder mágico que causa dano a um inimigo e um efeito negativo em todos os inimigos próximos. As habilidades de Ryze têm efeitos adicionais contra a unidade afetada.
        <br>R - PORTAL DE REINOS - Passivamente, Sobrecarregar causa ainda mais dano contra alvos afetados por Fluxo. Ao conjurar, Ryze cria um portal para um local próximo. Após alguns segundos, aliados próximos ao portal são teleportados ao local alvo.
        </p>`
    }else if(campeao == "samira" || campeao == "Samira"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Samira encara a morte nos olhos com confiança inabalável, procurando diversão e adrenalina aonde quer que vá.
        <br><br>HABILIDADES<br><br>
        PASSIVA - IMPULSO AUDACIOSO - Samira gera um combo conforme Ataca ou conjura habilidades de forma alternada. Seus Ataques corpo a corpo causam Dano Mágico adicional. Os Ataques de Samira contra inimigos sob efeitos Imobilizadores a farão avançar ao Alcance de Ataque dela. Se o inimigo estiver afetado por Arremesso ao ar, ela mantém o Arremesso ao ar por um curto período.
        <br>Q - TALENTO NATURAL - Samira dispara um projétil ou golpeia com a espada, causando dano. Se a habilidade for conjurada durante Ímpeto Indomável, ela atinge todos os inimigos no caminho.
        <br>W - VORAGEM AFIADA - Samira gira a espada ao seu redor, causando dano e destruindo projéteis inimigos.
        <br>E - ÍMPETO INDOMÁVEL - Samira avança e atravessa um inimigo ou aliado, cortando inimigos atravessados e recebendo Velocidade de Ataque. Abater um Campeão inimigo reinicia o Tempo de Recarga da habilidade.
        <br>R - GATILHO INFERNAL - Samira dispara uma saraivada de tiros, atingindo todos os inimigos ao redor dela.
        </p>`
    }else if(campeao == "sejuani" || campeao == "Sejuani"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="dashicons:shield-alt" data-inline="false"></span> Tanque  |  Dificuldade: Moderada <br><br>Sejuani é a mãe de guerra Glacinata brutal e implacável da Garra do Inverno, uma das tribos mais temidas de Freljord.
        <br><br>HABILIDADES<br><br>
        PASSIVA - FÚRIA DO NORTE - Após ficar fora de combate, Sejuani recebe Armadura Congelada, que concede Armadura, Resistência Mágica e imunidade a reduções de velocidade. Armadura Congelada persiste por um curto período após Sejuani sofrer dano e Sejuani pode causar dano a um inimigo atordoado para estilhaçá-la, causando muito Dano Mágico.
        <br>Q - ATAQUE DO ÁRTICO - Sejuani avança em investida, lançando os inimigos pelos ares. A investida cessa após acertar um Campeão inimigo.
        <br>W - IRA DO INVERNO - Sejuani usa a sua maça duas vezes, causando dano e aplicando Congelar.
        <br>E - CONGELAMENTO PERMANENTE - Sejuani congela e atordoa um Campeão inimigo que tiver o máximo de acúmulos de Congelar.
        <br>R - PRISÃO GLACIAL - Sejuani arremessa sua boleadeira, congelando e atordoando o primeiro Campeão que acertar, criando uma tempestade de gelo que causa lentidão aos demais inimigos.
        </p>`
    }else if(campeao == "senna" || campeao == "Senna"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="emojione-monotone:bow-and-arrow" data-inline="false"></span> Atirador  |  Dificuldade: Moderada <br><br>Amaldiçoada desde a infância a ser perseguida pelo fenômeno sobrenatural da Névoa Negra, Senna se juntou à ordem dos Sentinelas da Luz e lutou bravamente contra seu destino.
        <br><br>HABILIDADES<br><br>
        PASSIVA - ABSOLVIÇÃO - Quando unidades são abatidas perto de Senna, suas almas são periodicamente aprisionadas na Névoa Negra. Senna pode atacar essas almas para libertá-las, absorvendo a Névoa que as aprisiona na morte. A névoa é o combustível do poder de seu Canhão Relicário, alimentando-o com Dano de Ataque, Alcance de Ataque e Chance de Acerto Crítico. Ataques do Canhão Relicário de Senna demoram mais para disparar, causam dano adicional e concedem a ela brevemente uma parte da Velocidade de Movimento de seu alvo.
        <br>Q - ESCURIDÃO PERFURANTE - Dos canos gêmeos de seu Canhão Relicário, Senna dispara um raio unificado de luz e sombra através do alvo, curando aliados e causando dano a inimigos.
        <br>W - ABRAÇO FINAL - Senna dispara uma onda de Névoa Negra. Se atingir um inimigo, ela o aprisiona ferozmente, enraizando o alvo e tudo que estiver ao redor dele após um curto intervalo.
        <br>E - MALDIÇÃO DA NÉVOA NEGRA - Senna reúne a Névoa que ela armazenou em sua arma e a transforma em uma tempestade ao seu redor, abraçando a escuridão e se tornando um espectro. Os aliados que entram na área são camuflados e também tomam a forma de espectros enquanto a Névoa os envolve. Espectros têm sua Velocidade de Movimento aumentada, são inalvejáveis e escondem suas identidades.
        <br>R - SOMBRA DA ALVORADA - Senna invoca as pedras relicárias dos Sentinelas caídos, dividindo seu canhão relicário em uma miríade de luz e sombra. Ela, então, dispara um raio global que concede escudo a aliados, enquanto causa dano aos inimigos atingidos no centro.
        </p>`
    }else if(campeao == "seraphine" || campeao == "Seraphine"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="subway:power" data-inline="false"></span> Mago  |  Dificuldade: Baixa <br><br>Nascida em Piltover e filha de zaunitas, Seraphine é capaz de ouvir a alma das pessoas. O mundo canta para ela, e ela canta em resposta.
        <br><br>HABILIDADES<br><br>
        PASSIVA - PRESENÇA DE PALCO - Cada terceira habilidade básica será conjurada duas vezes por Seraphine. Conjurar habilidades próximas a aliados também concede dano e alcance adicionais a ela no próximo ataque básico.
        <br>Q - NOTA AGUDA - Seraphine causa dano em uma área.
        <br>W - SOM ENVOLVENTE - Seraphine concede Escudo e Aceleração aos aliados próximos. Caso ela já esteja protegida por um Escudo, também Curará os aliados próximos.
        <br>E - RITMO CONTAGIANTE - Seraphine causa dano e debilita o movimento dos inimigos em linha reta.
        <br>R - BIS - Seraphine causa dano e Encanta os inimigos atingidos, ampliando o alcance a cada Campeão aliado ou inimigo atingido.
        </p>`
    }else if(campeao == "sett" || campeao == "Sett"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg">`
        description.innerHTML = `<p>Função: <span class="iconify" data-icon="ri:boxing-fill" data-inline="false"></span> Lutador  |  Dificuldade: Baixa <br><br>Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus.
        <br><br>HABILIDADES<br><br>
        PASSIVA - OUSADIA DA ARENA - Os ataques básicos de Sett alternam entre socos de direita e esquerda. Socos de direita são levemente mais fortes e rápidos. Como Sett odeia perder, recebe Regeneração de Vida adicional com base na Vida perdida.
        <br>Q - PANCADARIA - Os próximos dois ataques de Sett causam dano adicional com base na Vida máxima do alvo. Ele também recebe Velocidade de Movimento enquanto se move em direção a Campeões inimigos.
        <br>W - CASCA-GROSSA - O dano que Sett sofre é armazenado passivamente como Ousadia. Ao conjurar a habilidade, Sett consome toda a Ousadia armazenada em troca de um escudo e desfere um soco em uma área, causando Dano Verdadeiro no centro e Dano Físico nas laterais.
        <br>E - QUEBRA-CRÂNIO - Sett puxa todos os inimigos de cada lado seu, causando dano e atordoando. Caso haja inimigos somente de um lado, eles sofrem redução de velocidade em vez de atordoamento.
        <br>R - HORA DO SHOW - Sett carrega um Campeão inimigo pelos ares e o arremessa no chão, causando dano e redução de velocidade a todos os inimigos que estiverem próximos ao local de aterrissagem.
        </p>`
    }else if(campeao == "e" || campeao == "E"){
        champion.innerHTML = `<img class="imgChampion2" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/F_0.jpg">`
        description.innerHTML = `<p>Função: Lutador  |  Dificuldade: Moderada <br><br>
        <br><br>HABILIDADES<br><br>
        PASSIVA -

        </p>`
    }
}
