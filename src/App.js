import React from 'react';
import { MuiForm, MuiInput, MuiSelect, MuiButton, validations } from 'mui-form'
import './App.css';

class App extends React.Component {
  state = {};

  handleSubmit = (promise) => {
    // do things
  }
  registreringsnummer = (value) => {
    var re = /[A-Za-z]{2}[0-9]{4}/i;
    return !value || re.test(value)
      ? undefined
      : this && this.message
        ? this.message
        : "Skriv gyldig registreringsnummer";
  }
  render() {
    return (
      <div className="App">
        <h2>Kjøp bilforsikring</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <MuiForm stateScope={this} onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Bilens registreringsnummer:
            </label>
            <MuiInput
              stateScope={this}
              name="license_plate"
              type="text"
              validations={[validations.required, this.registreringsnummer]}
            />
            <label>
              Din bonus:
             </label>
            <MuiSelect
              stateScope={this}
              name="customer_email"
            >
              <option value="">
                Velg din bonus
              </option>
              <option value="bonus1">Bonus 1</option>
              <option value="bonus2">Bonus 2</option>
            </MuiSelect>
            <label>
              Fødselsnummer:
            </label>
            <MuiInput
              stateScope={this}
              name="ssn"
              type="text"
              validations={[validations.required]}
            />
            <label>
              Fornavn:
            </label>
            <MuiInput
              stateScope={this}
              name="first_name"
              type="text"
              validations={[validations.required]}
            />
            <label>
              Etternavn:
            </label>
            <MuiInput
              stateScope={this}
              name="last_name"
              type="text"
              validations={[validations.required]}
            />
            <label>
              E-post:
             </label>
            <MuiInput
              stateScope={this}
              name="email"
              type="text"
              validations={[validations.required, validations.email]}
            />
            <MuiButton>Beregn pris</MuiButton>
            <MuiButton>Avbryt</MuiButton>
          </fieldset>
        </MuiForm>
      </div>
    );
  }
}

export default App;
