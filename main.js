let isAnimated = false;
let current_step = 0;
let std = document.querySelector('#student');

let offset = 0;

let out = "", pos = 0;

//отсортируем массив согласно очкам
//var dataStr = JSON.stringify(data.rating)
var dataRating = data.rating.sort(function (a, b) { //толко рейтинг - для удобства
    return b.points - a.points;
});

var dataFriends = data.friends;// для удобства возьмём отдельно только друзей.


function filterByID(item) {

    let id = Number(this);

    console.log(item.id);
    console.log(id);

    if (item.id == id) {
        return true;
    }
    return false;

}

function isItFriend(findId) {
    console.log(dataFriends.filter(filterByID, findId).length);
    return dataFriends.filter(filterByID, findId).length;
}




for (i in dataRating) {

    let isfriend = isItFriend(dataRating[i].id) ? 'friend' : '';

    ++pos;
    out += `
            <div class="raiting_item ${isfriend}">
                <div class="number">${pos}</div>
                <div class="cellimg"><img src="img/${dataRating[i].img.substr(1, dataRating[i].img.length)}" /></div>
                <div class="name">${dataRating[i].name + " " + dataRating[i].lastName}</div>
                    <div class="points">${dataRating[i].points}</div>
            </div>`;

}
if (!out) out = "<center>Пока ни одного результата!</center>";

document.querySelector('.raiting_container').innerHTML = out;

const slider_line_container = document.querySelector('.slider_line_container');


std.onanimationend = () => {
    isAnimated = false;
};


document.querySelector('#go_rating').addEventListener('click', function () {
    document.querySelector('.modal').style.display = "block";
});

document.querySelector('#close_button').addEventListener('click', function () {
    document.querySelector('.modal').style.display = "none";
});

document.querySelector('#go_forward').addEventListener('click', function () {
    if (!isAnimated) {
        current_step = current_step > 10 ? 1 : current_step + 1;
        std.style.animation = "move" + current_step + " 1s forwards";
        isAnimated = true;
    }
});

document.querySelector('#nextbtn').addEventListener('click', function () {
    if (offset > -352) offset -= 59;
    slider_line_container.style.left = offset + 'px';
});

document.querySelector('#prevbtn').addEventListener('click', function () {
    if (offset < 0) offset += 59;
    slider_line_container.style.left = offset + 'px';
});




