let i = 0;
const foot = "TTD Syuhada Rantisi, Palangkaraya 22 April 2023."
const txt = `Assalamualaikum Warahmatullahi Wabarakatuh. \n\nDear All. \nSelamat hari raya Idul Fitri 1444H semua saudara dan teman-teman. Saya Syuhada, di hari yang suci dan penuh berkah ini saya ingin mengucapkan dua kalimat. Terimakasih dan Maaf. Terimakasih untuk semuanya. Terimakasih untuk saudara dan teman-teman yang sudah mendukung selama ini. Dan maaf juga untuk semuanya. Maaf untuk semua kesalahan saya yang telah saya perbuat sampai detik ini. Tidak ada manusia yang sempurna dan saya termasuk salah satunya. Minal 'Aidin wal-Faizin ... Mohon maaf lahir dan batin.  \n\n${foot}`

const typeWriter = () => {
	if (i < txt.length) {
		document.getElementById('terminal').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, 30);
	  }
}
typeWriter()
