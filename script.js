let piecesElement = document.querySelector('.pieces')
let carottesElement = document.querySelector('.carottes')
let bleElement = document.querySelector('.ble')
let laitElement = document.querySelector('.lait')
let pateLapinElement = document.querySelector('.pateLapin')
let baconElement = document.querySelector('.bacon')
let farineElement = document.querySelector('.farines')
let graineElement = document.querySelector('.graines')
let oeufsElement = document.querySelector('.oeufs')

let pieces = parseInt(piecesElement.innerHTML) || 0
let carottes = parseInt(carottesElement.innerHTML) || 0
let ble = parseInt(bleElement.innerHTML) || 0
let lait = parseInt(laitElement.innerHTML) || 0
let pateLapin = parseInt(pateLapinElement.innerHTML) || 0
let bacon = parseInt(baconElement.innerHTML) || 0
let farines = parseInt(farineElement.innerHTML) || 0
let graine = parseInt(graineElement.innerHTML) || 0
let oeuf = parseInt(oeufsElement.innerHTML) || 0

let carroteEstCliquée = false
let bleEstCliqué = false
let vacheNourrie = false
let laitEstRécolté = false
let lapinEstNourri = false
let pateLapinEstRecolté = false
let CochonEstNourri = false
let baconEstRecolté = false
let farineEstFabriquée = false
let farineEstRecoltée = false
let pouleNourrie = false
let oeufRecolté = false
let countdownCarotte
let countdownBle
let countdownVache
let countdownLapin
let countdownCochon
let countdownFarine
let countdownPoule
let timeLeftCarotte = 30
let timeLeftBle = 15
let timeLeftVache = 45
let timeLeftLapin = 30
let timeLeftCochon = 90
let timeLeftFarine = 90
let timeLeftPoule = 75
let timerCarottes = document.querySelector('.timer-carotte')
let timerBlé = document.querySelector('.timer-ble')
let timerVaches = document.querySelector('.timer-vache')
let timerLapins = document.querySelector('.timer-lapin')
let timerCochons = document.querySelector('.timer-cochon')
let timerFarines = document.querySelector('.timer-farine')
let timerPoules = document.querySelector('.timer-poule')


function oeufAleatoire() {
    const random = Math.random()
  
    if (random < 0.50) {
      return 1
    }
    else if (random < 0.83) {
      return 2
    }
    else {
      return 3
    }
  }

function timerCarotte() {
    timeLeftCarotte = 30
    mettreAJour()

    if (countdownCarotte) {
        clearInterval(countdownCarotte)
    }

    countdownCarotte = setInterval(function() {
        timeLeftCarotte--
        mettreAJour()

        if (timeLeftCarotte <= 0) {
            clearInterval(countdownCarotte)
            timerCarottes.innerHTML = "30"
        }
    }, 1000)
}

function timerBle() {
    timeLeftBle = 15
    mettreAJour()

    if (countdownBle) {
        clearInterval(countdownBle)
    }

    countdownBle = setInterval(function() {
        timeLeftBle --
        mettreAJour()

        if (timeLeftBle <= 0) {
            clearInterval(countdownBle)
            timerBlé.innerHTML = "15"
        }
    }, 1000)
}

function timerVache() {
    timeLeftVache = 45
    mettreAJour()

    if (countdownVache) {
        clearInterval(countdownVache)
    }

    countdownVache = setInterval(function() {
        timeLeftVache --
        mettreAJour()

        if (timeLeftVache <= 0) {
            clearInterval(countdownVache)
            timerVaches.innerHTML = "45"
        }
    }, 1000)
}

function timerLapin() {
    timeLeftLapin = 60
    mettreAJour()

    if (countdownLapin) {
        clearInterval(countdownLapin)
    }

    countdownLapin = setInterval(function() {
        timeLeftLapin --
        mettreAJour()

        if (timeLeftLapin <= 0) {
            clearInterval(countdownLapin)
            timerLapins.innerHTML = "60"
        }
    }, 1000)
}

function timerCochon() {
    timeLeftCochon = 90
    mettreAJour()

    if (countdownCochon) {
        clearInterval(countdownCochon)
    }

    countdownCochon = setInterval(function() {
        timeLeftCochon --
        mettreAJour()

        if (timeLeftCochon <= 0) {
            clearInterval(countdownCochon)
            timerCochons.innerHTML = "90"
        }
    }, 1000)
}

function timerFarine() {
    timeLeftFarine = 90
    mettreAJour()

    if (countdownFarine) {
        clearInterval(countdownFarine)
    }

    countdownFarine = setInterval(function() {
        timeLeftFarine --
        mettreAJour()

        if (timeLeftFarine <= 0) {
            clearInterval(countdownFarine)
            timerFarines.innerHTML = "90"
        }
    }, 1000)
}

function timerPoule() {
    timeLeftPoule = 75
    mettreAJour()

    if (countdownPoule) {
        clearInterval(countdownPoule)
    }

    countdownPoule = setInterval(function() {
        timeLeftPoule --
        mettreAJour()

        if (timeLeftPoule <= 0) {
            clearInterval(countdownPoule)
            timerPoules.innerHTML = "75"
        }
    }, 1000)
}

