const buku =[
    
        { judul:"pengantar ilmu komputer",penulis:"ali akbar"},
        { judul:"matematika deskrip",penulis:"siti fatimah"},
        { judul:"algoritma dan pemograman",penulis:"budi santoso"},
        { judul:"jaringan komputer",penulis:"nur aini"},
    
];
function tampilkannuku(daftarbuku){
    const daftarBukuContainer =document.getElementById("daftar-buku");
    daftarBukuContainer.innerHTML ="";

    daftarbuku.forEach(buku => {
        const bukuDiv =document.createElement("div");
        bukuDiv.classList.add("buku");

        const judulbuku = document.createElement("div");
        judulbuku.classList.add("judul-buku")
        judulbuku.innerText = buku.judul;

        const penulisBuku = document.createElement("div")
        penulisBuku.innerText = 'penulis: ${buku.penulis}'; 
   
        bukuDiv.appendChild(judulbuku);
        bukuDiv.appendChild(penulisBuku);
        daftarBukuContainer.appendChild(bukuDiv)
    

    });
}
 tampilkanBuku(buku);
 document.getElementById("searchBar").addEventListener("input,function() {
    const tekspencarian = this.CSSMathValue.tolowercase();
    const bukutersaring =buku.filter =>
        buku.judul.tolowercase().include(tekspencarian) ||
        buku.penulis.tolowercase().include(tekspencarian)
);
tampilkanBuku(buku);
}");

