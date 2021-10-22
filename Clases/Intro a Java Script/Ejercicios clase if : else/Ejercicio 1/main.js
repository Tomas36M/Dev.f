var lookingGood = prompt("Te consideras alguien hermoso? si o no").toLowerCase();

    if (lookingGood == "si") {
      document.write ("Ciertamente");
    } else if (lookingGood == "no") {
        document.write ("No te creo");
    } else {
        document.write ("Responder si o no, no hay otros valores validos");
    }
