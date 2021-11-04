/**
 * Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
 */


// processi logici 

//  STAMPAGGIO CARD DEL NOSTRO TEAM

// 1. creare un array di oggetti inserendo l'immagine, il titolo e la descrizione
// 2. richiamare la classe contenitore e creare una funzione con un ciclo for al suo interno per dirgli di creare le altre immagini con nome e ruolo e dirgli di lupparle tutte in sequenza


//   STAMPAGGIO NUOVI UTENTI
// 3.  A) creazione arrey nuovi membri da inserire nel bottone, creazione funzione per inserirli ad ogni click




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

    }
  
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


    const nuoviMembri = [ 
        {
        nome: 'Michelle Obama',
        ruolo: 'pubbliche relazioni',
        foto:  'img/new-team-member-01.jpg',

    },
    {
        nome: 'Michelle Obama',
        ruolo: 'pubbliche relazioni',
        foto:  'img/new-team-member-02.jpg',

    },
    {
        nome: 'Michelle Obama',
        ruolo: 'pubbliche relazioni',
        foto:  'img/new-team-member-03.jpg',

    },
    {
        nome: 'Michelle Obama',
        ruolo: 'pubbliche relazioni',
        foto:  'img/new-team-member-04.jpg',

    }
]

     membri.push(nuoviMembri);
     console.log(membri);

     generazioneNuoviMembri(nuoviMembri, teamContainer)
     
});




//2. a)
 /* FUNZIONE STAMPAGGIO NOSTRO TEAM */
function generaMembri(membri, teamContainer) {
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
          </div>
        </div>
      </div>`;
    }
}

// 3 a)
/* FUNZIONE STAMPAGGIO NUOVI MEMBRI */
 function generazioneNuoviMembri(nuoviMembri, teamContainer) {
    for(let i = 0; i < nuoviMembri.length; i++) {
    teamContainer.innerHTML +=`
    <div class="team-card">
    <div class="card-image">
    <img
     src="${nuoviMembri[i].foto}"
      
      />
    </div>
    <div class="card-text">
    <h3>${nuoviMembri[i].nome}</h3>
    <p>${nuoviMembri[i].ruolo}</p>
    </div>
  </div>
</div>
</div>`;
    }
} 


