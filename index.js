process.on("uncaughtException" , err => {

return;

})

process.on("unhandledRejection" , err => {

return;

})

process.on("rejectionHandled", error => {

return;

});



const express = require('express');
const app = express();
const chalk = require("chalk");
//ALAE_444
app.get('/', (req, res) => {
  res.send('Hello made by Robert app!')
})
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log(chalk.red.bold('The Bot Is Ready.'))
});
app.listen(() => console.log("I'm Ready To Work..!"));

const Discord = require("discord.js");

const { Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents } = require("discord.js");
const moment = require('moment');



const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  ws: {
    properties: { $browser: "Discord iOS" }
  },
});

///////////////
process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
//
const db = require("quick.db");
const ms = require("ms");

const prefix = "+";

client.on('ready', () => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot User name : ${client.user.username}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0)
    .toLocaleString()}`)
  console.log(`KING SHOP`)
  console.log(`================`)
  client.user.setActivity(`${prefix}help`, { type: 'online' })
});
client.login("MTI0Njk3MzUyODUyODM5MjIxNA.GqIWyY.QrbJoTKHYsfHPybsnerCdbyQYZexmyy4ipvm6k").catch((err) => {
  console.log(err.message)
});
/////////
//////////////////////

let autotax = ['1111963596851773600'];// ايدي الروم بدل كلمة id

client.on("messageCreate", message => {

  if (message.channel.type === "dm" ||

    message.author.bot) return

  if (autotax.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')

    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;

    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;

    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;

    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;

    else if (args.endsWith("مليون")) args = args.replace(/مليون/gi, "") * 1000000;

    else if (args.endsWith("الف")) args = args.replace(/الف/gi, "") * 1000;

    else if (args.endsWith("ألف")) args = args.replace(/ألف/gi, "") * 1000;

    else if (args.endsWith("ك")) args = args.replace(/ك/gi, "") * 1000;

    else if (args.endsWith("م")) args = args.replace(/م/gi, "") * 1000000;

    else if (args.endsWith("آلاف")) args = args.replace(/آلاف/gi, "") * 1000;

    else if (args.endsWith("ألاف")) args = args.replace(/ألاف/gi, "") * 1000;

    else if (args.endsWith("الاف")) args = args.replace(/الاف/gi, "") * 1000;

    else if (args.endsWith("ملايين")) args = args.replace(/ملايين/gi, "") * 1000000;

    if (!args) return message.reply('> **يرجى كتابة الرقم صحيح**')

    let args2 = parseInt(args)

    if (args2 == 1) return message.reply(`> **يرجى كتابة رقم أكبر من \`1\`** ⚠️`);

    let tax = Math.floor(args2 * (20) / (19) + (1))

    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))

    let tax3 = Math.floor(tax2 * (20) / (19) + (1))

    let tax4 = Math.floor(tax2 + tax3 + args2);

    let tax5 = Math.floor((2.5 / 100) * args)

    let tax6 = Math.floor(tax4 + args2 * (20) / (19) + (1) - (args2))

    let tax7 = Math.floor(tax + tax5)

    let tax8 = Math.floor(tax4 + tax5)

    let tax9 = Math.floor((5 / 100) * args - args * -0)

    let tax10 = Math.floor(tax - args)

    let tax11 = Math.floor(tax9 + tax10)

    let tax12 = Math.floor(tax - tax11)

    let embed = new Discord.MessageEmbed()

      .setColor("67c9c9")

      .setThumbnail(client.user.avatarURL({ dynamic: true }))

      .setFooter({

        text: `By  : ${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`

      })

      .addFields(

        {

          name: "> **المبلغ (Not Tax):**", value: `**\`${args}\`**`

        },

        {

          name: "> **المبلغ بالضريبة (1 Tax):**", value: `**\`${tax}\`**`

        },

        {

          name: "> **المبلغ مع نسبة الوسيط (2 Tax):**", value: `**\`${tax4}\`**`

        },

        {

          name: "**=============================**", value: `**=**`

        },

        {

          name: "> **(بدون ضريبة)المبلغ الي بيوصل (Not Tax):**", value: `**\`${tax12}\`**`

        },

        {

          name: "> **الضريبة الي بياخذها بروبوتTax:**", value: `**\`${tax9}\`**`

        },

        {

          name: "> **المبلغ (ضريبة بروبوت):**", value: `**\`${tax10}\`**`

        },

      )

      .setTimestamp()

    message.reply({ embeds: [embed] }).catch((err) => {

      console.log(err.message)

    });

  }

});

