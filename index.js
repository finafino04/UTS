function searchBooks(){
    const input = document.getElementById('searchBar').value.tolowerCase();
    const bookTitles = document.querySelectorAll('.judul-buku p');

    bookTitles.forEach(book =>{
        const titleText = book.innerTeks.tolowerCase();
        book.parentElement.style.display =titleText.includes(input) ?'block' : 'none';
    });
}