function mettreAJour() {
    piecesElement.innerHTML = pieces
    carottesElement.innerHTML = carottes
    bleElement.innerHTML = ble
    laitElement.innerHTML = lait
    pateLapinElement.innerHTML = pateLapin
    baconElement.innerHTML = bacon
    farineElement.innerHTML = farines
    graineElement.innerHTML = graine
    oeufsElement.innerHTML = oeuf
    timerCarottes.innerHTML = timeLeftCarotte
    timerBlé.innerHTML = timeLeftBle
    timerVaches.innerHTML = timeLeftVache
    timerLapins.innerHTML = timeLeftLapin
    timerCochons.innerHTML = timeLeftCochon
    timerFarines.innerHTML = timeLeftFarine
    timerPoules.innerHTML = timeLeftPoule
}

function sauvegarder() {
    localStorage.setItem('pieces', JSON.stringify(pieces))
    localStorage.setItem('carottes', JSON.stringify(carottes))
    localStorage.setItem('ble', JSON.stringify(ble))
    localStorage.setItem('lait', JSON.stringify(lait))
    localStorage.setItem('pateLapin', JSON.stringify(pateLapin))
    localStorage.setItem('bacon', JSON.stringify(bacon))
    localStorage.setItem('farine', JSON.stringify(farines))
    localStorage.setItem('graine', JSON.stringify(graine))
    localStorage.setItem('oeufs', JSON.stringify(oeuf))
    alert("Partie sauvegardée")
}

function restaurer() {
    if (localStorage.getItem('pieces')) {
        pieces = parseInt(localStorage.getItem('pieces'))
        carottes = parseInt(localStorage.getItem('carottes'))
        ble = parseInt(localStorage.getItem('ble'))
        lait = parseInt(localStorage.getItem('lait'))
        bacon = parseInt(localStorage.getItem('bacon'))
        farines = parseInt(localStorage.getItem('farine'))
        graine = parseInt(localStorage.getItem('graine'))
        oeuf = parseInt(localStorage.getItem('oeufs'))
        clearInterval(countdownLapin)
        clearInterval(countdownBle)
        clearInterval(countdownCarotte)
        clearInterval(countdownVache)
        clearInterval(countdownCochon)
        clearInterval(countdownFarine)
        clearInterval(countdownPoule)
        timeLeftCarotte = 30
        timeLeftBle = 15
        timeLeftVache = 45
        timeLeftLapin = 30
        timeLeftCochon = 90
        timeLeftFarine = 90
        timeLeftPoule = 75
        mettreAJour()
    }
    else {
        let boutonChargerPartie = document.querySelector('.bouton-charger-partie')
        boutonChargerPartie.innerHTML = `Aucune partie sauvegardée<br>Donc impossible de charger une sauvegarde`
        setTimeout(function() {
            boutonChargerPartie.innerHTML = 'Charger la partie'
        }, 5000)
    }
}

function supprimer() {
    if (localStorage.getItem('pieces') && localStorage.getItem('carottes') && localStorage.getItem('ble') && localStorage.getItem('lait') && localStorage.getItem('bacon') && localStorage.getItem('farine')) {
        localStorage.clear()
        pieces = 0
        carottes = 0
        ble = 0
        lait = 0
        bacon = 0
        farines = 0
        graine = 0
        oeuf = 0
        mettreAJour()
    } else {
        let boutonSupprimer = document.querySelector('.bouton-suprimer')
        boutonSupprimer.innerHTML = `Aucune sauvegarde créée<br>Donc impossible de supprimer la sauvegarde`
        setTimeout(function() {
            boutonSupprimer.innerHTML = 'Supprimer la sauvegarde'
        }, 5000)
    }
}

function planterCarottes() {
    timerCarotte()
    let plantCarotte = document.querySelector('.plant-carotte')
    plantCarotte.src = 'plantCarotte0.png'
    setTimeout(function () {
        plantCarotte.src = 'plantCarotte1.png'
        carroteEstCliquée = false
        if (!carroteEstCliquée) {
            plantCarotte.addEventListener('click', function() {
                if (!carroteEstCliquée) {
                    plantCarotte.src = 'terre.png'
                    carroteEstCliquée = true
                    carottes += 1
                    mettreAJour()
                }
            })
        }
    }, 30000)
}

function vendreCarottes() {
    if (carottes >= 1) {
        carottes -= 1
        pieces += 5
        mettreAJour()
    }
    else {
        alert('Pas assez de carottes')
    }
}

function planterBle() {
    if (graine >= 1) {
        graine -= 1
    timerBle()
    let plantBle = document.querySelector('.plant-ble')
    plantBle.src = 'plantBle0.png'
    setTimeout(function () {
        plantBle.src = 'plantBle1.png'
        bleEstCliqué = false
        if (!bleEstCliqué) {
            plantBle.addEventListener('click', function () {
                if (!bleEstCliqué) {
                    plantBle.src = 'terre.png'
                    bleEstCliqué = true
                    ble += 1
                    oeufAleatoire()
                    graine += oeufAleatoire()
                    mettreAJour()
                }
            })
        }
    }, 15000)
 }}