/////////////////

const rooms = ["1145673388543709204", "1145673393249714227", "1145673385012117594", "1145673383405695037", "1145673386828243034", "1145673398828154973", "1145673396210896896","1145673394679975969","1145673397456601198","1145673422022643812","1145673420667899945"];

// الصورة المحددة

const img = "https://media.discordapp.net/attachments/1110979401371353188/1127310681654440077/20230708_212503.png?ex=65469262&is=65341d62&hm=0e275ccd8399a4a624585911d67f786397d6389137778e5eed5c5e96a72ea247&";

client.on('messageCreate', message => {

  if (rooms.includes(message.channel.id) && !message.author.bot) {

    message.channel.send({ files: [`${img}`] });

  }

});

/////////////////

// تعديل مهم

// Code 

let sug = ["1145673420667899945","","","",""]; // حط اي دي روم الفيدباك

let line = ""; // حط رابط الخط

client.on("messageCreate", function(message) {

        let args = message.content.split(",");

  if (message.author.bot) return;

if(sug.includes(message.channel.id)) {

    message.delete()

    const embed = new Discord.MessageEmbed()

.setAuthor({name: message.author.tag,iconURL: 

 message.author.avatarURL({dynamic:true})})

.setColor(`67c9c9`)

.setThumbnail(message.guild.iconURL({ dynamic: false }))

.setDescription(`> **${args}**`)

.setTimestamp()

let attachm = message.attachments.first()

if (attachm) {

    embed.setImage(attachm.proxyURL)

}  

message.channel.send({ embeds: [embed] }).then(msg => {

 msg.react(`\<a:01:1087305199225413642>`).then(() => {   // لو حابب تغيير اليموجي غير عادي

})

message.channel.send({files: [line]});

})

.catch(console.error) 

}

});

client.on("messageCreate" , async message => {

 let words = ["شراء","بيع","شوب","سعر","حساب","متوفر","نصاب","متجر","امك","اختك","نصايابن","سيرفر","دسكورد","نجب"]

 for (let s = 0;s < words.length;s++) {

   if(message.content.includes(words[s])) {

   if(!message.member.permissions.has("ADMINISTRATOR")) {  

   let member = message.member;

   let embed = new Discord.MessageEmbed()

   .setAuthor(message.author.username , message.author.displayAvatarURL())

   .setTitle("**لـقـد تـم اسـكات الـعضو | :white_check_mark:**")

   .setDescription(`**لـقد تـم اسـكاتــك من قبل الادارة \`${message.guild.name}\` لـقد تم اسكاتك message : \`${message.content}\`**`)

   .setThumbnail(message.guild.iconURL())

   .setFooter(message.guild.name , message.guild.iconURL())

   message.delete()

   await message.channel.send(`${message.member} **الرجاء عدم ارسال الروابط او الكلمات السيئه !**`)

   await member.timeout(300)

   await message.member.send({embeds:[embed]})

   }}

 }

})

//////////////

 channels =["1145673397456601198","1145673388543709204","1145673386828243034","1145673385012117594","1145673383405695037","1145673398828154973","1145673396210896896","1145673393249714227","1145673394679975969",]//ايدي الرومات 

let doneroom = "1145673366959829042" //ليدي روم الارسا

/////By Rofail Extra

const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();

rule.hour = 22;

rule.minute = 00;///مساءا

rule.tz = 'Asia/Kuwait';

const job = schedule.scheduleJob(rule, function(){

 

channels.forEach(channel => {

    let ch = client.channels.cache.get(channel)

const guild = ch.guild;

        const everyoneRole = guild.roles.everyone;

  

  if(ch){

  ch.permissionOverwrites.edit(everyoneRole,{

            VIEW_CHANNEL:false,

   SEND_MESSAGES:false, 

   }) 

  }

 })

  

  let log = client.channels.cache.get(doneroom)

  

   if(log) log.send({content:`@here`,embeds:[

     new Discord.MessageEmbed()

    .setTitle("King S")

    .setDescription(`** تم غلق الرومات **`)

    .setColor("RED")

   ]})

  

});

  

