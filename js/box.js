// NEXT INPUT ENTER



class App extends React.Component {
     onClick = () => {
console.log(this.Nome.value)
        }
            onKeyUp = (e) => {
if(e.keyCode === 13){
    this.Email.focus();
}
            }
    render(){
       
        return(
            <div className="App">
                <div>
                    <span>Nome:</span>
                    <input onKeyUp={this.onKeyUp}  ref={(input) => {this.Nome = input}} type="text" />
                </div>
                <div>
                    <span>Email:</span>
                    <input ref={(input) => {this.Email = input}} type="email" />
                </div>
                <div>
                    <span>Idade:</span>
                    <input ref={(input) => {this.Idade = input}} type="number" />
                </div>
                <div>
                    <span>Enviar</span>
                    <input ref={(input) => {this.Enviar = input}} type="submit" onClick={this.onClick} value="submit"/>
                </div>
            </div>
        );
    }
}
