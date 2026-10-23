function sumar(){
    let n1, n2, suma;

    alert("Este algoritmo suma dos numeros ingresados")
    n1 = parseFloat(prompt("Ingrese el numero a sumar"))
    n2 = parseFloat(prompt("Ingrese el segundo valor"))

    suma = n1 + n2;
    alert("El resultado de la suma es: " + suma); 

}

function operacionesBasicas(){
    let n1, n2, sumar, multiplicar, dividir;
    alert("Este algoritmo suma, multiplica y divide dos numeros ingresados")
    n1 = parseFloat(prompt("Ingrese el primer numero"))
    n2 = parseFloat(prompt("Ingrese el segundo numero"))

    sumar = n1 + n2;
    alert("El resultado de la suma es: " + sumar)
    multiplicar = n1 * n2;
    alert("El resultado de la multiplicacion es: " + multiplicar) 
    dividir = n1 / n2
    alert("El resultado de la division es: " + dividir) 
}

function conversionMlMyC(){
    let cm, m, ml;
    alert("Este algoritmo convierte a milimetros y metros un valor ingresado en centimetros");
    cm = parseFloat(prompt("Ingrese el valor en centimetros"));
    
    m = cm / 100;
    alert("El resultado de la conversion de cm a m es: " + m);

    ml = cm * 10;
    alert("El resultado de la conversion de cm a ml es: " + ml); 
    
}

function temperatura(){
        let f, k, c;
    alert("Este algoritmo determina los grados fahrenheit y kelvin de un valor ingresado en grados c");
    c = parseFloat(prompt("Ingrese el valor en grados c"));

    f= (c * 9 / 5) + 32;
    alert("El resultado de los grados en c a fahrenheit es: " + f);

    k = c + 273.15;
    alert("El resultado de los grados en c a kelvin es: " + k); 
}

function areaPerimetro(){
    let b, a, ar, p;
    alert("Este algoritmo determina el area y perimetro de un rectangulo");
    b = parseFloat(prompt("Ingrese el valor de la base"));

    a = parseFloat(prompt("Ingrese el valor de altura"));

    ar = b * a;
    alert("El resultado del area del rectangulo es: " + ar);

    p = 2 * (b + 2 * a);
    alert("El resultado del perimetro del rectangulo es: " + p);

}

function promedio3numeros(){
    let n1, n2, n3, suma, promedio;
    alert("Este algoritmo determina el promedio de 3 numeros");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    n3 = parseFloat(prompt("Ingrese el tercer numero"));

    suma = n1 + n2 + n3;
    alert("El resultado de la suma es: " + suma);

    promedio = suma / 3;
    alert("El resultado del promedio de las 3 notas es: " + promedio);

}

function conversionTiempo(){
    let s, m, h;
    alert("Este algoritmo determina la conversion de segundos en minutos y horas");
    s = parseFloat(prompt("Ingrese los segundos"));

    m = s / 60;
    alert("El resultado de segundos a minutos es: " + m);

    h = s / 3.600;
    alert("El resultado de segundos a horas es: " + h); 

}

function conversionPeso(){
    let kg, g, l, t;
    alert("Este algoritmo convierte los kilogramos en gramos, libras y toneladas");
    kg = parseFloat(prompt("Ingrese los kilogramos"));

    g = kg * 1.000;
    alert("El resultado de kilogramos a gramos es: " + g);
    l = kg * 2.20462;
    alert("El resultado de kilogramos a libras es: " + l);
    t = kg / 1.000;
    alert("El resultado de kilogramos a toneladas es: " + t); 

}

