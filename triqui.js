document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.getElementById('a1');
    var btn2 = document.getElementById('a2');
    var btn3 = document.getElementById('a3');
    var btn4 = document.getElementById('b1');
    var btn5 = document.getElementById('b2');
    var btn6 = document.getElementById('b3');
    var btn7 = document.getElementById('c1');
    var btn8 = document.getElementById('c2');
    var btn9 = document.getElementById('c3');

    var jugador1 = 'X';
    var jugador2 = 'O';
    var turno = jugador1;

    var limpiarBoton = document.getElementById('limpiarBotones');
    limpiarBoton.addEventListener('click', function() {
       limpiarBotones();
    });

    function limpiarBotones(){
        var btns = document.querySelectorAll('button[id^="a"], button[id^="b"], button[id^="c"]');
        btns.forEach(function(btn) {
            btn.textContent = '';
            btn.disabled = false;
        });
    }


    btn1.addEventListener('click', function() {
        btn1.textContent = jugador1;
        turno = jugador2;
        btn1.disabled = true;
        verificar()

    });

    btn2.addEventListener('click', function() {
        btn2.textContent = jugador1;
        turno = jugador2;
        btn2.disabled = true;
        verificar()
    });

    btn3.addEventListener('click', function() {
        btn3.textContent = jugador1;
        turno = jugador2;
        btn3.disabled = true;
        verificar()
    });

    btn4.addEventListener('click', function() {
        btn4.textContent = jugador1;
        turno = jugador2;
        btn4.disabled = true;
        verificar()
    });

    btn5.addEventListener('click', function() {
        btn5.textContent = jugador1;
        turno = jugador2;
        btn5.disabled = true;
        verificar()
    });

    btn6.addEventListener('click', function() {
        btn6.textContent = jugador1;
        turno = jugador2;
        btn6.disabled = true;
        verificar()
    });

    btn7.addEventListener('click', function() {
        btn7.textContent = jugador1;
        turno = jugador2;
        btn7.disabled = true;
        verificar()
    });

    btn8.addEventListener('click', function() {
        btn8.textContent = jugador1;
        turno = jugador2;
        btn8.disabled = true;
        verificar()
    });

    btn9.addEventListener('click', function() {
        btn9.textContent = jugador1;
        turno = jugador2;
        btn9.disabled = true;
        verificar()
    });



    function maquina(){

        // VALIDACIONES HORIZANTALES  ++_
        if(btn5.textContent === ''){
            btn5.textContent = turno
            btn5.disabled = true;
            turno = jugador1;
        }
        
        // horizontales ++_
        else if(btn1.textContent === 'O' && btn2.textContent === 'O' && btn3.textContent === ''){
            btn3.textContent = 'O'
            btn3.disabled = true;
            turno = jugador1;
        }
        else if(btn4.textContent === 'O' && btn5.textContent === 'O' && btn6.textContent === ''){
            btn6.textContent = 'O'
            btn6.disabled = true;
            turno = jugador1;
        }else if(btn7.textContent === 'O' && btn8.textContent === 'O' && btn9.textContent === ''){
            btn9.textContent = 'O'
            btn9.disabled = true;
            turno = jugador1;
        }

        // horizontales +_+
        else if(btn1.textContent === 'O' && btn3.textContent === 'O' && btn2.textContent === ''){
            btn2.textContent = 'O'
            btn2.disabled = true;
            turno = jugador1;
        }
        else if(btn4.textContent === 'O' && btn6.textContent === 'O' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }else if(btn7.textContent === 'O' && btn9.textContent === 'O' && btn8.textContent === ''){
            btn8.textContent = 'O'
            btn8.disabled = true;
            turno = jugador1;
        }

        // horiziontales _++
        else if(btn2.textContent === 'O' && btn3.textContent === 'O' && btn1.textContent === ''){
            btn1.textContent = 'O'
            btn1.disabled = true;
            turno = jugador1;
        }
        else if(btn5.textContent === 'O' && btn6.textContent === 'O' && btn4.textContent === ''){
            btn4.textContent = 'O'
            btn4.disabled = true;
            turno = jugador1;
        }else if(btn8.textContent === 'O' && btn9.textContent === 'O' && btn7.textContent === ''){
            btn7.textContent = 'O'
            btn7.disabled = true;
            turno = jugador1;
        }


        // verticales ++_
        else if(btn1.textContent === 'O' && btn4.textContent === 'O' && btn7.textContent === ''){
            btn7.textContent = 'O'
            btn7.disabled = true;
            turno = jugador1;
        }
        else if(btn2.textContent === 'O' && btn5.textContent === 'O' && btn8.textContent === ''){
            btn8.textContent = 'O'
            btn8.disabled = true;
            turno = jugador1;
        }else if(btn3.textContent === 'O' && btn6.textContent === 'O' && btn9.textContent === ''){
            btn9.textContent = 'O'
            btn9.disabled = true;
            turno = jugador1;
        }

        // verticales +_+
        else if(btn1.textContent === 'O' && btn7.textContent === 'O' && btn4.textContent === ''){
            btn4.textContent = 'O'
            btn4.disabled = true;
            turno = jugador1;
        }
        else if(btn2.textContent === 'O' && btn8.textContent === 'O' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }else if(btn3.textContent === 'O' && btn9.textContent === 'O' && btn6.textContent === ''){
            btn6.textContent = 'O'
            btn6.disabled = true;
            turno = jugador1;
        }

        // verticales _++
        else if(btn7.textContent === 'O' && btn4.textContent === 'O' && btn1.textContent === ''){
            btn1.textContent = 'O'
            btn1.disabled = true;
            turno = jugador1;
        }
        else if(btn8.textContent === 'O' && btn5.textContent === 'O' && btn2.textContent === ''){
            btn2.textContent = 'O'
            btn2.disabled = true;
            turno = jugador1;
        }else if(btn9.textContent === 'O' && btn6.textContent === 'O' && btn3.textContent === ''){
            btn3.textContent = 'O'
            btn3.disabled = true;
            turno = jugador1;
        }
        

        
        //VALIDACIONES DIAGONALES \
        else if(btn1.textContent === 'O' && btn5.textContent === 'O' && btn9.textContent === ''){
            btn9.textContent = 'O'
            btn9.disabled = true;
            turno = jugador1;
        }else if(btn9.textContent === 'O' && btn5.textContent === 'O' && btn1.textContent === ''){
            btn1.textContent = 'O'
            btn1.disabled = true;
            turno = jugador1;
        }else if(btn1.textContent === 'O' && btn9.textContent === 'O' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }
        

        //VALIDACIONES DIAGONALES /
        else if(btn3.textContent === 'O' && btn5.textContent === 'O' && btn7.textContent === ''){
            btn7.textContent = 'O'
            btn7.disabled = true;
            turno = jugador1;
        }else if(btn7.textContent === 'O' && btn5.textContent === 'O' && btn3.textContent === ''){
            btn3.textContent = 'O'
            btn3.disabled = true;
            turno = jugador1;
        }else if(btn3.textContent === 'O' && btn7.textContent === 'O' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }
        
        
        
        
        else if(btn1.textContent === 'X' && btn2.textContent === 'X' && btn3.textContent === ''){
            btn3.textContent = 'O'
            btn3.disabled = true;
            turno = jugador1;
        }else if(btn4.textContent === 'X' && btn5.textContent === 'X' && btn6.textContent === ''){
            btn6.textContent = 'O'
            btn6.disabled = true;
            turno = jugador1;
        }else if(btn7.textContent === 'X' && btn8.textContent === 'X' && btn9.textContent === ''){
            btn9.textContent = 'O'
            btn9.disabled = true;
            turno = jugador1;
        }

        // VALIDACIONES HORIZANTALES  +_+
        else if(btn1.textContent === 'X' && btn3.textContent === 'X' && btn2.textContent === ''){
            btn2.textContent = 'O'
            btn2.disabled = true;
            turno = jugador1;
        }else if(btn4.textContent === 'X' && btn6.textContent === 'X' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }else if(btn7.textContent === 'X' && btn9.textContent === 'X' && btn8.textContent === ''){
            btn8.textContent = 'O'
            btn8.disabled = true;
            turno = jugador1;
        }

        // VALIDACIONES HORIZANTALES  _++
        else if(btn2.textContent === 'X' && btn3.textContent === 'X' && btn1.textContent === ''){
            btn1.textContent = 'O'
            btn1.disabled = true;
            turno = jugador1;
        }else if(btn5.textContent === 'X' && btn6.textContent === 'X' && btn4.textContent === ''){
            btn4.textContent = 'O'
            btn4.disabled = true;
            turno = jugador1;
        }else if(btn8.textContent === 'X' && btn9.textContent === 'X' && btn7.textContent === ''){
            btn7.textContent = 'O'
            btn7.disabled = true;
            turno = jugador1;
        }


        // VALIDACIONES VERTICALES  ++_
        else if(btn1.textContent === 'X' && btn4.textContent === 'X' && btn7.textContent === ''){
            btn7.textContent = 'O'
            btn7.disabled = true;
            turno = jugador1;
        }else if(btn2.textContent === 'X' && btn5.textContent === 'X' && btn8.textContent === ''){
            btn8.textContent = 'O'
            btn8.disabled = true;
            turno = jugador1;
        }else if(btn3.textContent === 'X' && btn6.textContent === 'X' && btn9.textContent === ''){
            btn9.textContent = 'O'
            btn9.disabled = true;
            turno = jugador1;
        }

        // VALIDACIONES VERTICALES  +_+
        else if(btn1.textContent === 'X' && btn7.textContent === 'X' && btn4.textContent === ''){
            btn4.textContent = 'O'
            btn4.disabled = true;
            turno = jugador1;
        }else if(btn2.textContent === 'X' && btn8.textContent === 'X' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }else if(btn3.textContent === 'X' && btn9.textContent === 'X' && btn6.textContent === ''){
            btn6.textContent = 'O'
            btn6.disabled = true;
            turno = jugador1;
        }

        // VALIDACIONES VERTICALES  _++
        else if(btn4.textContent === 'X' && btn7.textContent === 'X' && btn1.textContent === ''){
            btn1.textContent = 'O'
            btn1.disabled = true;
            turno = jugador1;
        }else if(btn5.textContent === 'X' && btn8.textContent === 'X' && btn2.textContent === ''){
            btn2.textContent = 'O'
            btn2.disabled = true;
            turno = jugador1;
        }else if(btn9.textContent === 'X' && btn6.textContent === 'X' && btn3.textContent === ''){
            btn3.textContent = 'O'
            btn3.disabled = true;
            turno = jugador1;
        }


        // VALIDACIONES DIAGONALES \
        else if(btn1.textContent === 'X' && btn5.textContent === 'X' && btn9.textContent === ''){
            btn9.textContent = 'O'
            btn9.disabled = true;
            turno = jugador1;
        }else if(btn9.textContent === 'X' && btn5.textContent === 'X' && btn1.textContent === ''){
            btn1.textContent = 'O'
            btn1.disabled = true;
            turno = jugador1;
        }else if(btn1.textContent === 'X' && btn9.textContent === 'X' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }


        // VALIDACIONES DIAGONALES /
        else if(btn3.textContent === 'X' && btn5.textContent === 'X' && btn7.textContent === ''){
            btn7.textContent = 'O'
            btn7.disabled = true;
            turno = jugador1;
        }else if(btn7.textContent === 'X' && btn5.textContent === 'X' && btn3.textContent === ''){
            btn3.textContent = 'O'
            btn3.disabled = true;
            turno = jugador1;
        }else if(btn3.textContent === 'X' && btn7.textContent === 'X' && btn5.textContent === ''){
            btn5.textContent = 'O'
            btn5.disabled = true;
            turno = jugador1;
        }else{
            var btns = document.querySelectorAll('button[id^="a"], button[id^="b"], button[id^="c"]');
            var botonesVacios = [];
            for (var i = 0; i < btns.length; i++) {
                var btn = btns[i];
                if (btn.textContent.trim() === '') {
                    botonesVacios.push(btn);
                }
            }
            var esquinasDisponibles = [btns[0], btns[2], btns[6], btns[8]].filter(btn => btn.textContent.trim() === '');
            if(botonesVacios.length === 8){
                var indiceAleatorio = Math.floor(Math.random() * esquinasDisponibles.length);
                var btnAleatorio = esquinasDisponibles[indiceAleatorio];
                btnAleatorio.textContent = 'O';
                btnAleatorio.disabled = true;
            }else if (botonesVacios.length > 0) {
                var indiceAleatorio = Math.floor(Math.random() * botonesVacios.length);
                var btnAleatorio = botonesVacios[indiceAleatorio];
                btnAleatorio.textContent = 'O';
                btnAleatorio.disabled = true;
            }
        }
    }


    function botonesDeshabilitados() {
        var btns = document.querySelectorAll('button[id^="a"], button[id^="b"], button[id^="c"]');
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.disabled = true;
        }
    }

    


    function verificar(){
        maquina()

        if(btn1.textContent === 'X' && btn2.textContent === 'X' && btn3.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }if(btn4.textContent === 'X' && btn5.textContent === 'X' && btn6.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }if(btn7.textContent === 'X' && btn8.textContent === 'X' && btn9.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }
        if(btn1.textContent === 'X' && btn4.textContent === 'X' && btn7.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }
        if(btn2.textContent === 'X' && btn5.textContent === 'X' && btn8.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }
        if(btn3.textContent === 'X' && btn6.textContent === 'X' && btn9.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }
        if(btn1.textContent === 'X' && btn5.textContent === 'X' && btn9.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }
        if(btn3.textContent === 'X' && btn5.textContent === 'X' && btn7.textContent === 'X') {
            Swal.fire("Ganaste!!!");
            botonesDeshabilitados()
        }
        if(btn1.textContent === 'O' && btn2.textContent === 'O' && btn3.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }
        if(btn4.textContent === 'O' && btn5.textContent === 'O' && btn6.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }
        if(btn7.textContent === 'O' && btn8.textContent === 'O' && btn9.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }


        if(btn1.textContent === 'O' && btn4.textContent === 'O' && btn7.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }
        if(btn2.textContent === 'O' && btn5.textContent === 'O' && btn8.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }
        if(btn3.textContent === 'O' && btn6.textContent === 'O' && btn9.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }


        if(btn1.textContent === 'O' && btn5.textContent === 'O' && btn9.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }
        if(btn3.textContent === 'O' && btn5.textContent === 'O' && btn7.textContent === 'O') {
            Swal.fire("Perdiste!");
            botonesDeshabilitados()
        }
    }
});