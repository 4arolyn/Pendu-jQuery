var k;
var partie=true; //Si false partie terminée
var erreurs=0; //Nbr d'erreurs
var lettresTrouvees=0; //Nbr de lettres trouvées
var tabMotSec=[]; //Tableau qi contient lettres du mot

k=Math.floor(Math.random()*nbrMots);
var motSecret=dico1[k];
var nbrLettres=motSecret.length; //Nbr de lettres du mot à trouver

$('option').click(function(){
	var lvl=$(this).attr('value');
	$('#remarq').html('Le pendu Niveau '+lvl);
});

function propose(element){ //element correspond à la balise cliquée puisque sur le bouton elle est sur "this" (en bas)
	var lettre=$(element).text(); //Récupère lettre ds button clické
	var trouve=false;

	for(var i=0;i<nbrLettres;i++){ //Parcours chaq lettre du mot
		if($(tabMotSec[i]).html()==lettre){ //Si contenu de "p#" est égal à lettre clickée
			$(tabMotSec[i]).fadeIn(); //L'afficher ds tableau
			trouve=true;
			lettresTrouvees++;
		}
	}

	if(!trouve){ //Si trouve est false
		erreurs++; //Incrémente le nbr d'erreurs
		$('#remarq').html('Attention vous avez fait '+erreurs+' erreurs !');
		$('#pendu').html('<img src="Img/Pendu'+erreurs+'.svg">')
		
		if(erreurs==10){ //Si rate 10x
			$('#remarq').html('Bravo vous êtes pendu...');
			for(var i=0;i<nbrLettres;i++)
			$(tabMotSec[i]).fadeIn(); //Affiche le mot
			$('.alpha').addClass('active').off();
			partie=false; //Partie finie
		};
	}
	else if(lettresTrouvees==nbrLettres){ //Si on a trouvé autant de lettres qu'en contient motSecret
		$('#remarq').html('Great Job !!');
		$('.alpha').addClass('active').off();
		partie=false; //Partie finie
	};
};

$(function(){
	for(var i=0;i<nbrLettres;i++)
	$('#mot tr').append('<td><p id=\"'+i+'\">'+motSecret.charAt(i)+'</p></td>');
	//Ecrit boucle td ac p caché en css
	//p & id deviennent valeurs du tab
	test='p#';

	for(var i=0;i<nbrLettres;i++)
	tabMotSec[i]=test+i;

	$('.alpha').click(function(){
		propose(this); //Envoie fonction propose
		$(this).addClass('active').off(); //Désactive button
	});


	$('#play').click(function(){
		location.reload()
	});
});