function btnBold() {
    const textarea = document.querySelector('textarea[name="message-whatsapp"]');
    const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    const formattedText = `*${selectedText}*`;
    const beforeText = textarea.value.substring(0, textarea.selectionStart);
    const afterText = textarea.value.substring(textarea.selectionEnd);
    textarea.value = beforeText + formattedText + afterText;
}