function ortu(){
	/* Prompt */
	var x = prompt("Masukan Nama Anak:\n(Tolong mengunakan huruf kecil semua)")
	/* nama orang tua dan command lainya */
	switch(x) {
		case "nevan":
			document.getElementById("child").innerHTML = "Nevan Wagner";
			document.getElementById("mother").innerHTML = "Shinta Dewatari";
			document.getElementById("daddy").innerHTML = "Dapot Mangisi Siagian";
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
			document.getElementById("child").innerHTML = "Enos Garcia";
			document.getElementById("mother").innerHTML = "Wina";
			document.getElementById("daddy").innerHTML = "James Karosekali";
			break;
		case "geraldi":
			document.getElementById("child").innerHTML = "Chadinar Geraldi Purnama";
			document.getElementById("mother").innerHTML = "Dian Suminar";
			document.getElementById("daddy").innerHTML = "Ingin!";
			break;
		case null:
			break;
		default:
	 		alert("Error")
	 		break;
	 	}
}

function hapoes(){
	/* Fungsi untuk menghapus semua elemen */
	document.getElementById("child").innerHTML = "STRING(A-Z)";
	document.getElementById("mother").innerHTML = "STRING(A-Z)";
	document.getElementById("daddy").innerHTML = "STRING(A-Z)";
}

function tentang() {

}