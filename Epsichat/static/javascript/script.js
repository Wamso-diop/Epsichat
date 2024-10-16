
function question(){
    var question= document.getElementById("question").value
    alert(question)

        // Crée une nouvelle div
    const afficheQuestion = document.createElement("div");

    // Ajoute du texte ou un contenu à la div
    afficheQuestion.textContent = "Ceci est une nouvelle div";

    // Ajoute une classe ou un id si nécessaire
    afficheQuestion.className = "ma-classe";
    afficheQuestion.id = "mon-id";

    // Sélectionne l'élément parent où tu veux insérer la nouvelle div
    const parent = document.getElementById("element-parent");

    // Ajoute la nouvelle div en tant qu'enfant de l'élément parent
    parent.appendChild(afficheQuestion);

}