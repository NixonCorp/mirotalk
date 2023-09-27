
 function subecribeMessageBroker() {
    console.log('subecribeMessageBroker');
    window.addEventListener(
        "message",
        (event) => {
         if (event.origin !== "http://localhost:6400" 
          && event.origin !== "http://localhost:4200" 
          && event.origin !== "https://dev.corknote.ru" 
          && event.origin !== "https://corknote.ru" 
          && event.origin !== "https://app.corknote.ru" 
          && event.origin !== "https://app.probka.tech" 
          && event.origin !== "https://dev.probka.tech" 
          ) return;
          
      
          if (event.data?.action === 'init') {
            const name = document.getElementById('roomName');
            name.value = event.data?.boardId; 

            setTimeout(() => {
                document.getElementById('joinRoomButton').click();
            }, 500);

            localStorage.setItem('peer_name', event.data?.user);
          }
        }
    );
}