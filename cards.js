
const valuesCards = [
    { name:'Bohemian Rhapsody', 
    nameTag:'bohemian_rhapsody', 
    rating:'7/10',
    URL:'fJ9rUzIMcZQ',
    review:`The first time I heard Bohemian Rhapsody, it completely blew me away. The mix of 
        styles was amazing and unlike anything I'd ever heard before. On the second listen, it was still 
        cool, but the shock factor was gone, and parts of it felt a bit long :/`,
    time:'3:56 - 3:57' },
    { name:'Billie Jean', 
    nameTag:'billie_jean', 
    rating:'0.7/1',
    URL:'Zi_XLOBDo_Y',
    review:`Yee Hee. Shamone. Aoow. OOW!`,
    time:'1:50 - 1:51' }];

function returnCards(valuesCards) {
    return valuesCards.map(valuesCard => `
<!-- ${valuesCard.name} -->
    <div class="card mb-5">
        <div class="row my-2">   
          <div class="col-6">
            <img src="src/images/${valuesCard.nameTag}.jpg" class="img-fluid float-center mx-3">
          </div>
          <h2 class="col align-middle mx-5 my-3">${valuesCard.name} <br> <img src="src/images/star.svg" width="75px"> &nbsp;  ${valuesCard.rating}</h2> 
          <button class="btn col align-middle mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#${valuesCard.nameTag}" aria-expanded="false" aria-controls="collapseExample">
            <img src="src/images/arrow.svg" width="125px">
          </button>
        </div>
        <div class="collapse" id="${valuesCard.nameTag}">
          <hr class="mx-4">
          <div class="row">
            <div class="vidContainer col">
              <div class="mx-3">
                <iframe class="mt-2 img-fluid"
                  src="https://www.youtube.com/embed/${valuesCard.URL}">
                </iframe>
              </div>
            </div>
            <div class="col">
              <h2 class="mt-3">Review: </h2>
              <p class="mx-6">${valuesCard.review}</p>
              <h2>Favorite Second: ${valuesCard.time}</h2>
              <audio controls class="mb-3">
                <source src="src/audio/${valuesCard.nameTag}.mp3" type="audio/mpeg">
              </audio>
            </div>
          </div>
        </div>
      </div>`).join('');
}

window.onload = () => {
    document.getElementById('cards-container').innerHTML = returnCards(valuesCards);
};

