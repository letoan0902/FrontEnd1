
const stars = document.querySelectorAll('.stars');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');
const selectedRatingText = document.getElementById('selected-rating');

let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let selectedRating = 0;

function renderReviews() {
    commentList.innerHTML = '';
    reviews.forEach(review => {
        const li = document.createElement('li');
        const starsSpan = document.createElement('span');
        starsSpan.textContent = '★'.repeat(review.rating);
        const commentB = document.createElement('b');
        commentB.textContent = review.comment; 
        li.appendChild(starsSpan);
        li.appendChild(document.createTextNode(' '));
        li.appendChild(commentB);
        commentList.appendChild(li);
    });
}

renderReviews();


stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));
        stars.forEach(s => s.classList.remove('active'));
        for (let i = 1; i <= selectedRating; i++) {
            document.querySelector(`.stars[data-value="${i}"]`).classList.add('active');
        }
        selectedRatingText.textContent = `Bạn đã đánh giá ${selectedRating} sao.`;
    });
});


function submitReview() {
    const comment = commentInput.value.trim();
    if (selectedRating === 0 || comment === '') {
        alert('Vui lòng chọn số sao và nhập bình luận.');
        return;
    }
    const newReview = { rating: selectedRating, comment: comment };
    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    const li = document.createElement('li');
    const starsSpan = document.createElement('span');
    starsSpan.textContent = '★'.repeat(selectedRating); 
    const commentB = document.createElement('b');
    commentB.textContent = comment; 
    li.appendChild(starsSpan);
    li.appendChild(document.createTextNode(' ')); 
    li.appendChild(commentB);
    commentList.appendChild(li); 

    commentInput.value = '';
    selectedRating = 0;
    stars.forEach(s => s.classList.remove('active'));
    selectedRatingText.textContent = 'Bạn chưa đánh giá.';
}