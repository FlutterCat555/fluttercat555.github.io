const pronoun = document.getElementById("pronoun");
main()
async function main() {
    while(true){
        await write("she/they",pronoun);
        await write("🏳️‍⚧️",pronoun);
        await write("she/her",pronoun);
        await write("she/nanigans",pronoun);
        await write("the hell if i know",pronoun);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function write(text,element){
    var result = "";
    for(var i = 0; i < text.length; i++){
        await delay(100);
        result += text.charAt(i);
        element.textContent = result;
    }
    await delay(1000);
    result = "";
  for(var i = 0; i < text.length/2; i++){
    result += text.charAt(i);
    element.textContent = result;
  }
  await delay(50);
  element.textContent = "";
}
