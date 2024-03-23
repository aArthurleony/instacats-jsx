const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  
  const App = () => {
    const dados = luana;
  
    return (
      <div>
        <h2>{dados.cliente}</h2>
        <p>Idade: {dados.idade}</p>
        <p>Compras:</p>
        <ul>
          {dados.compras.map((item, index) => (
            <li key={index}>
              {item.nome} - {item.preco}
            </li>
          ))}
        </ul>
        <p style={{ color: dados.ativa ? 'green' : 'red' }}>
          Situação: {dados.ativa ? 'Ativa' : 'Inativa'}
        </p>
        {dados.compras.reduce(
          (total, item) => total + Number(item.preco.replace('R$ ', '')),
          0
        ) > 10000 && <p style={{ color: 'red' }}>Gasto total maior que R$10.000</p>}
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  