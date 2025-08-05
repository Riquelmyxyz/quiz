//Elementos da iterface
const form = document.getElementById("start-form");
const quizDiv = document.getElementById("quiz")
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const resultDiv = document.getElementById("result");

//Variáveis de controle
let studentName = "";
let serie = "";
let disciplina = "";
let currentQuestion = 0;
let score = 0;

//Banco de perguntas separadas por série e disciplina

const questions = {
    "3serie": {
        matematica: [
            {
                question: " Se X é um número real tal que -2 < x < 3, qual das seguintes afirmações é verdadeira?",
                options: ["x pode ser igual a 3", "x pode ser igual a -2 ", "x pode ser igual a 4.","x pode ser igual a 0 ",],
                correct: 3
            },
            {
                question: " Se 'raíz de 2' está localizado entre 1 e 2 na reta numérica, qual das seguintes afirmações é verdadeira?",
                options: ["'raíz de 2' é um número inteiro.", "'raíz de 2' é um número racional.", " é aproximadamente 1,4.","'raíz de 2'é maior que 2."],
                correct: 2
            },
            {
                question: "Qual é a coordenada x do ponto A no plano cartesiano sabendo que ele está localizado no quadrante II?",
                options:["Positiva.", "Negativa.", "Zero.", " Não pode ser determinada.",],
                correct: 1
            },
            {
                question: " Ana foi a um parque de diversões que possui um mapa representado num plano cartesiano. Os seguintes brinquedos estão localizados no mapa: -Carrossel está localizado no ponto C(2,3); -Roda-gigante no ponto R(−4,5); -Montanha-russa no ponto M(−6,−2).Em que quadrante está localizada cada atração?",
                options:["Carrossel no 1º quadrante, roda-gigante no 2º quadrante, montanha-russa no 4º quadrante.", "Carrossel no 2º quadrante, roda-gigante no 1º quadrante, montanha-russa no 3º quadrante.", "Carrossel no 1º quadrante, roda-gigante no 2º quadrante, montanha-russa no 3º quadrante.", "Carrossel no 4º quadrante, roda-gigante no 3º quadrante, montanha-russa no 2º quadrante.",],
                correct: 2
            },
            {
                question: "A cidade de Arvoredo tem dois marcos históricos importantes: a Praça Central, localizada no ponto A(3,4), e a Torre do Relógio, situada no ponto B(7,1) no mapa da cidade, representado em um plano cartesiano. O departamento de turismo da cidade quer colocar placas informativas que indiquem a distância exata entre esses dois marcos. A distância, em unidades de mapa, que será informada é de",
                options:["3 unidades.", "4 unidades", "5 unidades.", "6 unidades.",],
                correct: 2
            },
            {
                question: "Qual a distância entre dois pontos que possuem as coordenadas P (–4,4) e Q (3,4)?",
                options:["4", "5", "6", "7",],
                correct: 3
            },
            {
                question: "Observe no esquema parte da rota de um ônibus. Entre os pontos de parada A e B, deseja-se instalar outro ponto C, tal que a distância entre os pontos A e C seja a mesma que de C a B. Determine as coordenadas do ponto C.",
                options:["(4,5 , 12)", "(0 , 6)", "(4,5 , 6)", "(12 , 4,5)",],
                correct: 2
            },
            {
                question: "Dado um segmento de reta AB cujas extremidades estão nas coordenadas A (1, 3) e B (– 5, – 6), quais são as coordenadas do seu ponto médio?",
                options:["M = (– 1,5; – 2)", "M = (– 2; – 1,5)", "M = (2; 1,5)", " M = (1,5; 2)",],
                correct: 1
            },
            {
                question: "Maria ganha um salário de R$ 3 000,00 por mês. Ela recebeu um aumento de 20%. Qual será o novo salário de Maria?",
                options:["R$ 3 000,00", "R$ 2 400,00", "R$ 3 600,00", "R$ 4 200,00",],
                correct: 2
            },
            {
                question: " Uma loja de roupas está com uma promoção de 25% de desconto em todas as peças. Se uma camisa custa R$ 80,00, qual será o preço da camisa com o desconto?",
                options:["R$ 60,00", "R$ 80,00", "R$ 100,00", "R$ 120,00",],
                correct: 0
            },
            {
                question: "Marília tinha um salário de R$ 1.800,00 e recebeu um aumento de 10%. Quanto Eugênia passou a ganhar? ",
                options:["R$ 1.620,00", "R$ 1.810,00", "R$ 1.980,00", "R$ 2.160,00",],
                correct: 2
            },
            {
                question: "Misael comprou uma assadeira que estava anunciada por R$ 26,00. O dono da loja lhe deu um desconto de 15%. Quanto Marcos pagou pela assadeira?",
                options:["R$ 11,00", "R$ 22,10", "R$ 23,56", "R$ 24,75",],
                correct: 1
            },
            {
                question: "(APA – Crede-CE). Fernando fez uma maquete de dois compartimentos de sua casa e usou pedaços retangulares de madeira com as seguintes dimensões, conforme figura abaixo.",
                options: ["21,2 cm.", "20,2 cm.", " 15,6 cm", "15,2 cm.",],
                correct: 0
            },
            {
                question: "O número de faces de um poliedro convexo que possui 34 arestas é igual ao número de vértices. Quantas faces possui esse poliedro?",
                options: ["18", "20", "36", "34",],
                correct: 0
            },
            {
                question: "(Fuvest) O número de faces triangulares de uma pirâmide é 11. Pode-se, então, afirmar que essa pirâmide possui:",
                options: ["33 vértices e 22 arestas.", "12 vértices e 11 arestas.", "22 vértices e 11 arestas.", "12 vértices e 22 arestas.",],
                correct: 3
            },
   
        ],
        portugues: [
            {
                question: "Leia o fragmento de crônica a seguir para responder às questões de 7 a 9. De quem são os meninos de rua? Eu, na rua, com pressa, e o menino segurou no meu braço, falou qualquer coisa que não entendim presso dizendo que não tinha, certa de que ele estava pedindo dinheiro. Não estava. Queria saber a hora. Talvez não fosse um Menino De Família, mas também não era um Menino De Rua. E assim que a gente divide. Menino De Família é aquele bem-vestido com tênis da moda e camiseta de marca, que usa relógio e a mãe dá outro se o dele for roubado por um Menino De Rua. Menino De Rua é aquele que quando a gente passa perto segura a bolsa com força porque pensa que ele e pivete, trombadinha, ladrão.[...]COLASANTI, Marina. Quem são os meninos de rua? in: COLASANTI, Marina, A casa das palavras.São Paulo: Ática, 2002. (Para gostar de ler).Esse fragmento de crônica aborda principalmente o preconceito relacionado",
                options: ["ao gênero.", "à orientação sexual.", " à idade.","à aparência física.","à classe social.",],
                correct: 4
            },
            {
                question: "No trecho 'Eu, na rua, com pressa, e o menino segurou no meu braço', a ordem dos constituintes da sentença cria um efeito específico. Qual é esse efeito?",
                options: ["Ênfase no sujeito da ação", "Ênfase no objeto da ação.", "Ênfase no local da ação."," Ênfase no tempo da ação.","Ênfase na fala do menino.",],
                correct: 2
            },     {
                question: "Na oração 'a mãe dá outro se o dele for roubado por um Menino De Rua', o trecho em destaque expressa",
                options: ["o sujeito que sofre a ação verbal.", "o objeto da ação verbal.", "o agente que pratica a ação verbal.","o lugar onde se passa a ação verbal.","a ação verbal narrada.",],
                correct: 2
            },     {
                question: "Uma tuiteratura?As novidades sobre o Twitter já não cabem em 4s toques, informações vindas dos EUA dades soard o Tue a marca de 100 milhões de adeptos acaba de ser as cançada dão catade que do Congresso, um dos principais templos da palavra impressa, vai guardar em seu arquivo todos os tweets, semos mensagens do microes, Noi guardar eno meno não chega a tanto, mas já somos o segundo pais com o maior número de tuiteiros. Também aqui o Twitter está sendo aceito em territórios antes musivos do papel. A própria Academia Brasileira de Letras abriu um concurso de microcontos para textos com apenas 140 caracteres. Também se fala das possibilidades literárias desse meio que se caracteriza pela concisão. Já há até um neologismo, 'tuiteratura', para indicar os 'enunciados telegráficos com criações originais, citações ou resumos de obras impressas'. Por ora, pergunto comoões originais, citações querer fazer literatura com palavras de menos não épretensão demais?VENTURA, Z. O Globo, 17 abr. 2010(adaptado).As novas tecnologias estão presentes na sociedade moderna, transformando a comunicação por meio de inovadoras linguagens. O texto de Zuenir Ventura mostra que o Twitter tem sido acessado por um número cada vez maior de internautas e já se insere até na literatura. Neste contexto de inovações linguísticas, a linguagem do Twitter apresenta como característica relevante",
                options: [" a concisão relativa ao texto ao adotar como regra o uso de uma quantidade predefinida de toques", "a frequência de neologismos criados com a finalidade de tornar a mensagem mais popular.", " o uso de expressões exclusivas da nova forma literária para substituir palavras usuais do português.","o emprego de palavras pouco usuais no dia a dia para reafirmar a originalidade e o espírito crítico dos usuários desse tipo de rede social.","o uso de palavras e expressões próprias da mídia eletrônica para restringir a participação de usuários.",],
                correct: 0
            },     {
                question: "Qual das seguintes alternativas melhor descreve o gênero textual crônica?",
                options: [" A crônica se concentra na apreensão pessoal do cotidiano, proporcionando uma visão única e subjetiva do mundo.", "A crônica adota uma perspectiva política e social, explorando questões profundas da literatura marginal e da periferia.", "A crônica é conhecida pela manifestação livre e subjetiva do eu lírico e por não ter foco em questões cotidianas."," A crônica apresenta a múltipla perspectiva da vida humana e social, sem ênfase na visão pessoal do autor.","A crônica é estruturada de forma semelhante ao romance, com uma trama complexa e personagens bem desenvolvidos.",],
                correct: 0
            },     {
                question: "Sobre a crônica e a literatura marginal, pode-se afirmar que",
                options: ["as crônicas focam experiências pessoais e cotidianas, e a literatura marginal se caracteriza pela independência e pela informalidade na produção.", "tanto a crônica quanto a literatura marginal compartilham uma abordagem subjetiva e pessoal, destacando as vivências individuais dos autores.", "a crônica é um gênero literário predominantemente associado a autores renomados, enquanto a literatura marginal é caracterizada por escritores desconhecidos."," a literatura marginal é conhecida por sua preocupação com questões políticas e so-ciais, enquanto a crônica é frequentemente apolítica.","a crônica e a literatura marginal não apresentam diferenças significativas em suas características literárias e estilísticas; além disso, ambas tratam de temas políticos",],
                correct: 0
            },     {
                question: "Leia o seguinte trecho de resumo de trabalho academico para responder as questões: tradição oral pode ser considerada como a base da transmissão do conhecimento de uma geração para a outra dentro das comunidades indígenas. Foi através das narrativas orais que os povos nativos mantiveram seus laços coesos e suas estórias em constante movimentivo obetivo da oratória indígena era transmitir as lendas, os mitos e as canções das comunidades, fazendo com que os aspectos culturais e identitários dos grupos fossem compartilhados e preservados ao longo do tempo. Contudos uma com moldadas para serem lidas, mas antes compartilhadas por meio de performances de contação de estórias. Ou seja, a literatura das sociedades ameríndias era uma literatura de caráter oral, idealizada e difundida pelos mecanismos da tradição oral. (...]SARAIVA, Eduardo de Souza. A literatura dos povos indígenas canadenses e a construção do conhecimento.através da lenda e da tradição oral. in.: Garrafa. Vol. 18. n. 52, Abril-Junho, 2020.1. p. 225-246. A partir das informações do texto, é possível afirmar que a tradição oral",
                options: [" É uma forma obsoleta de preservagao literaria que nao tem relevancia no mundo moderno.", "permite que as histórias e os mitos indígenas sejam compartilhados e preservados, mantendo viva a cultura e a identidade desses povos.", "é exclusiva de alguns povos indígenas e não desempenha um papel significativo na transmissão de histórias e conhecimentos."," é usada apenas para fins cerimoniais e não tem relação com a literatura indígena.","é uma prática literária restrita aos povos indígenas do continente americano e não é relevante em outras partes do mundo.",],
                correct: 1
            },     {
                question: "Ainda segundo o texto, o mito é uma narrativa simbólica",
                options: ["registrada na modalidade escrita, perdendo a relevância da performance oralizada.", "registrada na modalidade escrita, mas sem perder a relevância da performance oral.", "desenvolvida na modalidade escrita, perdendo relevância quando oralizada.","desenvolvida na modalidade escrita, mas sem perder relevância quando oralizada."," desenvolvida em qualquer modalidade (oral ou escrita) desde que siga a tradição.",],
                correct: 1
            },     {
                question: "Leia o texto a seguir para responder às questões 23 e 24. [...] O BookTube (...] é uma comunidade de canais do YouTube em que os usuários, os chamados booktubers, compartilham suas resenhas orais acerca dos livros que le-ram, entre outras atividades envolvendo o mundo literário. O BookTube hoje possui um número muito expressivo de canais brasileiros cujos usuários, para dar sustentação verbal às suas necessidades enunciativas, utilizam a resenha de livro como um dos gêneros mais praticados entre eles. [...] ARAÚJO, Júlio; ANDRADE, Francisco Rogiellyson da Silva; LIMA, Janyele Gadelha de. Videorresenhas do Booktube: uma análise da organização sociorretórica desse gênero. Trabalhos em Linguística Aplicada, Campinas, v. 60, n. 3, p. 853-864, nov. 2021. Disponível em: https://www.scielo.br/j/tla/a/tGWF9ZpcVB3J9wnMSpj43Ns/#. Ácesso em: 13 nov. 2023. A criação de novos gêneros textuais resulta em novas formas de consumo. Assim, é possível dizer que há características que diferenciam resenhas tradicionais das videorrese-nhas. Com base nessa afirmação, escolha a alternativa que não envolve as possibilidades oferecidas por resenhas audiovisuais.",
                options: ["Modificação e adaptação do texto, influenciadas pela mudança no meio de divulgação.", "Acesso facilitado às resenhas, devido à disponibilidade do material em qualquer dispositivo com conexão à internet.", "Diminuição da qualidade do conteúdo, caracterizado pela informalidade que pode reduzir a profundidade da crítica."," Ampliação do alcance das resenhas e outros gêneros textuais, devido à facilidade proporcionada pela internet.","Formação de uma comunidade on-line de entusiastas interessados no mesmo tópico.",],
                correct: 0
            },     {
                question: "Considerando as diferenças entre resenhas e videorresenhas, leia as afirmativas a seguir. I Ambas se diferenciam pela forma de produção e divulgação do material. II. A única diferença da resenha em relação à videorresenha é ser produzida no formato escrito. III. As videorresenhas ganharam espaço após o crescimento do YouTube. Pode-se considerar verdadeiro o que está contido em",
                options: ["I e III.", "II e III.", " I, apenas."," II, apenas.","todas as afirmativas.",],
                correct: 0
            },     {
                question: "",
                options: ["", "", "","","",],
                correct: 0
            },
            

        ]
        
        

    },
    "9ano": {
        matematica: [
            {
                question: "Um número decimal foi escrito na forma fracionária 1/4.A representação percentual desse número é:",
                options: ["400%", "25%", "4,16%","0,25%","",],
                correct: 0
            },
            {
                question: "Lorena elaborou uma atividade avaliativa de Geografia com 20 questões ao todo. Algumas dessas questões valiam 4 pontos e as outras, 8 pontos. O estudante que conseguir resolver corretamente todas as questões dessa atividade obtém uma pontuação máxima de 100 pontos. Quantas questões dessa atividade valiam 4 pontos?  ",
                options: ["10", "12", "15","20","",],
                correct: 0
            },
            {
                question: "Durante um festival gastronômico de 5 dias, a organização anotou o número de visitantes por dia. Os registros foram os seguintes: Dia 1: 742 visitantes, Dia 2: 963 visitantes, Dia 3: 875 visitantes, Dia 4: 902 visitantes, Dia 5: 622 visitantes. A diferença entre o dia com maior número de visitantes e o dia com menor número foi de:",
                options: ["253 pessoas", "340 pessoas", "361 pessoas","963 pessoas","",],
                correct: 0
            },
            {
                question: "Considere a seguinte sequência numérica: 1º termo: 7, 2º termo: 11, 3º termo: 15, 4º termo: 19 ... e assim por diante.Qual é a expressão algébrica que fornece cada termo dessa sequência em função da sua posição n?",
                options: ["3n + 4", "4n + 3", "4n","7n","",],
                correct: 0
            },
            {
                question: "Considere a equação: y=2x+1. Essa é uma equação do 1º grau que representa uma reta crescente no plano cartesiano. Qual das alternativas a seguir melhor descreve o gráfico dessa equação?",
                options: ["Uma reta horizontal passando pelo ponto (0, 1)", "Uma reta decrescente passando pelos pontos (0, 1), (1, -1), (2, -3)", "Uma reta crescente passando pelos pontos (0, 1), (1, 3), (2, 5)"," Uma parábola com vértice na origem","",],
                correct: 0
            },
            {
                question: "Ítalo comeu 20 gramas de um pacote de biscoito. Ele observou que 5 gramas desse pacote de biscoito possuem o valor energético de 160 quilocalorias. Qual é o valor energético, em quilocaloria, dessa quantidade de biscoito que Ítalo comeu?  ",
                options: ["640 quilocalorias.", " 480 quilocalorias.", "175 quilocalorias. ","160 quilocalorias.","",],
                correct: 0
            },
            {
                question: "Um ponto R está localizado em uma reta numérica entre os números 10 e 40. Essa reta está dividida em 30 partes iguais, e o ponto R está localizado exatamente na 17ª marca. Qual é o valor correspondente ao ponto R?",
                options: ["13,4", "19,3", "22,4","31,7","",],
                correct: 0
            },
            {
                question: "Um professor de música dá aulas individuais de violão e de canto. Cada um de seus alunos de violão faz 2 aulas por semana. Na última semana, esse professor deu 28 aulas de canto, além das aulas de violão. No total, ele deu 50 aulas nessa semana. Na última semana, quantos alunos fizeram aulas de violão com esse professor? ",
                options: ["11", "20", "22","39","",],
                correct: 0
            },
            {
                question: "Em uma empresa, o setor responsável pela contratação dos funcionários realizou um processo seletivo para contratar 9 funcionários. As idades dos novos funcionários são: 31, 21, 31, 21, 26, 30, 31, 31 e 30. Qual é a mediana das idades dos novos funcionários? ",
                options: ["26", "28", "30","31","",],
                correct: 0
            },
            {
                question: "Diego e Denise estudam na mesma turma. Na última prova de matemática que fizeram, a nota de Diego foi igual a 3,4 pontos. Já a nota de Denise foi 2,5 vezes maior que a nota de Diego. Qual foi a nota de Denise nessa prova? ",
                options: [" 2,5.", " 5,9.", " 8,3.","8,5.","",],
                correct: 0
            }, 
            {
                question: "Rafaela possuía um plano de internet que disponibilizava 400 megabits por segundo (Mbps) de velocidade. Ela trocou seu plano por um novo que disponibiliza 60% a mais de velocidade. Qual é a velocidade, em megabits por segundo, disponibilizada nesse novo plano? ",
                options: ["240 Mbps.", "460 Mbps.", "560 Mbps. ","640 Mbps.","",],
                correct: 0
            },  
            {
                question: "Quatro pontos M, N, O e P estão representados em um plano cartesiano com as seguintes coordenadas: M = (3, 2), N = (2, 1), O = (1, 4), P = (0, 0)",
                options: ["", "", "","","",],
                correct: 0
            },  
            {
                question: "",
                options: ["", "", "","","",],
                correct: 0
            },  

        ],
        portugues: [
            {
                question: "Impedidas: machismo e violência no futebol Mansplaining é quando um homem explica algo a uma mulher de forma didática e condescendente, como se ela não fosse capaz de entender sozinha. Esse comportamento ainda é comum no futebol, um ambiente historicamente machista. Na reportagem 'Impedidas', a jornalista Camila Alves apresenta relatos de mulheres do esporte que enfrentam preconceito, assédio e outras formas de exclusão, mostrando que a luta por espaço e respeito continua dentro e fora do campo. Qual é o tema principal da reportagem?",
                options: ["Os problemas do futebol brasileiro em geral", "A vida das mulheres brasileiras", "O preconceito enfrentado por mulheres no futebol","O mansplaining nas diversas áreas da sociedade","",],
                correct: 2
            },
            {
                question: "'A escola pública dos nossos sonhos': Muitos brasileiros dizem querer uma escola pública de qualidade, mas, na prática, tratam essa escola como algo que não é para seus próprios filhos, e sim para 'os outros', os menos favorecidos. Essa visão reforça os problemas já existentes, como baixos salários de professores, infraestrutura ruim e má gestão. O autor defende que, se a sociedade realmente visse a escola pública como um lugar onde seus filhos também estudariam, haveria muito mais esforço e dedicação para transformá-la. Já existem boas iniciativas e avanços, mas é preciso mudar a forma como enxergamos a escola pública: ela deve ser um direito e uma escolha de todos, não apenas de quem não pode pagar.",
                options: ["criar uma escola pública que nunca será usada pelas elites", "manter a escola pública voltada apenas aos mais pobres", "construir uma escola pública para todos, não só para os menos favorecidos","apontar os obstáculos da escola pública de qualidade","",],
                correct: 2
            },
            { 
                question: `Leia a reportagem a seguir. Depois, responda à questão.
            Incêndios no Pantanal: por que o fogo ainda ameaça o ecossistema mesmo após a chegada das chuvas
            [...]
            “Os atuais focos de calor são situações naturais no Pantanal, por causa das condições climáticas adversas, com poucas chuvas em alguns pontos e muito calor. Não é um absurdo que ainda haja incêndios”, diz o tenente-coronel Dércio Santos, diretor-adjunto operacional do Corpo de Bombeiros de Mato Grosso.
            Mas Santos pondera que “é importante aguardar uma confirmação científica legal, após uma análise aprofundada” para confirmar se esses incêndios foram causados por raios ou pelo fogo que reacendeu.
            Levantamentos na região apontaram que os incêndios no Pantanal, entre julho e outubro, foram causados pelo homem. Não havia registro de raios que poderiam justificar um fogo natural no bioma, porque não houve chuva entre junho e setembro.
            Pesquisadores dizem que o fogo se propagou rapidamente principalmente por causa da seca extrema na região neste ano — a pior em quase cinco décadas — e pela demora do poder público em intervir para controlar os incêndios.
            [...]
            
            A respeito das opiniões manifestadas na reportagem, assinale a alternativa correta.`,
                options: [
                    "Os pesquisadores e o diretor do Corpo de Bombeiros apresentam o mesmo posicionamento.",
                    "Os pesquisadores e o diretor do Corpo de Bombeiros concordam parcialmente em alguns pontos.",
                    "Os pesquisadores e o diretor do Corpo de Bombeiros discordam totalmente das causas dos incêndios.",
                    "Os pesquisadores e o diretor do Corpo de Bombeiros não estão opinando sobre o mesmo assunto."
                ],
                correct: 1
            },
            
            
            { 
                question: `Leia o texto e responda à questão.
            “Reabertura segura das escolas deve ser prioridade”, alertam Unicef, Unesco e Opas/OMS
            Organizações alertam para impactos do longo período de fechamento das escolas na vida de crianças e adolescentes, e pedem que sejam priorizados investimentos urgentes para reabri-las com segurança, de acordo com a situação da pandemia em cada localidade.
            Priorizar a reabertura segura das escolas e garantir o direito de crianças e adolescentes à educação são ações essenciais. Essa reabertura deve ocorrer com segurança, preservando a saúde de crianças, adolescentes, profissionais da educação e das famílias de todos. Para tanto, é fundamental avaliar a situação da pandemia em cada estado e em cada município, assegurando investimentos financeiros para que a retomada aconteça de forma segura.
            É o que defendem o Fundo das Nações Unidas para a Infância (Unicef), a Organização das Nações Unidas para a Educação, a Ciência e a Cultura (Unesco) e a Organização Pan-Americana da Saúde/Organização Mundial da Saúde (Opas/OMS).
            “O fechamento das escolas tem impactos profundos na vida de crianças e adolescentes. Com o início da pandemia no Brasil, em março, estima-se que 44 milhões de estudantes ficaram longe das salas de aula. Tendo em vista as diferentes realidades brasileiras, as opções de atividades para a continuidade das aprendizagens em casa não estão se dando de forma igual para todos. Manter as escolas fechadas por muito tempo pode agravar ainda mais as desigualdades de aprendizagem no país, impactando em especial meninas e meninos em situação de vulnerabilidade”, explica Florence Bauer, representante do Unicef no Brasil.
            “Preocupa, também, o tema da saúde mental. O tempo prolongado de isolamento, longe da escola e dos amigos, tem impactos profundos na vida de crianças e adolescentes. A isso se unem o problema da má nutrição, uma vez que muitas crianças se alimentam prioritariamente na escola, e a proteção contra a violência”, afirma. Grande parte da violência contra meninas e meninos acontece dentro de casa, e o isolamento pode colocá-los em uma situação de risco ainda maior. Além disso, com os adultos retornando a seus postos de trabalho, em especial nas comunidades mais vulneráveis, as crianças correm o risco de ficar sozinhas ou aos cuidados de irmãos e vizinhos e, com isso, mais expostas à negligência e ao trabalho infantil.
            [...]
            
            Conforme apresentado no texto, uma das ideias que ajudam a comprovar o impacto do fechamento das escolas na vida das crianças é:`,
                options: [
                    "Ao ficar sozinha em casa, a criança fica exposta à negligência e ao trabalho infantil.",
                    "A avaliação da situação de pandemia em cada estado e em cada município.",
                    "A necessidade de investimentos urgentes para reabrir as escolas.",
                    "A distância das crianças da escola por tempo prolongado."
                ],
                correct: 0
            },
            
            { 
                question: `Leia o trecho da reportagem abaixo para responder à questão.
            Cresce a leitura entre crianças, mas 48% dos brasileiros não leem, aponta a Retratos da Leitura
            A pesquisa Retratos da Leitura revela, em sua 5ª edição, que o número de brasileiros que se dizem leitores caiu.
            [...]
            São muitos dados ruins – e o principal é que diminuiu de 56% para 52% o número de leitores no Brasil. A pesquisa entende o leitor como alguém que leu, inteiro ou em partes, pelo menos um livro nos três meses anteriores ao levantamento. Quem não leu deu os seguintes motivos, entre outros menos significativos: falta de tempo (34%), não gosta (28%), não tem paciência (14%), prefere outras atividades (8%), tem dificuldade para ler (6%).
            Caiu o número de leitores no geral, mas cresceu o de crianças leitoras entre os 5 e 10 anos – a única faixa etária que teve um desempenho melhor em 2019 do que em 2015 – a Retratos da Leitura é feita a cada quatro anos desde 2007. Entre elas, 48% disseram que leem por gosto, porcentagem que vai diminuindo gradativamente e aponta para um dado preocupante. Nas duas pesquisas anteriores, de 2011 e 2015, houve uma manutenção no porcentual de leitores dos 11 aos 17 anos. Agora, vemos uma queda a partir dos 11 anos, segundo explica Zoara Failla, coordenadora da pesquisa. Ela, porém, é otimista e acredita que o aumento da leitura entre as crianças menores pode ter impacto positivo na faixa seguinte na próxima pesquisa. Isso se não perdermos esses leitores quando eles chegarem ao Fundamental 2.
            [...]
            
            A reportagem acima foi feita baseada nos resultados da pesquisa Retratos da Leitura, acerca dos hábitos de leitura da população brasileira. A respeito das opiniões da jornalista e da coordenadora da pesquisa, presentes no trecho, assinale a alternativa correta.`,
                options: [
                    "Tanto a jornalista quanto a coordenadora apresentam um posicionamento positivo em relação aos resultados da pesquisa.",
                    "A jornalista apresenta um posicionamento mais pessimista em relação aos dados, enquanto a coordenadora da pesquisa é um pouco mais otimista.",
                    "A jornalista apresenta um posicionamento mais otimista, enquanto a coordenadora da pesquisa apresenta um otimismo parcial.",
                    "A jornalista não expressa sua opinião na reportagem."
                ],
                correct: 1
            },
            
            { 
                question: `Leia o trecho abaixo, retirado de um artigo de opinião, e responda ao que se pede.
            A dificuldade de estabelecer e manter relacionamentos intergeracionais
            Neste último fim de semana, li no UOL algo que me interessou: “Veto de crianças em casamento é moda, mas pode pegar mal para noivos”. Ao ler a reportagem, fiquei sabendo que muitos noivos não querem a presença de crianças na cerimônia de seu casamento e que deixam isso muito claro no convite.
            [...]
            Ao ler a reportagem citada, não fiquei surpresa. Faz tempo que temos tido dificuldade de estabelecer e manter relacionamentos intergeracionais e que temos retirado de situações públicas as crianças e os velhos, principalmente. Temos, portanto, um bom convite à reflexão sobre o estilo de vida que temos adotado.
            [...]
            As famílias enfrentam dificuldades de convivência devido, em parte, a essa nossa dificuldade de relacionamento intergeracional. Muitos pais não conseguem ensinar aos filhos de idades diferentes a convivência respeitosa e amigável entre eles.
            Empresas também enfrentam o desafio de formar equipes de trabalho com a presença de colegas com idades distantes: os mais velhos não compreendem os mais jovens e os criticam, e estes não sabem muito bem como integrar-se com os mais experientes e mais velhos do que eles em uma mesma tarefa.
            Fica bem mais difícil viver dessa maneira, segregados em grupos etários. Por isso, podemos e precisamos mudar algumas de nossas concepções sobre a vida. Primeiramente, é preciso lembrar: todos fomos crianças, e todos seremos velhos.
            [...]
            
            De acordo com a leitura do artigo, é possível concluir que a tese defendida pela articulista é a de que é preciso:`,
                options: [
                    "Formar equipes de trabalho com a presença de pessoas mais jovens e mais experientes.",
                    "Refletir sobre as dificuldades de convivência familiar.",
                    "Refletir sobre os relacionamentos intergeracionais em nossa sociedade.",
                    "Reconhecer as dificuldades dos relacionamentos intergeracionais."
                ],
                correct: 2
            },
            
            {
                question: "",
                options: ["", "", "","","",],
                correct: 0
            },
            {
                question: "",
                options: ["", "", "","","",],
                correct: 0
            },
            {
                question: "",
                options: ["", "", "","","",],
                correct: 0
            },
            {
                question: "",
                options: ["", "", "","","",],
                correct: 0
            },

        ]
    }
    
};
//Ao enviar o formulário, iniciamos o quiz
form.addEventListener("submit", function (e){
    e.preventDefault();

    //Capturar os dados dos estudantes
    studentName = document.getElementById("name").value;
    serie = document.getElementById("serie").value;
    disciplina = document.getElementById("disciplina").value;

    //Verificar se todos os campos foram preenchidos
    if (!studentName || !serie || !disciplina) return;

    //esconde o formulário e mostra a primeira pergunta
    form.style.display = "none";
    quizDiv.style.display = "block";
    showQuestion();
});

