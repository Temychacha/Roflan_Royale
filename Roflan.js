function show_burger(){
	document.getElementById("header").style.display="flex";
	document.getElementById("burger").style.display="flex";
}
function close_footer(){
	document.getElementById("burger").style.display="none";
	document.getElementById("header").style.display="none";
}

function check_width(){
	var width=window.innerWidth;
	if(width>768){
		document.getElementById("header").style.display="flex";
		document.getElementById("burger").style.display="none";
		
	}
	else if(width<=768){
		document.getElementById("burger").style.display="none";
		document.getElementById("header").style.display="none";
	}
}
document.addEventListener('DOMContentLoaded', check_width);
window.addEventListener('resize',check_width);

function download() {
    var files = [
        'Roflan_Вход',
        'Roflan_Главная',
        'Roflan_Колоды',
        'Roflan_Неделя',
        'Roflan_Регистрация',
        'Roflan_Шаблон',
        'Roflan.css',
        'Roflan.js'
    ];
    
    for (var i = 0; i < files.length; i++) {
        var link = document.createElement('a');
        link.href = files[i];
        link.download = files[i];
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}	
const images=[
	'images/otkuda.jpg',
	'images/deck_larry.jpg',
	'images/deck_big_boys.jpg',
	'images/deck_macedon.jpg',
	'images/deck_pigs.jpg',
	'images/deck_fly.jpg',
	'images/deck_weather.jpg',
	'images/deck_boom.jpg'
]
function get_index_week(){
	const day=new Date();
	const start = new Date(day.getFullYear(), 0, 0);
	const diff = (day - start) / (24 * 60 * 60 * 1000);
	return Math.floor(diff / 7) % images.length;
}
function update() {
	const img = document.getElementById('week_deck');
	if (img) {
		img.src = images[get_index_week()];
	}
}
function getTimeUntilSunday() {
	const now = new Date();
	const nextSunday = new Date(now);
	const daysUntilSunday = (7 - now.getDay()) % 7;
	nextSunday.setDate(now.getDate() + daysUntilSunday);
	nextSunday.setHours(0, 0, 0, 0);
	if (now.getDay() === 0 && now.getHours() >= 0) {
	nextSunday.setDate(nextSunday.getDate() + 7);
	}
	return nextSunday - now;
}
function timer(){
	var time_to_sunday=getTimeUntilSunday();
	var days=Math.floor(time_to_sunday/(24*60*60*1000));
	var hours=Math.floor((time_to_sunday%(24*60*60*1000))/(60*60*1000));
	const minutes = Math.floor((time_to_sunday % (60 * 60 * 1000)) / (60 * 1000));
	const seconds = Math.floor((time_to_sunday % (60 * 1000)) / 1000);
	document.getElementById("timer").innerHTML=`До следующей колоды: ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд `;
}
function saveId(id){
	localStorage.setItem('chose_deck',id);
}
function check_deck(){
	var id=localStorage.getItem('chose_deck');
	if (id===null){
		return;
	}
	var select=document.getElementById('chose_deck');
		switch(parseInt(id)){
			case 0:
				select.options[0].selected=true; break;
			case 1:
				select.options[1].selected=true; break;
			case 2:
				select.options[2].selected=true; break;
			case 3:
				select.options[3].selected=true; break;
			case 4:
				select.options[4].selected=true; break;
			case 5:
				select.options[5].selected=true; break;
			case 6:
				select.options[6].selected=true; break;
			case 7:
				select.options[7].selected=true; break;
		}
	localStorage.removeItem('chose_deck')
}
document.addEventListener('DOMContentLoaded',check_deck);
update();
setInterval(update, 60000);
timer();
setInterval(timer, 1000);
function svyaz(){
	document.getElementById("svyaz").style.display="flex";
}
function сlose_svyaz(){
	document.getElementById("svyaz").style.display="none";
}