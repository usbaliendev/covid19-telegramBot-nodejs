const { Composer } = require("micro-bot");
const axios = require("axios");

const bot = new Composer();

/* INICIO */
bot.start((ctx) =>
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*BOT INICIADO!* 🦠😷
	
👋🏻 Olá! Bem vindo ao seu parceiro informativo de Covid-19 do DF!
⬇️ Selecione a ação desejada:
		 
1️⃣ - Locais e postos de vacinação
2️⃣ - Máscaras recomendadas
3️⃣ - Cuidados e profilaxia
4️⃣ - Taxa de eficácia das vacinas
5️⃣ - Tempo de intervalo entre doses
6️⃣ - Link de redirecionamento
(agendamento, cadastro, consulta e imprimir)
7️⃣ - Como a vacina funciona
8️⃣ - Terceira dose
9️⃣ - A vacina contra a nova variante`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "1️⃣", callback_data: "LPV" },
						{ text: "2️⃣", callback_data: "MR" },
						{ text: "3️⃣", callback_data: "CP" },
					],
					[
						{ text: "4️⃣", callback_data: "TEV" },
						{ text: "5️⃣", callback_data: "TIDS" },
						{ text: "6️⃣", callback_data: "LR" },
					],
					[
						{ text: "7️⃣", callback_data: "CFV" },
						{ text: "8️⃣", callback_data: "TD" },
						{ text: "9️⃣", callback_data: "VCNV" },
					],
					[{ text: "🛑 Terminar", callback_data: "END" }],
				],
			},
		}
	)
);

/* REINICIAR */
bot.action("restart", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*BOT INICIADO!* 🦠😷
	
👋🏻 Olá! Bem vindo ao seu parceiro informativo de Covid-19 do DF!
⬇️ Selecione a ação desejada:
			 
1️⃣ - Locais e postos de vacinação
2️⃣ - Máscaras recomendadas
3️⃣ - Cuidados e profilaxia
4️⃣ - Taxa de eficácia das vacinas
5️⃣ - Tempo de intervalo entre doses
6️⃣ - Link de redirecionamento
(agendamento, cadastro, consulta e imprimir)
7️⃣ - Como a vacina funciona
8️⃣ - Terceira dose
9️⃣ - A vacina contra a nova variante`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "1️⃣", callback_data: "LPV" },
						{ text: "2️⃣", callback_data: "MR" },
						{ text: "3️⃣", callback_data: "CP" },
					],
					[
						{ text: "4️⃣", callback_data: "TEV" },
						{ text: "5️⃣", callback_data: "TIDS" },
						{ text: "6️⃣", callback_data: "LR" },
					],
					[
						{ text: "7️⃣", callback_data: "CFV" },
						{ text: "8️⃣", callback_data: "TD" },
						{ text: "9️⃣", callback_data: "VCNV" },
					],
					[{ text: "🛑 Terminar", callback_data: "END" }],
				],
			},
		}
	);
});

/* ACTIONS */

