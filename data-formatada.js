document.addEventListener('DOMContentLoaded', () => {
    // Selecione todos os elementos com a classe 'premium-blog-meta-data'
    const dateElements = document.querySelectorAll('.premium-blog-meta-data');

    // Para cada elemento, processe a data
    dateElements.forEach(element => {
        // Obtenha o texto do elemento
        let dateText = element.textContent.trim();

        // Verifique se o formato da data é mm/dd/yyyy usando uma expressão regular
        const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

        // Se a data corresponder ao formato esperado
        if (datePattern.test(dateText)) {
            // Extraia os componentes da data usando grupos de captura da expressão regular
            const [, month, day, year] = dateText.match(datePattern);

            // Formate a data para o formato dd/mm/yyyy
            const formattedDate = `${day}/${month}/${year}`;

            // Atualize o texto do elemento com a data formatada
            element.textContent = formattedDate;
        }
    });
});

