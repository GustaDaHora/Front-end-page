
const sidemenu = document.querySelector("aside")
const menubtn = document.getElementById("menubtn")
const closebtn = document.getElementById("closebtn")
const theme = document.querySelector('.theme')

menubtn.addEventListener('click', () => {
    sidemenu.style.display = "block"
})

closebtn.addEventListener('click', () => {
    sidemenu.style.display = "none"
})

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables")

    theme.querySelector('span:nth-child(1)').classList.toggle('active');
    theme.querySelector('span:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trcontent = ` 
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
                        `
    tr.innerHTML = trcontent;
    document.querySelector("table tbody").appendChild(tr)
})