function compra(){
    let p1, p2, p3, c1, c2, c3, t; 
    alert("Este algoritmo calcula la compra de tres productos");

    p1 = parseFloat("Ingrese el precio del primer producto");
    c1 = parseFloat("Ingrese la cantidad del primer producto");
    p2 = parseFloat("Ingrese el precio del segundo producto");
    c2 = parseFloat("Ingrese la cantidad del segundo producto");
    p3 = parseFloat("Ingrese el precio del tercer producto");
    c3 = parseFloat("Ingrese la cantidad del tercer producto");

    p1 = p1 * c1;
    p2 = p2 * c2;
    p3 = p3 * c3;
    t = p1 + p2 + p3;
    alert("La compra es de: " + t);  

}
    
function planetas(){
    let pt, pm, pv, pma, pj, ps, pu, pn;
    alert("Este algoritmo calcula el peso de un obejto en planetas")

    pt = parseFloat(prompt("Ingrese el peso:"));
    pm = pt * 3,70;
    pv = pt * 8,87;
    pl = pt * 1,62; 
    pma = pt * 3,71;
    pj = pt * 24,79; 
    ps = pt * 10,44;
    pu = pt * 8,69;
    pn = pt * 11,15; 
    alert("El resultado del peso en mercurio es: " + pm);
    alert("El peso en venus es: " + pv);
    alert("El peso en la luna es: " + pl);
    alert("El peso en marte es: " + pma);
    alert("El peso en jupiter es: " + pj);
    alert("El peso en saturno es: " + ps);
    alert("El peso en urano es: " + pu);
    alert("El peso en neptuno es: " + pn);

}

function salario(){
    let s, d, b, t;
    alert("Este algoritmo calcula el salario y valor adicional");
     s = parseFloat("Ingrese el salario");
     d = parseInt("Ingrese dias trabajados");
     b = parseFloat("Ingrese bonos dados al trabajador");

     t = (s / 30) * d + b;
     alert("el total a pagarle el trabajador es de: " + t);

}

function factura(){
    let c, vu, tp, im, sub, vi;
    alert("Algoritmo que calcula el precio de una factura");
    c = parseFloat(prompt("Ingrese el consumo del servicio"));
    vu = parseFloat(prompt("Ingrese el valor"));
    im = parseFloat(prompt("Ingrese el porcentaje del impuesto"));

    sub = c * vu;
    alert("El subtotal es: " + sub);
    im = sub * (im / 100);
    alert("El valor del impuesto es: " + vi); 
    tp = sub + vi;
    alert("El total a pagar es: " + tp);

}

function costoviaje(){
    let d, c, pc, l, ct;
    alert("Algoritmo que calcula el costo de un viaje");
    d = parseFloat(prompt("Ingrese distancia"));
    c = parseFloat(prompt("Ingrese el consumo promedio"));
    pc = parseFloat(prompt("Ingrese el precio de combustible"));

    ct = (d / c) * pc;
    alert("El costo total del viaje es de: " + ct);
    
}

 function tiempoviaje(){
    let d, v, h, m;
    alert("Algoritmo que calcula el tiempo de un viaje");
    d = parseFloat(prompt("Ingrese distancia"));
    v = parseFloat(prompt("Ingrese la velocidad"));

    h = d / v;
    m = h * 68;
    alert("El tiempo del viaje es de: " + m);

 }

 function sistemanotas(){
    alert("Algortimo que calcula la nota final");
    let n1, p1, n2, p2, n3, p3, nf;

    n1 = parseFloat(prompt("Ingrese nota 1"));
    p1 = parseFloat(prompt("Ingrese porcentaje 1"));
    n2 = parseFloat(prompt("Ingrese nota 2"));
    p2 = parseFloat(prompt("Ingrese porcentaje 2"));
    n3 = parseFloat(prompt("Ingrese porcentaje 3"));
    
    nf = (n1 * p1) + (n2 * p2) + (n3 * p3) / 100;

 }

 function conversormonedas(){
    alert("Algoritmo conversor de monedas");
    let cop, td, te, usd, eur;

    cop = parseFloat(prompt("Ingrese valor colombiano"));
    td = parseFloat(prompt("Tasa de pesos a dolar"));
    te = parseFloat(prompt("Tasa de pesos a euros"));

    usd = cop / td;
    alert("Pesos colombianos a dolar es de: " + usd);
    eur = cop / te;
    alert("Pesos colombianos a euro es de: " + eur);

 }

 //  Condicionales 

 function numeropositivo(){
    alert("Algoritmo que determina si un numero es positivo, negativo o cero");
    let n;
    
    n = parseInt(prompt("Ingrese numero"));
    if (n>0){
        alert("Es positivo");
    } 
    else if(n<0){
        alert("Es negativo");
    }
    else {
        alert("Es cero");
    }
 } 

 function parimpar(){
    let n;

    alert("Algoritmo que determina si un numero es par o impar");
    n = parseInt(prompt("Ingrese un numero:"))

    if (n % 2 === 0) {
        alert("El numero " + n + " es par.");
    } else {
        alert("El numero " + n + " es impar.");
    }

}

