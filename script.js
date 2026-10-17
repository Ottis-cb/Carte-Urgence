const nom = document.getElementById("nom");
const  naissance = document.getElementById("naissance");
const  groupeSanguin = document.getElementById("groupe-sanguin");
const  donneur = document.getElementById("donneur");
const  allergie = document.getElementById("allergie");
const  traitement = document.getElementById("traitement");
const  maladie = document.getElementById("maladie");
const  contact = document.getElementById("contact");

const  proche1 = document.getElementById("proche1");
const numProche1 = document.getElementById("numproche1");

const proche2 = document.getElementById("proche2");
const numproche2 = document.getElementById("numproche2");


const nomCA = document.getElementById("nomCA");
const naissanceCA = document.getElementById("naissanceCA");
const groupeSanguinCA = document.getElementById("groupe-sanguinCA");
const allergieCA = document.getElementById("allergieCA");
const maladieCA = document.getElementById("maladieCA");
const qrcode = document.getElementById("qrcode");
const proche1CA = document.getElementById("proche1CA");
const numproche1CA = document.getElementById("numproche1CA");
const proche2CA = document.getElementById("proche2CA");
const numproche2CA = document.getElementById("numproche2CA");
const appeler = document.getElementById("appeler");
const traitementCA = document.getElementById("traitementCA");
const probleme = document.getElementById("probleme");

const download = document.getElementById("download");
const imprimer = document.getElementById("imprimer");
const effacer = document.getElementById("effacer");

const invisible = document.getElementById("invisible");


//Permet de mettre à jour directement les infos en remplissant les formulaires

