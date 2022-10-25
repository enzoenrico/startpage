// const quote = document.getElementsByClassName('quote_js');

var quote_element = document.getElementById('quote_js');

if (quote) {
    const quote_link = `https://api.quotable.io/random`
    console.log(quote_link);

    var getJsonQuote = (url, callback) => {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', utl, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
            var status = xhr.status;

            if (status === 200) {
                console.log(status);
                callback(null, xhr.response)
            }

            if (status !== 200) {
                callback("Erro, contate o administrador do sistema", xhr.response)
                console.error();

            }


        }

        xhr.send();
    }


    getJsonQuote(quote_link, (err, data) => {
        if (err !== null) {
            quote_element.innerText = "Erro!"
        }

        else {
            var quote = data.content;
            var author = data.author;

            quote_element.innerHTML = `"${quote}" \n -${author}`
        }
    })
}

