const nom = document.getElementById("nom");
const  naissance = document.getElementById("naissance");
const  groupeSanguin = document.getElementById("groupe-sanguin");
const  donneur = document.getElementById("donneur");
const  allergie = document.getElementById("allergie");
const  traitement = document.getElementById("traitement");
const  maladie = document.getElementById("maladie");

const  proche1 = document.getElementById("proche1");
const numProche1 = document.getElementById("numproche1");

const proche2 = document.getElementById("proche2");
const numproche2 = document.getElementById("numproche2");

const medecin = document.getElementById("medecin");
const infos = document.getElementById("infos");
const pin = document.getElementById("pin");


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
const medecinCA = document.getElementById("medecinCA");
const infosCA = document.getElementById("infosCA");

const secours = document.getElementById("secours");
const imprimer = document.getElementById("imprimer");
const effacer = document.getElementById("effacer");

const invisible = document.getElementById("invisible");

const pinVerification = document.getElementById('pinVerification');
const deverouiller = document.getElementById('deverouiller');
const messagePin = document.getElementById('messagePin');


//Permet de mettre à jour directement les infos en remplissant les formulaires

nom.addEventListener("input", () => {
    nomCA.textContent = nom.value;
});
naissance.addEventListener("input", () => {
    naissanceCA.textContent = naissance.value;
});
groupeSanguin.addEventListener("input", () => {
    groupeSanguinCA.textContent = groupeSanguin.value;
});
allergie.addEventListener("input", () => {
    allergieCA.textContent = allergie.value;
});
proche1.addEventListener("input", () => {
    proche1CA.textContent = proche1.value;
});
numProche1.addEventListener("input", () => {
    numproche1CA.textContent = numProche1.value;
});
proche2.addEventListener("input", () => {
    proche2CA.textContent = proche2.value;
});
numproche2.addEventListener("input", () => {
    numproche2CA.textContent = numproche2.value;
});
pin.addEventListener("input", () => {
    if (pin.value !== "")
    {
        pinVerification.style.display = "block";
        deverouiller.style.display = "block";
    }else {
        pinVerification.style.display = "none";
        deverouiller.style.display = "none";
        pinVerification.value = "";
        messagePin.textContent = "";
        invisible.style.display = "none"
        carteDeverouillee = false;
    }
});

traitement.addEventListener("input", () => {
    traitementCA.textContent = traitement.value;
});
maladie.addEventListener("input", () => {
    maladieCA.textContent = maladie.value;
});
medecin.addEventListener("input", () => {
    medecinCA.textContent = medecin.value;
});
infos.addEventListener("input", () => {
    infosCA.textContent = infos.value;
});



//fonction permettant de remplir tout les formulaires par des exemples

const exemple = document.getElementById("exemple");
exemple.addEventListener('click', () => {
     nom.value ="Rowan Atkinson";
     naissance.value = "2002-12-2";
    groupeSanguin.value= "O+";
    allergie.value="pénicilline";
    proche1.value="Maman";
    numProche1.value="034 34 334 34";
    proche2.value="Papa";
    numproche2.value="032 32 332 32";
    traitement.value="Ventoline en cas de crise";
    maladie.value="Asthme";
    medecin.value="Dr Jean Martin";
    infos.value="Vit seul. En cas d'urgence, prévenir ma famille.";
    pin.value =""

    
    invisible.style.display = "block";

    nomCA.textContent = nom.value;
    naissanceCA.textContent = naissance.value;
    groupeSanguinCA.textContent = groupeSanguin.value;
    allergieCA.textContent = allergie.value;
    proche1CA.textContent = proche1.value;
    numproche1CA.textContent = numProche1.value;
    proche2CA.textContent = proche2.value;
    numproche2CA.textContent = numproche2.value;
    traitementCA.textContent = traitement.value;
    maladieCA.textContent = maladie.value;
    medecinCA.textContent = medecin.value;
    infosCA.textContent = infos.value;

    enregistrerInfos();
    progressBar();
});


//fonction permettant d'effacer les infos saisis

effacer.addEventListener('click', () => {

    localStorage.removeItem("carteUrgence");

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
    medecin.value="";
    infos.value="";
    pin.value ="";
    pinVerification.style.display = "none";
    deverouiller.style.display ="none";
    deverouiller.textContent = "Déverouiller";
    messagePin.textContent = "";
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
    medecinCA.textContent = "";
    infosCA.textContent = "";

    invisible.style.display = "none";
    progressBar();
})


const signe1 =document.getElementById('signe1');
const plus1 =document.getElementById('plus1');

signe1.addEventListener('click', () => {
    plus1.textContent= "Non, Tout est enregistré dans ton navigateur, sur cet appareil."
});