const rule1 = new schedule.RecurrenceRule();

rule1.hour = 9;

rule1.minute = 00;///صباحا

rule1.tz = 'Asia/Kuwait';

const job1 = schedule.scheduleJob(rule1, function(){

  channels.forEach(channel => {

    let ch = client.channels.cache.get(channel)

const guild = ch.guild;

        const everyoneRole = guild.roles.everyone;

  

  if(ch){

  ch.permissionOverwrites.edit(everyoneRole,{

            VIEW_CHANNEL:true,

   SEND_MESSAGES:false, 

   }).then(async x => {

   const msges =  await ch.messages.fetch()

    

if(msges)await ch.bulkDelete(msges)

  })

  }

 })

  

  let log = client.channels.cache.get(doneroom)

  const currentDate = new Date();

const newDate = new Date(currentDate);

newDate.setDate(currentDate.getDate() + 7);

  

   if(log) log.send({content:`@here`,embeds:[

     new Discord.MessageEmbed()

    .setTitle("King S")

    .setDescription(`** تم فتح الرومات **

`)

    .setColor("GREEN")

   ]})

  

});

/////////////////////

client.on("messageCreate", async message => {

const args = message.content.split(" ")

const now = new Date()

const role = message.guild.roles.cache.find(r=>r.id == "1145673233140559964")

if(message.content.startsWith( prefix + 'sub')){

if(!message.member.roles.cache.some(r=>r.id == "1145673253596188793")) return;

 let user = message.mentions.users.first()

 if(!user) return message.reply(`:x: | **${prefix}sub [ منشن الشخص ] [ مدة الروم ]**`)

 if (!args[2]) {

 return message.reply(`:x: | **${prefix}sub [ منشن الشخص ] [ مدة الروم ]**`);

 }

 if (!args[2].endsWith("s")) {

 if (!args[2].endsWith("d")) {

 if (!args[2].endsWith("h")) {

 if (!args[2].endsWith("m")) {

 return message.channel.send(`**\`m / h / d\` قم بكتابة وقت صالح للروم** | :x:`);

 }}}}

  if (isNaN(args[2][0])) {

 return message.channel.send(`:x: | **قم بكتابة رقم**`);

 }

let member = message.guild.members.cache.get(user.id)

member.roles.add(role).catch(error=>{})

message.reply(`✅ | **Done Created a room ,

for : ${user} 

By : ${message.author}**`)

let embed = new Discord.MessageEmbed()

.setAuthor(user.tag , user.displayAvatarURL({dynamic:true}))

.setTitle("Room has been created ✅ !")

.setDescription(`

**Room Owner : <@${user.id}>**

**Created By : ${message.author}**

**Created At : ${moment(now).format("M/D/YYYY")}**

**End At : ${moment(now).add(ms(args[2][0]), `${args[2][1]}`).format("M/D/YYYY")}**

`)

.setColor(`GREEN`)

.setFooter(message.guild.name , message.guild.iconURL({dynamic:true}))

let channel = message.guild.channels.create(`〢↯・${user.username}` , {type:"text"})

.then(m=> m.setParent("1145673320793112618"))

.then(m=> m.permissionOverwrites.edit(m.guild.roles.everyone,{

  SEND_MESSAGES: false

}))

.then(m=> m.permissionOverwrites.edit(user.id,{

  SEND_MESSAGES: true,

  MENTION_EVERYONE: true,

  ATTACH_FILES:true

}))

.then(m=> m.send({embeds:[embed]}))

}

});