// LOCAIS/POSTOS DE VACINAÇÃO
bot.action("LPV", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*LOCAIS E POSTOS DE VACINAÇÃO*

Abaixo temos o link do site oficial da secretaria de saúde que disponibiliza os locais e os horários das vacinas para pessoas de todas as idades.
O site contem as primeiras doses, segundas doses, doses adicionais, doses de reforço e postos noturnos. A pagina é oficial e é atualizada regularmente.`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "↗️ Link",
							url: "https://www.saude.df.gov.br/locaisdevacinacao/",
						},
					],
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// MASCARAS RECOMENDADAS
bot.action("MR", (ctx) => {
	/* ctx.deleteMessage() */
	/* ctx.telegram.sendPhoto(
		ctx.chat.id,
		"https://a-static.mlcdn.com.br/618x463/mascara-respirador-pff2-n95-similar-kn95-adulto-branca-pacote-50-unidades-exmedi/atacadonet/143p/7a1c5cafe28fe3291452e4c5a50e7c41.jpg",
		{
			caption: "Máscaras PFF2 (ou N95)",
		}
	); */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*MÁSCARAS RECOMENDADAS*
		
O guia mostra os melhores tipos e as combinações mais eficientes, ordenadas em ordem de recomendação e qualidade:

1️⃣ - Máscaras PFF2 (ou N95)
2️⃣ - Máscaras KN95
3️⃣ - Máscaras elastoméricas
4️⃣ - Máscaras com válvula
5️⃣ - Máscaras cirúrgicas ou de procedimentos
6️⃣ - Máscaras de pano com 3 camadas
(Apenas em ultimo caso de falta/emergencia)
		
Segue abaixo o link de referência de uma matéria completa sobre o assunto. ⬇️⬇️⬇️`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "↗️ Link",
							url: "https://g1.globo.com/bemestar/coronavirus/noticia/2021/06/11/mascaras-contra-a-covid-19-guia-mostra-os-melhores-tipos-e-as-combinacoes-mais-eficientes.ghtml",
						},
					],
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// CUIDADOS
bot.action("CP", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*Cuidados e Profilaxia*

Para evitar a propagação da COVID-19, siga estas orientações:
      
▫️ Mantenha uma distância segura de outras pessoas, mesmo que elas não pareçam estar doentes.
▫️ Use máscara em público, especialmente em locais fechados ou quando não for possível manter o distanciamento físico.
▫️ Prefira locais abertos e bem ventilados em vez de ambientes fechados. Abra uma janela se estiver em um local fechado.
▫️ Limpe as mãos com frequência. Use sabão e água ou álcool em gel.
▫️ Tome a vacina quando chegar a sua vez. Siga as orientações locais para isso.
▫️ Cubra o nariz e a boca com o braço dobrado ou um lenço ao tossir ou espirrar.
▫️ Fique em casa se você sentir indisposição.`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// TAXA EFICIENCIA
bot.action("TEV", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*TAXA DE EFICÁCIA DAS VACINAS*

1️⃣ - Vacina Astrazeneca
A vacina demonstrou eficácia de _70,4%_ contra a infecção e _100%_ contra casos graves da infecção.

2️⃣ - Vacina Coronavac
A vacina demonstrou uma taxa de eficácia de _78%_ para casos leves e de _100%_ para infecções moderadas e graves.

3️⃣ - Taxa de eficácia da Vacina Pfizer
A vacina apresentou _95%_ de eficácia contra infecção e _100%_ contra casos graves da doença.`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// INTERVALO DOSES
bot.action("TIDS", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*TEMPO DE INTERVALO ENTRE DOSES DAS VACINAS*

1️⃣ - Vacina Astrazeneca
Intervalo de *8 semanas* para _segunda dose_
Intervalo de *4 meses* para _terceira dose_
		
2️⃣ - Vacina Coronavac
Intervalo de *2 a 4 semanas* para _segunda dose_
Intervalo de *4 meses* para _terceira dose_
		
3️⃣ - Vacina Pfizer
Intervalo de *8 semanas* para _segunda dose_
Intervalo de *4 meses* para _terceira dose_`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "↗️ Fonte",
							url: "https://www.cnnbrasil.com.br/saude/intervalo-da-terceira-dose-sera-reduzido-de-cinco-para-quatro-meses-anuncia-queiroga/",
						},
					],
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// REDIRECIONAMENTO
bot.action("LR", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*LINKS DE REDIRECIONAMENTO*

1️⃣ - Cadastro de comorbidades e grupos prioritários

2️⃣ - Fazer agendamento

3️⃣ - Consultar agendamento		

4️⃣ - Imprimir ficha de vacina`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "1️⃣",
							url: "https://vacina.saude.df.gov.br/Comorbidade",
						},
						{
							text: "2️⃣",
							url: "https://vacina.saude.df.gov.br/",
						},
						{
							text: "3️⃣",
							url: "https://vacina.saude.df.gov.br/Home/Consultar",
						},
						{
							text: "4️⃣",
							url: "https://vacina.saude.df.gov.br/Home/Ficha",
						},
					],
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// COMO FUNCIONA A VACINA
bot.action("CFV", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*COMO A VACINA FUNCIONA*

Tecnologia genética do RNA mensageiro (Pfizer e Moderna): é a tecnologia mais utilizada na produção de vacinas para animais e que faz com que as células saudáveis do corpo produzam a mesma proteína que o coronavírus utiliza para entrar nas células. Ao fazer isso, o sistema imune é obrigado a produzir anticorpos que, durante uma infecção, podem neutralizar a proteína do verdadeiro coronavírus e impedir o desenvolvimento da infecção;

Uso de adenovírus modificados (Astrazeneca, Sputnik V e J&J): consiste em utilizar adenovírus, que são inofensivos para o corpo humano, e modificá-los geneticamente para que atuem de forma parecida com o coronavírus, mas sem risco para a saúde. Isso faz com que o sistema imunológico treine e produza anticorpos capazes de eliminar o vírus caso aconteça a infecção;
		
Uso do coronavírus inativado (Coronavac) : é utilizada uma forma inativada do novo coronavírus que não provoca a infecção, nem problemas para a saúde, mas que permite ao corpo produzir os anticorpos necessários para combater o vírus.
`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "↗️ Fonte",
							url: "https://www.tuasaude.com/vacina-covid/",
						},
					],
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// TERCEIRA DOSE
bot.action("TD", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*É PRECISO TOMAR A TERCEIRA DOSE?*

O Ministério da Saúde no Brasil autorizou a terceira dose da vacina contra a COVID-19, com previsão de iniciar a aplicação em setembro, preferencialmente com uma dose de reforço da vacina da Pfizer ou, de forma alternativa, uma dose de uma das vacinas da AstraZeneca ou da Janssen.

Essa dose de reforço, inicialmente será feita em idosos com mais de 60 anos que tenham recebido as duas doses de qualquer outra vacina da COVID-19 há pelo menos 6 meses e, também, para pessoas com o sistema imunológico enfraquecido que completaram o esquema de vacinação com duas doses de qualquer vacina ou dose única da Janssen há pelo menos 28 dias e para os profissionais de saúde. Veja quando tomar a terceira dose da vacina contra a COVID-19. 🧭
		
Em Portugal, a Agência Europeia de Medicamentos autorizou a aplicação da terceira dose da vacina contra a COVID-19 com Pfizer para pessoas acima dos 65 anos e que foram vacinadas com esse imunizante.
`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "🧭 Intervalo Doses", callback_data: "TIDS" },
						{
							text: "↗️ Fonte",
							url: "https://www.tuasaude.com/vacina-covid/",
						},
					],
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// TERCEIRA DOSE
bot.action("VCNV", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(
		ctx.chat.id,
		`*A VACINA CONTRA AS NOVAS VARIANTES*

De acordo com a OMS, as vacinas contra a COVID-19 deverão apresentar efeito contra as variantes do vírus que forem surgindo, já que estimulam uma complexa resposta imune de todo o organismo, que ficará "atento" para partículas do novo coronavírus, mesmo que surjam algumas modificações na sua estrutura.

Ainda assim, mesmo que se fique infectado com uma nova variante, as chances de desenvolver uma infecção grave que coloque a vida em risco, é muito inferior para quem se encontra completamente imunizado, ou seja, com mais de 2 semanas após a 2ª dose da vacina.
		
É esperado que, ao longo do tempo e, à medida que vão surgindo novas variantes, que a composição das vacinas seja gradualmente atualizada, para conferir maior proteção.
`,
		{
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "↗️ Fonte",
							url: "https://www.tuasaude.com/vacina-covid/",
						},
					],
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
		}
	);
});

