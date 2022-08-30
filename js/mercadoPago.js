let vipx30dias = document.getElementById('vipx30dias')
let vipx60dias = document.getElementById('vipx60dias')
let vipx90dias = document.getElementById('vipx90dias')

vipx30dias.addEventListener('click', () =>{
    
});


const mp = new MercadoPago('TEST-175c9ea0-6a24-43f5-b35a-4d9a5c1f7180', {
    locale: 'pt-BR'
});

mp.checkout({
    preference: {
        id: '241447996-8d3a23bf-01ab-45e0-8492-8d691af13ea3'
    },
    render: {
        container: '.button',
        label: 'Comprar',
    }
});