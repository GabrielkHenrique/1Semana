// --- aniversario ---
const startDate = new Date('2025-12-18');

// --- POEMAS ---
// O PRIMEeiro é o que vai sempre aparecer primeiro
const poemsText = `Agora que sinto amor
Tenho interesse nos perfumes.
Nunca antes me interessou que uma flor tivesse cheiro.
---Alberto Caeiro (Fernando Pessoa)

De tudo ao meu amor serei atento
Antes, e com tal zelo, e sempre, e tanto
Que mesmo em face do maior encanto
Dele se encante mais meu pensamento.
---Vinicius de Moraes

Te amo sem saber como, nem quando, nem onde,
te amo diretamente sem problemas nem orgulho:
assim te amo porque não sei amar de outra maneira.
---Pablo Neruda

Amar é mudar a alma de casa.
---Mário Quintana

Estar com você é como encontrar
aquela música que eu procurava
sem saber que existia.
---Desconhecido

O amor não se vê com os olhos,
mas com o coração.
---William Shakespeare

Se o primeiro e o último pensamento do seu dia
for essa pessoa, se a vontade de ficar juntos
chegar a apertar o coração: agradeça.
---Carlos Drummond de Andrade

Amar não é olhar um para o outro,
é olhar juntos na mesma direção.
---Antoine de Saint-Exupéry

Não preciso de mil motivos para sorrir,
você já é o suficiente.
---Autor Desconhecido

Se tu me amas, ama-me baixinho
Não o grites de cima dos telhados
Deixa em paz os passarinhos
Deixa em paz a mim!
Se me queres,
enfim,
tem de ser bem devagarinho, Amada,
que a vida é breve, e o amor mais breve ainda...
---Mário Quintana

Eu te amo porque te amo,
Não precisas ser amante,
e nem sempre sabes sê-lo.
Eu te amo porque te amo.
Amor é estado de graça
e com amor não se paga.
---Carlos Drummond de Andrade

Renda-se, como eu me rendi.
Mergulhe no que você não conhece
como eu mergulhei.
Não se preocupe em entender,
viver ultrapassa qualquer entendimento.
---Clarice Lispector

E tem o seguinte:
eu não quero ter você
para preencher minhas partes vazias.
Quero ser plena sozinha
e quero ser plena com você.
---Rupi Kaur

Teu corpo combina com meu jeito,
Nós dois fomos feitos muito pra nós dois.
Não valeria a pena te beijar,
ter tua companhia,
se não fosse pra ficar.
---Nando Reis

Por você, eu dançaria tango no teto,
eu limparia os trilhos do metrô,
eu iria a pé do Rio a Salvador.
Eu aceitaria
a vida como ela é.
---Barão Vermelho

O amor é a poesia dos sentidos.
Ou é sublime, ou não existe.
Quando existe, existe para sempre
e cresce a cada dia.
---Honoré de Balzac

A medida de amar
é amar sem medida.
---Santo Agostinho

Duvida da luz dos astros,
De que o sol tenha calor,
Duvida até da verdade,
Mas confia em meu amor.
---William Shakespeare

Eu te peço perdão por te amar de repente
Embora o meu amor seja uma velha canção nos teus ouvidos.
---Vinicius de Moraes

O amor é uma companhia.
Já não sei andar só pelos caminhos,
Porque já não posso andar só.
---Alberto Caeiro (Fernando Pessoa)

Amo-te tanto, meu amor... não cante
O humano coração com mais verdade...
Amo-te, enfim, com grande liberdade
Dentro da eternidade e a cada instante.
---Vinicius de Moraes`;

// --- LÓGICA ---
function updateCounter() {
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    // Garante que não mostre número negativo
    const daysToShow = diffDays > 0 ? diffDays : 0;
    
    const text = `${daysToShow} dias com você`;
    
    // Verifica se o elemento existe 
    const counterElement = document.getElementById('fun-counter');
    if (counterElement) {
        counterElement.textContent = text;
    }
}

// --- LÓGICA DOS POEMAs ---
const poems = poemsText.split(/\n\s*\n/).map(block => {
    // Limpa espaços extras
    const cleanBlock = block.trim();
    const lines = cleanBlock.split('\n');
    
    // Pega Autor
    const authorLine = lines[lines.length - 1];
    
    // Pega o resto 
    const text = lines.slice(0, -1).join('\n');
    
    // Limpa os traços 
    const author = authorLine ? authorLine.replace(/---/g, '').trim() : 'Desconhecido';
    
    return { text, author };
}).filter(p => p.text.length > 0); 

let currentIndex = 0;

function showPoem(index) {
    if (poems.length === 0) return;

    const poem = poems[index];
    const textElement = document.getElementById('poemText');
    const authorElement = document.getElementById('poemAuthor');

    if (textElement && authorElement) {
        textElement.style.opacity = 0;
        authorElement.style.opacity = 0;

        setTimeout(() => {
            textElement.textContent = poem.text;
            authorElement.textContent = '— ' + poem.author;
            textElement.style.opacity = 1;
            authorElement.style.opacity = 1;
        }, 200);
    }
}

function nextPoem() {
    let nextIndex;
    if (poems.length > 1) {
        do {
            nextIndex = Math.floor(Math.random() * poems.length);
        } while (nextIndex === currentIndex);
    } else {
        nextIndex = 0;
    }

    currentIndex = nextIndex;
    showPoem(currentIndex);
}

// INICIALIZA TUDO
window.onload = function() {
    updateCounter();
    showPoem(0);
};