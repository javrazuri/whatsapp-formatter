function btnBold() {
    const textarea = document.getElementById('input-text');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    const textoAntes = textarea.value.substring(0, start);
    const textoSeleccionado = textarea.value.substring(start, end);
    const textoDespues = textarea.value.substring(end);
    
    let nuevoTexto;
    let nuevaPosicionStart;
    let nuevaPosicionEnd;
    
    if (textoAntes.endsWith('*') && textoDespues.startsWith('*')) {
        // Ya tiene formato, QUITAR asteriscos
        const textoAntesSinAsterisco = textoAntes.slice(0, -1);
        const textoDespuesSinAsterisco = textoDespues.slice(1);
        
        nuevoTexto = textoAntesSinAsterisco + textoSeleccionado + textoDespuesSinAsterisco;
        
        nuevaPosicionStart = start - 1;
        nuevaPosicionEnd = end - 1;
        
    } else {
        // No tiene formato, AGREGAR asteriscos
        nuevoTexto = textoAntes + '*' + textoSeleccionado + '*' + textoDespues;
        
        nuevaPosicionStart = start + 1;
        nuevaPosicionEnd = end + 1;
    }
    
    textarea.value = nuevoTexto;
    textarea.selectionStart = nuevaPosicionStart;
    textarea.selectionEnd = nuevaPosicionEnd;
    textarea.focus();
}