nom.addEventListener("input", () => {
    nomCA.textContent = nom.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
naissance.addEventListener("input", () => {
    naissanceCA.textContent = naissance.value + " ans";
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
groupeSanguin.addEventListener("input", () => {
    groupeSanguinCA.textContent = groupeSanguin.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
allergie.addEventListener("input", () => {
    allergieCA.textContent = allergie.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
proche1.addEventListener("input", () => {
    proche1CA.textContent = proche1.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
numProche1.addEventListener("input", () => {
    numproche1CA.textContent = numProche1.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
proche2.addEventListener("input", () => {
    proche2CA.textContent = proche2.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
numproche2.addEventListener("input", () => {
    numproche2CA.textContent = numproche2.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});

traitement.addEventListener("input", () => {
    traitementCA.textContent = traitement.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});
maladie.addEventListener("input", () => {
    maladieCA.textContent = maladie.value;
    contact.textContent = "Contact à prevenir";
    invisible.style.display = "block";
});



//fonction permettant de remplir tout les formulaires par des exemples

const exemple = document.getElementById("exemple");
exemple.addEventListener('click', () => {

    contact.textContent = "Contact à prevenir";


    nom.value ="Rowan Atkinson";
    naissance.value = 18;
    groupeSanguin.value= "O+";
    allergie.value="pénicilline";
    proche1.value="Maman";
    numProche1.value="0343433434";
    proche2.value="Papa";
    numproche2.value="0323233232";
    traitement.value="Ventoline";
    maladie.value="Asthme";
    
    invisible.style.display = "block";

    nomCA.textContent = nom.value;
    naissanceCA.textContent = naissance.value + " ans";
    groupeSanguinCA.textContent = groupeSanguin.value;
    allergieCA.textContent = allergie.value;
    proche1CA.textContent = proche1.value;
    numproche1CA.textContent = numProche1.value;
    proche2CA.textContent = proche2.value;
    numproche2CA.textContent = numproche2.value;
    traitementCA.textContent = traitement.value;
    maladieCA.textContent = maladie.value;

    enregistrerInfos();
    progressBar();
});


//fonction permettant d'effacer les infos saisis

effacer.addEventListener('click', () => {

    localStorage.removeItem("carteUrgence");

    contact.textContent = "";

    nom.value ="";
    naissance.value = "";
    groupeSanguin.value= "";
    allergie.value="";
    proche1.value="";
    numProche1.value="";
    proche2.value="";
    numproche2.value="";
    traitement.value="";
    maladie.value="";

    invisible.style.display = "none";

    nomCA.textContent = "";
    naissanceCA.textContent = "";
    groupeSanguinCA.textContent = "?";
    allergieCA.textContent = "Aucune renseignée";
    proche1CA.textContent = "";
    numproche1CA.textContent = "";
    proche2CA.textContent = "";
    numproche2CA.textContent = "";
    traitementCA.textContent = "";
    maladieCA.textContent = "";

    invisible.style.display = "none";
    progressBar();
})

// Afficher plus d'infos en cliquant sur plus

document.getElementById('signe one').addEventListener('click', function(){

    let r = document.querySelector(".reponse.one");
    r.classList.toggle('active');
    this.textContent = r.classList.contains("active") ? "-" : "+";
});


document.getElementById('signe two').addEventListener('click', function(){
    let r = document.querySelector(".reponse.two");
    r.classList.toggle('active');
    this.textContent = r.classList.contains("active") ? "-" : "+";
});

document.getElementById('signe three').addEventListener('click', function(){
    let r = document.querySelector(".reponse.three");
    r.classList.toggle('active');
    this.textContent = r.classList.contains("active") ? "-" : "+";
});

document.getElementById('signe four').addEventListener('click', function(){
    let r = document.querySelector(".reponse.four");
    r.classList.toggle('active');
    this.textContent = r.classList.contains("active") ? "-" : "+";
});


//Fonction permettant de remplir ou vider le progress bar

const progress = document.querySelector(".progress-bar");
const valeurPourcentage = document.getElementById("pourcentage");
const infosManquantes = document.getElementById("infosManquantes");
function progressBar() {
    let remplis = 0;
    let total = 10;

    if( nom.value !== "") remplis++;
    if( naissance.value !== "") remplis++;
    if( groupeSanguin.value !== "") remplis++;
    if( allergie.value !== "") remplis++;
    if( proche1.value !== "") remplis++;
    if( numProche1.value !== "") remplis++;
    if( proche2.value !== "") remplis++;
    if( numproche2.value!== "") remplis++;
    if( traitement.value !== "") remplis++;
    if( maladie.value !== "") remplis++;
    
    let pourcentage = (remplis / total) * 100;

    if(pourcentage == 100) {
        infosManquantes.textContent = " Penses à vérifier tes informations dans 6 mois.";
        valeurPourcentage.textContent =" ";
    }else if (pourcentage > 71){
        infosManquantes.textContent = " Les informations sont presque complètes.";
    }else {
        infosManquantes.textContent = " Remplis les informations manquantes.";
    }
    progress.style.width = pourcentage + "%";
    valeurPourcentage.textContent =  parseInt(pourcentage) + "%";
}

//permettant de mettre à jour directement le progress bar en remplissant les formulaires
    nom.addEventListener('input', progressBar);
    naissance.addEventListener('input', progressBar);
    groupeSanguin.addEventListener('input', progressBar);
    allergie.addEventListener('input', progressBar);
    proche1.addEventListener('input', progressBar);
    numProche1.addEventListener('input', progressBar);
    proche2.addEventListener('input', progressBar);
    numproche2.addEventListener('input', progressBar);
    traitement.addEventListener('input', progressBar);
    maladie.addEventListener('input', progressBar);

//fonction perme

function enregistrerInfos(){
    const donnees = {
        nom: nom.value,
        naissance: naissance.value,
        groupeSanguin: groupeSanguin.value,
        allergie: allergie.value,
        traitement: traitement.value,
        maladie: maladie.value,
        proche1: proche1.value,
        numProche1: numProche1.value,
        proche2: proche2.value,
        numproche2: numproche2.value
    };

    localStorage.setItem("carteUrgence", JSON.stringify(donnees));
}

//permettant de mettre à jour directement le progress bar en remplissant les formulaires
    nom.addEventListener('input', enregistrerInfos);
    naissance.addEventListener('input', enregistrerInfos);
    groupeSanguin.addEventListener('input', enregistrerInfos);
    allergie.addEventListener('input', enregistrerInfos);
    proche1.addEventListener('input', enregistrerInfos);
    numProche1.addEventListener('input', enregistrerInfos);
    proche2.addEventListener('input', enregistrerInfos);
    numproche2.addEventListener('input', enregistrerInfos);
    traitement.addEventListener('input', enregistrerInfos);
    maladie.addEventListener('input', enregistrerInfos);


//permettant de récuperer les infos enregistrées

const donneesSauvegardees = localStorage.getItem("carteUrgence");

    if (donneesSauvegardees !== null) {
        const donnees = JSON.parse(donneesSauvegardees);

        nom.value = donnees.nom || "";
        naissance.value = donnees.naissance || "";
    groupeSanguin.value=  donnees.groupeSanguin || "";
    allergie.value= donnees.allergie || "";
    proche1.value= donnees.proche1 || "";
    numProche1.value= donnees.numProche1 || "";
    proche2.value= donnees.proche2 || "";
    numproche2.value= donnees.numproche2 || "";
    traitement.value= donnees.traitement || "";
    maladie.value= donnees.maladie || "";

    nomCA.textContent = nom.value || "Nom";
    naissanceCA.textContent = naissance.value;
    groupeSanguinCA.textContent = groupeSanguin.value || "?";
    allergieCA.textContent = allergie.value || "Aucune renseignée";
    proche1CA.textContent = proche1.value;
    numproche1CA.textContent = numProche1.value;
    proche2CA.textContent = proche2.value;
    numproche2CA.textContent = numproche2.value;
    traitementCA.textContent = traitement.value;
    maladieCA.textContent = maladie.value;
    progressBar();
    }

    //permettant l'impression de la carte rn cliquant sur le bouton imprimmer

    imprimer.addEventListener('click', () => {
        window.print();
    })
    

    function genererQRCode(){
        const qrcode = document.getElementById("qrcode");
        qrcode.innerHTML = "";
        let informationsqr = "";

        if (nom.value !== ""){
            informationsqr += "Nom : " + nom.value + "\n";
        }
        if (naissance.value !== ""){
            informationsqr += "Ages: " + naissance.value + "ans" + "\n";
        }
        if (groupeSanguin.value !== ""){
            informationsqr += "Groupe sanguin : " + groupeSanguin.value + "\n";
        }
        if (allergie.value !== ""){
            informationsqr += "Allergies: " + allergie.value + "\n";
        }
        if (traitement.value !== ""){
            informationsqr += "Traitement : " + traitement.value + "\n";
        }
        if (maladie.value !== ""){
            informationsqr += "Maladie : " + maladie.value + "\n";
        }
        if (proche1.value !== ""){
            informationsqr += "Contact1 : " + proche1.value + "\n";
        }
        if (numProche1.value !== ""){
            informationsqr += numProche1.value + "\n";
        }
        if (proche2.value !== ""){
            informationsqr += "Contact2 : " + proche2.value + "\n";
        }
        if (numproche2.value !== ""){
            informationsqr +=  numproche2.value + "\n";
        }

        if (informationsqr !== "") {
            new QRCode(qrcode, {
                text: informationsqr,
                width: 180,
                height: 180
            });
        }
    }

    //Mettre à jour le qr code

    nom.addEventListener('input', genererQRCode);
    naissance.addEventListener('input', genererQRCode);
    groupeSanguin.addEventListener('input', genererQRCode);
    allergie.addEventListener('input', genererQRCode);
    proche1.addEventListener('input', genererQRCode);
    numProche1.addEventListener('input', genererQRCode);
    proche2.addEventListener('input', genererQRCode);
    numproche2.addEventListener('input', genererQRCode);
    traitement.addEventListener('input', genererQRCode);
    maladie.addEventListener('input', genererQRCode);
    genererQRCode();

    //permettant le téléchargement du code qr
    download.addEventListener('click', function(){
   let canvas = document.querySelector("#qrcode canvas");
   if (!canvas) {
      alert('Veuillez générer un Qr code avant de le télécharger.');
      return;
   }
   let lien = document.createElement("a");
   lien.href = canvas.toDataURL('image/png');
   lien.download = "QRCode_Urgence_by_ottis.png";
   lien.click();
});