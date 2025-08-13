function hitung() {
      let a = parseFloat(document.getElementById("angka1").value);
      let b = parseFloat(document.getElementById("angka2").value);
      let op = document.getElementById("operator").value;
      let hasil;

      if (isNaN(a) || isNaN(b)) {
        hasil = "Masukkan kedua angka!";
      } else {
        switch (op) {
          case "+": hasil = a + b; break;
          case "-": hasil = a - b; break;
          case "*": hasil = a * b; break;
          case "/": 
            hasil = b !== 0 ? (a / b) : "Tidak bisa dibagi 0"; 
            break;
        }
      }
      document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
    }