const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = '';

bot.on('ready', ()=>{
	console.log('bot online.');
})

bot.on('message', msg=>{
	
	if(msg.author.bot){
		return;
	}
	
	if(msg.channel.name=="coding" || msg.channel.name=="quoting"){
		return;
	}
	
	if (msg.content.toLowerCase().startsWith("!spambot")){
		checkCommand(msg);
	}
	
	else if(msg.content.toLowerCase().includes("3.6 roentgen")){
		msg.guild.members.get(bot.user.id).setNickname('Comrade Dyatlov');
		setTimeout(function(){
			msg.channel.send("Not Great But Not Terrible.", {
				embed: {
					thumbnail: {
						url: 'attachment://Dyatlov.png'
					}
				},
				files: [{
					attachment: 'img/Dyatlov.png',
					name: 'Dyatlov.png'
				}]
			});
			msg.guild.members.get(bot.user.id).setNickname('spambot');
		}, 500);
		
	}
	
	else if(msg.content.toLowerCase().includes("tie")){
		msg.react('👔').catch(() => console.error('Tie emoji failed to react.'));
		
		
	}
	
	else if(msg.content.toLowerCase().includes("ente")){
		msg.channel.send('quack! '+emoji('419391944498872322')).catch(() => console.error('couldnt quack :c'));
		
		
	}
	
	else if(msg.content.toLowerCase().includes("sieg heil")){
		msg.channel.send('9999').catch(() => console.error('no 9s'));
		
		
	}
	
	else if((msg.content.toLowerCase().includes("im") || msg.content.toLowerCase().includes("i'm") || msg.content.toLowerCase().includes("i am")) && !msg.author.bot){
		dad(msg,msg.content.toLowerCase())
	}
	
	else if(msg.content.toLowerCase().includes("comrade dyatlov use wheelchair")){
		
		const att = new Attachment('img/Dyatlov.png');
		msg.channel.send('', att);
		const att2 = new Attachment('img/weel.png');
		msg.channel.send('', att2);
		
		console.log("omg no not the wheelchair!!! -"+msg.channel.name+"  by: "+msg.author.username+"#"+msg.author.discriminator+" ->"+getTime());
	}
	
	else if(msg.content.toLowerCase().includes("doot")){
		var arr = msg.content.toLowerCase().split("doot");
		var num = arr.length-1;
		var str = "";
		for(i=0;i<num;i++){
			str=str+emoji("628608449932034068");
		}
		msg.channel.send( str );
		console.log("Doot! -"+msg.channel.name+"  by: "+msg.author.username+"#"+msg.author.discriminator+" ->"+getTime());
	}
	
	else if(msg.content.toLowerCase().includes("oh yea")){
		const att = new Attachment('img/koolaid.jpg');
		msg.channel.send('', att);
		console.log("oh yea! -"+msg.channel.name+"  by: "+msg.author.username+"#"+msg.author.discriminator+" ->"+getTime());
	}
	
})

bot.login(token);


//functions

function checkCommand(msg){
	var index = msg.content.indexOf(" ");
	var id = msg.content.substr(0, index);
	var command = msg.content.substr(index + 1).toLowerCase();
	
	if(msg.author.bot){
		return;
	}
	
	if (command == '!spambot') {
		msg.reply("what do you want?");
	}
	
	else if (command == "fuck off"){
		msg.reply("no u");
	}
	
	else if (command == "lockdown"){
		msg.reply("no fuck u");
	}
	
	else if (command == "help" || command == "?"){
		msg.reply("write !spambot commands");
	}
	
	else if (command == "commands"){
		msg.reply("lol I don't do anything. but you can ask me to send a shitty meme by typing !spambot meme me");
	}
	
	else if (command == "meme me"){
		sendAMeme(msg,'en');
	}
	
	else if (command == "meme me -he"){
		sendAMeme(msg,'he');
	}
	
	else if (command == "meme me -cz"){
		sendAMeme(msg,'cz');
	}
	
	else if (command == "why are you so stupid" || command == "why are you so stupid?"){
		msg.channel.send('because yonatand made me.').catch(() => console.error('too stupid.'));
	}
	
	/*else if (command == "bday"){
		const att = new Attachment('img/bday.png');
		msg.channel.send('', att);
		msg.channel.send('', att);
		msg.channel.send('', att);
		
		console.log('bdayyyyyyyyy');
	}*/
	
	else{
		msg.channel.send("I know not of what you speak, "+msg.author+".");
	}
	
}

function dad(msg,command){/*
	var ind = -1;
	if(command.includes("im ")){
		ind=command.indexOf("im ")+3;
	}
	else if(command.includes("i'm ")){
		ind=command.indexOf("i'm ")+4;
	}
	else if(command.includes("i am ")){
		ind=command.indexOf("i am ")+5;
	}
	
	if(ind!=-1){
		msg.channel.send("Well hi "+command.substring(ind)+", I'm Rupaul!");
		
		
		console.log("dad activated! -"+msg.channel.name+"  by: "+msg.author.username+"#"+msg.author.discriminator+" ->"+getTime())
	}*/
}

function sendAMeme(msg,lang){
	if(lang=='en'){
		sendAMemeEn(msg);
	}
	
	else if(lang=='he'){
		sendAMemeHe(msg);
	}
	
	else if(lang=='cz'){
		sendAMemeCz(msg);
	}
}

function getTime(){
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	return dateTime;
}

function emoji(id){
	return bot.emojis.get(id).toString();
}

function sendAMemeEn(msg){
	var request = require('request');
	request('http://yonatand.ddns.net:8080/memes/en/index.php', function (error, response, body) {
		console.log("meme activated! -"+msg.channel.name+" by:", msg.author.username+"#"+msg.author.discriminator+" meme: "+body+" ->"+getTime());
		const att = new Attachment('http://yonatand.ddns.net:8080/memes/en/'+body)
		msg.channel.send('As you wish, '+msg.author, att);
	});
}

function sendAMemeHe(msg){
	var request = require('request');
	request('http://yonatand.ddns.net:8080/memes/h/index.php', function (error, response, body) { 
		console.log("meme activated! -"+msg.channel.name+" by:", msg.author.username+"#"+msg.author.discriminator+" meme: "+body+" ->"+getTime());
		const att = new Attachment('http://yonatand.ddns.net:8080/memes/h/'+body)
		msg.channel.send('As you wish, '+msg.author, att);
	});
}

function sendAMemeCz(msg){
	var request = require('request');
	request('http://yonatand.ddns.net:8080/memes/cz/index.php', function (error, response, body) { 
		console.log("meme activated! -"+msg.channel.name+" by:", msg.author.username+"#"+msg.author.discriminator+" meme: "+body+" ->"+getTime());
		const att = new Attachment('http://yonatand.ddns.net:8080/memes/cz/'+body)
		msg.channel.send('As you wish, '+msg.author, att);
	});
}