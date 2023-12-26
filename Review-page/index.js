
    function submitReview() {
        var rating = document.querySelector('input[name="rating"]:checked');
        var reviewText = document.getElementById('reviewText').value;
        if (!rating) {
            alert('you havent selected a star.');
            return;
        }
        else{
            console.log('Rating: ' + rating.value);
        console.log('Review Text: ' + reviewText);
        }
    }





