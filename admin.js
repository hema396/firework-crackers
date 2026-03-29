let token = "";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  token = data.token;
  alert("Login Success");
  loadOrders();
}

async function loadOrders() {
  const res = await fetch("http://localhost:5000/api/orders");
  const orders = await res.json();

  let html = "<tr><th>Name</th><th>Price</th><th>Status</th><th>Action</th></tr>";
  orders.forEach(o => {
    html += `
      <tr>
        <td>${o.customerName}</td>
        <td>${o.totalPrice}</td>
        <td>${o.status}</td>
        <td>
          <button onclick="updateStatus('${o._id}','Packed')">Packed</button>
          <button onclick="updateStatus('${o._id}','Delivered')">Delivered</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("ordersTable").innerHTML = html;
}

async function updateStatus(id, status) {
  await fetch(`http://localhost:5000/api/orders/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
  loadOrders();
}