function numeromayor(){

    let n1, n2;

    alert("Algoritmo que determine el mayor de dos numeros");

    n1 = parseInt(prompt("Ingrese el primer numero"));
    n2 = parseInt(prompt("Ingrese el segundo numero"));

    if (n1 > n2) {
        alert(n1 + " Es mayor que " + n2);
    } else {
        alert(n2 + " Es mayor que " + n1);
    }
}

function descuento(){
    let c;

    alert("Algoritmo que muestra el descuento de una compra");

    c= parseFloat(prompt("Ingrese el valor de la compra"));

    if (c>=200000) {
        
        alert("Tiene desciento del 10%");
    } else {
        alert("No tiene descuento");
    }
}

function temperatura(){

    let t;

    alert ("Algoritmo que determina la temperatura de una ciudad");

    t= parseFloat(prompt("Ingrese la temperatura en grados Celsius"));

    if (t>=30) {
        alert("La temperatura es alta");
    } else{
        alert("La temperatura es baja");
    }
}

function mayoredad(){
    let e;

    alert("Este algoritmo determina si es mayor o menor de edad");

    e = parseFloat(prompt("Ingrese su edad"));

    if (e>=18) {
        alert("es mayor de edad");
    } else{
        alert ("es menor de edad");
    }
}

function retirodinero(){
    let r, ns;
    const s = 500000;
    
    alert ("Este algoritmo determina si puedes retirar dinero o no");

    r = parseFloat(prompt("Ingrese el valor a retirar"));

    if(r<=s) {
        alert("Retiro aceptado");
    } else{
        alert ("saldo insuficiente");
    }
    ns = s - r;

    alert("El salario restante es: " + ns);
}

function enviogratis(){
    let v;

    alert("Este algoritmo determinar si tu envio sale gratis");

    v = parseFloat(prompt("Ingrese el valor del envio"));

    if (v>=150000) {
        alert("El envio es gratis");
    } else{
        alert("El envio tiene un costo de 12,000");
    }
}

function compararnumeros(){
    let a, b;

    alert("Este algoritmo compara 2 numeros");

    a = parseFloat(prompt("Ingresa el primer numero"));
    b = parseFloat(prompt("Ingresa el segundo numero"));

    if (a>b) {
        alert("El primer numero es mayor");
    } else if (a<b) {
        alert("El primero es menor");
    } else {
        alert("Los dos numeros son iguales");
    }
}

function tarifaparqueadero(){
    let h, t;

    alert("Este algoritmo determina la tarifa de el parqueadero");

    h = parseFloat(prompt("Ingrese las horas en el parqueadero"));

    if (h<=0) {
        t = 0;
    } else if (h<=1) {
        t = 5000;
    } else if (h<=3) {
        t = 10000;
    } else if (h<=6) {
        t = 18000;
    } else {
        t = 25000
    }
    alert("El valor a pagar es : " + t);
}

