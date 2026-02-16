function btnBold() {
    // 1. Agarrar el textarea
    const textarea = document.getElementById('input-text');
    
    // 2. Obtener posiciones de selección
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    // 3. Extraer las 3 partes del texto
    const textoAntes = textarea.value.substring(0, start);
    const textoSeleccionado = textarea.value.substring(start, end);
    const textoDespues = textarea.value.substring(end);
    
    // 4. Construir el nuevo texto con asteriscos
    const nuevoTexto = textoAntes + '*' + textoSeleccionado + '*' + textoDespues;
    
    // 5. Reemplazar el contenido del textarea
    textarea.value = nuevoTexto;
    
    // 6. Mantener el cursor después del texto modificado
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = end + 1;
    textarea.focus();
}