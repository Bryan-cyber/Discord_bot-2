const { Client, GatewayIntentBits, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, PermissionFlagsBits } = require('discord.js')
const { EmbedBuilder }  = require('discord.js')

const execute = (bot, msg, arg) => {
    const embed = new MessageEmbed()
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ]
});

module.exports = {
    run: async ({ interaction }) => {
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) { 
            interaction.reply({ content: `Você não possui permissão!`, ephemeral: true })
        }else {
        
        const painel = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('painel_1')
                .setPlaceholder('Clique')
                .addOptions(
                    {
                        label: '💲 Solicitar Recursos',
                        description: 'Solicite recursos gastos em investigação',
                        value: 'opc1',
                    },

                    {
                        label: '👤 Provas',
                        description: 'Envie sua provas coletadas em investigações',
                        value: 'opc2',
                    },
                    
                    {
                        label: '📝Limpar Menu',
                        description: 'Clique para limpar o menu e selecionar outra opção',
                        value: 'opc3',
                    }
                )
        );

        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Bem-vindo(a) ao canal de registro do Departamento! 👊')
        .setAuthor({ name: 'Departamento de Inteligência Policial', iconURL: 'https://i.imgur.com/SOSg95U.png', url: 'https://discord.js.org' })
        .setDescription(`> Este canal tem como finalidade exclusiva o registro de recursos investigativos.\n\n > Caso não faça parte do quadro de políciais investigativos do estado do Destiny não crie registros desnecessários. Agradecemos pela sua compreensão.`)
        .setImage('https://i.imgur.com/HW2UrrF.png')
        .setTimestamp()
        .setFooter({ text: 'Atenciosamente, Departamento de Inteligência Policial', iconURL: 'https://i.imgur.com/SOSg95U.png' });
        interaction.channel.send({ embeds: [exampleEmbed], components: [painel]});     
    }},

    data: {
        name: "modal",
        description: "Mostrar Modal"
    }
};