function tarifaedad(){
    let e, t;

    alert("Este algoritmo determina la tarifa del transporte segun su edad");

    e = parseFloat(prompt("Ingrese su edad"));

    if (e<5) {
        t = 0;
    } else if (e<=17) {
        t = 2000;
    } else if (e <= 59) {
        t = 3500;
    } else {
        t = 2500;
    }
    alert("El valor de su pasaje es : "+ t);
}

function cvelocidad(){
    let v;

    alert("Este algoritmo determina la velocidad");

    v = parseFloat(prompt("Ingrese la velocidad"));

    if (v<=30) {
       alert("Velocidad baja.");
    } else if (v<=60) {
       alert("Velocidad moderada");
    } else if (v<=100) {
       alert("Velocidad alta");
    } else {
       alert("Velocidad muy alta"); 
    }
}

function diasmeses(){
    let  mes;
    
    alert("Este algoritmo determina los dias del mes");

    mes = parseFloat(prompt("Ingrese el numero del mes"));

    if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
        alert("El mes tiene 31 días.");
    } else if ([4, 6, 9, 11].includes(mes)) {
        alert("El mes tiene 30 días.");
    } else if (mes === 2) {
       alert("Febrero tiene 28 días.");
    } else {
       alert("Número de mes inválido."); 
    }
}

function atraccion(){
    let edad, est;

    alert("Este algoritmo determina si puedes ingresar a la atraccion");

    edad = parseFloat(prompt("Ingrese la edad"));
    est = parseFloat(prompt("Ingrese la estatura en metros"));

    if (edad>=12 && est>=1.40) {
        alert("Puede ingresar a la atraccion");
    } else {
        alert("No puede ingresar a la atraccion");
    }
}

function descuentocliente(){
    let t, c, p1, p2, des, total;
    
    alert("Este algoritmo determina el descuento a un cliente");

    t = parseFloat(prompt("Que tipo de cliente es: normal/frecuente"));
    c = parseFloat(prompt("Valor de la compra"));

    p1 = 0.05;
    p2 = 0.10;
    des = c * p1;
    total = c - des

    if (c>=200000) {
        alert("Cliente normal");
    } else {
        alert("Cliente frecuente");
    }

    alert("Descuento : "+ des);
    alert("Total a pagar : "+ total);
}

function cajeroautomatico(){
    let sal, ret;

    alert("Algoritmo que determina la validez de un retiro");

    sal = parseFloat(prompt("Saldo disponible"));
    ret = parseFloat(prompt("Valor a retirar"));

    if (ret <= 0) {
        alert("El retiro debe ser mayor a cero");
    }else if (ret % 10000 !==0) {
        alert("El retiro debe ser múltiplo de 10.000");
    } else if (ret > sal) {
        alert("Saldo insuficiente.");
    } else {
        alert("Retiro exitoso.");
        alert("Saldo restante: " + (sal - ret));
    }
}

function contraseña(){
    let c, n;

    alert("Este algoritmo determina la validez tu contraseña");

    c = parseFloat(prompt("Ingrese su contraseña"));

    if (c.length >= 8) {
        if (c != "12345678") {
        alert("La contraseña cumple con dos condiciones");

        n = prompt("Ingrese un numero que tenga la contraseña");

    if (c.includes(n) && n != "") {
        alert("La contraseña es valida");
    } else {
        alert("La contraseña debe contener un numero");
}

    } else {
        alert("La contraseña no puede ser 12345678");
        }
    } else {
        alert("La contraseña debe tener minimo 8 caracteres");
    }
}

function añobisiesto(){
    let año;
    alert("Algoritmo que de termina si un año es bisiesto");

    año = parseFloat(prompt("Ingrese el año"));

    if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
        alert("El año es bisiesto");
    } else {
        alert("El año no es bisiesto");
    }
}

