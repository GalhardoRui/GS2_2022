function Blog(noticias) {
    let blog = document.createElement("div")
    blog.classList.add("blog")
    
    let foto = document.createElement("img")
    foto.src = noticias.foto
    foto.alt = "Foto" + noticias.titulo
    
    let titulo = document.createElement("p")
    titulo.innerText = noticias.titulo
    

    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "Saiba Mais"
    botao.href = noticias.botao
    
    
    blog.appendChild(foto)
    blog.appendChild(titulo)
    blog.appendChild(botao)

    return blog
}

const dados = 
[   {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkCuqRRw7kmybgqgs95NGEP3p7wo7gOHYnQ&usqp=CAU",
    titulo: "Habib's",
    botao: "https://www.habibs.com.br/"
    },
    {
    foto: "https://lh5.googleusercontent.com/p/AF1QipMyplr82FOW4jkIuZwiIXAlMlC2CaViD07_0jmy=w171-h171-n-k-no",
    titulo: "Pizzaria Mussanela",
    botao:"https://pizzariamussanela.com.br/menu"
    },
    {
    foto: "https://lh3.googleusercontent.com/p/AF1QipMjFRpapquDl9YBhP6NoFsyA7JDWFPnqklo2l7K=w1080-h608-p-no-v0",
    titulo: "Niko Sushi bar",
    botao:"https://niko-sushi-bar.negocio.site/?utm_source=gmb&utm_medium=referral"
    }
  
]


let avisos = document.querySelector("#noticias")
dados.forEach((noticias)=>{avisos.appendChild(Blog(noticias))})