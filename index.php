<?php
// Koneksi ke database
$servername = "localhost";
$username = "yourusername";
$password = "yourpassword";
$dbname = "perpustakaan";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fungsi untuk mengambil semua buku
function getAllBooks() {
  global $conn;
  $sql = "SELECT * FROM books";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      // Tampilkan data buku dalam HTML
      echo "<div class='buku'>";
      echo "<img src='" . $row["gambar"] . "' onclick='showBookDetails(\"" . $row["judul"] . "\", \"" . $row["deskripsi"] . "\")'/>";
      echo "<p>" . $row["judul"] . "</p>";
      echo "</div>";
    }
  } else {
    echo "0 results";
  }
}

// Fungsi untuk menambahkan buku baru
// Fungsi untuk mengedit buku
// Fungsi untuk menghapus buku

// Panggil fungsi untuk menampilkan semua buku
getAllBooks();

$conn->close();
?>