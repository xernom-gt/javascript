let daftarKeranjang = [];

        function tambahKeKeranjang() {
            const namabarang = document.getElementById('barang');
            const [nama, harga] = namabarang.value.split('|');
            const jumlah = parseInt(document.getElementById('jumlah').value);
            const hargatotal = parseInt(harga) * jumlah;

            daftarKeranjang.push({ nama, jumlah, hargatotal });
            updateKeranjang();
        }

        function updateKeranjang() {
            const list = document.getElementById('keranjang');
            list.innerHTML = "";

            daftarKeranjang.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${item.nama} x ${item.jumlah} = Rp${item.hargatotal.toLocaleString("id-ID")}`;
                list.appendChild(li);
            });
        }

        function bayar() {
            const total = daftarKeranjang.reduce((sum, item) => sum + item.hargatotal, 0);
            document.getElementById('total').innerText = `Total: Rp${total.toLocaleString("id-ID")}`;
        }