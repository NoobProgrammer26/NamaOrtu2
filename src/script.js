function ortu(){
	/* Prompt */
	var x = prompt("Masukan Nama Anak:\n(Tolong mengunakan huruf kecil semua)")
	/* nama orang tua dan command lainya */
	switch(x) {
		case "ingin":
			alert("Ingin!")
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
	document.getElementById("child").innerHTML = "";
	document.getElementById("mother").innerHTML = "";
	document.getElementById("daddy").innerHTML = "";
}