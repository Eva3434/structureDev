let url = window.location.pathname.split("/");
url = url[url.length - 1];
console.log(url);

switch (url) {
    case "accueil.php":
        /* block d'instruction */
        console.log("Vous êtes sur la page accueil");
        const { hello, sum } = await import('./hello');
        hello();
        sum(1, 5);
        break;
    case "contact.php":
        /* block d'instruction */
        console.log("Vous êtes sur la page contact");
        break;
}