


$('form').on('submit', function(e){
    e.preventDefault();
    search();
    $('input').val("")
})

$('#remove').on('click', removeAllImgs)


async function search(){
    const apiKey = '9PdVSpsUX3Kzwf3ofeHZtI3VFC2eFLzT';
    const q = $('input').val()
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{api_key: apiKey, q, limit: "1" }});
    const imgURL = res.data.data[0].images.original.url; 
    appendNewImage(imgURL)
  
}

function appendNewImage(url){
    const newImg = $('<img></img>').attr("src", url);
    $('div').append(newImg);
}

function removeAllImgs(){
    $('#gifContainer').empty()
}