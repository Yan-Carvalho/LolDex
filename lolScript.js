


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
    }
}