function vendreBle() {
    if (ble >= 1) {
        ble -= 1
        pieces += 3
        mettreAJour()
    }
    else {
        alert('Pas assez de blé')
    }
}

function nourirVache() {
    let vache = document.querySelector('.vache')
        if (ble >= 2) {
            timerVache()
            vacheNourrie = true
            laitEstRécolté = false
            ble -= 2
            mettreAJour()
            setTimeout(function() {
                vache.src = 'vacheLait.png'
                if (!laitEstRécolté) {
                    vache.addEventListener('click', function() {
                        if (!laitEstRécolté) {
                            laitEstRécolté = true
                            lait += 1
                            vache.src = 'vache.png'
                            mettreAJour()
                        }
                    })
                }
            }, 60000)
        }
        else {
            alert(`Vous avez ${ble} blé il en faut 2`)
        }
    }


function nourirLapin() {
    let lapin = document.querySelector('.lapin')
        if (carottes >= 2) {
            timerLapin()
            lapinEstNourri = true
            pateLapinEstRecolté = false
            carottes -= 2
            mettreAJour()
            setTimeout(function() {
                lapin.src = 'pateDeLapin.png'
                if (!pateLapinEstRecolté) {
                    lapin.addEventListener('click', function() {
                        if (!pateLapinEstRecolté) {
                            pateLapinEstRecolté = true
                            pateLapin += 1
                            lapin.src = 'lapin.png'
                            mettreAJour()
                        }
                    })
                }
            }, 60000)
        }
        else {
            alert(`Vous avez ${carottes} carottes il en faut 2`)
        }
    }

function vendrePateLapin() {
    if (pateLapin >= 1) {
        pieces += 20
        pateLapin -= 1
        mettreAJour()
    }
    else {
        alert("Pas assez de paté de lapin")
    }
}

function nourirCochon() {
    let cochon = document.querySelector('.cochon')
        if ((carottes >= 2 && ble >= 2)) {
            timerCochon()
            CochonEstNourri = true
            baconEstRecolté = false
            carottes -= 2
            ble -= 2
            mettreAJour()
            setTimeout(function() {
                cochon.src = 'bacon.png'
                if (!baconEstRecolté) {
                    cochon.addEventListener('click', function() {
                        if (!baconEstRecolté) {
                            baconEstRecolté = true
                            bacon += 1
                            cochon.src = 'cochon.png'
                            mettreAJour()
                        }
                    })
                }
            }, 90000)
        }
        else {
            alert(`Vous avez ${carottes} carottes il en faut 2 et ${ble} blé il en faut 2`)
        }
    }

function vendreBacon() {
    if (bacon >= 1) {
        pieces += 35
        bacon -= 1
        mettreAJour()
    }
    else {
        alert("Pas assez de bacon")
    }
}

function fabriquerFarine() {
    let farine = document.querySelector('.farine')
        if (ble >= 2) {
            timerFarine()
            farineEstFabriquée = true
            farineEstRecoltée = false
            ble -= 2
            mettreAJour()
            setTimeout(function() {
                farine.src = 'farine.png'
                if (!farineEstRecoltée) {
                    farine.addEventListener('click', function() {
                        if (!farineEstRecoltée) {
                            farineEstRecoltée = true
                            farines += 1
                            farine.src = 'ble.png'
                            mettreAJour()
                        }
                    })
                }
            }, 90000)
        }
        else {
            alert(`Vous avez ${ble} blé il en faut 2`)
        }
    }

    function vendreFarine() {
        if (farines >= 1) {
            pieces += 30
            farines -= 1
            mettreAJour()
        }
        else {
            alert("Pas assez de farine")
        }
    }

function acheterGraine() {
    if (pieces >= 1) {
        graine += 1
        pieces -= 1
        mettreAJour()
    }
    else {
        alert("Pas assez d'argent")
    }
}

function nourrirPoule() {
    let poule = document.querySelector('.poule')
        if (graine >= 2) {
            timerPoule()
            pouleNourrie = true
            oeufRecolté = false
            graine -= 2
            mettreAJour()
            setTimeout(function() {
                poule.src = 'oeuf.png'
                if (!oeufRecolté) {
                    poule.addEventListener('click', function() {
                        if (!oeufRecolté) {
                            oeufRecolté = true
                            oeufAleatoire()
                            oeuf += oeufAleatoire()
                            poule.src = 'poule.png'
                            mettreAJour()
                        }
                    })
                }
        }, 75000)
        }
        else {
            alert(`Vous avez ${graine} graines il en faut 2`)
        }
    }

    function vendreOeuf() {
        if (oeuf >= 1) {
            pieces += 30
            oeuf -= 1
            mettreAJour()
        }
        else {
            alert("Pas assez de farine")
        }
    }