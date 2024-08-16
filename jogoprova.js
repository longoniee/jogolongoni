let vida = 0
let força = 80
let inventario = []

function Ira(){
    alert("Após um infeliz acidente de mergulho, ele decidiu se concentrar na natação e conquistou seu lugar na equipe nacional aos 15 anos. Em 2022, voce deixou o Irã e buscou asilo, onde interrompeu suas atividades de natação por sete meses devido ao período desafiador de asilo.")
   
    alert("Em 2022, voce deixou o Irã e buscou asilo, onde interrompeu suas atividades de natação por sete meses devido ao período desafiador de asilo.")
}



function ReinoUnido (){
    alert("voce acabou se estabelecendo em Guildford, Surrey, onde se sente em paz. Aqui voce começou a treinar novamente sob a orientação do treinador Lee enquanto trabalhava como salva-vidas nos fins de semana.")
   
    alert("Apesar de enfrentar muitos contratempos, voce está atualmente focado em superar seu recorde pessoal nos 200 borboleta em Paris 2024.")
    
    alert("a rotina dele era repleta de treinos de natação e mergulho")
}


function historia() {

}
let checkpoint1 = true;
while (checkpoint1){
alert("a partir daqui começa sua tragetoria\n")

alert("voce e iraniano chamado Matin Balsini")

alert("ele vai passar por varios desafios dificeis ate chegar a olimpiada que é seu sonho")

alert("ele nasceu em teraa uma pequena cidade, e comecou a praticar a natação com 8 anos")
let escolha = Number(prompt("ele não tava tendo uma vida facil e ele quer saber, qual país ele vai \n1 continuar no Ira \n2 Reino Unido \nescolha um pais:"))

if (escolha === 1){
    console.log(alert(" se voce escolheu esse, voce infelizmente nao subira de nivel. voce ganhou medo"))
    inventario.push ("medo")
   vida -=15
   força -=15
    Ira()

}
else if (escolha === 2){
        console.log(alert("se voce escolheu esse, prepare-se para varios desafios dificeis que estao por vir, voce ganhou coragem."))
       checkpoint1 = false;
       inventario.push ("coragem")
       vida += 15
       força += 15
  ReinoUnido()}

    }
    let checkpoint2 = true;
    while (checkpoint2) {
    alert("aqui em seu novo pais voce vai participar de uma corrida na natação para ficar bom antes das olimpiadas")
    
    alert("nessa competição voce tera 6 adversarios e irá tentar ficar em primeiro lugar, e voce devera ter muita raça e força para ganhar")
    
    alert(" voce devara fazer a escolha certa para ir avançando")
    
    let escolha2 = Number(prompt("a corrida deu a largada ja e ele esta em um dos ultimos o que ele pode fazer \n1 Começar a nadar com mais dedicação \n2 Desistir de nadar e parar"))

    if (escolha2 === 1){
        console.log(alert(" se voce escolheu esse, voce conseguiu mudar para a segunda posição!, voce ganhou agilidade."))
        checkpoint2 = false;
        inventario.push ("agilidade")
        vida += 15
        força += 15
        
    }
    else if (escolha2 === 2){
        console.log(alert("se voce escolheu esse, infelizmente voce nao é capaz de chegar ate o final por ser fraco.voce ganhou fraqueza"))
        inventario.push ("fraqueza")
        vida-= 15
        força-= 15
    }
    }
    let checkpoint3 = true;
    while(checkpoint3){
    
    alert("a corrida esta sendo muito dificil mas voce segue com força")
    
    alert("voce esta ficando bem cansado e não pode desistir")
    let escolha3 = Number(prompt("voce esta no pódio e esta preste a alcançar o top 1, mas seu adversario top 3 trapaceou e te puxou, \n1 empurrar ele mas nao alcançar o top 1 \n2 nao fazer nada mas ter a chance de perder posiçoes"))

    if (escolha3 === 1){
        console.log(alert("se voce escolheu empurrar o adversario, voce esta eliminado pois trapaça nao vale!voce ganhou ladrão"))
        inventario.push ("ladrão")
        
    }
    else if (escolha3 === 2){
        console.log(alert("se voces escolheu esse, parabens!voce foi justo de nao roubar, e seu adversario foi desclassificado, e voce permaneceu em segundo lugar ate o final e acabou nao ganhando, voce ganhou jutiça"))
        checkpoint3 = false;
        inventario.push ("justiça")
        vida += 15
        força += 15
    }
    }
    let checkpoint4 = true;
    while(checkpoint4){
     alert("apos fracassar na sua corrida de natação voce ficou muito chateado, mas mesmo assim não desistiu por que voce é muito forte e batalhador")
     
     alert("depois do ocrrido, voce decidiu fazer algumas coisas na academia para fortalecer seu corpo")
     
     alert("voce decidiu ir pela manha do dia seguinte para começar o dia com o pé direito")
     
     alert("chegando na academia voce largou sua mochila no armario e foi começar a praticar")
     let escolha4 = Number(prompt("voce termina de aquecer antes de fazer qualquer exercício e esta em duvida do que fazer \n1 fazer exercicio de braço \n2 fazer exercicio de abdominal"))

     if (escolha4 === 1){
      console.log(alert("se voce escolheu fazer o exercicio de braço, parabens! essa é a opção certa que vai fazer voce ter mais força na remada, voce ganhou força"))
      checkpoint4 = false;
      inventario.push ("força")
      vida += 15
      força += 15
      }
      else if (escolha4 === 2)
      console.log(alert(" essa opção nao ajudaria tanto na sua  melhora fisica, voce ganhou burrice"))
      inventario.push ("burrice")

    } 
    let checkpoint5 = true;
    while(checkpoint5){
    alert("apos longos dias de  treinos de muito esforço e dedicação, chegou finalmente o dia de disputar uma nova competição.")
    
    alert("essa competição irá definir se voce vai se classfificar e competir nas olimpiadas")
    
    alert("voce sabe que nao vai ser facil, mas tem fé e esta preparado!")
     let escolha5 = Number(prompt("voce esta preparado para dar o salto na pscina ja, voce devera ser esperto e pensar com muita atenção para nao fazer nada de errado. \n1 na hora de saltar ser burro e nao nadar com vontade \n2 na hora de saltar, ser esperto e guardar o seu gás para a volta."))

     if (escolha5 === 1){
        console.log(alert("se voce escolheu esse, infelizmente voce acabou perdendo algumas posiçoes, jogue novamente!, desatento"))
        inventario.push ("desatento") 
        vida -=15
        força -=15
    }
     else if (escolha5 === 2)
     console.log(alert("muito bem! voce esta ganhando posiçoes."))
    checkpoint5 = false;
    inventario.push ("inteligencia")
    vida += 15
    força+= 15
    }
    let checkpoint6 = true;
    while(checkpoint6){
    alert("voce deu a primeira volta pela piscina e esta prestes a voltar")
    
    alert("voce esta muito confiante que vai conseguir")
    let escolha6 = Number(prompt("voce esta no meio da segunda volta mas esta em segundo, o primeiro colocado esta um pouco a frente, \n1 usar todo seu gás que tem agora e ganhar a corrida de natação  \n2 continuar nadando mas sem vontade"))
     if (escolha6 === 1){
     console.log(alert("parabens! Voce passou para primeira colocação graças a sua dedicação e seu gás, conseguiu ganhar"))
    checkpoint6 = false;
    inventario.push ("vitorioso")
    vida += 15
    força -= 15
    }
    else if (escolha6 === 2)
    console.log(alert("voce infelizmente não teve uma boa colocação por nao ter esforço e vontade"))
    inventario.push ("desleixo")
    }
    alert("voce passou a semana toda comemorando e descansando depois da corrida")

    alert("depois de algumas semanas, alguns reporters foram na sua residencia de voce para fazer algumas perguntas")

    alert("reporter: \nOla, gostaria de saber como que voce se sente apos ganhar a corrida depois de tanto esforço?")

    let escolha7 = Number(prompt("\n1 eu me sinto muito bem após ter treinado muito e não ter perdido o foco. \n2 estou me sentindo bem, afinal todos os competidores eram muito ruins."))
    alert("certo! voce foi muito bem mesmo")

    let checkpoint7 = true
    while(checkpoint7){
        if (vida += 50 && força >= 130) {
            alert("muito bem! Voce foi classificado para jogar as olimpiadas.")
            checkpoint7 = false
        } else if (vida -= 49 && força < 130) {
            alert("poxa, voce infelizmente não foi classificado para as olimpiadas")
        }
    }
    


    















