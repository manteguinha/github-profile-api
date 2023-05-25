const pesquisarGithub = async () => {
    const nomeUsuario = document.getElementById("searchInput").value
    const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}`)
    const containerDetalhes = document.querySelector(".details")
    const dados = await resposta.json()

    if (resposta.ok) {
        containerDetalhes.style.display = "flex"
        document.getElementById("result").innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img src="${dados.avatar_url}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${dados.name || dados.login}</h2>
                    <p class="username"><a href="https://github.com/${dados.login}" target="_blank">@${dados.login}</a></p>
                    <p class="bio">${dados.bio || 'A conta não possui uma biografia.'}</p>

                    <div class="stats">
                        <div>
                            <div class="stats-name">Repositórios Públicos</div>
                            <div class="stats-value">${dados.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Seguidores</div>
                            <div class="stats-value">${dados.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Seguindo</div>
                            <div class="stats-value">${dados.following}</div>
                        </div>
                    </div>

                <div class="media">
                    <p>
                        <span class="media-value">${dados.location || 'Não disponível'}</span>
                    </p>
                    <p>
                        <span class="media-value">${dados.blog || 'Não disponível'}</span>
                    </p>
                    <p>
                        <span class="media-value"><a href="${'https://twitter.com/' + dados.twitter_username || ''}" target="_blank">${dados.twitter_username || 'Não disponível'}</a></span>
                    </p>
                    <p>
                        <span class="media-value">${dados.company || 'Não disponível'}</span>
                    </p>
                </div>
            </div>
        </div>
        `
    } else {
        alert(dados.message)
    }
}