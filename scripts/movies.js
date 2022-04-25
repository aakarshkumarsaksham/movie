// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let money = JSON.parse(localStorage.getItem('amount')) || [];

let wallet = document.getElementById('wallet');
wallet.innerText=money;

function input()
{
    


    let query=document.getElementById('search').value;

    const movie = fetch(`http://www.omdbapi.com/?apikey=a128e58d&s=${query}`)
    .then(function(res){
       return res.json()
    }).then(function(res){
        let m=res.Search
       m.forEach(function(el){
           console.log(el)
           let title=document.createElement('p');
           title.innerText=el.Title;
           
           let image=document.createElement('img');
           image.src=el.Poster;
           
           let div=document.createElement('div');
           
           let box=document.getElementById('movies')

           box.append(div)

           div.append(image,title);

           
       })
    })
    .catch(function(err){
        console.log(err);
    })
}




