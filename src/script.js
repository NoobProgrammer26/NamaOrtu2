function ortu(){
	/* Prompt */
	var x = prompt("Masukan Nama Anak:\n(Tolong mengunakan huruf kecil semua dan nama panggilan)\nKalau Command mohon gunakan (getCommand.) Untuk Awalan-nya!")
	/* nama orang tua dan command lainya */
	switch(x) {
		case "nevan":
			document.getElementById("child").innerHTML = "Nevan Wagner";
			document.getElementById("mother").innerHTML = "Shinta Dewatari";
			document.getElementById("daddy").innerHTML = "Dapot Mangisi Siagian";
			break;
		case "geraldi":
			document.getElementById("child").innerHTML = "Chadinar Geraldi Purnama";
			document.getElementById("mother").innerHTML = "Dian Suminar";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "nael":
			document.getElementById("child").innerHTML = "Efran Nathanael";
			document.getElementById("mother").innerHTML = "Deni Rivanti";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "farel":
			document.getElementById("child").innerHTML = "Farellino Lanang";
			document.getElementById("mother").innerHTML = "Indrawati Purnamasari";
			document.getElementById("daddy").innerHTML = "Matheus Hutauruk";
			break;
		case "enos":
			document.getElementById("child").innerHTML = "Enos Garcia Karosekali";
			document.getElementById("mother").innerHTML = "Erwina";
			document.getElementById("daddy").innerHTML = "James Karosekali";
			break;
		case "fitrah":
			document.getElementById("child").innerHTML = "M. Fitrah Yudi Seno";
			document.getElementById("mother").innerHTML = "Ayu Dirgahayu";
			document.getElementById("daddy").innerHTML = "Djarot Eko Suseno";
			break;
		case "kinanti":
			document.getElementById("child").innerHTML = "Kinanti Becik Widrorahajo";
			document.getElementById("mother").innerHTML = "Siska Rahajo";
			document.getElementById("daddy").innerHTML = "Hari";
			break;
		case "cella":
			document.getElementById("child").innerHTML = "Cella Avilria";
			document.getElementById("mother").innerHTML = "-";
			document.getElementById("daddy").innerHTML = "Ujang Wijaya";
			break;
		case "david":
			document.getElementById("child").innerHTML = "David Zior Darmanik";
			document.getElementById("mother").innerHTML = "Maria";
			document.getElementById("daddy").innerHTML = "Marantika Revando Darmanik";
			break;
		case "elia":
			document.getElementById("child").innerHTML = "Christoper Elia";
			document.getElementById("mother").innerHTML = "Yohanna Panjaitan";
			document.getElementById("daddy").innerHTML = "Sahat Sihombing";
			break;
		case "lio":
			document.getElementById("child").innerHTML = "Lio";
			document.getElementById("mother").innerHTML = "Trisna Bertutu";
			document.getElementById("daddy").innerHTML = "Awan Mangatas";
			break;
		case "willy":
			document.getElementById("child").innerHTML = "Willy";
			document.getElementById("mother").innerHTML = "-";
			document.getElementById("daddy").innerHTML = "Sunardi";
			break;
		case "aldo":
			document.getElementById("child").innerHTML = "Claudius Revaldo";
			document.getElementById("mother").innerHTML = "Sri Rummigati";
			document.getElementById("daddy").innerHTML = "Melky";
			break;
		case "fien":
			document.getElementById("child").innerHTML = "Fienaldo Bobolangi Sulo";
			document.getElementById("mother").innerHTML = "Defrin Sangraja";
			document.getElementById("daddy").innerHTML = "Hendrik";
			break;
		case "felice":
			document.getElementById("child").innerHTML = "Felice";
			document.getElementById("mother").innerHTML = "Mandy Simatupang";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "desmond":
			document.getElementById("child").innerHTML = "Desmond";
			document.getElementById("mother").innerHTML = "Mandy Simatupang";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "getCommand.testname":
			var ch = prompt("Siapa nama anaknya?");
			var ib = prompt("Siapa nama ibunya?");
			var bp = prompt("Siapa nama ayahnya?");
		switch(ch){
			case null:
				break;
			case "":
				alert("Ini kenapa kosong nama anaknya ya?")
				break;
			default:
				document.getElementById("child").innerHTML = ch;
				document.getElementById("mother").innerHTML = ib;
				document.getElementById("daddy").innerHTML = bp;
			}
			break;
		case "berta":
			document.getElementById("child").innerHTML = "Berta";
			document.getElementById("mother").innerHTML = "Maria Tjong Kiat Tjen";
			document.getElementById("daddy").innerHTML = "Robertus Sutowo";
			break;
		case "Agnes":
			document.getElementById("child").innerHTML = "Agnes";
			document.getElementById("mother").innerHTML = "Elida";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "stevi":
			document.getElementById("child").innerHTML = "Stevi";
			document.getElementById("mother").innerHTML = "Evlinda";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "julius":
			document.getElementById("child").innerHTML = "Julius Adhi Prawara";
			document.getElementById("mother").innerHTML = "Pupuh Sri Rahayu";
			document.getElementById("daddy").innerHTML = "Dedi";
			break;
		case "angel":
			document.getElementById("child").innerHTML = "Angel";
			document.getElementById("mother").innerHTML = "Yuliana Sembel";
			document.getElementById("daddy").innerHTML = "Djengkar Subagyo";
			break;
		case "karin":
			document.getElementById("child").innerHTML = "Karin";
			document.getElementById("mother").innerHTML = "Ika Sartika";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "mickey":
			document.getElementById("child").innerHTML = "Mickey Marco Wolf";
			document.getElementById("mother").innerHTML = "Tanti Wolf";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "tyo":
			document.getElementById("child").innerHTML = "Krisantio Nugroho";
			document.getElementById("mother").innerHTML = "Sri Hartuti";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "harry":
			document.getElementById("child").innerHTML = "Harry Sugianto";
			document.getElementById("mother").innerHTML = "Elika";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "gracia":
			document.getElementById("child").innerHTML = "Gracia Christanbel";
			document.getElementById("mother").innerHTML = "Vera Ngapiet";
			document.getElementById("daddy").innerHTML = "";
			break;
		case "nagita":
			document.getElementById("child").innerHTML = "Nagita Purnamasari";
			document.getElementById("mother").innerHTML = "Vievie Ferawati";
			document.getElementById("daddy").innerHTML = "Agus";
			break;
		case null:
			break;
		default:
	 		alert("Error in userInput(); " + x + " is not exist in our database!\nERROR CODE:\n0x552c30\n\nFor more information, copy this error code and report it to the developer.")
	 		break;
	 	}
}

function hapoes(){
	/* Fungsi untuk menghapus semua elemen */
	if (document.getElementById("mother").innerHTML == "STRING(A-Z)") {
		alert("Textbox-nya udah diclear bodoh!\nOtak lu dimana sih!!");
	} else {
		document.getElementById("child").innerHTML = "STRING(A-Z)";
		document.getElementById("mother").innerHTML = "STRING(A-Z)";
		document.getElementById("daddy").innerHTML = "STRING(A-Z)";
	}
}

function tentang() {
	/* Tentang */
	alert("About me\n\nCredits:\n-Chadinar Geraldi Purnama: Developer dan Pembantu nama-nama\n-Efran Nathanael: Developer Untuk Android dan pembantu nama-nama\n-Farellino Lanang: Pembantu Nama-nama\n-Nagita Purnamasari: Pembantu Nama-nama\n-Kristantio Nurgroho: Pembantu Nama-nama\n-Yang Suka Ngatain di kelas atau di sekolah: Pembantu nama-nama");
}