//Exibe a pergunta atual
function showQuestion() {
    const q = questions[serie][disciplina][currentQuestion];
    questionText.textContent = q.question;
    answersDiv.innerHTML = "";

    //Atualiza barra de progresso
    const total = questions[serie][disciplina].length;
    const percent = ((currentQuestion)/ total) * 100;
    document.getElementById("progress").style.width = `${percent}%`;

    // Cria os botões de resposta
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
            const buttons = answersDiv.querySelectorAll("button");

            buttons.forEach((b, i) =>{
                b.disabled = true;
                if(i === q.correct) {
                    b.classList.add("correct");
                } else if (i === idx) {
                    b.classList.add("wrong");
                }
            });
            if (idx === q.correct) score++;
            nextButton.style.display = "block";
        };
        answersDiv.appendChild(btn);
    });
}
// Avança para a próxima pergunta ou exibe resultado
nextButton.addEventListener("click", () => {
    currentQuestion++;
    nextButton.style.display = "none";

    const total = questions[serie][disciplina].length;
    if (currentQuestion < total) {
        showQuestion();
    } else {
        showResult();
    }
});

// Exibe o resultado final
function showResult() {
    quizDiv.style.display = "none";
    resultDiv.style.display = "block";

    //Enche a barra de progresso
    document.getElementById("progress").style.width = `100%`;

    const total = questions[serie][disciplina].length;
    const nota = (score / total) * 10;

    resultDiv.innerHTML = `
    <h2>Resultado de ${studentName}</h2>
    <p><strong>Disciplina:</strong> ${disciplina.toUpperCase()} | <strong>Série:</strong> ${serie}</p>
    <p><strong>Nota final:</strong> ${nota.toFixed(1)} / 10</p>
    <p style="font-size:1.2em;">
    ${nota >= 6 ? "🎉 Parabéns! Continue assim!" : "Você pode melhorar, continue estudando!"}
    </p>
    `;
}
