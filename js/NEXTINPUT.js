//  ENTER



class App extends React.Component {
    onClick = () => {
          alert(`your name is : ${this.Nome.value} abd your email is ${this.Email.value} submitted! :` );
    }


    onKeyUp = (target , e) => {
        if(e.keyCode === 13){
    switch ( target ){
        case 'Nome' :
    this.Email.focus();
      break;
    case 'Email':
        this.Idade.focus();
        break;
    case 'Idade':
        this.Enviar.focus();
        break;
    default :
        this.Nome.focus();
        break;
    }
}
            }
    render(){
       
        return(
            <div className="App">
                <div>
                    <span>Nome:</span>
                    <input onKeyUp={this.onKeyUp.bind(this, 'Nome')}
                     ref={(input) => {this.Nome = input}} type="text"/>
                </div>
                <div>
                    <span>Email:</span>
                    <input onKeyUp={this.onKeyUp.bind(this, 'Email')}   
                    ref={(input) => {this.Email = input}} type="email" />
                </div>
                <div>
                    <span>Idade:</span>
                    <input onKeyUp={this.onKeyUp.bind(this, 'Idade')}   
                    ref={(input) => {this.Idade = input}} type="number" />
                </div>
                <div>
                    <span>Enviar</span>
                    <input onKeyUp={this.onKeyUp.bind(this, 'Enviar')}   
                    ref={(input) => {this.Enviar = input}} type="submit" onClick={this.onClick} value="submit"/>
                </div>
            
            </div>
        );
    }
}
