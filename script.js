let i = 0;
const foot = "Wassalamu'alaikum Warrahmatullahi Wabarakatuh.\n\nCopyright @SyuhadaRantisi, \n, 31 Maret 2025."
const txt = `Assalamualaikum Warahmatullahi Wabarakatuh. \n\nDear All. \nSelamat hari raya Idul Fitri 1446H semua saudara dan teman-teman. Di hari yang suci dan penuh berkah ini saya ingin mengucapkan dua kalimat. Terimakasih dan Maaf. Terimakasih untuk semuanya. Terimakasih untuk saudara dan teman-teman yang sudah mendukung selama ini. Dan maaf juga untuk semuanya. Maaf untuk semua kesalahan saya yang telah saya perbuat sampai detik ini. Tidak ada manusia yang sempurna dan saya termasuk salah satunya. Minal 'Aidin wal-Faizin ... Mohon maaf lahir dan batin.  \n\n${foot}`


// Play music auto
const myaud = document.getElementById("myaud")
function musicPlay() {	
	i < txt.length ?
		myaud.play() :
		myaud.pause()
}
const typeWriter = () => {
	if (i < txt.length) {
		document.getElementById('terminal').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, 50);
	} else {
		myaud.pause()
	} 
}
document.addEventListener("click", typeWriter);
document.addEventListener("click", musicPlay);