const signe2 =document.getElementById('signe2');
const plus2 =document.getElementById('plus2');

signe2.addEventListener('click', () => {
    plus2.textContent= "Ton nom, ton groupe sanguin, tes allergies et ton premier contact.il est lisible par toute personne qui le scanne"
});


//Fonction permettant de remplir ou vider le progress bar

const progress = document.querySelector(".progress-bar");
const valeurPourcentage = document.getElementById("pourcentage");
const infosManquantes = document.getElementById("infosManquantes");
function progressBar() {
    let remplis = 0;
    let total = 13;

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
    if( medecin.value !== "") remplis++;
    if( infos.value !== "") remplis++;
    if( pin.value!== "") remplis++;
    
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
    medecin.addEventListener('input', progressBar);
    infos.addEventListener('input', progressBar);
    pin.addEventListener('input', progressBar);


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
        numproche2: numproche2.value,
        medecin: medecin.value,
        infos: infos.value,
        pin: pin.value
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
    medecin.addEventListener('input', enregistrerInfos);
    infos.addEventListener('input', enregistrerInfos);
    pin.addEventListener('input', enregistrerInfos);



//permettant de récuperer les infos enregistrées

const donneesSauvegardees = localStorage.getItem("carteUrgence");

    if (donneesSauvegardees !== null) {
        const donnees = JSON.parse(donneesSauvegardees);

        nom.value = donnees.nom;
        naissance.value = donnees.naissance;
    groupeSanguin.value=  donnees.groupeSanguin;
    allergie.value= donnees.allergie;
    proche1.value= donnees.proche1;
    numProche1.value= donnees.numProche1;
    proche2.value= donnees.proche2;
    numproche2.value= donnees.numproche2;
    traitement.value= donnees.traitement;
    maladie.value= donnees.maladie;
    medecin.value= donnees.medecin;
    infos.value= donnees.infos;
    pin.value = donnees.pin;

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
    medecinCA.textContent = medecin.value;
    infosCA.textContent = infos.value;
    if (pin.value ===""){
        invisible.style.display = "block";
    }else {
        invisible.style.display = "none";
    }
    carteDeverouillee = false;
    progressBar();
    }


    carteDeverouillee = false;
    //permettant l'impression de la carte rn cliquant sur le bouton imprimmer

    imprimer.addEventListener('click', () => {
        window.print();
    })

    //Verification du PIN
    deverouiller.addEventListener('click', () => {
        if(carteDeverouillee === false) {
            if(pin.value === ""){
            invisible.style.display = 'block';
            carteDeverouillee = true;
            deverouiller.textContent = "verouiller";
            messagePin.textContent = "Aucun PIN défini. La carte est accessible.";
            messagePin.style.color = "orange";
            return;
            }
            if (pin.value !== "" && pinVerification.value === pin.value) {
                invisible.style.display = 'block';
                carteDeverouillee = true;
                deverouiller.textContent = "Verouiller";
                messagePin.textContent = "PIN correct !";
                messagePin.style.color = "green";
            } else {
                messagePin.textContent = "PIN incorrect.";
                messagePin.style.color = "red";
            }
        }else {
            invisible.style.display ="none";
            carteDeverouillee = false;
            deverouiller.textContent = "Deverouiller";
            pinVerification.value ="";
            messagePin.textContent = "Carte verouillée.";
            messagePin.style.color = "red";
        }
        
    });


    function genererQRCode(){
        const qrcode = document.getElementById("qrcode");

        qrcode.innerHTML = "";

        let informationsqr = "";

        if (nom.value !== ""){
            informationsqr += "Nom : " + nom.value + "\n";
        }
        if (naissance.value !== ""){
            informationsqr += "Date de naissance : " + naissance.value + "\n";
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
        if (medecin.value !== ""){
            informationsqr += "Médecin traitant : " + medecin.value + "\n";
        }
        if (maladie.value !== ""){
            informationsqr += "Maladie : " + maladie.value + "\n";
        }
        if (proche1.value !== ""){
            informationsqr += "Contact1 : " + proche1.value + "\n";
        }
        if (numProche1.value !== ""){
            informationsqr += ": " + numProche1.value + "\n";
        }
        if (proche2.value !== ""){
            informationsqr += "Contact1 : " + proche2.value + "\n";
        }
        if (numproche2.value !== ""){
            informationsqr += ": " + numproche2.value + "\n";
        }
        if (infos.value !== ""){
            informationsqr += "Infos: " + infos.value + "\n";
        }

        if (informationsqr !== "") {
            new QRCode(qrcode, {
                text: informationsqr,
                width: 300,
                height: 300
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
    medecin.addEventListener('input', genererQRCode);
    infos.addEventListener('input', genererQRCode);
    pin.addEventListener('input', genererQRCode);

    genererQRCode();