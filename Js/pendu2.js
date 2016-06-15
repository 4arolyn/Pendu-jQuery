$(function(){
	var partie=true;
	var motSecret='Marmotte';
	var nbrLettre=motSecret.length; //calcule le nbr de lettes du motSecret
	var motVisible=motSecret.charAt(0); // 1st lettre de motSecret
	var lastLettre=motSecret.charAt(nbrLettre-1);
	//$('#charAt').html(motVisible); //Affiche 1st lettre du motSecret
	//$('#lastLettre').html(motSecret.charAt(motSecret.length-1)); //Affiche last lettre du motSecret
	//$('#mot').html(nbrLettre); //Affiche le nbrLettre du motSecret

	//while(erreur<=10){
		for(var i=1;i<nbrLettre-1;i++){ //boucle d'incrémentation
			var c=motSecret.charAt(i);
			//c = position i du motSecret

			$('span').html(motVisible+=' _ ').append(lastLettre);
			//$('span').html(motVisible+=' _ ')//.append(motSecret.charAt(nbrLettre-1));
			//affiche motVisible + _ + last lettre de motSecret	
		};
		
		$('button').click(function(){
			$('span').html(motSecret.charAt(0));
			//affiche 1st lettre de motSecret
			var lettre=$(this).attr('value').toLowerCase();
			//var lettre = attribut value de celui-ci sur sa casse minuscule

			for(var i=1;i<nbrLettre-1;i++){ //Re boucle
			var c=motSecret.charAt(i); //Re définit c

				if(lettre.indexOf(c)>-1){
				//Si l'index de lettre est >à -1 dc présente ds motSecret
					$('span').append(c);
					//Ajoute-la
				}
				else{
					$('span').append(' _ ');
					//Sinn affiche des _
				};
			};
			$('span').append(motSecret.charAt(nbrLettre-1));
			//Et affiche last lettre de motSecret
		});
	//};
	
	/*$('button').click(function(){ //qd click sur button
		//$('#mot').html(lettre); //vas chercher le mot et affiche la var lettre
		//$(this).attr("disabled","disabled"); //vas le chercher lui et rajoute-lui l'attribut désactivé
		if(lettre===c){
			$('span').html(motVisible+=c);
		}
		else{
			$('#charAt').html('loupé');
		};
	});*/
});

/*Définit new var pr enregistrer position de lettre trouvée ds mot
Save position pr pouvoir ajouter new lettres après*/