function ctriangulo(){
    let l1, l2, l3;

    alert("Algoritmo que clasifica un triangulo");
    l1 = parseFloat(prompt("Ingrese el lado 1"));
    l2 = parseFloat(prompt("Ingrese el lado 2"));
    l3 = parseFloat(prompt("Ingrese el lado 3"));

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 ||
        l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
        alert("No forman un triangulo");
    } else if (l1 == l2 && l2 == l3) {
        alert("Triangulo equilatero");
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        alert("Triangulo isosceles");
    } else {
        alert("Triangulo escaleno");
    }
}

function calculadora(){
    let n1, n2, op;

    alert("Algoritmo que realiza operaciones");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    op = parseInt(prompt("1 Suma, 2 Resta, 3 Multiplicacion, 4 Division"));

    if (op == 1) {
        alert("Resultado: " + (n1 + n2));
    } else if (op == 2) {
        alert("Resultado: " + (n1 - n2));
    } else if (op == 3) {
        alert("Resultado: " + (n1 * n2));
    } else if (op == 4) {
        if (n2 != 0) {
            alert("Resultado: " + (n1 / n2));
        } else {
            alert("No se puede dividir entre cero");
        }
    } else {
        alert("Opcion invalida");
    }
}

function tarifaequipaje() {
    let p;
    alert("Algoritmo que determina el costo segun el peso");

    p = parseFloat(prompt("Ingrese el peso de la maleta"));

    if (p <= 23) {
        alert("No tiene costo adicional");
    } else if (p <= 30) {
        alert("Debe pagar 50000");
    } else if (p <= 40) {
        alert("Debe pagar 100000");
    } else { 
        alert("No se permite transportar la maleta");
    }
}

function facturacompra() {
    let compra, des, sub, iva, total;
    alert("Algoritmo que determina el valor de una compra");

    compra = parseFloat(prompt("Ingrese el valor de la compra"));
    des = 0;

    if (compra >= 500000) {
        des = compra * 0.15;
    } else if (compra >= 300000) {
        des = compra * 0.10;
    } else if (compra >= 100000) {
        des = compra * 0.05; 
    }

    sub = compra - des;
    iva = sub * 0.19;
    total = sub + iva;

    alert("Compra: " + compra);
    alert("Descuento: " + des);
    alert("Subtotal con descuento: " + sub);
    alert("IVA: " + iva);
    alert("Total: " + total);
}

function criesgo(){
    let edad, ing;
    alert("Algoritmo que compara edad e ingresos");

    edad = parseInt(prompt("Ingrese su edad"));
    ing = parseFloat(prompt("Ingrese sus ingresos mensuales"));

    if (edad < 18) {
        alert("No elegible");
    } else if (edad <= 25) {
        if (ing >= 2000000) {
        alert("Elegible");
    } else {
        alert("No elegible");
        }
    } else {
    if (ing >= 1500000) {
        alert("Elegible");
    } else {
        alert("No elegible");
    }
}
}

function mayormenortres() {
    let n1, n2, n3, my, mn;
    alert("Algoritmo que compara tres numeros");

    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    n3 = parseFloat(prompt("Ingrese el tercer numero"));

    my = n1;
    mn = n1;

    if (n2 > my) {
        my = n2;
    }

    if (n3 > my) {
        my = n3;
    }

    if (n2 < mn) {
        mn = n2;
    }

    if (n3 < mn) {
        mn = n3;
    }

    alert("El mayor es: " + my);
    alert("El menor es: " + mn);

    if (n1 == n2 || n1 == n3 || n2 == n3) {
        alert("Existen numeros iguales");
    } else {
        alert("No existen numeros iguales");
    }
}

// Bucles
function contarnumeros(){
    let inicio, fin, i;

    inicio = parseInt(prompt("Ingrese el numero inicial"));
    fin = parseInt(prompt("Ingrese el numero final"));

    for (i = inicio; i <= fin; i++) {
        console.log(i);
    }
}

function cuentaregresiva(){
    let ni, i;

    ni = parseInt(prompt("Ingrese el numero inicial"));

    for (i = ni; i >= 0; i--) {
        console.log(i);
    }

    console.log("La cuenta termino");
}

