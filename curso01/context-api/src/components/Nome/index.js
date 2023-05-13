function Nome(props) {
    return (
      <div>
        <span style={{color: '#F00'}}>Bem vindo: {props.nome}</span>
        <br/>
        <button onClick={() => props.mudaNome('Diego')}>Trocar nome</button>
      </div>
    );
  }
  
  export default Nome;