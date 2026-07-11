const insert = document.getElementById("insert")
window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div class = "color">
        <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>${e.key === " "?'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    
    </div>`
})