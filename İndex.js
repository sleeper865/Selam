const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 
const badWords = [
"aq","amk","awk","aw",
"amına koyayım","amına kodum","amına koduğum",
"amına sıçayım","amına sokayım","amcık",
"sik","siktir","sikerim","sikerler","sikik","sikilmiş",
"orosbu","orospu","orospu çocuğu","oç","piç","ibne",
"göt","götveren","yarrak","yarram","taşak",
"anasını sikerim","ananı sikerim","ananı avradını",
"avradını sikerim","karını sikerim","annesini sikerim",
"amına koduğumun","amk çocuğu","aq çocuğu",
"puşt","pezevenk","kavat","şerefsiz","namussuz","yavşak","mal",
"orosbu çocuğu","götlek","amcık yalayıcı","yarrak kafalı",
"sülaleni sikerim","7 sülaleni sikerim",
"amına kodumun orospusu","amına kodumun piçi",
"ibne pezevenk","götünden sikerim"
];

client.on('ready', () => {
  console.log(`Bot aktif: ${client.user.tag}`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  // 💬 SA → AS
  if (msg === "sa") {
    message.channel.send("as");
  }

  // 
  if (badWords.some(word => msg.includes(word))) {
    try {
      await message.delete();

      // kısa uyarı mesajı
      message.channel.send(`${message.author} küfür yasak 🚫`)
        .then(m => setTimeout(() => m.delete(), 3000));

    } catch {}
  }
});

client.login(process.env.MTQ5OTM3NDQ2NTczNjUxMTYzOA.G4DWh7.0ODT7pVzJ4g2z81O7JSIns-UIBn8d5sF3LepmI);
