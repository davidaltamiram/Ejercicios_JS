class empleados {
    nombre = "";
    edad = 0;
    rfc = "";
    diasTrabajado = 0;
    sueldo = 156.78;


    constructor(nombre, edad, rfc, diasTrabajado){
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.diasTrabajado = diasTrabajado;
    }

    imprimirInfo(){
        console.log("Mostrando Datos del colaborador", this.nombre);
        console.log(this.nombre);
        console.log("Tiene",this.edad, "Años");
        console.log("Su rfc es: ",this.rfc);
        console.log("Laboro ",this.diasTrabajado , " Dias");
        console.log("Su sueldo por dia es de: ", this.sueldo);
        this.nomina_quincena();
        this.nomina_mensual();
    }

    Sueldo_faltas(){
        let bruto = (this.sueldo * this.diasTrabajado);
        let isr = (15.5 / 100);
        let operacion = (isr * bruto);
        let neto = (bruto - operacion);
        console.log("El sueldo con faltas x quincena en bruto es de: ", bruto.toFixed(2));
        console.log("El sueldo con faltas x quincena en neto es de: ", neto.toFixed(2));
    }

    nomina_quincena(){
       let bruto = (156.78 * 15);
       let isr = (15.5 / 100);
       let operacion = (isr * bruto);
       let neto = (bruto - operacion);
       console.log("El sueldo x quincena en bruto es de: ", bruto.toFixed(2));
       console.log("El sueldo x quincena en neto es de: ", neto.toFixed(2));
    }

    nomina_mensual(){
        let bruto = (156.78 * 30);
        let isr = (31 / 100);
        let operacion = (isr * bruto);
        let neto = (bruto - operacion);
        console.log("El sueldo x mes en bruto es de: ", bruto.toFixed(2));
        console.log("El sueldo x mes en neto es de: ", neto.toFixed(2));
    }
    
}



let david = new empleados("David", 23, "OOPSDEV", 3);
let anyi = new empleados("Anyi", 27, "AAPSDEV", 15);
let felipe = new empleados("Felipe", 24, "EEPSDEV", 15);
let carlos = new empleados("Carlos", 20, "DDPSDEV", 15);
let perejil = new empleados("Perejil", 29, "SSPSDEV", 15);


david.imprimirInfo();
anyi.imprimirInfo();