// END
bot.action("END", (ctx) => {
	ctx.deleteMessage();
	bot.stop();
});

/* ACTION DEFAULT */
// 1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟↗️
bot.action("CP", (ctx) => {
	/* ctx.deleteMessage() */
	ctx.telegram.sendMessage(ctx.chat.id, ``, {
		parse_mode: "Markdown",
		reply_markup: {
			inline_keyboard: [[{ text: "", callback_data: "" }]],
		},
	});
});

/* HELP */
bot.help((ctx) =>
	ctx.reply(
		`Fantástico!👏 Aqui abaixo está a descrição das minhas funcionalidades, por favor 🙏 leia antes de prosseguir pra você desfrutar de tudo que esse bot pode oferecer.
		
Aqui está a lista dos meus principais recursos:
▫️ Locais Postos de vacinação
▫️ Pontos de vacinação para primeira dose, segunda dose, dose de reforço e para 85+
▫️ Máscaras Recomendadas
▫️ Cuidados e Profilaxia 
▫️ Taxa de eficácia das vacinas
▫️ Tempo de intervalo das doses
▫️ Link de redirecionamento (agendamento,cadastro,consulta e imprimir)
▫️ Mais informações da vacina 

E aqui está a lista completa de comandos:
/start - comece a usar bot / vá para o menu principal
/help - ajuda aberta
/add - adicionar novo lembrete
/list - obter uma lista de seus lembretes
/citacao - citação do dia
/settings - alterar as configurações do bot 
/web - gera link para a interface da Web do bot
/cancel - cancela a operação atual

Se você gosta ❤️ de como faço meu trabalho, não se esqueça de dar +rep no github do projeto: https://github.com/usbangelo/covid19-telegramBot-nodejs
Isso é muito importante para mim. Obrigado!

Isso é tudo. Podemos começar? Do que devo lembrá-lo?`
	)
);

/* FUNCTIONS */
// ACTUAL USE
/* 
statecode = ctx.match
getData()
.then((result)=>{
	ctx.telegram.sendMessage(ctx.chat.id, result,{
		reply_markup: {
				inline_keyboard: [
					[
						{ text: "⏏️ Inicio", callback_data: "restart" },
						{ text: "🛑 Terminar", callback_data: "END" },
					],
				],
			},
	})
})*/

async function getData(statecode) {
	url = "https://api.covid19india.org/data.json";
	let res = await axios.get(url);
	estadoDataArr = res.data.statewise;
	dataEstado = estadoDataArr.filter((elem) => {
		return elem.statecode == statecode;
	});
	cases = dataEstado[0];
	/* console.log(cases.confirmed); */
	results = `Casos em ${cases.state}
Casos confirmados: ${cases.confirmed}
Casos ativos: ${cases.active}
Casos recuperados: ${cases.recovered}
Mortes confirmadas: ${cases.deaths}
		`;
	return results;
}

/* COMMANDS */
bot.command("citacao", (ctx) => {
	url = "http://yerkee.com/api/fortune";

	axios.get(url).then((res) => {
		console.log(res.data.fortune);
		ctx.reply(res.data.fortune);
	});
});

bot.on("sticker", (ctx) => ctx.reply("🦠"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));

// MAIN FUNCTIONS
//bot.launch()
module.exports = bot;

// Permite parar execucao graciosamente
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
