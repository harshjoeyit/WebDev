import json from './data.js'

const userListDiv = document.querySelector('.user_list')

const fetchData = async (endpoint) => {
    const data = await fetch(endpoint)
    return await data.json()
}

const printUserList = async() => {
    const userList = await fetchData(json.request.github_users.user_list);
    const ul = userList.map((user) => `<li>${user.login}</li>`).join('')
    userListDiv.innerHTML = ul;
}   

printUserList()