client.on("messageCreate", message => {

const args = message.content.split(" ")

const now = new Date()

if(message.content.startsWith( prefix + 'renew')){

if(!message.member.roles.cache.some(r=>r.id == "1145673233140559964")) return;

 let user = message.mentions.users.first()

 let channel = message.mentions.channels.first()

 if(!user) return message.reply(`:x: | **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**`)

 if(!channel) return message.reply(`:x: | **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**`)

 if (!args[3]) {

 return message.channel.send(`:x: | **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**`);

 }

 if (!args[3].endsWith("d")) {

 if (!args[3].endsWith("h")) {

 if (!args[3].endsWith("m")) {

 return message.channel.send(`**\`m / h / d\` قم بكتابة وقت صالح للروم** | :x:`);

 }}}

  if (isNaN(args[3][0])) {

 return message.channel.send(`:x: | **قم بكتابة رقم**`);

 }

message.reply(`✅ | **Done Renewd this room ,

for : ${user} 

By : ${message.author}**`)

let embed = new Discord.MessageEmbed()

.setAuthor(user.tag , user.displayAvatarURL({dynamic:true}))

.setTitle("Room has been renewed ✅ !")

.setDescription(`

**Room Owner : <@${user.id}>**

**Renewd By : ${message.author}**

**Renewed At : ${moment(now).format("M/D/YYYY")}**

**End At : ${moment(now).add(ms(args[3][0]), `${args[3][1]}`).format("M/D/YYYY")}**

`)

.setColor(`GREEN`)

.setFooter(message.guild.name , message.guild.iconURL({dynamic:true}))

channel.bulkDelete(100)

channel.send({embeds:[embed]})

}

});

client.on("messageCreate" , async message => {

  if(message.content.startsWith(prefix + "end")) {

  if(!message.member.roles.cache.some(r=>r.id == "1145673233140559964")) return;

  let user = message.mentions.members.first()

  if(!user) return message.reply(`:x: | **${prefix}end [ منشن الشخص ] [ ايدي الروم الخاص ]**`)

  let args = message.content.split(" ").slice(2).join(" ")

  let channel = message.guild.channels.cache.get(args)

  if(!channel) return message.reply(`:x: | **${prefix}end [ منشن الشخص ] [ ايدي الروم الخاص ]**`)

  message.reply("✅ | **Done ending this room**")

  channel.bulkDelete(100)

  channel.permissionOverwrites.edit(user.id , {

    SEND_MESSAGES:false  

  })

  let embed = new Discord.MessageEmbed()

  .setTitle(`انتهت مدة الروم :no_entry:`)

  .setDescription("**سوف يتم حذف الروم بعد 24 ساعة في حال عدم التجديد**\nللتجديد تواصل مع الدعم الفني من هنا : <#1145673425361322055>")

  .setColor(`RED`)

  .setThumbnail(message.guild.iconURL({dynamic:true}))

  .setFooter(message.guild.name)

  await channel.send({embeds:[embed]})

  }

});

client.on("messageCreate" , msg => {

if(msg.content.startsWith( prefix + 'close')){

if(!msg.member.roles.cache.some(r=>r.id == "1145673233140559964")) return;

let user = msg.mentions.members.first()

if(!user) return msg.reply(`:x: | **${prefix}close [ منشن الشخص ] [ ايدي الروم الخاص ]**`)

let args = msg.content.split(" ").slice(2).join(" ")

let channel = msg.guild.channels.cache.get(args)

if(!channel) return msg.reply(`:x: | **${prefix}close [ منشن الشخص ] [ ايدي الروم الخاص ]**`)

let role = msg.guild.roles.cache.find(r=>r.id == "1145673233140559964")

let member = msg.guild.members.cache.get(user.id)

member.roles.remove(role).catch(error=>{})

channel.delete()

msg.reply("✅ | **Done closed this room**")

}

});

client.on("messageCreate" , message => {

if(message.content.includes(client.user.id)) {

  let embed = new Discord.MessageEmbed()

  .setAuthor(message.author.username , message.author.displayAvatarURL())

  .setDescription(`> **${prefix}sub [ منشن الشخص ] [ مدة الروم ]**\n > **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**\n > **${prefix}end [ منشن الشخص ] [ ايدي الروم الخاص ]**\n> **${prefix}close [ منشن الشخص ] [ ايدي الروم الخاص ]**`)

.setTimestamp()

.setColor("BLACK")

  message.reply({embeds:[embed]})

} 

});

client.login(process.env.token)

//////////////

//////////////////

