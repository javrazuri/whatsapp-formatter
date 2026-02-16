
function aplicarFormato(simbolo) {
    const textarea = document.getElementById('input-text');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    const textoAntes = textarea.value.substring(0, start);
    const textoSeleccionado = textarea.value.substring(start, end);
    const textoDespues = textarea.value.substring(end);
    
    let nuevoTexto;
    let nuevaPosicionStart;
    let nuevaPosicionEnd;
    
    if (textoAntes.endsWith(simbolo) && textoDespues.startsWith(simbolo)) {
        const textoAntesSinSimbolo = textoAntes.slice(0, -1);
        const textoDespuesSinSimbolo = textoDespues.slice(1);
        
        nuevoTexto = textoAntesSinSimbolo + textoSeleccionado + textoDespuesSinSimbolo;
        nuevaPosicionStart = start - 1;
        nuevaPosicionEnd = end - 1;
        
    } else {
        nuevoTexto = textoAntes + simbolo + textoSeleccionado + simbolo + textoDespues;
        nuevaPosicionStart = start + 1;
        nuevaPosicionEnd = end + 1;
    }
    
    textarea.value = nuevoTexto;
    textarea.selectionStart = nuevaPosicionStart;
    textarea.selectionEnd = nuevaPosicionEnd;
    textarea.focus();
}

// Funciones simples que llaman a la genérica
function btnBold() {
    aplicarFormato('*');
}

function btnItalic() {
    aplicarFormato('_');
}

function btnStrikethrough() {
    aplicarFormato('~');
}

function btnMono() {
    aplicarFormato('```');
}

function btnQuote() {
    aplicarFormato('>');
}  

function btnCode () {
    aplicarFormato('``');
}