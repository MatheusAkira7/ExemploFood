import {useState }from 'react'

//Array de objetos contendo o estado inicial do cardapio
const cardapio=[
    {id:1,nome:"Combo-01",preco:25.00,disponivel:true,quantidade:0},
    {id:2, nome:"Combo-01",preco: 25.00,disponivel:true,quantidade:0},
    {id:3, nome:"Combo-01",preco: 25.00,disponivel:true,quantidade:0},
    {id:4, nome:"Combo-01",preco: 25.00,disponivel:true,quantidade:0},
];

const Pedido = () => {

    //HOOk - useState - Manipula o estado da variavel 
    //Estados para gerenciar a lista de items
    const[items,setItems]=useState(cardapio);
    const[status,setStatus]=useState("");
    const[enviar,setEnviar]=useState(false);

    //Valor adicionado ao total quando tiver items no carrinho
    const taxaEntrega=5.00;

    //Função que altera a quantidade de um produto
    const alterarQuantidade =(id,valor)=>{
        setItems(prev=>
            //Map: percorre a lista para criar um NOVO array sem modificar
            //o original(IMUTABILIDADE)
            prev.map(item=>
                //TERNARIO:verifica se o item da interação atual é o que deve ser
                //alterado
                //SPREED (...item):copia as propriedades do item e 
                //atualiza apenas a quantidade mantendo o resto 
                //Math.max : garante que a quantidade nunca será menor que 0:
                //Item : retorna o item intacto caso o id não correspondia 


                item.id===id ?{... item,quantidade:Math.max(0,item.quantidade + valor)}: item
            )


        )
    }
    //FILTER - Seleciona apenas os produtos disponiveis e do carrinho 
    const produtosDisponiveis = items.filter (item=>item.disponivel);
    const carrinho = items.filter(item=>item.quantidade >0);
    //REDUCE- Calcula a soma dos items (preço * quantidade) e adiciona a taxa de entrega 
    const subtotal = carrinho.reduce((ac,item)=> ac + item.preco * item.quantidade,0);
    const total = subtotal >0 ? subtotal + taxaEntrega :0;

    //SIMULAÇÃO DO CICLO DE VIDA DA ENTREGA USANDO TEMPORIZADORES ASSINCRONOS 
    const confirmarPedido ()=>{
        setEnviar(true);
        setStatus("Restaurante preparando seu pedido...");
        setTimeout(()=>{
            setStatus("Seu pedido saiu para entrega!");
            setEnviar(false)
        },5000);
        setTimeout(()=>{
            setStatus("Seu pedido foi entregue com sucesso")
            setEnviar(false)
        },10000);
    }  
  return (
    <>
        
    </>
  )
}

export default Pedido