client.on("channelCreate", (channel) => {

    if (channel.name.startsWith(`ticket`) || channel.name.startsWith(`Ticket`)) {

        const row = new MessageActionRow()

            .addComponents(

                new MessageButton()

                    .setCustomId('claim_ticket')

                    .setLabel('⚙️')

                    .setStyle('PRIMARY'),

            );

        const embed1 = new MessageEmbed()

            .setTitle('**اضغط على الزر لاستلام التذكرة**')

            .setTimestamp();

        channel.send({ embeds: [embed1], components: [row] });

    }

});

client.on('interactionCreate', async (interaction) => {

    if (!interaction.isButton()) return;

    if (interaction.customId === 'claim_ticket') {

        const allowedRoleID = "1145673291395239996";

        const member = interaction.member;

        

        if (!member.roles.cache.some(role => role.id === allowedRoleID)) return;

        await interaction.channel.setName(`ticket-${interaction.user.username}`);

        const embed1 = new MessageEmbed()

            .setDescription(`**تم استلام التذكرة بواسطة : ${interaction.user}**`)

            .setTimestamp()

            .setColor('#6a0b0b')

            .setFooter(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))

            .setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }));

        

        await interaction.channel.send({ embeds: [embed1] });

        await interaction.message.delete();

        if (!db.has(`${interaction.user.id}_ticketscount`)) {

            db.set(`${interaction.user.id}_ticketscount`, 0);

        }

        let ticketsCount = db.get(`${interaction.user.id}_ticketscount`);

        ticketsCount = Math.floor(ticketsCount + 1);

        db.delete(`${interaction.user.id}_ticketscount`);

        db.set(`${interaction.user.id}_ticketscount`, ticketsCount);

    }

});

client.on('messageCreate', async (message) => {

    if (message.author.bot) return;

    let unwords = db.get(`unwords`);

    if (!db.has(`unwords`)) db.set(`unwords`, []);

    unwords.forEach((unword) => {

        if (message.content.includes(unword)) {

            try {

                message.delete();

            } catch (error) {

                return;

            }

        }

    });

});

/////////////////



      
//////////////////////
/////////////////////////

