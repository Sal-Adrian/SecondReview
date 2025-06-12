
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
    time:'1:50 - 1:51' },

    { name:'Hey Jude', 
    nameTag:'hey_jude', 
    rating:'4.9/7',
    URL:'A_MjCqQoLLA',
    review:`Hey Jude is a rare gem from this obscure band out of Liverpool. While being 
        deceptively simple, this song has a deep emotional resonance that I don't hear talked about 
        enough. If more folks heard this track, The Beatles might finally get the recognition they 
        deserve. Criminally underrated.`,
    time:'2:10 - 2:11' },

    { name:'Paranoid Android', 
    nameTag:'paranoid_android', 
    rating:'448,854/641,220',
    URL:'fHiGbolFFGw',
    review:`Ah, Paranoid Android... takes me back, though not to any one place—<em>slurps 
        wine</em>—more like a feeling. It’s the kind of song that reminds me what it was like hearing 
        Bohemian Rhapsody for the first time: strange, beautiful, and a bit unsettling, like the world 
        was shifting under your feet. They don’t make many songs like that anymore, and maybe they 
        never did.`,
    time:'2:30 - 2:31' },
  
  { name:'Come To Daddy',
    nameTag:'come_to_daddy', 
    rating:'(56/8)/(110/11)',
    URL:'TZ827lkktYs',
    review:`Oh what's that? You never heard of Afex Twins? Yeah, didn't think so. You need
    to have a certain level of... experience before you can even begin to even phathom what is 
    being heard. I, for instance, have malignant tinnitus that perfectly harmonizes with the 
    screeches throughout the song. Of course, Mr. Twins knew this when crafting this mastapeice.`,
    time:'4:16 - 4:17' },
  
  { name:'Sneaky Snitch',
    nameTag:'sneaky_snitch', 
    rating:'1.4x - 0.49 = x<sup>2</sup>',
    URL:'a3mxLL7nX1E',
    review:`┻┳|
        <br>┳┻| 
        <br>┻┳| •.•)
        <br>┳┻|⊂ﾉ
        <br>┻┳|`,
    time:'0:28 - 0:29' },
  
  { name:'Schoenberg: Op.25',
    nameTag:'schoenberg', 
    rating:'log<sub>12</sub>((3 * 4) / 12<sup>3/10</sup>)',
    URL:'bQHR_Z8XVvI',
    review:`Schoenberg's Suite for Piano, Op. 25 is like being kissed by an algorithm. It's 
    clinical, complicated, and oddly arousing. It's the soundtrack to a dream where the 
    laws of tonality are repealed by a jury of sentient triangles. Truth is a twelve-tone 
    row, and Schoenberg's the Minotaur that guards it.`,
    time:'12:40 - 12:41' },
  
  { name:'4\'33',
    nameTag:'cage', 
    rating:'303.1/433',
    URL:'JTEFKFiXSx4',
    review:`<br><br><br><br><br><br>`,
    time:'3:03 - 3:04' }];

function returnCards(valuesCards) {
    return valuesCards.map(valuesCard => `
<!-- ${valuesCard.name} -->
    <div class="card mb-5">
        <div class="row my-2">   
          <div class="col-5 ms-5">
            <img src="src/images/${valuesCard.nameTag}.jpg" class="img-fluid float-center mx-3">
          </div>
          <h2 class="col-5 align-middle my-3">${valuesCard.name} <br> <img src="src/images/star.svg" width="75px"> &nbsp;  ${valuesCard.rating}</h2> 
          <button class="btn col align-middle" type="button" data-bs-toggle="collapse" data-bs-target="#${valuesCard.nameTag}" aria-expanded="false" aria-controls="collapseExample">
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

