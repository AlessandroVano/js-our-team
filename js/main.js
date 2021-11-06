/**
 * Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
 */


/******************************************
 *             processi logici
 * ***************************************
 *  */  

//  STAMPAGGIO CARD DEL NOSTRO TEAM

// 1. creare un array di oggetti inserendo l'immagine, il titolo e la descrizione
// 2. richiamare la classe contenitore e creare una funzione con un ciclo for al suo interno per dirgli di creare le altre immagini con nome e ruolo e dirgli di lupparle tutte in sequenza


//   STAMPAGGIO NUOVI UTENTI

// 3.   creazione constanti per inserire i nuovi membri tramite imput e bottone (inseriamo nome, ruolo e immagine e con il click del bottone andiamo ad inserirlo)
// 4. creiamo una funzione attraverso la quale gli diciamo di inserire appunto tutti i nostri contenuti.
// a) evochiamo la funzione,
// 5. inseriamo il bottone con il suo evento click, all'interno di esso ci sarà una costante che richiamerà la funzione dei nuovi membri.
// 6. pushiamo i nostri nuovi membri all'interno dell'array di oggetti per far si generino con il click del bottone, richiamando successivamente anche l'invocazione della prima funzione, per attivare tutto ciò.





// 1.
const membri = [
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',

    },
    {
        foto: 'img/angela-caroll-chief-editor.jpg',
        nome: 'Angela Carrol',
        ruolo: 'Chef Editor',

    },
    
    {
        foto: 'img/walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',

    },
    {
        foto: 'img/angela-lopez-social-media-manager.jpg',
        nome: 'Angela Lopez',
        ruolo: 'Social Media Menager',

    },
    {
        foto: 'img/scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer',

    },
    {
        foto: 'img/barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',

    },
  
]
 console.table(membri);






// 2. 

const teamContainer = document.querySelector('.team-container');

// 3.
 const bottone = document.getElementById('addMemberButton');
const nuovoUtenteNome = document.getElementById('name');
const nuovoUtenteRuolo = document.getElementById('role');
const nuovoUtenteFoto = document.getElementById('image'); 
   




// 2. b)
   generaMembri(membri, teamContainer);   

bottone.addEventListener('click', () => {
   

const nuoviMembri = generazioneNuoviMembri(nuovoUtenteNome,nuovoUtenteRuolo, nuovoUtenteFoto);

membri.push(nuoviMembri);

  generaMembri(membri, teamContainer);  

     
});

/**********************************************************
 *                      SEZIONE FUNZIONI
 ********************************************************/


//2. a)
 /* FUNZIONE STAMPAGGIO NOSTRO TEAM */
function generaMembri(membri, teamContainer) {
    teamContainer.innerHTML = ''; 
    for(let i = 0; i < membri.length; i++) {
        const membriItem = membri[i];

    console.log(membriItem);

     teamContainer.innerHTML += `
     <div class="team-card">
            <div class="card-image">
            <img src="
              ${membriItem.foto}"
              />
            </div>
            <div class="card-text">
            <h3>${membriItem.nome}</h3>
            <p>${membriItem.ruolo}</p>
            </div>
          </div>`;
    }
}

// 3 a)
/* FUNZIONE STAMPAGGIO NUOVI MEMBRI */
 function generazioneNuoviMembri(name, role, image) {

    const nuoviMembriTeam = {

        // (.value) serve fargli leggere cosa scriviamo all'interno degli imput
       nome: name.value, 
       ruolo: role.value,
       immagine: image.value,  
     };
       /* questa sezione serve per pulire i campi e non lasciarli con le cose che abbiamo scritto noi */
     name.value = '';    
     role.value = '';
     image.value = '';

     return nuoviMembriTeam;

    }
   



