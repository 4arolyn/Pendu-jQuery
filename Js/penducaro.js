var tableauMot=[];	// Le tableau qui contient les lettres du mot à trouver
var coupsManques=0;			// Le nombre de lettres fausses essayées
var lettresTrouvees=0;		// Le nombre de lettres trouvées
var fini=false;				// true si le jeu est terminé
				
				
// On prend un mot (le faire ensuite avec un tableau. de mots, puis ensuite avec du Json ;) )
var motSecret="JAVASCRIPT";
var tailleMot=motSecret.length;	// Le nombre de lettres du mot à trouver
				
				
// Fonction qui gère les traitements à faire lorsqu'on appuie sur une lettre (button)
function proposer(element){ //element correspond à la balise cliquée puisque sur le bouton elle est sur "this" (en bas)
					
					
	// On récupère la lettre qu'il y a dans le button cliqué
	var lettre=$(element).text(); //ou .html() ça marche aussi.
					
				
	// On met la variable "trouve" à false si c'est juste elle passera à true sinon elle reste à false
	var trouve=false;
					
	// On parcours chaque lettre du mot, on cherche dans le tableau si on trouve la lettre sélectionnée 
	for(var i=0; i<tailleMot; i++) {
						
	// Si le contenu de "p#1" (1 est un exemple) est égal à la lettre appuyé...
		if($(tableauMot[i]).html()==lettre) {
							
			$(tableauMot[i]).fadeIn();	// On affiche la lettre à chaque fois qu'on trouve sa présence dans un "p"
			trouve=true; //on met la lettre sur true puisque plus bas on vérifie que la lettre est false si on a pas trouvé...
			lettresTrouvees++;//on compte le nombre de lettre trouvés
		}				
	}
					
				
	if(!trouve){ //si trouve est resté sur la position false
		coupsManques++; //incrémentation des coups manqués
		//on écrit dans la div.class "pendu" le nb de coups manqués
		$('.pendu').html("Attention déjà "+coupsManques+" coups manqués") 
						
		// Si on a raté 9 fois :
		if(coupsManques==9){
			$('.pendu').html("<h1>Vous avez perdu !<h1>");
			for(var i=0; i<tailleMot; i++) $(tableauMot[i]).fadeIn();//on affiche le mot
			fini=true; // la partie est fini
							
		}
	}
	if(lettresTrouvees==tailleMot){ //il y a autant de lettres trouvés qu'il y en a dans le mot
		$('.pendu').html("<h1>Bravo ! Vous avez découvert le mot secret !</h1>");
		fini=true; //la partie est fini
	}
}
			
			
			
$(function(){
	//on écrit une boucle de td et on met un paragraphe qui est caché (#mot p en css)
	for(var i=0; i<tailleMot; i++) $('#mot tr').append("<td > <p id=\""+i+"\">"+motSecret.charAt(i)+"</p></td>");
	//on rentre le paragraphe et l'id comme valeur du tableau (ex : "#p3")
	test="p#";
	for(var i=0; i<tailleMot; i++) tableauMot[i]=test+i
				
	$('button').click(function(){
		proposer(this)//envoi la fonction proposer(balisecliquée)
		$(this).addClass('active').off(); //on colorise la lettre et on la bloque
						
	});
							
});//fin jquery