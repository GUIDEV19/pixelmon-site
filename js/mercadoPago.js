const mp = new MercadoPago('TEST-175c9ea0-6a24-43f5-b35a-4d9a5c1f7180', {
    locale: 'pt-BR'
});

mp.checkout({
    preference: {
        id: '241447996-92921969-e506-4a28-8e80-052f0b7b7b70'
    },
    render: {
        container: '.button',
        label: 'Comprar',
    }
});