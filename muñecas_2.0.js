function peso(){
    peso_payaso = 112;
    peso_muñeca = 75;
    numero_de_muñecas = prompt("Ingresa el numero de muñecas: ");
    numero_de_payasos = prompt("Ingresa el numero de payasos: ");
    peso_paquete = (numero_de_muñecas * peso_muñeca) + (numero_de_payasos * peso_payaso);
    alert("El peso total del paquete es de " + peso_paquete+ " Gramos");
    console.log("El peso total del paquete es: " + peso_paquete + "Gramos");
    
}

peso();