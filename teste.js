// Dados para o gráfico
const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Vendas (R$)',
        data: [1200, 1900, 3000, 5000, 2300, 4000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Configuração do gráfico
const config = {
    type: 'line', // ou 'bar', 'pie', etc.
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Desempenho Mensal'
            }
        }
    }
};

// Renderizar o gráfico
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, config);











