var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl);
});
window.addEventListener('load', function() {
    toastList.map(toast => toast.show());
});


const text = "Bienvenue sur notre site d'intelligence artificielle !";

        // Conteneur pour le texte
        const typingContainer = document.getElementById('typing-container');

        // Fonction pour afficher le texte progressivement
        let index = 0;
        function typeText() {
            if (index < words.length) {
                // Ajouter le mot suivant au conteneur
                typingContainer.innerHTML += words[index] + " ";
                index++;
                // Définir un délai aléatoire entre 200 et 800 ms pour le prochain mot
                const randomDelay = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
                setTimeout(typeWord, randomDelay);
            }
        }

        // Lancer l'animation de texte
        typeText();

 // Récupération des éléments
        const messageBox = document.getElementById('message-box');
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');

        // Fonction pour ajouter un message
        function addMessage(text, isUser = true) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + (isUser ? 'user-message' : 'ai-message');
            messageDiv.textContent = text;
            messageBox.appendChild(messageDiv);
            messageBox.scrollTop = messageBox.scrollHeight; // Défilement automatique vers le bas
        }

        // Écouteur d'événement pour le bouton d'envoi
        sendButton.addEventListener('click', () => {
            const userMessage = messageInput.value.trim();
            if (userMessage) {
                addMessage(userMessage, true);
                messageInput.value = '';

                // Simuler une réponse de l'IA après un court délai
                setTimeout(() => {
                    addMessage("This is a response from the AI.", false);
                }, 1000);
            }
        });

        // Permettre d'envoyer le message en appuyant sur "Enter"
        messageInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendButton.click();
            }
        });