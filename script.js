// Données locales pour les pompes à chaleur avec appoint électrique et autres informations
const pompeschaleur = [
    {
        "Modèle": "EPRA14DV37",
        "DepartEau_60": {
            "EXTERIEUR_7": 10.16,
            "EXTERIEUR_M7": 10.06,
            "COP_7": 2.61,
            "COP_M7": 2.01
        },
        "DepartEau_65": {
            "EXTERIEUR_7": 9.91,
            "EXTERIEUR_M7": 9.64,
            "COP_7": 2.27,
            "COP_M7": 1.87
        },
        "DepartEau_70": {
            "EXTERIEUR_7": 8.47,
            "EXTERIEUR_M7": 8.61,
            "COP_7": 1.99,
            "COP_M7": 1.72
        },
        "AppointElectrique": "6 kW de série étagé (2-4-6 kW)",
        "PressionSonore": "30 dB(A)",
        "Fichier": "fichestechniques/DAIKIN250.DOC.3HHT.22 (1).pdf"  // Chemin relatif au fichier PDF
    },
    {
        "Modèle": "EPRA16DV37",
        "DepartEau_60": {
            "EXTERIEUR_7": 11.13,
            "EXTERIEUR_M7": 11.44,
            "COP_7": 2.61,
            "COP_M7": 2.01
        },
        "DepartEau_65": {
            "EXTERIEUR_7": 10.85,
            "EXTERIEUR_M7": 10.96,
            "COP_7": 2.27,
            "COP_M7": 1.87
        },
        "DepartEau_70": {
            "EXTERIEUR_7": 9.52,
            "EXTERIEUR_M7": 9.68,
            "COP_7": 1.99,
            "COP_M7": 1.72
        },
        "AppointElectrique": "6 kW de série étagé (2-4-6 kW)",
        "PressionSonore": "30 dB(A)",
        "Fichier": "fichestechniques/DAIKIN250.DOC.3HHT.22 (1).pdf"
    },
    {
        "Modèle": "EPRA18DV37",
        "DepartEau_60": {
            "EXTERIEUR_7": 12.1,
            "EXTERIEUR_M7": 11.97,
            "COP_7": 2.61,
            "COP_M7": 2.01
        },
        "DepartEau_65": {
            "EXTERIEUR_7": 11.8,
            "EXTERIEUR_M7": 11.47,
            "COP_7": 2.26,
            "COP_M7": 1.87
        },
        "DepartEau_70": {
            "EXTERIEUR_7": 10.58,
            "EXTERIEUR_M7": 10.76,
            "COP_7": 1.99,
            "COP_M7": 1.72
        },
        "AppointElectrique": "6 kW de série étagé (2-4-6 kW)",
        "PressionSonore": "30 dB(A)",
        "Fichier": "fichestechniques/DAIKIN250.DOC.3HHT.22 (1).pdf"
    },
    {
        "Modèle": "Atlantic Alféa Extensa Duo 5 kW",
        "DepartEau_45": {
            "EXTERIEUR_7": 4.50,
            "COP_7": 4.74
        },
        "DepartEau_55": {
            "EXTERIEUR_7": 4.50,
            "COP_7": 3.70
        },
        "AppointElectrique": "3 kW (6 kW en option)",
        "PressionSonore": "39 dB(A)",
        "Fichier": "fichestechniques/notice-installation-alfea-extensa-ai-R32-ecs-atlantic.pdf"
    },
    {
        "Modèle": "Atlantic Alféa Extensa Duo 6 kW",
        "DepartEau_45": {
            "EXTERIEUR_7": 5.50,
            "COP_7": 4.65
        },
        "DepartEau_55": {
            "EXTERIEUR_7": 5.50,
            "COP_7": 3.65
        },
        "AppointElectrique": "3 kW (6 kW en option)",
        "PressionSonore": "42 dB(A)",
        "Fichier": "fichestechniques/notice-installation-alfea-extensa-ai-R32-ecs-atlantic.pdf"
    },
    {
        "Modèle": "Atlantic Alféa Extensa Duo 8 kW",
        "DepartEau_45": {
            "EXTERIEUR_7": 7.50,
            "COP_7": 4.43
        },
        "DepartEau_55": {
            "EXTERIEUR_7": 7.00,
            "COP_7": 3.63
        },
        "AppointElectrique": "3 kW (6 kW en option)",
        "PressionSonore": "42 dB(A)",
        "Fichier": "fichestechniques/notice-installation-alfea-extensa-ai-R32-ecs-atlantic.pdf"
    }
];

// Les autres fonctions restent inchangées...


// Gestion des sélections des boutons
document.querySelectorAll('.temp-ext-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.temp-ext-btn').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('temp-ext').value = this.getAttribute('data-value');
    });
});

document.querySelectorAll('.temp-eau-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.temp-eau-btn').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('temp-eau').value = this.getAttribute('data-value');
    });
});

document.querySelectorAll('.puissance-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.puissance-btn').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('puissance').value = this.getAttribute('data-value');
    });
});

// Gestionnaire d'événements pour la soumission du formulaire
document.getElementById('compapac-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const tempExt = parseFloat(document.getElementById('temp-ext').value);
    const tempEau = parseFloat(document.getElementById('temp-eau').value);
    const puissance = parseFloat(document.getElementById('puissance').value);

    // Vérifie si toutes les valeurs sont sélectionnées
    if (isNaN(tempExt) || isNaN(tempEau) || isNaN(puissance)) {
        alert("Veuillez sélectionner toutes les valeurs avant de soumettre.");
        return;
    }

    // Filtrer et afficher les résultats
    const results = filterPAC(tempExt, tempEau, puissance);
    displayResults(results);
});

// Fonction pour filtrer les pompes à chaleur selon les critères de l'utilisateur
function filterPAC(tempExt, tempEau, puissanceDemandee) {
    let pacLaPlusProche = null;
    let ecartMin = Infinity;

    pompeschaleur.forEach(pac => {
        const pacData = pac[`DepartEau_${tempEau}`];
        if (pacData) {
            const ecart = Math.abs(pacData.EXTERIEUR_7 - puissanceDemandee);
            if (ecart < ecartMin) {
                ecartMin = ecart;
                pacLaPlusProche = pac;
            }
        }
    });

    return pacLaPlusProche ? [pacLaPlusProche] : [];
}

// Fonction pour afficher les résultats
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>Aucune pompe à chaleur ne correspond à vos critères.</p>';
    } else {
        results.forEach(pac => {
            const pacData = pac[`DepartEau_${document.getElementById('temp-eau').value}`];
            const pacElement = document.createElement('div');
            pacElement.classList.add('pac-result');
            pacElement.innerHTML = `
                <h3>Modèle : ${pac.Modèle}</h3>
                <p>Puissance à 7°C (départ d'eau ${document.getElementById('temp-eau').value}°C) : ${pacData.EXTERIEUR_7} kW</p>
                <p>COP à 7°C : ${pacData.COP_7}</p>
                <p>Puissance à -7°C : ${pacData.EXTERIEUR_M7} kW</p>
                <p>COP à -7°C : ${pacData.COP_M7}</p>
                <p><strong>Appoint électrique :</strong> ${pac.AppointElectrique}</p>
                <p><strong>Niveaux de pression sonore :</strong> ${pac.PressionSonore}</p>
                <a href="${pac.Fichier}" download>Télécharger la fiche technique (PDF)</a>
            `;
            resultsDiv.appendChild(pacElement);
        });
    }
}
