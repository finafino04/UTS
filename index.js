function searchBooks(){
    const input = document.getElementById('searchBar').value.tolowerCase();
    const bookTitles = document.querySelectorAll('.judul-buku p');

    bookTitles.forEach(book =>{
        const titleText = book.innerTeks.tolowerCase();
        book.parentElement.style.display =titleText.includes(input) ?'block' : 'none';
    });
} 
function showBookDetails(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('bookModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookModal').style.display = 'none';
}
