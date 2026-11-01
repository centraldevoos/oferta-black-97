// Configuração da página que revela a oferta da Super Black Friday. É o arquivo que se edita à mão antes de publicar.
window.CONFIG = {
  // Preço da Super Black Friday.
  PRECO: 197,
  // Esta versão (oferta-black-97): para quem viu o VIP a R$ 97. Tudo por R$ 197, por 2 anos, sem acesso extra (Pedro, 1/11/2026). A âncora é a soma dos valores × ANOS × ACESSOS.
  ANOS: 2,
  ACESSOS: 1,
  // Parcela no cartão: a de R$ 197 no Hub.la (base/central-de-voos/negocio.md).
  PARCELA: "12x de R$ 19,78",
  // Quanto "só o VIP estava" para este público.
  PRECO_VIP_ANO: 97,

  // Horário das vagas, todo dia, no horário de Brasília.
  // Antes de ABRE: "as vagas ainda estão fechadas, abrem hoje às 12h" com a contagem. Entre ABRE e FECHA: "vagas abertas, fecham em".
  // Depois de FECHA, volta a contagem para as 19h, sempre como se fosse a primeira abertura (sem "encerradas" nem "nova abertura").
  VAGAS: { ABRE: "12:00", FECHA: "00:10" },
  TEXTOS: {
    antes: "O link pra garantir a sua vaga chega no seu grupo do WhatsApp às 12h.",
    aberto: "Garanta a sua pelo link que chegou no seu grupo do WhatsApp.",
  },
  // A página não tem botão (pedido do Pedro, 31/10/2026). Se um dia precisar, true + CHECKOUT mostra o botão só com as vagas abertas.
  MOSTRAR_BOTAO_NO_ABERTO: false,
  CHECKOUT: "",

  // Pilha de valor: "valor" é o preço de 1 ano de cada entrega, para UM acesso.
  // A âncora da página é a soma × 2 anos × 2 acessos (pedido do Pedro, 31/10/2026).
  // PROPOSTA (âncora menor que a da oferta-black-tr): soma R$ 1.029 por ano, × 2 anos = R$ 2.058.
  PRINCIPAIS: [
    { nome: "Comunidade VIP no WhatsApp", desc: "Grupos separados por região, com mais de 1.000 promoções por semana e todas as datas disponíveis, saindo de todo o Brasil para o Brasil e o mundo.", valor: 97, oficial: false },
    { tag: "Novidade", nome: "Plataforma Central de Voos", desc: "Tudo da Central no seu celular: busca personalizada entre todas as promoções ativas e monitoramento das suas passagens com IA.", valor: 297, oficial: false },
    { nome: "Workshop: O Segredo das Passagens Baratas", desc: "Um encontro ao vivo pra entender de vez como chegar nas passagens mais baratas que existem.", valor: 197, oficial: false },
  ],
  BONUS: [
    { nome: "Curso Completo de Milhas", desc: "Pra quem quiser aprender a viajar pagando só a taxa de embarque. Você não precisa saber nada disso pra aproveitar o VIP.", valor: 197, oficial: false },
    { nome: "Grupo de Estratégias", desc: "Transferências bonificadas, promoções de compra de milhas e as melhores oportunidades, em primeira mão.", valor: 97, oficial: false },
    { nome: "Suporte Jurídico Gratuito", desc: "Advogada especialista no direito do passageiro aéreo pra qualquer problema nas suas viagens.", valor: 97, oficial: false },
    { nome: "Guia dos Melhores Cartões de Crédito", desc: "Pra transformar cada gasto do seu dia a dia em viagens inesquecíveis.", valor: 47, oficial: false },
  ],

  // Depoimentos em vídeo do vturb, escolhidos entre os de depoimentos.centraldevoos.com. capa = arquivo em midia/depoimentos/.
  // proporcao = a do vídeo (o player ocupa esse espaço quando a pessoa toca).
  VTURB_CONTA: "00c8b9a1-000b-422f-abff-cb49b5ef54fa",
  VIDEOS: [
    { player: "6ae4e1b0d653f6988a0ff277", capa: "v1.jpg", proporcao: "9 / 16", marca: "Austrália", titulo: "Quatro passagens para um reencontro" },
    { player: "6ae4e1db183f0675fc8d469c", capa: "v2.jpg", proporcao: "3 / 4", marca: "Executiva", titulo: "Rio–Madri, sem conexão e de executiva" },
    { player: "6ae4e1b5217265d6b619517a", capa: "v3.jpg", proporcao: "3 / 4", marca: "Novos destinos", titulo: "De Cancún aos próximos destinos" },
    { player: "6a1f764a0b98d8bade87d2dc", capa: "v4.jpg", proporcao: "9 / 16", marca: "Roma", titulo: "Ida e volta de executiva para o casal" },
    { player: "6ae4e1c73ce680b34e9eec8e", capa: "v5.jpg", proporcao: "9 / 16", marca: "Noronha", titulo: "O sonho de Noronha virou passagem emitida" },
    { player: "6a1f7665c2771546fc15f770", capa: "v6.jpg", proporcao: "9 / 16", marca: "Fortaleza", titulo: "Ida e volta por R$ 440" },
    { player: "6ae4e1fb2c77645459956248", capa: "v7.jpg", proporcao: "9 / 16", marca: "Monitoramento", titulo: "Roma começou com um monitoramento" },
    { player: "6ae4e19a217265d6b619510f", capa: "v8.jpg", proporcao: "9 / 16", marca: "Milhas", titulo: "Pontos do cartão viraram viagem em família" },
  ],
};
