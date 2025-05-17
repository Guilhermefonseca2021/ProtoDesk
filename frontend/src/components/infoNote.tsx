import useFackerGuest from "../hooks/useFackerGuest"

export default function InfoNote() {
  const { guest } = useFackerGuest()

  return (
    <div>
      <br />
      <br />
      ### Isto Nao é um documento fiscal ###
      <br />
      <br />
      <h2>Apartamento: {guest.apt} </h2>
      <br />
      <hr />
      <br />
      <h2>Nome: {guest.name} </h2>
      <h2>Email: {guest.email} </h2>
      <h2>Telefone: {guest.phone} </h2>
      <br />
      <hr />
      <br />
      <h2>Produtos:</h2>
      <br />
      <ul>
        {Array(5).fill(null).map((_, index) => (
          <li key={index}>
            <b>{index}</b>- {guest.products.product} - {guest.products.price} 
          </li>
        ))}
      </ul>
      <hr />
      <br />
      <br />
      <h2>Assinatura do hospede:</h2>
      <br />
      <br />
    </div>
  )
}