client.on('messageCreate', async msg => {

  if(msg.content.startsWith(prefix + "order")){

    if(msg.channel.id !== "1145673400526835722")return msg.reply({content: `:x: هذه ليست روم الطلبات`}).then((message) => {

      setTimeout(() => {

        message.delete()

      }, 3000)

    } )

    let args = msg.content.split(' ').slice(1).join(' ')

    if(!args)return msg.reply({content: `:x: الرجاء كتابه الطلب`}).then((message) => {

      setTimeout(() => {

        message.delete()

      }, 3000)

    } )

    const row = new MessageActionRow()

    .addComponents(

      new MessageButton()

      .setStyle(`SECONDARY`)

      .setLabel(`🛒 منتجات`)

      .setCustomId(`items`),

      new MessageButton()

      .setStyle(`SECONDARY`)

      .setLabel(`🖥️ برمجيات`)

      .setCustomId(`programe`),

      new MessageButton()

      .setStyle(`SECONDARY`)

      .setLabel(`🪄 تصاميم`)

      .setCustomId(`art`),

      new MessageButton()

      .setStyle(`SECONDARY`)

      .setLabel(`💰 عملات`)

      .setCustomId(`money`)

    )

    const embed = new MessageEmbed()

    .setColor(`WHITE`)

    .setFooter(`الرجاء اختيار شيء للتنفيذ`)

    .setDescription(`

    ** اختار الخامه لبعت الطلب الي الرومات

    1- 🛒 منتجات 

    2- 🖥️ برمجيات

    3- 🪄 تصاميم

    4- 💰 عملات

    __________________________________________

  اضغط علي زر من الازرار للتنفيذ

  طلبك : \`${args}\`

**

    `)

    msg.channel.send({embeds: [embed], components: [row]}).then((message) => {

      setTimeout(() => {

        message.delete()

      }, 10000)

    })

    msg.delete()

     const collector = msg.channel.createMessageComponentCollector({ type: 'BUTTON', time: 20000 });

    collector.on('collect', async i => {

      if(i.member.id !== msg.author.id)return i.reply({content: `:x: هاذا الامر ليس لك `, ephemeral: true})

      if(i.customId === "items"){

        const channelitem = i.guild.channels.cache.find(c => c.id === "1145673404083617792")

        channelitem.send({content: `صاحب طلب** : ${msg.author}** \n **for <@&1001642483278688347>**`, embeds: [

          new MessageEmbed()

      .setColor(`BLACK`)

      .setTitle(`ID: ${msg.author.id}`, msg.author.displayAvatarURL())

      .setDescription(`

     ** طلب جديد من : ${msg.author.username} **

    **  الطلب: \`${args}\`**

      `)

     .setTimestamp() .setThumbnail(msg.author.displayAvatarURL())

        ]}).then(() => {

           channelitem.send({content: `https://media.discordapp.net/attachments/1110979401371353188/1127310681654440077/20230708_212503.png?ex=65469262&is=65341d62&hm=0e275ccd8399a4a624585911d67f786397d6389137778e5eed5c5e96a72ea247&w=640&h=640`})

        })

        

        i.reply({content: `**:white_check_mark: تم ارسال طلبك بنجاح **`, ephemeral: true})

        collector.stop()

      }else if(i.customId === "programe"){

        const channelitem = i.guild.channels.cache.find(c => c.id === "1145673405400621137")

        channelitem.send({content: `صاحب طلب** : ${msg.author}** \n **for <@&1001641510359547974>**`, embeds: [

          new MessageEmbed()

      .setColor(`BLACK`)

     .setTitle(`ID: ${msg.author.id}`, msg.author.displayAvatarURL())

      .setDescription(`

     ** طلب جديد من : ${msg.author.username} **

     ** الطلب: \`${args}\`**

      `)

     .setTimestamp() .setThumbnail(msg.author.displayAvatarURL())

        ]}).then(() => {

           channelitem.send({content: `https://media.discordapp.net/attachments/1110979401371353188/1127310681654440077/20230708_212503.png?ex=65469262&is=65341d62&hm=0e275ccd8399a4a624585911d67f786397d6389137778e5eed5c5e96a72ea247&`})

        })

        

        

        i.reply({content: `**:white_check_mark: تم ارسال طلبك بنجاح **`, ephemeral: true})

        collector.stop()

      }else if(i.customId === "art"){

        const channelitem = i.guild.channels.cache.find(c => c.id === "1145673402665947177")

         channelitem.send({content: `صاحب طلب** : ${msg.author}** \n **for <@&1001641277852483695> **`, embeds: [

          new MessageEmbed()

      .setColor(`BLACK`)

      .setTitle(`ID: ${msg.author.id}`, msg.author.displayAvatarURL())

      .setDescription(`

     ** طلب جديد من : ${msg.author.username} **

     ** الطلب: \`${args}\`**

      `)

     .setTimestamp() .setThumbnail(msg.author.displayAvatarURL())

        ]}).then(() => {

           channelitem.send({content: `https://media.discordapp.net/attachments/1110979401371353188/1127310681654440077/20230708_212503.png?ex=65469262&is=65341d62&hm=0e275ccd8399a4a624585911d67f786397d6389137778e5eed5c5e96a72ea247&`})

        })

        

        collector.stop()

      }else if(i.customId === "money"){

        const channelitem = i.guild.channels.cache.find(c => c.id === "1146705494308823080")

       channelitem.send({content: `صاحب طلب** : ${msg.author}** \n **for <@&1031206953826922507>**`, embeds: [

          new MessageEmbed()

      .setColor(`BLACK`)

     .setTitle(`ID: ${msg.author.id}`, msg.author.displayAvatarURL())

      .setDescription(`

      **طلب جديد من : ${msg.author.username} **

     ** الطلب: \`${args}\`**

      `)

     .setTimestamp() .setThumbnail(msg.author.displayAvatarURL())

        ]}).then(() => {

           channelitem.send({content: `https://media.discordapp.net/attachments/1110979401371353188/1127310681654440077/20230708_212503.png?ex=65469262&is=65341d62&hm=0e275ccd8399a4a624585911d67f786397d6389137778e5eed5c5e96a72ea247&`})

        })

        

        i.reply({content: `**:white_check_mark: تم ارسال طلبك بنجاح **`, ephemeral: true})

        collector.stop()

      }

    })

  }

})
////////
client.login("MTI0Njk3MzUyODUyODM5MjIxNA.GqIWyY.QrbJoTKHYsfHPybsnerCdbyQYZexmyy4ipvm6k")