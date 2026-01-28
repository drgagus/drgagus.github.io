
      const input = document.getElementById("imgInput");
      const previewWrap = document.getElementById("previewWrap");
      const previewImg = document.getElementById("preview");
      const errorEl = document.getElementById("error");

      // Simpan ObjectURL terakhir supaya bisa dibersihkan (mencegah memory leak)
      let lastObjectUrl = null;

      function showError(msg) {
        errorEl.textContent = msg;
        errorEl.style.display = msg ? "block" : "none";
      }

      input.addEventListener("change", () => {
        showError("");

        const file = input.files && input.files[0];
        if (!file) {
          // user batal pilih file
          previewWrap.style.display = "none";
          previewImg.removeAttribute("src");
          return;
        }

        if (!file.type || !file.type.startsWith("image/")) {
          showError("File yang dipilih bukan gambar. Silakan pilih file gambar.");
          previewWrap.style.display = "none";
          previewImg.removeAttribute("src");
          input.value = ""; // reset
          return;
        }

        // Bersihkan URL lama
        if (lastObjectUrl) {
          URL.revokeObjectURL(lastObjectUrl);
          lastObjectUrl = null;
        }

        // Cara cepat preview: Object URL
        lastObjectUrl = URL.createObjectURL(file);
        previewImg.src = lastObjectUrl;
        previewWrap.style.display = "block";
      });

      // Optional: bersihkan objectURL saat halaman ditutup
      window.addEventListener("beforeunload", () => {
        if (lastObjectUrl) URL.revokeObjectURL(lastObjectUrl);
      });


    const pai = ["PAI 1", "PAI 2", "PAI 3", "PAI 4", "PAI 5"]
    const btn = document.getElementById("btnLoad");
    const loading = document.getElementById("loading");

    btn.addEventListener("click", function () {
      document.getElementById("pai").innerHTML = ""
      document.getElementById("loading").classList.toggle('hidden')
      // document.getElementById("loading").innerHTML  = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="none" stroke-opacity="1" stroke="#FF156D" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>'

      if (!input.files[0]) {
            setTimeout(function () {
                document.getElementById("loading").classList.toggle('hidden')
                document.getElementById("pai").innerHTML = "Upload File Dulu!"
            }, 1000);
        }else{
            setTimeout(function () {
                document.getElementById("loading").classList.toggle('hidden')
                document.getElementById("pai").innerHTML = pai[Math.floor(Math.random() * (4 - 0 + 1)) + 0]
            }, 3000);
        }
    })