function numerospares(){
    let limite, i;

    limite = parseInt(prompt("Ingrese el limite"));

    for (i = 2; i <= limite; i = i + 2) {
        console.log(i);
    }
}

function numerosimpares(){
    let limite, i;

    limite = parseInt(prompt("Ingrese el limite"));

    for (i = 1; i <= limite; i = i + 2) {
        console.log(i);
    }
}

function sumanumeros(){
    let numero, i, suma;

    n = parseInt(prompt("Ingrese el numero limite"));
    suma = 0;

    for (i = 1; i <= numero; i++) {
        suma = suma + i;
    }

    console.log("La suma total es: " + suma);
}

function tablamultiplicar(){
    let numero, i;

    numero = parseInt(prompt("Ingrese un numero"));

    for (i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

function paresimpares(){
    let limite, i, impares, pares;

    limite = parseInt(prompt("Ingrese el limite"));
    pares = 0;
    impares = 0;

    for (i = 1; i <= limite; i++) {
    if (i % 2 == 0) {
            pares = pares + 1;
    } else {
            impares = impares + 1;
        }
    }

    console.log("Cantidad de pares: " + pares);
    console.log("Cantidad de impares: " + impares);
}

function promedionumeros(){
    let cantidad, i, numero, suma, promedio;

    cantidad = parseInt(prompt("Numeros que ingresara"));
    suma = 0;

    for (i = 1; i <= cantidad; i++) {
        numero = parseFloat(prompt("Ingrese el numero " + i));
        suma = suma + numero;
    }

    if (cantidad > 0) {
        promedio = suma / cantidad;
        console.log("Cantidad: " + cantidad);
        console.log("Suma: " + suma);
        console.log("Promedio: " + promedio);
    } else {
        console.log("Ingrese una cantidad mayor que cero");
    }
}

function numeromayor(){
    let cantidad, i, numero, mayor;

    cantidad = parseInt(prompt("Numeros que ingresara"));

    if (cantidad > 0) {
        numero = parseFloat(prompt("Ingrese el numero 1"));
        mayor = numero;

        for (i = 2; i <= cantidad; i++) {
            numero = parseFloat(prompt("Ingrese otro numero"));

            if (numero > mayor) {
                mayor = numero;
            }
        }

        console.log("El numero mayor es: " + mayor);
    } else {
        console.log("Debe ingresar al menos un numero");
    }
}

function numeromenor() {
    let cantidad, i, numero, menor;

    cantidad = parseInt(prompt("Numeros que ingresara"));

    if (cantidad > 0) {
        numero = parseFloat(prompt("Ingrese el numero 1"));
        menor = numero;

        for (i = 2; i <= cantidad; i++) {
            numero = parseFloat(prompt("Ingrese otro numero"));

            if (numero < menor) {
                menor = numero;
            }
        }

        console.log("El numero menor es: " + menor);
    } else {
        console.log("Debe ingresar al menos un numero");
    }
}

function cnumeros(){
    let cantidad, i, numero, positivos, negativos, ceros;

    cantidad = parseInt(prompt("Numeros que ingresara"));
    positivos = 0;
    negativos = 0;
    ceros = 0;

    for (i = 1; i <= cantidad; i++) {
        numero = parseFloat(prompt("Ingrese un numero"));

        if (numero > 0) {
            positivos = positivos + 1;
        } else if (numero < 0) {
            negativos = negativos + 1;
        } else {
            ceros = ceros + 1;
        }
    }

    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Ceros: " + ceros);
}

function estventas(){
    let cantidad, i, venta, suma, mayor, menor;

    cantidad = parseInt(prompt("Numero de ventas que se realizaron"));
    suma = 0;

    if (cantidad > 0) {
        venta = parseFloat(prompt("Ingrese la primera venta"));
        suma = venta;
        mayor = venta;
        menor = venta;

        for (i = 2; i <= cantidad; i++) {
            venta = parseFloat(prompt("Ingrese la otra venta"));
            suma = suma + venta;

            if (venta > mayor) {
                mayor = venta;
            }

            if (venta < menor) {
                menor = venta;
            }
        }

        console.log("Total de ventas: " + suma);
        console.log("Promedio: " + (suma / cantidad));
        console.log("Venta mayor: " + mayor);
        console.log("Venta menor: " + menor);
    } else {
        console.log("Debe ingresar al menos una venta");
    }
}

function ihastacero() {
    let numero, suma, cantidad;

    suma = 0;
    cantidad = 0;

    numero = parseFloat(prompt("Ingrese un numero; 0 para terminar"));

    while (numero != 0) {
        suma = suma + numero;
        cantidad = cantidad + 1;

        numero = parseFloat(prompt("Ingrese otro numero; 0 para terminar"));
    }

    console.log("Cantidad de numeros: " + cantidad);
    console.log("Suma: " + suma);

    if (cantidad > 0) {
        console.log("Promedio: " + (suma / cantidad));
    } else {
        console.log("No ingreso numeros");
    }
}

function vcontraseña(){
    let contraseña;

    contraseña = prompt("Ingrese la contraseña");

    while (contraseña != "JavaScript123") {
        console.log("Contraseña incorrecta");
        contraseña = prompt("Intente nuevamente");
    }

    console.log("Acceso permitido");
}

function mopciones(){
    let opcion;

    opcion = 0;

    while (opcion != 4) {
        opcion = parseInt(prompt(
            "MENU\n1. Mostrar mensaje\n2. Mostrar informacion\n3. Sumar dos numeros\n4. Salir"
        ));

        if (opcion == 1) {
            console.log("Hola, bienvenido");
        } else if (opcion == 2) {
            console.log("Programa de algoritmia");
        } else if (opcion == 3) {
            let a, b;

            a = parseFloat(prompt("Ingrese el primer numero"));
            b = parseFloat(prompt("Ingrese el segundo numero"));

            console.log("La suma es: " + (1 + 2));
        } else if (opcion == 4) {
            console.log("Programa finalizado");
        } else {
            console.log("Opcion invalida");
        }
    }
}

function cajeroautomatico() {
    let s, op, v;

    s = 500000;
    op = 0;

    while (op != 4) {
        op = parseInt(prompt(
            "CAJERO\n1. Consultar saldo\n2. Retirar\n3. Depositar\n4. Salir"
        ));

        if (op == 1) {
            console.log("Saldo disponible: " + s);
        } else if (op == 2) {
            valor = parseFloat(prompt("Ingrese el valor a retirar"));

            if (v > 0 && valor <= s) {
                s = s - v;
                console.log("Retiro exitoso");
                console.log("Saldo restante: " + s);
            } else {
                console.log("Valor incorrecto o saldo insuficiente");
            }
        } else if (op == 3) {
            v = parseFloat(prompt("Ingrese el valor a depositar"));

            if (v > 0) {
                s = s + v;
                console.log("Nuevo saldo: " + s);
            } else {
                console.log("El deposito debe ser mayor que cero");
            }
        } else if (op == 4) {
            console.log("Gracias por utilizar nuestro cajero");
        } else {
            console.log("Opcion invalida");
        }
    }
}

function sistemanotas(){
    let cantidad, i, n, s, aprobados, reprobados;
    let mayor, menor;

    cantidad = parseInt(prompt("Cantidad de estudiantes"));
    s = 0;
    aprobados = 0;
    reprobados = 0;

    if (cantidad > 0) {
        n = parseFloat(prompt("Ingrese la nota del estudiante 1"));

        s = n;
        mayor = n;
        menor = n;

        if (n >= 3) {
            aprobados = aprobados + 1;
        } else {
            reprobados = reprobados + 1;
        }

        for (i = 2; i <= cantidad; i++) {
            n = parseFloat(prompt("Ingrese la nota del estudiante"));

            s = s + n;

            if (n >= 3) {
                aprobados = aprobados + 1;
            } else {
                reprobados = reprobados + 1;
            }

            if (n > mayor) {
                mayor = n;
            }

            if (n < menor) {
                menor = n;
            }
        }

        console.log("Estudiantes: " + cantidad);
        console.log("Aprobados: " + aprobados);
        console.log("Reprobados: " + reprobados);
        console.log("Promedio: " + (s / cantidad));
        console.log("Nota mayor: " + mayor);
        console.log("Nota menor: " + menor);
    } else {
        console.log("Ingrese al menos un estudiante");
    }
} 

function adivinarnumero(){
    let s, n, int;

    s = 7;
    int = 0;

    n = parseInt(prompt("Adivina el numero secreto"));

    while (n != s) {
        int = int + 1;

        if (n < s) {
            console.log("El numero secreto es mayor");
        } else {
            console.log("El numero secreto es menor");
        }

        numero = parseInt(prompt("Intente nuevamente"));
    }

    int = int + 1;

    console.log("Adivinaste el numero");
    console.log("Intentos: " + ints);
}

function registroproductos(){
    let cantidad, i, n, p, unidades;
    let total, mayor, menor, productomayor, productomenor;

    cantidad = parseInt(prompt("Cantidad de productos"));
    total = 0;

    if (cantidad > 0) {
        n = prompt("Nombre del primer producto");
        p = parseFloat(prompt("Precio del producto"));
        unidades = parseInt(prompt("Cantidad disponible"));

        total = p * unidades;
        mayor = p;
        menor = p;
        productomayor = n;
        productomenor = n;

        for (i = 2; i <= cantidad; i++) {
            n = prompt("Nombre del producto");
            p = parseFloat(prompt("Precio del producto"));
            unidades = parseInt(prompt("Cantidad disponible"));

            total = total + p * unidades;

            if (p > mayor) {
                mayor = p;
                productomayor = n;
            }

            if (p < menor) {
                menor = p;
                productoMenor = n;
            }
        }

        console.log("Productos registrados: " + cantidad);
        console.log("Valor del inventario: " + total);
        console.log("Producto mas costoso: " + productomayor);
        console.log("Producto menos costoso: " + productomenor);
    } else {
        console.log("Debe registrar al menos un producto");
    }
}

function acumuladorlimite(){
    let n, s, cantidad;

    s = 0;
    cantidad = 0;

    while (s < 100) {
        n = parseFloat(prompt("Ingrese un numero"));

        s = s + n;
        cantidad = cantidad + 1;
    }

    console.log("Cantidad de numeros: " + cantidad);
    console.log("Suma acumulada: " + s);
    console.log("Promedio: " + (s / cantidad));
}

function sistemacompras(){
    let n, p, cantidad, subtotal;
    let productos, continuar, descuento, iva, total;

    subtotal = 0;
    productos = 0;
    continuar = "si";

    while (continuar == "si") {
        n = prompt("Nombre del producto");
        p = parseFloat(prompt("Precio del producto"));
        cantidad = parseInt(prompt("Cantidad"));

        subtotal = subtotal + p * cantidad;
        productos = productos + 1;

        console.log("Producto registrado: " + n);

        continuar = prompt("Añadir otro producto? Escribe si o no");
    }

    descuento = 0;

    if (subtotal >= 500000) {
        descuento = subtotal * 0.15;
    } else if (subtotal >= 300000) {
        descuento = subtotal * 0.10;
    } else if (subtotal >= 100000) {
        descuento = subtotal * 0.05;
    }

    subtotal = subtotal - descuento;
    iva = subtotal * 0.19;
    total = subtotal + iva;

    console.log("Cantidad de productos: " + productos);
    console.log("Subtotal con descuento: " + subtotal);
    console.log("Descuento: " + descuento);
    console.log("IVA: " + iva);
    console.log("Total a pagar: " + total);
}


