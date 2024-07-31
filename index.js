require('dotenv/config');
const { Client, IntentsBitField, GatewayIntentBits, ActionRowBuilder, createMessageComponentcollector, SlashCommandBuilder, ButtonStyle, ModalBuilder, ButtonBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, Member, ComponentType } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const { EmbedBuilder }  = require('discord.js')
const MessageEmbed = require('discord.js').MessageEmbed
const path = require('path');
const { ChannelType } = require('discord.js');

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'slash-commands'),
  eventsPath: path.join(__dirname, 'events'),
});



const TOKEN = ' '; // Chave do seu BOT
client.login(TOKEN);

let recursos = 'N/A'
function setRecursos(id) {
  recursos = id;
}

let prova = 'N/A'
function setProva(id) {
  prova = id;
}



client.on("interactionCreate", (interaction) => {
  if (interaction.isStringSelectMenu()) {
      if(interaction.customId === "painel_1") {
          let opc = interaction.values[0]
          if (opc === "opc1") {
              
              const modal = new ModalBuilder ({
                  custom_id: `MeuModal-${interaction.user.id}`,
                  title: "Sistema de Provas",
              });
          
              const favoriteColorInput = new TextInputBuilder({
                  customId: "favoriteColorInput",
                  label: "Valor:",
                  style: TextInputStyle.Short,
              });
      
              const hobbiesInput = new TextInputBuilder({
                  customId: "hobbiesInput",
                  label: "Motivo",
                  style: TextInputStyle.Short,
              });
      
              const pergunta3Input = new TextInputBuilder({
                  customId: "pergunta3Input",
                  label: "Prova de Gasto (link imgur):",
                  style: TextInputStyle.Short,
              });

            
              const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
              const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);
              const threeActionRow = new ActionRowBuilder().addComponents(pergunta3Input);
                
              modal.addComponents(firstActionRow, secondActionRow, threeActionRow);
      
              interaction.showModal(modal);
      
              const filter = (modalInteraction) => modalInteraction.customId === `MeuModal-${interaction.user.id}`;

              interaction
              .awaitModalSubmit({ filter, time: 300_000 }) // Tempo para resposta
              .then((modalInteraction) => { 
                const favoriteColorValue = modalInteraction.fields.getTextInputValue("favoriteColorInput");
                const hobbiesValue = modalInteraction.fields.getTextInputValue("hobbiesInput");
                const pergunta3Value = modalInteraction.fields.getTextInputValue("pergunta3Input");
                const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Registro de Recursos 👊')
                .setAuthor({ name: 'Departamento de Inteligência Policial', iconURL: 'https://i.imgur.com/SOSg95U.png', url: 'https://discord.js.org' })
                .setDescription(`> **Valor:** ${favoriteColorValue}
                > **Motivo:** ${hobbiesValue}
                > **Prova de Gasto (link imgur):** ${pergunta3Value}
                > **Responsável: ** ${interaction.user}`)
                .setImage('https://i.imgur.com/MxVcJhE.png')
                .setTimestamp()

                setRecursos(interaction.user)
                let botao_recursos = new ActionRowBuilder().addComponents(
                  new ButtonBuilder()
                  .setCustomId('entregar_recurso')
                  .setLabel("Entregar Recurso")
                  .setEmoji('✔')
                  .setStyle(ButtonStyle.Success) // Ou qualquer outro estilo aceitáve
                )
              

                const channel = client.channels.cache.get(`1228506348833083423`);

                if (channel) {
                  // Aqui você cria a embed e a mensagem
                   channel.send(`<@&1225596425451208816>`);
                   channel.send({ embeds: [exampleEmbed], components: [botao_recursos] }); 
                   
                   
                } else {
                  console.error('Canal não encontrado.');
                }              
                modalInteraction.reply({content: `Feito`, ephemeral: true})
              })
              
              .catch((error) => {
                  if (error.code === 'InteractioncollectorError') {
                      console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
                      // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
                  } else {
                      console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
                  }
                  


              });
          }  //FIM DO IF opc1 
          else if (opc === "opc2") {
            const modal = new ModalBuilder ({
              custom_id: `Meuformulario-${interaction.user.id}`,
              title: "Sistema de Provas",
          });
      
          const provas_1 = new TextInputBuilder({
              customId: "provas_1",
              label: "Relatório:",
              style: TextInputStyle.Paragraph,
          });
  
          const provas_2 = new TextInputBuilder({
              customId: "provas_2",
              label: "Prova 01 Link (Caso não tenha mande um .)",
              style: TextInputStyle.Short,
          });
  
          const provas_3 = new TextInputBuilder({
              customId: "provas_3",
              label: "Prova 02 Link (Caso não tenha mande um .)",
              style: TextInputStyle.Short,
          });
  
          const provas_4 = new TextInputBuilder({
            customId: "provas_4",
            label: "Prova 03 Link (Caso não tenha mande um .)",
            style: TextInputStyle.Short,
        });
  
        const provas_5 = new TextInputBuilder({
          customId: "provas_5",
          label: "Prova 04 Link (Caso não tenha mande um .)",
          style: TextInputStyle.Short,
      });
  
  
      
        
          const firstActionRow = new ActionRowBuilder().addComponents(provas_1);
          const secondActionRow = new ActionRowBuilder().addComponents(provas_2);
          const threeActionRow = new ActionRowBuilder().addComponents(provas_3);
          const fourActionRow = new ActionRowBuilder().addComponents(provas_4);
          const fiveActionRow = new ActionRowBuilder().addComponents(provas_5);
  
          modal.addComponents(firstActionRow, secondActionRow, threeActionRow, fourActionRow, fiveActionRow);
  
          interaction.showModal(modal);
  
          const filter = (modalInteraction) => modalInteraction.customId === `Meuformulario-${interaction.user.id}`;
  
          interaction.awaitModalSubmit({ filter, time: 300_000 }) // Tempo para resposta
          .then((modalInteraction) => { 
            const favoriteColorValue1 = modalInteraction.fields.getTextInputValue("provas_1");
            const hobbiesValue = modalInteraction.fields.getTextInputValue("provas_2");
            const pergunta3Value = modalInteraction.fields.getTextInputValue("provas_3");
            const pergunta4Value = modalInteraction.fields.getTextInputValue("provas_4");
            const pergunta5Value = modalInteraction.fields.getTextInputValue("provas_5");
            const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Registro de Membros 👊')
            .setAuthor({ name: 'Departamento de Inteligência Policial', iconURL: 'https://i.imgur.com/SOSg95U.png', url: 'https://discord.js.org' })
            .setDescription(`> **Relatório:** ${favoriteColorValue1}
            > **Prova 01 Link (Caso não tenha mande um .):** ${hobbiesValue}
            > **Prova 02 Link (Caso não tenha mande um .)** ${pergunta3Value}
            > **Prova 03 Link (Caso não tenha mande um .):** ${pergunta4Value}
            > **Prova 04 Link (Caso não tenha mande um .):** ${pergunta5Value}
            > **Registro de:** ${interaction.user}`)
            .setImage('https://i.imgur.com/HW2UrrF.png')
            .setTimestamp()
  
            setProva(interaction.user)
            let botao_provas = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
              .setCustomId('aprovar_provas')
              .setLabel("Aceitar")
              .setEmoji('✔')
              .setStyle(ButtonStyle.Success) // Ou qualquer outro estilo aceitável
              );

            const channel = client.channels.cache.get(`1233595102291558451`);
        
            if (channel) {
              // Aqui você cria a embed e a mensagem
              channel.send(`<@&1225596425451208816>`);
              channel.send({ embeds: [exampleEmbed], components: [botao_provas] });
               
               
            } else {
              console.error('Canal não encontrado.');
            }

            modalInteraction.reply({content: `Feito`, ephemeral: true})  

          })
          
          .catch((error) => {
              if (error.code === 'InteractioncollectorError') {
                  console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
                  // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
              } else {
                  console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
              }
              
                 
          });
          }
          else if (opc === "opc3") { interaction.reply({content: `Seu painel foi atualizado!`, ephemeral: true})}//FIM DO IF opc2
      
      } else if (interaction.customId === "painel_2"){        
        let opc = interaction.values[0]
        if (opc === "opc1") {
          const modal = new ModalBuilder ({
            custom_id: `Meuformulario-${interaction.user.id}`,
            title: "Sistema de Registro",
        });
    
        const favoriteColorInput1 = new TextInputBuilder({
            customId: "favoriteColorInput1",
            label: "Nome Sobrenome:",
            style: TextInputStyle.Short,
        });

        const hobbiesInput2 = new TextInputBuilder({
            customId: "hobbiesInput",
            label: "RG",
            style: TextInputStyle.Short,
        });

        const pergunta3Input = new TextInputBuilder({
            customId: "pergunta3Input",
            label: "Telefone",
            style: TextInputStyle.Short,
        });



    
      
        const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput1);
        const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput2);
        const threeActionRow = new ActionRowBuilder().addComponents(pergunta3Input);

        modal.addComponents(firstActionRow, secondActionRow, threeActionRow);

        interaction.showModal(modal);

        const filter = (modalInteraction) => modalInteraction.customId === `Meuformulario-${interaction.user.id}`;

        interaction.awaitModalSubmit({ filter, time: 300_000 }) // Tempo para resposta
        .then((modalInteraction) => { 
          const favoriteColorValue1 = modalInteraction.fields.getTextInputValue("favoriteColorInput1");
          const hobbiesValue = modalInteraction.fields.getTextInputValue("hobbiesInput");
          const pergunta3Value = modalInteraction.fields.getTextInputValue("pergunta3Input");
          const exampleEmbed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('Registro de Membros 👊')
          .setAuthor({ name: 'Departamento de Inteligência Policial', iconURL: 'https://i.imgur.com/SOSg95U.png', url: 'https://discord.js.org' })
          .setDescription(`> **Nome Sobrenome:** ${favoriteColorValue1}
          > **RG:** ${hobbiesValue}
          > **Telefone:** ${pergunta3Value}
          > **Registro de:** ${interaction.user}`)
          .setImage('https://i.imgur.com/HW2UrrF.png')
          .setTimestamp()

          const channel = client.channels.cache.get(`1228505967470182521`);
      
          if (channel) {
            // Aqui você cria a embed e a mensagem
             channel.send(`<@&1225596425451208816>`);
             channel.send({ embeds: [exampleEmbed] });
             
          } else {
            console.error('Canal não encontrado.');
          }
          
          modalInteraction.reply({content: `👊`, ephemeral: true})          

        })
        
        .catch((error) => {
            if (error.code === 'InteractioncollectorError') {
                console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
                // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
            } else {
                console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
            }
            
               
        });
        } else if (opc === "opc2") { interaction.reply({content: `Seu painel foi atualizado!`, ephemeral: true})}
      } //Fim painel_2 
      else if (interaction.customId === "painel_3"){        
        let opc = interaction.values[0]
        if (opc === "opc1") {
          const modal = new ModalBuilder ({
            custom_id: `Meuformulario-${interaction.user.id}`,
            title: "Sistema de Dados",
        });
    
        const dados_1 = new TextInputBuilder({
            customId: "dados_1",
            label: "Nome Sobrenome:",
            style: TextInputStyle.Short,
        });

        const dados_2 = new TextInputBuilder({
            customId: "dados_2",
            label: "RG",
            style: TextInputStyle.Short,
        });

        const dados_3 = new TextInputBuilder({
            customId: "dados_3",
            label: "Telefone",
            style: TextInputStyle.Short,
        });

        const dados_4 = new TextInputBuilder({
          customId: "dados_4",
          label: "Organização pertencente",
          style: TextInputStyle.Short,
      });

      const dados_5 = new TextInputBuilder({
        customId: "dados_5",
        label: "Prova (Imgur ou Lightshoot)",
        style: TextInputStyle.Short,
    });


    
      
        const firstActionRow = new ActionRowBuilder().addComponents(dados_1);
        const secondActionRow = new ActionRowBuilder().addComponents(dados_2);
        const threeActionRow = new ActionRowBuilder().addComponents(dados_3);
        const fourActionRow = new ActionRowBuilder().addComponents(dados_4);
        const fiveActionRow = new ActionRowBuilder().addComponents(dados_5);

        modal.addComponents(firstActionRow, secondActionRow, threeActionRow, fourActionRow, fiveActionRow);

        interaction.showModal(modal);

        const filter = (modalInteraction) => modalInteraction.customId === `Meuformulario-${interaction.user.id}`;

        interaction.awaitModalSubmit({ filter, time: 30_000 }) // Tempo para resposta
        .then((modalInteraction) => { 
          const favoriteColorValue1 = modalInteraction.fields.getTextInputValue("dados_1");
          const hobbiesValue = modalInteraction.fields.getTextInputValue("dados_2");
          const pergunta3Value = modalInteraction.fields.getTextInputValue("dados_3");
          const pergunta4Value = modalInteraction.fields.getTextInputValue("dados_4");
          const pergunta5Value = modalInteraction.fields.getTextInputValue("dados_5");
          const exampleEmbed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('Registro de Membros 👊')
          .setAuthor({ name: 'Departamento de Inteligência Policial', iconURL: 'https://i.imgur.com/SOSg95U.png', url: 'https://discord.js.org' })
          .setDescription(`> **Nome Sobrenome:** ${favoriteColorValue1}
          > **RG:** ${hobbiesValue}
          > **Telefone:** ${pergunta3Value}
          > **Organização pertencente:** ${pergunta4Value}
          > **Prova:** ${pergunta5Value}
          > **Registro de:** ${interaction.user}`)
          .setImage('https://i.imgur.com/HW2UrrF.png')
          .setTimestamp()

          const channel = client.channels.cache.get(`1233188517522182185`);
      
          if (channel) {
            // Aqui você cria a embed e a mensagem
             channel.send(`<@&1225596425451208816>`);
             channel.send({ embeds: [exampleEmbed] });
             
          } else {
            console.error('Canal não encontrado.');
          }        

        })
        
        .catch((error) => {
            if (error.code === 'InteractionCollectorError') {
                console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
                // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
            } else {
                console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
            }
            
               
        });
        } else if (opc === "opc2") { interaction.reply({content: `Seu painel foi atualizado!`, ephemeral: true})}
      } //Fim painel_3
      

  } // Fim do Interaction Modal
  else if (interaction.isButton()) {
  if (interaction.customId === "entregar_recurso") {

    const modal = new ModalBuilder ({
      custom_id: `MeuModal-${interaction.user.id}`,
      title: "Digite o Motivo",
  });

  const motivo = new TextInputBuilder({
      customId: "motivo",
      label: "Prova:",
      style: TextInputStyle.Short,
  });


  
  const firstActionRow = new ActionRowBuilder().addComponents(motivo);
  modal.addComponents(firstActionRow);

  interaction.showModal(modal);

  const filter = (modalInteraction) => modalInteraction.customId === `MeuModal-${interaction.user.id}`;

  interaction
  .awaitModalSubmit({ filter, time: 300_000 }) // Tempo para resposta
  .then((modalInteraction) => { 
    const favoriteColorValue = modalInteraction.fields.getTextInputValue("motivo");
    const embed = new EmbedBuilder()
    .setColor(0x00FF7F)
    .setTitle('Registro de Pagamentos 👊')
    .setAuthor({ name: 'Inteligência Federal', iconURL: 'https://i.imgur.com/SOSg95U.png', url: 'https://discord.js.org' })
    .setDescription(`> <:Icon_Rules:1225980724948238397> A entrega de recurso de ${recursos} foi finalizada por ${interaction.user}.
    > **Comprovante:** ${favoriteColorValue}`)
    .setImage('https://i.imgur.com/vYuolKi.png')
    .setTimestamp()


    const channel = client.channels.cache.get(`1233849474200244244`)
    modalInteraction.reply({content: `Feito`, ephemeral: true})
    
    if (channel) {
      // Aqui você cria a embed e a mensagem
      channel.send({ embeds: [embed] });


    } else {
      console.error('Canal não encontrado.');
    }                
    

  })
  
  .catch((error) => {
      if (error.code === 'InteractioncollectorError') {
          console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
          // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
      } else {
          console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
      }
         

  });


  
  } // Fim entregar_pedido
  else if (interaction.customId === "aprovar_provas") {


    const modal = new ModalBuilder ({
      custom_id: `MeuModal-${interaction.user.id}`,
      title: "Digite",
  });

  const membro = new TextInputBuilder({
    customId: "membro",
    label: "ID do discord do investigador:",
    style: TextInputStyle.Short,
});


  const tempo = new TextInputBuilder({
    customId: "tempo",
    label: "Tempo bônus:",
    style: TextInputStyle.Short,
});

const dinheiro = new TextInputBuilder({
  customId: "dinheiro",
  label: "Dinheiro bônus:",
  style: TextInputStyle.Short,
});


  
  const secondActionRow = new ActionRowBuilder().addComponents(tempo);
  const threeActionRow = new ActionRowBuilder().addComponents(dinheiro);
  const fourActionRow = new ActionRowBuilder().addComponents(membro);
  modal.addComponents(secondActionRow, threeActionRow, fourActionRow);

  interaction.showModal(modal);

  const filter = (modalInteraction) => modalInteraction.customId === `MeuModal-${interaction.user.id}`;

  interaction
  .awaitModalSubmit({ filter, time: 300_000 }) // Tempo para resposta
  .then((modalInteraction) => { 
    const p1 = modalInteraction.fields.getTextInputValue("tempo");
    const p2 = modalInteraction.fields.getTextInputValue("dinheiro");
    const p3 = modalInteraction.fields.getTextInputValue("membro");
    const embed = new EmbedBuilder()
    .setColor(0xb31d1d)
    .setTitle('Registro de Provas 👊')
    .setAuthor({ name: 'Inteligência Federal', iconURL: 'https://i.imgur.com/SOSg95U.png', url: 'https://discord.js.org' })
    .setDescription(`> <:Icon_Rules:1225980724948238397> As provas enviadas por <@${p3}> foram aprovadas por ${interaction.user}.
    > O(a) Investigador(a) ganhou **${p1}** de tempo complementar e **${p2}** de bônus financeiro!`)
    .setImage('https://i.imgur.com/fqDEaI6.png')
    .setTimestamp()

    const channel = client.channels.cache.get(`1233849474200244244`)
    modalInteraction.reply({content: `Feito`, ephemeral: true})

    if (channel) {

      channel.send({ embeds: [embed] });
    } else {
      console.error('Canal não encontrado.');
    }

  })
  
  .catch((error) => {
      if (error.code === 'InteractioncollectorError') {
          console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
          // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
      } else {
          console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
      }
         

  });
}} // FIL ELSE IF BUTTON

})

